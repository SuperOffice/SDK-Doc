---
title: Markdown reference for docs.superoffice.com
---

This style guide is intended to ensure that the markup of docs.superoffice.com has a consistent style, and is easy to navigate and maintain.

Adopting these guidelines also limits variation, thereby eliminating confusion, guesswork, and debates.

Use the [documentation style guide](documentation-style-guide.md) as a companion guide.

## Alerts (note, tip, warn, caution)

```markdown
> [!NOTE]
> Information the user should notice even if skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!CAUTION]
> Negative potential consequences of an action.

> [!WARNING]
> Dangerous certain consequences of an action.
```

## Angle brackets

Angle brackets are used for HTML and XML tags and to denote placeholders in code.

The opening angle bracket must be escaped in text. For example, type \\\<cust ID> to produce \<cust ID>.
You don't have to escape angle brackets in text formatted as inline code or in code blocks.

## Apostrophes and quotation marks

Use basic straight apostrophes and quotation marks. If copying into Markdown, use **Ctrl+Shift+V**.

## Blockquotes

Start the line with a \>

## Bold and italic

* Use a pair of **double stars for bold** emphasis.
* Don't use underscores to mark emphasis.
* Don't use uppercase for emphasis.
* Don't use quotes for emphasis.
* Use a pair of **single stars for italic** emphasis.

## Columns

TBD

## Headings

* Start the line with 1 or more \#. The number of hashes determines the heading level. For example, \#\# means H2.
* Don't nest headings lower than H4.
* There must be a space between the last # and heading text.

## HTML

Even though Markdown supports inline HTML, we don't use it on docs.superoffice.com. It is likely to cause build errors or warnings.

## Images

You can use either *.jpg* or *.png* images. Place images in the appropriate *media* folder.

**Format:**

\!\[Alt text\]\(path\)

**Example:**

```markdown
![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)
```

### Icons

Reusable icons are placed in the repo's top-level *media/icons/* folder. Don't set alt text for icons.

## Included Markdown files

When the same content should be repeated on multiple pages, you can use includes.

Reusable content snippets are placed in their own Markdown files in the */includes* subfolder and referenced from where it should be inserted. The reference is replaced at build time by the extensions.

> [!NOTE]
> Includes are not rendered in the GitHub preview.

### Includes syntax

* \<title> is the name of the file
* \<filepath> is the relative path to the file
* INCLUDE must be capitalized
* there must be a space before the \<title>

**Block include (on a separate line):**

`[!INCLUDE [<title>](<filepath>)]`

**Inline include (within a line):**

Text before `[!INCLUDE [<title>](<filepath>)]` and after.

Here are requirements and considerations for include files:

### Guidelines

* Write all the text in an include file as complete sentences or phrases. Avoid creating a dependency on preceding text or following text on the page that references the include.

* Don't nest includes.

* Place images used by includes in a */includes/media* subfolder.

## Links

For information about the syntax for links, see [How to use links in docs](links-in-docs.md).

## Lists

* Use numbers for ordered lists.
* Use stars for bulleted lists. Don't use dashes.

## Special characters that need to be escaped

<dl>
<dt>\</dt><dd>backslash</dd>
<dt>`</dt><dd>backtick</dd>
<dt>*</dt><dd>asterisk (star)</dd>
<dt>_</dt><dd>underscore</dd>
<dt>{}</dt><dd>curly braces</dd>
<dt>[]</dt><dd>square brackjets</dd>
<dt>()</dt><dd>parentheses</dd>
<dt>#</dt><dd>hash mark</dd>
<dt>+</dt><dd>plus sign</dd>
<dt>-</dt><dd>minus sign</dd>
<dt>.</dt>
<dd>dot (period)</dd>
<dt>!</dt>
<dd>exclamation mark</dd>
</dl>

## Tables

* Separate columns with a pipe character (|). Use surrounding pipes too.
* Separate the header row from the body with a row of dashes (and pipes to match the columns).
* Put 1 space on either side of a pipe (except the left-most and right-most).
* You can align the columns by using colons.

```markdown
| default (left) | centered | right |
|--------|:------:|-------:|
| corn | (winter) squash | beans |
```

| default (left) | centered | right |
|--------|:------:|-------:|
| corn | (winter) squash | beans |

## Whitespace and line breaks

* Put 1 space after a sentence (except if followed by a line break).
* Put 1 empty line before and after all block elements:
  * paragraphs
  * headings
  * lists
  * tables
  * images
* Press **Enter** once to break within a paragraph (\<br\>). Press **Enter** twice to start a new paragraph.
* Use horizontal rulers sparingly if at all. Type 3 or more consecutive hyphens to produce an \<hr\>.
