---
layout: base.njk
title: HTML elements test page
description: Examples of the elements of HTML
date: 2023-05-19
---
# HTML elements test page { #html-elements-test-page }

This page includes examples of most of [the elements of HTML](https://html.spec.whatwg.org/multipage/semantics.html#semantics).

Inspired by [Poor Man's Styleguide](https://poormansstyleguide.com/), this
page borrows heavily from these excellent resources:

- [HTML Elements Index](https://meiert.com/en/indices/html-elements/),
  by [Jens Oliver Meiert](https://meiert.com/)
- [HTML5 Test Page](https://cbracco.github.io/html5-test-page/),
  by [Chris Bracco](https://chrisbracco.com/)
- [HTML5 elements tester](https://alexandersandberg.github.io/html5-elements-tester/),
  by [Alexander Sandberg](https://alexandersandberg.com/)
- [HTML Element test file index](https://thepaciellogroup.github.io/AT-browser-tests/),
  by [TPGi](https://www.tpgi.com/) 
- [HTML Tags Memory Test](https://codepen.io/plfstr/full/zYqQeRw),
  by [Paul Foster](https://paulfosterdesign.co.uk/)
- [HTML Test Page for CSS Style Guide](https://snipplr.com/view/8121/html-test-page-for-css-style-guide)

Many of the samples and descriptions included here are adapted from the
[current HTML specification](https://html.spec.whatwg.org/) and the
[web-platform-tests project](https://web-platform-tests.org/).

At the time of writing, this page includes examples for most of the 114
_current_ elements of HTML[^1], as defined by the
[HTML living specification](https://html.spec.whatwg.org/). There are a whole
load more elements that used to be part of HTML, but have since been
deprecated.

[^1]: See [On the Difficulty of Counting the Number of HTML Elements](https://meiert.com/en/blog/the-number-of-html-elements/),
for a discussion of how to answer the question "How many HTML elements are
there?". This page includes elements that appear in the current specification,
the [HTML Living Standard](https://html.spec.whatwg.org/), to count the number
of elements. As of {{ page.date | date }}, there are 114 HTML elements, if we
include `<math>` and `<svg>`.

This page was last updated on {{ page.date | date }}.

If you've got any questions or comments about this page, or if you've found a
mistake, please [get in touch](mailto:{{ site.author.email }}).

<noscript>
    <p>
        <strong>Note</strong>: Some of the examples on this page require
        scripting to work correctly. Follow these
        <a href="https://www.enable-javascript.com/">
        instructions for how to enable JavaScript in your web browser
        </a>
        if you'd like to see these examples in action.
    </p>
</noscript>


[[toc]]


## The document element

[html]: https://html.spec.whatwg.org/#the-html-element

The [`html`][html] element represents the root of an
<abbr title="HyperText Markup Language">HTML</abbr> document. All the other
elements of HTML must be descendants of this element.


## Document metadata

[head]: https://html.spec.whatwg.org/#the-head-element
[title]: https://html.spec.whatwg.org/#the-title-element
[base]: https://html.spec.whatwg.org/#the-base-element
[link]: https://html.spec.whatwg.org/#the-link-element
[meta]: https://html.spec.whatwg.org/#the-meta-element
[style]: https://html.spec.whatwg.org/#the-style-element

**Note**: Because the elements in this section represent _metadata_ about the
current HTML document, they don't render anything on the page. To see examples
of these elements in action,
[view the source for this page]({{ page.outputPath | absoluteUrl(site.repository.url) }}).

The [`head`][head] element represents a collection of metadata for the current
web page. The other elements in this section are descendants of this element.

The [`title`][title] element represents the title or name of the current web
page.

The [`base`][base] element specifies the base
<abbr title="Uniform Resource Locator">URL</abbr> to use for all relative URLs
in a document.

The [`link`][link] element links the current web page to other resources.

The [`meta`][meta] element represents other metadata that cannot be expressed
using the `title`, `base`, `link`, `style`, and `script` elements.

The [`style`][style] element is used to embed CSS style sheets in the current
web page.


## Sections

[body]: https://html.spec.whatwg.org/#the-body-element
[article]: https://html.spec.whatwg.org/#the-article-element
[section]: https://html.spec.whatwg.org/#the-section-element
[nav]: https://html.spec.whatwg.org/#the-nav-element
[aside]: https://html.spec.whatwg.org/#the-aside-element
[h1]: https://html.spec.whatwg.org/#the-h1-element
[h2]: https://html.spec.whatwg.org/#the-h2-element
[h3]: https://html.spec.whatwg.org/#the-h3-element
[h4]: https://html.spec.whatwg.org/#the-h4-element
[h5]: https://html.spec.whatwg.org/#the-h5-element
[h6]: https://html.spec.whatwg.org/#the-h6-element
[hgroup]: https://html.spec.whatwg.org/#the-hgroup-element
[header]: https://html.spec.whatwg.org/#the-header-element
[footer]: https://html.spec.whatwg.org/#the-footer-element
[address]: https://html.spec.whatwg.org/#the-address-element

### Document content

The [`body`][body] element represents the contents of the document.

The content of this page is contained within a `body` element.

### Article contents

The [`article`][article] element represents a self-contained part of a page,
which is distributable outside of the page it's on.

<!-- No example yet -->

### Generic sections

The [`section`][section] element represents a generic section of a page.

<!-- No example yet -->

### Navigation

The [`nav`][nav] element represents a section of a page that links to other
pages or to parts within the page.

See the [table of contents](#table-of-contents), above, for an example of the
`nav` element in action.

### Asides

The [`aside`][aside] element represents a part of a page which is only
indirectly related to the main content of the page.

<!-- No example yet -->

### Headings

This page uses a single [`h1`][h1] element as the page title --- see
["HTML elements test page"](#html-elements-test-page), above. Subsequent
headings should start with [`h2`][h2] --- see ["Sections"](#sections), above,
for an example `h2`. More than one `h2` may be used per page.

The heading for this section is a [`h3`][h3] element.

#### Fourth-level headings

The heading above is a [`h4`][h4] element.

##### Fifth-level headings

The heading above is a [`h5`][h5] element.

##### Sixth-level headings

The heading above is a [`h6`][h6] element.

### Heading groups

The [`hgroup`][hgroup] element represents a heading and related content. The
element may be used to group an `h1`–`h6` element with one or more `p` elements
containing content representing a subheading, alternative title, or tagline.
For example:

<hgroup>
    <h4>Dr. Strangelove</h4>
    <p>Or: How I Learned to Stop Worrying and Love the Bomb</p>
</hgroup>

### Headers

The [`header`][header] element represents a group of introductory or
navigational aids.

<!-- No example yet -->

### Footers

The [`footer`][footer] element represents a footer, typically containing
information about the author of the page or section, copyright data or links to
related documents.

<!-- No example yet -->

### Addresses

The [`address`][address] element represents the contact information for current
page (or an `article` within the page, if the `address` element is nested in an
`article` element). For example:

<address>
    For more details, contact
    <a href="mailto:js@example.com">John Smith</a>.
</address>

The `address` element is not be used to represent arbitrary addresses (e.g.
postal addresses), unless those addresses are in fact the relevant contact
information. The `p` element is the appropriate element for marking up postal
addresses in general.


## Grouping content

[p]: https://html.spec.whatwg.org/#the-p-element
[hr]: https://html.spec.whatwg.org/#the-hr-element
[pre]: https://html.spec.whatwg.org/#the-pre-element
[blockquote]: https://html.spec.whatwg.org/#the-blockquote-element
[ol]: https://html.spec.whatwg.org/#the-ol-element
[ul]: https://html.spec.whatwg.org/#the-ul-element
[menu]: https://html.spec.whatwg.org/#the-menu-element
[li]: https://html.spec.whatwg.org/#the-li-element
[dl]: https://html.spec.whatwg.org/#the-dl-element
[dt]: https://html.spec.whatwg.org/#the-dt-element
[dd]: https://html.spec.whatwg.org/#the-dd-element
[figure]: https://html.spec.whatwg.org/#the-figure-element
[figcaption]: https://html.spec.whatwg.org/#the-figcaption-element
[main]: https://html.spec.whatwg.org/#the-main-element
[search]: https://html.spec.whatwg.org/#the-search-element
[div]: https://html.spec.whatwg.org/#the-div-element

### Paragraphs

The [`p`][p] element represents a paragraph.

All paragraphs on this page are wrapped in `p` elements.

### Horizontal rule

The [`hr`][hr] element represents a paragraph-level thematic break. For
example, a scene change in a story, or a transition to another topic within a
section of a reference book. For example:

---

### Pre-formatted text

The [`pre`][pre] element represents a block of preformatted text, in which
structure is represented by typographic conventions rather than by elements.
For example, an e-mail, fragments of computer code or ASCII art. Here's an
example showing the printable characters of ASCII:

<pre>
! " # $ % & ' ( ) * + , - . /
0 1 2 3 4 5 6 7 8 9 : ; &lt; = &gt; ?
@ A B C D E F G H I J K L M N O
P Q R S T U V W X Y Z [ \ ] ^ _
` a b c d e f g h i j k l m n o
p q r s t u v w x y z { | } ~
</pre>

### Blockquotes

The [`blockquote`][blockquote] element represents a section that is being
quoted from another source. For example:

> I contend that we are both atheists. I just believe in one fewer god than you
> do. When you understand why you dismiss all the other possible gods, you will
> understand why I dismiss yours.

Attributions should be provided for quotations. See the
[`figure` element](#figures), below.

### Ordered list

The [`ol`][ol] element represents a list of items, where the items have been
intentionally ordered, such that changing the order would change the meaning
of the document.

1. This is the first item in an ordered list.
2. This is the second item, which itself contains another list.
   1. This is the first item of the inner list, which is also ordered.
   2. This is the second item.
3. This is the final item in the list.

### Unordered list

The [`ul`][ul] element represents a list of items, where the order of the items
is not important — that is, where changing the order would not materially
change the meaning of the document. For example:

- United Kingdom of Great Britain and Northern Ireland:
  - England
  - Scotland
  - Wales
  - Northern Ireland
- Republic of Ireland
- Isle of Man
- Channel Islands:
  - Bailiwick of Guernsey
  - Bailiwick of Jersey

### Menu list

The [`menu`][menu] element represents an unordered list of command that a user
can perform or activate. For example:

<menu>
   <li>
       <button>Copy</button>
   </li>
   <li>
       <button>Cut</button>
   </li>
   <li>
       <button>Paste</button>
   </li>
</menu>


### List items

The [`li`][li] element represents a list item. It's used as a child of an `ol`,
`ul`, or `menu` element. See examples of these, above, for usage of the
`li` element.

### Definition list

The [`dl`][dl] element represents a definition list, a collection of terms and
descriptions. For example:

<dl>
    <dt>Beast of Bodmin</dt>
    <dd>A large feline inhabiting Bodmin Moor.</dd>
    <dt>Morgawr</dt>
    <dd>A sea serpent.</dd>
    <dt>Owlman</dt>
    <dd>A giant owl-like creature.</dd>
</dl>

### Figures

The [`figure`][figure] element represents some flow content, optionally with a
caption, represented by the [`figcaption`][figcaption] element, that is
self-contained (like a complete sentence) and is typically referenced as a
single unit from the main flow of the document.

The [`figure`][figure] element can be used to annotate illustrations, diagrams,
photos, code listings, etc., often with a citation for the excerpted content.
For example:

<figure>
    <blockquote>
        <p>The truth may be puzzling. It may take some work to grapple
        with. It may be counterintuitive. It may contradict deeply held
        prejudices. It may not be consonant with what we desperately want
        to be true. But our preferences do not determine what's true. We
        have a method, and that method helps us to reach not absolute
        truth, only asymptotic approaches to the truth — never there, just
        closer and closer, always finding vast new oceans of undiscovered
        possibilities. Cleverly designed experiments are the key.</p>
    </blockquote>
    <figcaption>Carl Sagan, in "<cite>Wonder and Skepticism</cite>", from
    the <cite>Skeptical Inquirer</cite> Volume 19, Issue 1
    (January-February 1995)</figcaption>
</figure>

### Main content

The [`main`][main] element represents the dominant contents of the document.

The content of this page is contained within a `main` element.

### Search

The [`search`][search] element represents a part of page that contains a set of
form controls or other content related to performing a search or filtering
content. This could be a search of the web site or application; a way of
searching or filtering search results on the current web page; or a global
or Internet-wide search function.

<search>
    <form>
      <label for="query">Search term</label>
        <input id="query" name="q" type="search">
        <button type="submit">Search</button>
    </form>
</search>

### Generic container

The [`div`][div] element is a generic container for a group of elements. It has
no special meaning of it's own.

It's typically used to wrap a group of elements for styling purposes.

<!-- No example yet -->

The <cite>HTML Living Standard</cite> notes that:

> Authors are strongly encouraged to view the `div` element as an element of
> last resort, for when no other element is suitable. Use of more appropriate
> elements instead of the `div` element leads to better accessibility for
> readers and easier maintainability for authors.


## Text-level semantics

[a]: https://html.spec.whatwg.org/#the-a-element
[em]: https://html.spec.whatwg.org/#the-em-element
[strong]: https://html.spec.whatwg.org/#the-strong-element
[small]: https://html.spec.whatwg.org/#the-small-element
[s]: https://html.spec.whatwg.org/#the-s-element
[cite]: https://html.spec.whatwg.org/#the-cite-element
[q]: https://html.spec.whatwg.org/#the-q-element
[dfn]: https://html.spec.whatwg.org/#the-dfn-element
[abbr]: https://html.spec.whatwg.org/#the-abbr-element
[ruby]: https://html.spec.whatwg.org/#the-ruby-element
[rt]: https://html.spec.whatwg.org/#the-rt-element
[rp]: https://html.spec.whatwg.org/#the-rp-element
[data]: https://html.spec.whatwg.org/#the-data-element
[time]: https://html.spec.whatwg.org/#the-time-element
[code]: https://html.spec.whatwg.org/#the-code-element
[var]: https://html.spec.whatwg.org/#the-var-element
[samp]: https://html.spec.whatwg.org/#the-samp-element
[kbd]: https://html.spec.whatwg.org/#the-kbd-element
[sub]: https://html.spec.whatwg.org/#the-sub-element
[sup]: https://html.spec.whatwg.org/#the-sup-element
[i]: https://html.spec.whatwg.org/#the-i-element
[b]: https://html.spec.whatwg.org/#the-b-element
[u]: https://html.spec.whatwg.org/#the-u-element
[mark]: https://html.spec.whatwg.org/#the-mark-element
[bdi]: https://html.spec.whatwg.org/#the-bdi-element
[bdo]: https://html.spec.whatwg.org/#the-bdo-element
[span]: https://html.spec.whatwg.org/#the-span-element
[br]: https://html.spec.whatwg.org/#the-br-element
[wbr]: https://html.spec.whatwg.org/#the-wbr-element

### Links

The [`a`][a] element represents a hyperlink to another page or to another part
of the current page. For example:

[Back to the top of the page](#top)

If an `a` element doesn't have a `href` attribute, it represents a placeholder
for where a link might otherwise have been placed, if it had been relevant.
For example:

<a name="lighthouse-ignore">Current page</a>

### Stressed emphasis

The [`em`][em] element represents stress emphasis of its contents. For example:

*Cats* are cute animals.

### Strong importance

The [`strong`][strong] element represents strong importance, seriousness, or
urgency for its contents. For example:

<p>
    <strong>Warning.</strong> This dungeon is dangerous. <strong>Avoid the
    ducks.</strong> Take any gold you find. <strong><strong>Do not take any of
    the diamonds</strong>, they are explosive and <strong>will destroy
    anything within ten meters.</strong></strong> You have been warned.
</p>

### Small print

The [`small`][small] element represents side comments such as small print.
Small print typically features disclaimers, caveats, legal restrictions, or
copyrights. Small print is also sometimes used for attribution, or for
satisfying licensing requirements. For example:

<small>Continued use of this service will result in a kiss.</small>

### Strikethrough

The [`s`][s] element is used to represent content that is no longer accurate or
relevant. The `s` element is not appropriate when indicating document edits;
to mark a span of text as having been removed from a document, use the `del`
element. For example:

<p>
    Buy our Iced Tea and Lemonade!<br>
    <s>Recommended retail price: $3.99 per bottle</s><br>
    <strong>Now selling for just $2.99 a bottle!</strong>
</p>

### Citations

The [`cite`][cite] element represents the title of a work (e.g. a book, a
paper, an essay, a poem, a score, a song, a script, a film, a TV show, a game,
a sculpture, a painting, a theatre production, a play, an opera, a musical, an
exhibition, a legal case report, a computer program, etc). This can be a work
that is being quoted or referenced in detail (i.e. a citation), or it can just
be a work that is mentioned in passing.

<cite>Universal Declaration of Human Rights</cite>, United Nations, December
1948. Adopted by General Assembly resolution 217 A (III).

### Inline quotes

The [`q`][q] element represents content quoted inline from another source. For
example:

The man said <q>Things that are impossible just take longer</q>. I disagreed
with him.

### Definition

The [`dfn`][dfn] element represents the defining instance of a term. For
example:

The <dfn><abbr title="Garage Door Opener">GDO</abbr></dfn> is a device that
allows off-world teams to open the iris.

[...]

Teal'c activated his <a href=#gdo><abbr title="Garage Door Opener">GDO</abbr></a>
and so Hammond ordered the iris to be opened.

### Abbreviation

The [`abbr`][abbr] element represents an abbreviation or acronym, optionally
with it's expansion. For example:

The <abbr title="Web Hypertext Application Technology Working Group">WHATWG</abbr>
started working on HTML5 in 2004.

### Ruby annotations 	

The [`ruby`][ruby] element allows one or more spans of text to be marked with
ruby annotations — short runs of text presented alongside base text, primarily
used in East Asian typography as a guide for pronunciation or to include other
annotations. For example:

<ruby lang="ja">編集者 <rp>(</rp><rt lang="en">editor</rt><rp>)</rp></ruby>

The [`rt`][rt] element marks the ruby text component of a ruby annotation.

The [`rp`][rp] element can be used to provide parentheses around a ruby text
component of a ruby annotation, used by user agents that don't support ruby
annotations.

### Data

The [`data`][data] element represents it's contents, along with a
machine-readable form of the content. For example:

<data value="8">Eight</data>

### Time

The [`time`][time] element represents it's contents, along with a
machine-readable form of the content. The kind of content is limited to various
kinds of dates, times, time-zone offsets, and durations. For example:

Today is <time datetime="2011-11-18">Friday</time>.

### Code

The code element represents a fragment of computer code. For example:

When you call the `activate()` method on the `robotSnowman` object, the eyes
glow.

### Variables

The [`var`][var] element represents a variable. This could be an actual
variable in a mathematical expression or programming context, an identifier
representing a constant, a symbol identifying a physical quantity, a function
parameter, or just be a term used as a placeholder in prose.

In the paragraph below, the letter "n" is being used as a variable in prose:

If there are <var>n</var> pipes leading to the ice cream factory then I expect
at *least* <var>n</var> flavors of ice cream to be available for purchase!

### Sample output

The [`samp`][samp] element represents sample or quoted output from another
program or computing system.

This example shows the samp element being used inline:

The computer said <samp>Too much cheese in tray two</samp> but I didn't know
what that meant.

### Keyboard entry

The [`kbd`][kbd] element represents user input (typically keyboard input,
although it may also be used to represent other input, such as voice commands).

Here the kbd element is used to indicate keys to press:

To make George eat an apple, press <kbd><kbd>Shift</kbd>+<kbd>F3</kbd></kbd>.

### Subscripts and superscripts 

The [`sub`][sub] element represents a subscript and the [`sup`][sup] element
represents a superscript.

f(<var>x</var>, <var>n</var>) = log<sub>4</sub><var>x</var><sup><var>n</var></sup>  

### Alternative voice

The [`i`][i] element represents a span of text in an alternate voice or mood,
or otherwise offset from the normal prose in a manner indicating a different
quality of text, such as a taxonomic designation, a technical term, an
idiomatic phrase from another language, transliteration, a thought, or a ship
name in Western texts.

In the following example, a dream sequence is marked up using `i` elements.

> Raymond tried to sleep.
>
> <i>The ship sailed away on Thursday</i>, he dreamt. <i>The ship had many
> people aboard, including a beautiful princess called Carey. He watched her,
> day-in, day-out, hoping she would notice him, but she never did.</i>
>
> <i>Finally one night he picked up the courage to speak with her—</i>
>
> Raymond woke with a start as the fire alarm rang out.

### Emboldened

The [`b`][b] element represents a span of text to which attention is being
drawn for utilitarian purposes without conveying any extra importance and with
no implication of an alternate voice or mood, such as key words in a document
abstract, product names in a review, actionable words in interactive
text-driven software, or an article lede.

The following example shows a use of the `b` element to highlight key words
without marking them up as important:

The <b>frobonitor</b> and <b>barbinator</b> components are fried.

### Unarticulated annotated text

The [`u`][u] element represents a span of text with an unarticulated, though
explicitly rendered, non-textual annotation, such as labeling the text as
being a proper name in Chinese text (a Chinese proper name mark), or labeling
the text as being misspelt. For example:

<p>The <u>see</u> is full of fish.</p>

### Marked or highlighted text

The [`mark`][mark] element represents a run of text in one document marked or
highlighted for reference purposes, due to its relevance in another context.
For example:

I also have some <mark>kitten</mark>s who are visiting me these days. They're
really cute. I think they like my garden! Maybe I should adopt a
<mark>kitten</mark>.

### Bidirectional text 

The [`bdi`][bdi] element represents a span of text that is to be isolated from
it's surroundings for the purposes of bidirectional text formatting. For
example:

The recommended restaurant is <bdi lang="">My Juice Café (At The Beach)</bdi>.

The [`bdo`][bdo] element represents explicit text directionality formatting
control for its children. It allows authors to override the Unicode
bidirectional algorithm by explicitly specifying a direction override. For
example:

The proposal is to write English, but in reverse order. "Juice" would become
"<bdo dir=rtl>Juice</bdo>">

### Content spans

The [`span`][span] element is a generic inline container for a group of
text-level elements. It has no special meaning of it's own.

It's typically used to wrap a group of elements for styling purposes.

<!-- No example yet -->

Like the `div` element, it should be viewed as an element of last resort, for
when no other element is suitable

### Line breaks

The [`br`][br] element represents a line break. For example:

<p>P. Sherman<br>
42 Wallaby Way<br>
Sydney</p>

### Line break opportunity

The [`wbr`][wbr] element represents a line break opportunity.

In the following example, someone is quoted as saying something which, for
effect, is written as one long word. However, to ensure that the text can be
wrapped in a readable fashion, the individual words in the quote are separated
using a `wbr` element.

<p>So then she pointed at the tiger and screamed
"there<wbr>is<wbr>no<wbr>way<wbr>you<wbr>are<wbr>ever<wbr>going<wbr>to<wbr>catch<wbr>me"!</p>


## Edits

[ins]: https://html.spec.whatwg.org/#the-ins-element
[del]: https://html.spec.whatwg.org/#the-del-element

### Additions

The [`ins`][ins] element represents an addition to the page. For example:

<ins datetime="2005-03-16 00:00Z">
    <p>I like fruit.</p>
</ins>

### Deletions

The [`del`][del] element represents a removal from the page. For example:

<ul>
    <li>Empty the dishwasher</li>
    <li><del datetime="2009-10-11T01:25-07:00">Watch Walter Lewin's lectures</del></li>
    <li><del datetime="2009-10-10T23:38-07:00">Download more tracks</del></li>
    <li>Buy a printer</li>
</ul>


## Embedded content

[picture]: https://html.spec.whatwg.org/#the-picture-element
[source]: https://html.spec.whatwg.org/#the-source-element
[img]: https://html.spec.whatwg.org/#the-img-element
[iframe]: https://html.spec.whatwg.org/#the-iframe-element
[embed]: https://html.spec.whatwg.org/#the-embed-element
[object]: https://html.spec.whatwg.org/#the-object-element
[video]: https://html.spec.whatwg.org/#the-video-element
[audio]: https://html.spec.whatwg.org/#the-audio-element
[track]: https://html.spec.whatwg.org/#the-track-element
[map]: https://html.spec.whatwg.org/#the-map-element
[area]: https://html.spec.whatwg.org/#the-area-element
[svg]: https://html.spec.whatwg.org/#the-svg-element
[math]: https://html.spec.whatwg.org/#the-math-element

### Pictures

The [`picture`][picture] element is a container for an `img` element (see
below) that can provide alternative sources for an image. 

For example, the format of the following image will depend on what image
formats your web browser supports. Newer browsers that support the
[WebP](https://en.wikipedia.org/wiki/WebP) format will use this, and older
browsers that don't support WebP will fallback to a (less efficient but widely
supported) [JPEG](https://en.wikipedia.org/wiki/JPEG) image.

<picture>
    <source srcset="/sample-files/sample.webp" type="image/webp">
    <img src="/sample-files/sample.jpg" width="133" height="106"
        alt="A blue rectangle">
</picture>

###  Media sources

The [`source`][source] element describes one of multiple alternative sources
for `audio`, `img`, and `video` elements.

See the examples for the [`picture`](#pictures) (above), [`img`](#images),
[`video`](#embedded-video), and [`audio`](#embedded-audio) elements (below)
for usage of the `source` element.

### Images

The [`img`][img] element represents an image.

<img src="/sample-files/sample.jpg" width="133" height="106"
    alt="A blue rectangle.">

### Inline frames

The [`iframe`][iframe] element can be used to embed HTML or another HTML page
into the current page.

<iframe sandbox loading="lazy"
    srcdoc="<title>An empty page</title>"
    src="javascript:void(0)"
    title="An example iframe, embedding an empty page"></iframe> 

**Note**: In the example above, you should only see a blank page and your web
browser's default styles for an `iframe`.

### Embedded external content

The [`embed`][embed] element embeds external content into the current page. The
content is provided by an external application or a browser plug-in.

<figure id="embed-example">
    <embed aria-labelledby="embed-example-label" 
        src="/sample-files/sample.pdf"
        type="application/pdf"
        title="sample.pdf (PDF)">
    <figcaption id="embed-example-label">
        An example of the <code>embed</code> element, embedding a PDF
        document.
    </figcaption>
</figure>

For web browsers that support the `embed` element, you should see a PDF file
embedded in the current page.

### External objects

The [`object`][object] element embeds an external resource, such as an image, a
nested page, or a resource to be handled by a plugin, into the current page.

<figure id="object-example">
    <object aria-labelledby="object-example-label"
        data="/sample-files/sample.pdf" type="application/pdf">
        <p>
            Your web browser doesn't support displaying this file. You can
            download this file instead:
            <a download href="/sample-files/sample.pdf">sample.pdf (PDF)</a>.
        </p>
    </object>
    <figcaption id="object-example-label">
        An example of the <code>object</code> element, embedding a PDF
        document.
    </figcaption>
</figure>

For web browsers that don't support the `object` element, or don't support
embedding PDFs, you should see a link to the PDF document instead.

**Note**: The descriptions of `embed` and `object` are very similar, so it's
often not clear which to use. There are some minor differences in what
attributes each supports, but the most significant difference is that the
`object` element supports including fallback content as child elements,
whereas the `embed` element does not. Generally, it's preferable to avoid both
elements,
[MDN notes that](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies#the_embed_and_object_elements):

> PDFs tend to be better linked to than embedded, and other content such as
> images and video have much better, easier elements to handle those.

### Embedded video { #embedded-video }

The [`video`][video] element embeds a media player which supports video
playback into the current page.

For web browsers that support the `video` element, you should see a video,
with subtitles, embedded in the current page. For web browsers that don't
support the `video` element, or don't support playing that type of video, you
should see a link to download the video instead.

<script>
    // An attempt at showing fallback content if the audio or video element is
    // supported, but the formats of the sources specified are not.
    // See https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element
    function fallback(media) {
        while (media.hasChildNodes()) {
            if (media.firstChild instanceof HTMLSourceElement) {
                media.removeChild(media.firstChild);
            } else {
                media.parentNode.insertBefore(media.firstChild, media);
            }
        }

        media.parentNode.removeChild(media);
    }
</script>
<figure>
    <video controls width="320" height="180" id="video-example" aria-labelledby="video-example-label">
        <source src="/sample-files/sample.mp4" type="video/mp4" onerror="fallback(parentNode)">
        <track default kind="captions" srclang="en" src="/sample-files/sample.vtt">
        <p>
            Your web browser doesn't support playing this video. You can
            download this video, 
            <a download href="/sample-files/sample.mp4">sample.mp4 (MP4)</a>,
            and subtitles,
            <a download href="/sample-files/sample.vtt">sample.vtt (WebVTT)</a>,
            instead.
        </p>
    </video>
    <figcaption id="video-example-label">
        An example of the <code>video</code> element, with captions provided
        by the <code>track</code> element. A plain white screen is shown, with
        a single subtitle, <q>This is a test subtitle</q>.
    </figcaption>
</figure>

**Note**: The video controls provided by web browsers aren't
always accessible.

### Embedded audio

The [`audio`][audio] element embeds a media player which supports sound
playback into the current page.

For web browsers that support the `audio` element, you should see an audio
player embedded in the current page. For web browsers that don't support the
`audio` element, or don't support playing that type of audio, you should see
a link to download the audio instead.

<figure>
    <audio controls id="audio-example" aria-labelledby="audio-example-label">
        <source src="/sample-files/sample.mp3" type="audio/mp3" onerror="fallback(parentNode)">
        <p>
            Your web browser doesn't support playing this audio. You can
            download this audio instead:
            <a download href="/sample-files/sample.mp3">sample.mp3 (MP3)</a>.
        </p>
    </audio>
    <figcaption id="audio-example-label">
        An example of the <code>audio</code> element. A 440Hz sine wave
        signal, often used to test audio equipment, is played.
    </figcaption>
</figure>

**Note**: The audio controls provided by web browsers aren't
always accessible.

### Embedded text tracks

The [`track`][track] element associates subtitles and other _timed text tracks_
or time-based data with `audio` and `video` elements. Text track are formatted
in <abbr title="Web Video Text Tracks">WebVTT</abbr> format.

See the example for the [`video`](#embedded-video) element, above, for usage
of the `track` element.

### Image maps

The [`map`][map] element represents an _image map_, which allows areas on an
image, represented by an `img` element, to be associated with hyperlinks.
Strangely, it doesn't represent a map.

The [`area`][area] element represents either a hyperlink with some text and a
corresponding area on an image map, or a dead area on an image map:

- If the `area` element has an `href` attribute, then the area element
  represents a hyperlink. The `alt` attribute is the text of the hyperlink.

- If an `area` element has no `href` attribute, then the area represented by
  the element cannot be selected. The alt attribute must be omitted in this
  case.

For example, in the following image, each of the shapes links to a different
URL. You should see the URL change in your web browser's address bar when you
click on a shape.

<p>
    Please select a shape:
</p>
<img src="/sample-files/sample-imagemap.png" usemap="#shapes"
    width="600" height="150"
    alt="Four shapes are available: a red hollow box, a green circle, a blue triangle, and a yellow four-pointed star.">
<map name="shapes">
    <area shape="rect" coords="50,50,100,100"> <!-- the hole in the red box -->
    <area shape="rect" coords="25,25,125,125" href="#red" alt="Red box.">
    <area shape="circle" coords="200,75,50" href="#green" alt="Green circle.">
    <area shape="poly" coords="325,25,262,125,388,125" href="#blue" alt="Blue triangle.">
    <area shape="poly" coords="450,25,435,60,400,75,435,90,450,125,465,90,500,75,465,60" href="#yellow" alt="Yellow star.">
</map>

### Mathematical markup

The [`math`][math] element represents mathematical notations, as defined by
[MathML](https://www.w3.org/TR/MathML/).

<p>
    For example, here is the
    <a href="https://en.wikipedia.org/wiki/Quadratic_equation">quadratic equation</a>
    expressed in MathML:
    <math>
        <mi>x</mi>
        <mo>=</mo>
        <mfrac>
          <mrow>
          <mo form="prefix">−</mo> <mi>b</mi>
          <mo>±</mo>
          <msqrt>
              <msup> <mi>b</mi> <mn>2</mn> </msup>
              <mo>−</mo>
              <mn>4</mn> <mo>⁢</mo> <mi>a</mi> <mo>⁢</mo> <mi>c</mi>
          </msqrt>
          </mrow>
          <mrow>
          <mn>2</mn> <mo>⁢</mo> <mi>a</mi>
          </mrow>
        </mfrac>
    </math>
</p>

**Note**: You'll want to provide an accessible
[fallback for browsers without MathML support](https://developer.mozilla.org/en-US/docs/Web/MathML/Authoring#fallback_for_browsers_without_mathml_support).

### Scalable vector graphics

The [`svg`][svg] element embeds an <abbr title="Scalable vector graphics">SVG</abbr>
image into the page. SVG is an XML-based two-dimensional vector graphics
markup language.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133 106" width="133" height="106">
    <title>An example SVG, a blue rectangle.</title>
    <rect fill="#3300f5" width="133" height="106" />
</svg>


## Tabular data

[table]: https://html.spec.whatwg.org/#the-table-element
[caption]: https://html.spec.whatwg.org/#the-caption-element
[colgroup]: https://html.spec.whatwg.org/#the-colgroup-element
[col]: https://html.spec.whatwg.org/#the-col-element
[tbody]: https://html.spec.whatwg.org/#the-tbody-element
[thead]: https://html.spec.whatwg.org/#the-thead-element
[tfoot]: https://html.spec.whatwg.org/#the-tfoot-element
[tr]: https://html.spec.whatwg.org/#the-tr-element
[td]: https://html.spec.whatwg.org/#the-td-element
[th]: https://html.spec.whatwg.org/#the-th-element

The [`table`][table] element represents tabular data. Tables have rows,
columns, and cells containing data.

This example uses the `table`, `tbody`, `thead`, `tfoot`, `tr`, `td`, and
`th` elements to markup a table of purchases. The `caption` element is used to
provide an accessible description of the table, and the `colgroup` and `col`
elements are used to style the final column.

<table>
    <caption>How I chose to spend my money</caption>
        <colgroup>
        <col span="4">
        <col style="background: Mark; color: MarkText;">
    </colgroup>
    <thead>
        <tr>
            <th scope="col">Purchase</th>
            <th scope="col">Location</th>
            <th scope="col">Date</th>
            <th scope="col">Evaluation</th>
            <th scope="col">Cost (€)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Haircut</td>
            <td>Hairdresser</td>
            <td><time datetime="2023-09-12">12 Sept.</time></td>
            <td>Great idea</td>
            <td>30</td>
        </tr>
        <tr>
            <td>Lasagna</td>
            <td>Restaurant</td>
            <td><time datetime="2023-09-12">12 Sept.</time></td>
            <td>Regrets</td>
            <td>18</td>
        </tr>
        <tr>
            <td>Shoes</td>
            <td>Shoeshop</td>
            <td><time datetime="2023-09-13">13 Sept.</time></td>
            <td>Big regrets</td>
            <td>65</td>
        </tr>
        <tr>
            <td>Toothpaste</td>
            <td>Supermarket</td>
            <td><time datetime="2023-09-13">13 Sept.</time></td>
            <td>Good</td>
            <td>5</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th scope="row" colspan="4">Total</th>
            <td>118</td>
        </tr>
    </tfoot>
</table>


## Forms

[form]: https://html.spec.whatwg.org/#the-form-element
[label]: https://html.spec.whatwg.org/#the-label-element
[input]: https://html.spec.whatwg.org/#the-input-element
[button]: https://html.spec.whatwg.org/#the-button-element
[select]: https://html.spec.whatwg.org/#the-select-element
[datalist]: https://html.spec.whatwg.org/#the-datalist-element
[optgroup]: https://html.spec.whatwg.org/#the-optgroup-element
[option]: https://html.spec.whatwg.org/#the-option-element
[textarea]: https://html.spec.whatwg.org/#the-textarea-element
[output]: https://html.spec.whatwg.org/#the-output-element
[progress]: https://html.spec.whatwg.org/#the-progress-element
[meter]: https://html.spec.whatwg.org/#the-meter-element
[fieldset]: https://html.spec.whatwg.org/#the-fieldset-element
[legend]: https://html.spec.whatwg.org/#the-legend-element

### Interactive forms

The [`form`][form] element represents a collection of interactive controls,
such as text, buttons, checkboxes, range, or colour picker controls, for
submitting information.

For example, here is a form that asks a user to enter a single value.

<form id="example-form">
    <p>
        <label>
            Your answer:<br>
            <input name="answer" value="42">
        </label>
    </p>
    <button>Guess</button>
</form>

### Form field label

The [`label`][label] element represents a caption for an item in a user
interface. It's typically used for labelling form controls.

See the [form example](#example-form), above, for usage of the `label`
element.

### Form control

The following form includes examples of the `input` element, including it's
various input types.

<form method="get">
    <div>
        <label>Hidden</label>
        <p id="input-type-hidden-description">
            A control that is not displayed but whose value is submitted to the
            server with the rest of the form. There is an example here, but
            it is hidden!
        </p>
        <input type="hidden" name="hidden" id="input-type-hidden-example">
    </div>
    <div>
        <label for="input-type-text-example">Text</label>
        <p id="input-type-text-description">
            The default input type: a single-line text field.
        </p>
        <input type="text" name="text" id="input-type-text-example"
            aria-describedby="input-type-text-description">
    </div>
    <div>
        <label for="input-type-search-example">Search</label>
        <p id="input-type-search-description">
            A single-line text field for entering search strings.
        </p>
        <input type="search" name="search" id="input-type-search-example"
            aria-describedby="input-type-search-description">
    </div>
    <div>
        <label for="input-type-tel-example">Telephone</label>
        <p id="input-type-tel-description">
            A control for entering a telephone number.
        </p>
        <input type="tel" name="tel" id="input-type-tel-example"
            aria-describedby="input-type-tel-description">
    </div>
    <div>
        <label for="input-type-url-example">URL</label>
        <p id="input-type-url-description">
            A field for entering a URL.
        </p>
        <input type="url" name="url" id="input-type-url-example"
            aria-describedby="input-type-url-description">
    </div>
    <div>
        <label for="input-type-email-example">Email</label>
        <p id="input-type-email-description">
            A field for entering an email address.
        </p>
        <input type="email" name="email" id="input-type-email-example"
            aria-describedby="input-type-email-description">
    </div>
    <div>
        <label for="input-type-password-example">Password</label>
        <p id="input-type-password-description">
            A single-line text field whose value is obscured.
        </p>
        <input type="password" name="password" id="input-type-password-example"
            aria-describedby="input-type-password-description">
    </div>
    <div>
        <label for="input-type-date-example">Date</label>
        <p id="input-type-date-description">
            A control for entering a date (year, month, and day, with no time).
        </p>
        <input type="date" name="date" id="input-type-date-example"
            aria-describedby="input-type-date-description">
    </div>
    <div>
        <label for="input-type-month-example">Month</label>
        <p id="input-type-month-description">
            A control for entering a month and year, with no time zone.
        </p>
        <input type="month" name="month" id="input-type-month-example"
            aria-describedby="input-type-month-description">
    </div>
    <div>
    <label for="input-type-week-example">Week</label>
        <p id="input-type-week-description">
            A control for entering a date consisting of a week-year number and
            a week number with no time zone.
        </p>
        <input type="week" name="week" id="input-type-week-example"
            aria-describedby="input-type-week-description">
    </div>
    <div>
        <label for="input-type-time-example">Time</label>
        <p id="input-type-time-description">
            A control for entering a time value with no time zone.
        </p>
        <input type="time" name="time" id="input-type-time-example"
            aria-describedby="input-type-time-description">
    </div>
    <div>
        <label for="input-type-datetime-local-example">Local datetime</label>
        <p id="input-type-datetime-local-description">
            A control for entering a date and time, with no time zone.
        </p>
        <input type="datetime-local" name="datetime-local" id="input-type-datetime-local-example"
            aria-describedby="input-type-datetime-local-description">
    </div>
    <div>
        <label for="input-type-number-example">Number</label>
        <p id="input-type-number-description">
            A control for entering a number.
        </p>
        <input type="number" name="number" id="input-type-number-example"
            aria-describedby="input-type-number-description">
    </div>
    <div>
        <label for="input-type-range-example">Range</label>
        <p id="input-type-range-description">
            A control for entering a number whose exact value is not important.
        </p>
        <input type="range" name="range" id="input-type-range-example"
            aria-describedby="input-type-range-description">
    </div>
    <div>
        <label for="input-type-color-example">Colour</label>
        <p id="input-type-color-description">
            A control for specifying a colour.
        </p>
        <input type="color" name="color" id="input-type-color-example"
            aria-describedby="input-type-color-description">
    </div>
    <div>
        <label for="input-type-checkbox-example">Checkbox</label>
        <p id="input-type-checkbox-description">
            A check box allowing single values to be selected and deselected.
        </p>
        <input type="checkbox" name="checkbox" id="input-type-checkbox-example"
            aria-describedby="input-type-checkbox-description">
    </div>
    <div>
        <label for="input-type-radio-example">Radio</label>
        <p id="input-type-radio-description">
            A radio button, allowing a single value to be selected out of
            multiple choices.
        </p>
        <input type="radio" name="radio" id="input-type-radio-example"
            aria-describedby="input-type-radio-description">
    </div>
    <div>
        <label for="input-type-file-example">File</label>
        <p id="input-type-file-description">
            A control for selecting a file. 
        </p>
        <input type="file" name="file" id="input-type-file-example"
            aria-describedby="input-type-file-description">
    </div>
    <div>
        <label for="input-type-submit-example">Submit</label>
        <p id="input-type-submit-description">
            A button that submits the form.
        </p>
        <input type="submit" name="submit" id="input-type-submit-example"
            aria-describedby="input-type-submit-description">
    </div>
    <div>
        <label for="input-type-image-example">Image</label>
        <p id="input-type-image-description">
            A graphical submit button.
        </p>
        <input type="image" alt="Submit form." name="image"
            id="input-type-image-example"
            aria-describedby="input-type-image-description">
    </div>
    <div>
        <label for="input-type-reset-example">Reset</label>
        <p id="input-type-reset-description">
            A button that resets the contents of the form to default values.
        </p>
        <input type="reset" name="reset" id="input-type-reset-example"
            aria-describedby="input-type-reset-description">
    </div>
    <div>
        <label for="input-type-button-example">Button</label>
        <p id="input-type-button-description">
            A push button with no default behaviour.
        </p>
        <input type="button" name="button" value="Button"
            id="input-type-button-example"
            aria-describedby="input-type-button-description">
    </div>
</form>

### Buttons

The following form includes examples of the `button` element, including it's
various input types.

**Note**: This form doesn't actually do anything.

<form action="javascript:void(0)">
    <div>
        <label for="button-type-submit-example">Submit</label>
        <p id="button-type-submit-description">
            A button that submits the form.
        </p>
        <button type="submit" name="submit"
            id="button-type-submit-example"
            aria-describedby="button-type-submit-description">
            Submit
        </button>
    </div>
    <div>
        <label for="button-type-reset-example">Reset</label>
        <p id="button-type-reset-description">
            A button that resets the contents of the form to default values.
        </p>
        <button type="reset" name="reset"
            id="button-type-reset-example"
            aria-describedby="button-type-reset-description">
            Reset
        </button>
    </div>
    <div>
        <label for="button-type-button-example">Button</label>
        <p id="button-type-button-description">
            A push button with no default behaviour.
        </p>
        <button type="button" name="button"
            id="button-type-button-example"
            aria-describedby="button-type-button-description">
            Button
        </button>
    </div>
</form>

### Select list

The [`select`][select] element represents a control for selecting amongst a set
of options.

<label for="select-example">Select unit type:</label>
<select id="select-example" name="select">
    <option value="1">Miner</option>
    <option value="2">Puffer</option>
    <option value="3" selected>Snipey</option>
    <option value="4">Max</option>
    <option value="5">Firebot</option>
</select>

### Data list

The [`datalist`][datalist] element represents a set of option elements that
represent predefined options for other controls.

<label for="datalist-example">Course</label>
<input id="datalist-example" type="url" name="url" list="urls">
<datalist id="urls">
    <option label="MIME: Format of Internet Message Bodies" value="https://www.rfc-editor.org/rfc/rfc2045">
    <option label="HTML" value="https://html.spec.whatwg.org/">
    <option label="DOM" value="https://dom.spec.whatwg.org/">
    <option label="Fullscreen" value="https://fullscreen.spec.whatwg.org/">
    <option label="Media Session" value="https://mediasession.spec.whatwg.org/">
    <option label="The Single UNIX Specification, Version 3" value="http://www.unix.org/version3/">
</datalist>

### Option group

The [`optgroup`][optgroup] element represents a group of `option` elements with
a common label.

**Note**: This form doesn't actually do anything.

<form action="javascript:void(0)">
    <label for="option-group-example">Course</label>
    <p id="option-group-description">
        Which course would you like to watch today?
    </p>
    <select id="option-group-example" name="course"
        aria-describedby="option-group-description">
        <optgroup label="8.01 Physics I: Classical Mechanics">
            <option value="8.01.1" label="Lecture 01: Powers of Ten">
            <option value="8.01.2" label="Lecture 02: 1D Kinematics">
            <option value="8.01.3" label="Lecture 03: Vectors">
        </optgroup>
        <optgroup label="8.02 Electricity and Magnetism">
            <option label="Lecture 01: What holds our world together?" value="8.02.1">
            <option label="Lecture 02: Electric Field" value="8.02.2">
            <option label="Lecture 03: Electric Flux" value="8.02.3">
        </optgroup>
        <optgroup label="8.03 Physics III: Vibrations and Waves">
            <option label="Lecture 01: Periodic Phenomenon" value="8.03.1">
            <option label="Lecture 02: Beats" value="8.03.2">
            <option label="Lecture 03: Forced Oscillations with Damping" value="8.03.3">
        </optgroup>
    </select>
    <p><input type=submit value="Play"></p>
</form>

### Option

The [`option`][option] element represents an option in a `select` element or as
part of a list of suggestions in a `datalist` element. See examples of these,
above, for usage of the `option` element.

### Multi-line text

The [`textarea`][textarea] element represents a multiline plain text edit
control.

<label for="textarea-example">If you have any comments, please let us know: </label><br>
<textarea id="textarea-example" name="comments"></textarea>

### Output

The [`output`][output] element represents the result of a calculation, or the
result of a user action.

In this example, the `output` element is used to display the result for a
simple calculator:

<form oninput="result.value = parseInt(a.value, 10) + parseInt(b.value, 10)">
    <p>
        <label for="a">Number 1</label>:
        <input type="number" id="a" name="a" value="19"> +
    </p>
    <p>
        <label for="b">Number 2</label>:
        <input type="number" id="b" name="b" value="23"> =
    </p>
    <p>
        <label for="result">Result</label>:
        <output id="result" name="result" for="a b">42</output>
    </p>
</form>

**Note**: This interactive example requires JavaScript.

### Progress

The [`progress`][progress] element represents the completion progress of a
task. Progress is either _determinate_ or _indeterminate_.

A determinate progress bar indicates the fraction of work that has so far been
completed. For example:

<label>
    Progress:
    <progress value="50" max="100">50%</progress>
</label>

An indeterminate indicates that progress is being made but that it is not
clear how much more work remains to be done before the task is complete. For
example: 

<div aria-busy="true" aria-describedby="progress-bar"></div>
<progress id="progress-bar" aria-label="Example loading state…"></progress>

### Scalar measures

The [`meter`][meter] element represents a scalar measurement within a known
range, or a fractional value.

In this example, the `meter` element is used to describe the amount of disk
space used, out of a known amount of total space available.

<label>
    Disk usage:
    <meter min="0" value="170261928" max="233257824">
        170,261,928 bytes used out of 233,257,824 bytes available
    </meter>
</label>

### Form control groups

The [`fieldset`][fieldset] element represents a set of form controls grouped
together, optionally with a caption, represented by the `legend` element.

<fieldset>
    <legend>Display</legend>
    <p>
        <label>
            <input type="radio" name="colour" value="0" checked>
            Black on White
        </label>
    </p>
    <p>
        <label>
            <input type="radio" name="colour" value="1">
            White on Black
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" name="grayscale">
            Use grayscale
        </label>
    </p>
    <p>
        <label>
            Enhance contrast
            <input type="range" name="enhance" list="contrast" min="0" max="100" value="0" step="1">
        </label>
        <datalist id="contrast">
            <option label="Normal" value="0">
            <option label="Maximum" value="100">
        </datalist>
    </p>
</fieldset>


## Interactive elements

[details]: https://html.spec.whatwg.org/#the-details-element
[summary]: https://html.spec.whatwg.org/#the-summary-element
[dialog]: https://html.spec.whatwg.org/#the-dialog-element

### Details disclosure

The [`details`][details] element represents a [disclosure widget](https://adrianroselli.com/2020/05/disclosure-widgets.html)
from which the user can obtain additional information or controls.

For example, clicking "Details", below, will reveal additional information.

<details>
    <dl>
        <dt>Transfer rate:</dt>
        <dd>452KB/s</dd>
        <dt>Local filename:<dt>
        <dd>/home/rpausch/raycd.m4v</dd>
        <dt>Remote filename:<dt>
        <dd>/var/www/lectures/raycd.m4v</dd>
        <dt>Duration:</dt>
        <dd>0:16:27</dd>
        <dt>Color profile:</dt>
        <dd>SD (6-1-6)</dd>
        <dt>Dimensions:</dt>
        <dd>320×240</dd>
    </dl>
</details>

---

The [`summary`][summary] element represents a summary, caption, or legend for
the rest of the contents of the `summary` element's parent `details` element,
if any.

Without a `summary` element, a `details` element will be given a default
summary (see the example above). This is often just the text "Details" in many
browsers. The `summary` element can be used to provide a more useful synopsis:

<details>
    <summary>Automated Status: Operational</summary>
    <p>Velocity: 12m/s</p>
    <p>Direction: North</p>
</details>

### Dialog boxes

The [`dialog`][dialog] element represents a dialog box or pop-up box. A dialog
can be either _non-modal_ or _modal_.

#### Non-modal dialogs

When a non-modal dialog is open, it's still possible to interact with the rest
of the page.

**Note**: This interactive example requires JavaScript.

<button onclick="dialog.show()">Open dialog</button>

<dialog id="dialog">
    <p autofocus>
        An open dialog. Press "Close" to dismiss this dialog.
    </p>
    <form method="dialog">
        <button>Close</button>
    </form>
</dialog>

#### Modal dialogs

When a modal dialog is open, only the content within the dialog can be
interacted with.

**Note**: This interactive example requires JavaScript.

<button onclick="modal.showModal()">Open modal dialog</button>

<dialog id="modal">
    <p autofocus>
        An open modal dialog. Press "Close" or the <kbd>Esc</kbd> key to
        dismiss this dialog.
    </p>
    <form method="dialog">
        <button>Close</button>
    </form>
</dialog>


## Scripting

[script]: https://html.spec.whatwg.org/#the-script-element
[noscript]: https://html.spec.whatwg.org/#the-noscript-element
[template]: https://html.spec.whatwg.org/#the-template-element
[slot]: https://html.spec.whatwg.org/#the-slot-element
[canvas]: https://html.spec.whatwg.org/#the-canvas-element

### Dynamic scripts

The [`script`][script] element is used to include dynamic script or data blocks
into a page.

In the example below, a message is displayed stating whether JavaScript is
enabled in your web browser. A `script` element is used to update the message
to indicate that JavaScript is enabled, if JavaScript is in fact enabled.
Otherwise, some default text is displayed which states that JavaScript is
disabled. This message will change if you enable or disable JavaScript and
reload the page.

<p>
    JavaScript is <strong id="script-example">disabled</strong> in your web
    browser.
</p>
<script>
    var element = document.getElementById("script-example");
    if ("textContent" in element) {
        element.textContent = "enabled";
    } else {
        element.innerText = "enabled";
    }
</script>

The [`noscript`][noscript] element can be used to show content only if
scripting is disabled.

<noscript>
    <p>JavaScript really is <strong>disabled</strong> in your web browser.</p>
</noscript>

### Content template

The [`template`][template] element is used to declare fragments of HTML that
can be cloned and inserted in the document by script.

<!-- No example yet -->

### Web component slots

The [`slot`][slot] element represents a placeholder inside a
[web component](https://developer.mozilla.org/en-US/docs/Web/API/Web_components).

<!-- No example yet -->

### Canvas

The [`canvas`][canvas] element represents a bitmap canvas that can be used to
draw graphics and animations on the fly.

**Note**: This interactive example requires JavaScript.

<figure>
    <canvas id="canvas-example" aria-labelledby="canvas-example-label">
        <p>
            Your web browser doesn't support the <code>canvas</code> element.
            <a href="https://browsehappy.com/">Update your web browser</a> to
            see this example in action.
        </p>
    </canvas>
    <figcaption id="canvas-example-label">
        An example of the <code>canvas</code> element, a blue rectangle.
    </figcaption>
</figure>
<script>
    var canvas = document.getElementById("canvas-example");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#3300f5";
        ctx.fillRect(0, 0, 133, 106);
    } else {
        // An attempt at showing fallback content if the canvas element is not
        // supported.
        while (canvas.hasChildNodes()) {
            canvas.parentNode.insertBefore(canvas.firstChild, canvas);
        }
        canvas.parentNode.removeChild(canvas);
    }
</script>
