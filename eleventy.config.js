const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const { smartypantsu } = require("smartypants");

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    
    const dateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const dateTimeFormat = new Intl.DateTimeFormat(
        "en-GB",
        dateTimeFormatOptions);
    
    eleventyConfig.addFilter("date", function(value) {
        return dateTimeFormat.format(value);
    });

    eleventyConfig.addFilter("absoluteUrl", function(url, base) {
        return (new URL(url, base)).toString();
    });
    
    const makeHeaderLink = markdownItAnchor.permalink.headerLink({
        class: false,
        safariReaderFix: true // fix for Safari reader mode, see https://www.leereamsnyder.com/blog/making-headings-with-links-show-up-in-safari-reader
    });

    const markdown = markdownIt("commonmark")
        .disable("code") // disable indented code blocks, see https://www.11ty.dev/docs/languages/markdown/#indented-code-blocks
        .use(markdownItAnchor, {
            level: [2, 3, 4],
            permalink: makeHeaderLink,
            slugify: eleventyConfig.getFilter("slugify")
        })
        .use(require("markdown-it-attrs"))
        .use(footnotes)
        .use(table)
        .use(tableOfContents)
        .use(typographer);

    // Customize Markdown library settings
    // we could implement this as a custom template language, however, this
    // would opt-out of the default pre-processing, see
    // https://www.11ty.dev/docs/languages/custom/#overriding-a-built-in-template-language
    eleventyConfig.setLibrary("md", markdown);

    eleventyConfig.addFilter("markdown", (content) => {
        return markdown.renderInline(content);
    });

    function getDefaultRenderer(md, rule) {
        return md.renderer.rules[rule] || function (tokens, idx, options, env, self) {
            return self.renderToken(tokens, idx, options);
        }
    }

    function typographer(md) {
        const defaultTextRenderer = getDefaultRenderer(md, "text");

        md.renderer.rules.text = (tokens, idx, options, env, self) => {
            // Improve factions
            tokens[idx].content = tokens[idx].content
                .replace(/(?<!\d)1\/2(?!\d)/g, "½") // &frac12;
                .replace(/(?<!\d)1\/3(?!\d)/g, "⅓") // &frac13;
                .replace(/(?<!\d)1\/4(?!\d)/g, "¼") // &frac14;
                .replace(/(?<!\d)1\/5(?!\d)/g, "⅕") // &frac15;
                .replace(/(?<!\d)1\/6(?!\d)/g, "⅙") // &frac16;
                .replace(/(?<!\d)1\/8(?!\d)/g, "⅛") // &frac18;
                .replace(/(?<!\d)2\/3(?!\d)/g, "⅔") // &frac23;
                .replace(/(?<!\d)2\/5(?!\d)/g, "⅖") // &frac25;
                .replace(/(?<!\d)3\/4(?!\d)/g, "¾") // &frac34;
                .replace(/(?<!\d)3\/5(?!\d)/g, "⅗") // &frac35;
                .replace(/(?<!\d)3\/8(?!\d)/g, "⅜") // &frac38;
                .replace(/(?<!\d)4\/5(?!\d)/g, "⅘") // &frac45;
                .replace(/(?<!\d)5\/6(?!\d)/g, "⅚") // &frac56;
                .replace(/(?<!\d)5\/8(?!\d)/g, "⅝") // &frac58;
                .replace(/(?<!\d)7\/8(?!\d)/g, "⅞"); // &frac78;

            // Improve guillemets
            tokens[idx].content = tokens[idx].content
                .replace(/<</g, "«") // &laquo;
                .replace(/>>/g, "»"); // &raquo;
            
            // Improve mathematical symbols
            tokens[idx].content = tokens[idx].content
                .replace(/\+-/g, "±") // &plusmn;
                .replace(/(?<= )x(?= )/g, "×") // &times;
                .replace(/(?<= )<=(?= )/g, "≤") // &le;
                .replace(/(?<= )=>(?= )/g, "≥"); // &ge;

            // Improve typesetting
            tokens[idx].content = tokens[idx].content
                .replace(/\(c\)/i, "©") // &copy;
                .replace(/\(r\)/i, "®") // &reg;
                .replace(/\(tm\)/i, "™"); // &trade;

            // Use SmartyPants to perform additional transformations. The
            // strange second argument applies the following transformations:
            // - Straight quotes (" and ') into "curly" quote HTML entities
            // - Dashes (-- and ---) into en- and em-dash entities
            // - Three consecutive dots (...) into an ellipsis entity
            // See https://github.com/othree/smartypants.js#options-and-configuration
            tokens[idx].content = smartypantsu(tokens[idx].content, "qDe");

            return defaultTextRenderer(tokens, idx, options, env, self);
        }
    }
    
    function tableOfContents(md) {
        md.use(require("markdown-it-table-of-contents"), {
            includeLevel: [2, 3],
            slugify: eleventyConfig.getFilter("slugify")
        });

        const { rules } = md.renderer;

        rules.toc_open = () => "<nav aria-labelledby=\"toc-heading\">" +
            "    <h2 id=\"toc-heading\">Table of contents</h2>\n";

        rules.toc_close = () => "</nav>";
    }

    function footnotes(md) {
        md.use(require("markdown-it-footnote"));

        const { rules } = md.renderer;

        rules.footnote_ref = (tokens, idx, options, env, self) => {
            let id = self.rules.footnote_anchor_name(tokens, idx, options, env, self);
            let ref = id;

            if (tokens[idx].meta.subId > 0) {
                id += `:${tokens[idx].meta.subId}`;
            }

            return `<sup id="fnref:${id}"><a href="#fn:${ref}" aria-describedby="footnotes-heading">${id.toString()}</a></sup>`;
        };

        rules.footnote_anchor = (tokens, idx, options, env, self) => {
            let id = self.rules.footnote_anchor_name(tokens, idx, options, env, self);

            if (tokens[idx].meta.subId > 0) {
                id += `:${tokens[idx].meta.subId}`;
            }

            // ↩ using unicode escape code to prevent display as emoji on iOS
            return ` <a href="#fnref:${id}" aria-label="Back to content">\u21a9\uFE0E</a>`;
        };

        rules.footnote_block_open = () =>
            "<footer>\n<h2 id=\"footnotes-heading\">Footnotes</h2>\n<ol>\n";

        rules.footnote_block_close = () =>
            "</ol>\n</footer>\n";

        rules.footnote_open = (tokens, idx, options, env, self) => {
            let id = self.rules.footnote_anchor_name(tokens, idx, options, env, self);

            if (tokens[idx].meta.subId > 0) {
                id += `:${tokens[idx].meta.subId}`;
            }

            return `<li id="fn:${id}">`;
        };
    }

    function table(md) {
        const { rules } = md.renderer;

        const defaultRenderer = rules.table_open || function (tokens, idx, options, env, self) {
            return self.renderToken(tokens, idx, options);
        };

        // Add `tabindex` so that table scrolling can be controlled via the keyboard.
        rules.table_open = (tokens, idx, options, env, self) => {
            tokens[idx].attrPush(["tabindex", 0]);
            return defaultRenderer(tokens, idx, options, env, self);
        };
    }

    return {
        // Process files with the following extensions, additional extensions
        // are registered as custom template extensions (see plugins, above).
        templateFormats: [
            "md",
            "njk",
            "html"
        ],

        // Pre-process *.md files with Nunjucks
        markdownTemplateEngine: "njk",

        // Don't pre-process *.html for faster builds
        htmlTemplateEngine: false,

        dir: {
            input: ".",
            includes: "_includes",
            layouts: "_layouts",
            data: "_data",
            output: "."
        }
    };
};
