# Markdown style guide

This style guide is intended to ensure that the markup of SuperOffice documentation is has a consistent style,
and is easy to navigate and maintain.

Adopting these guidelines also limits variation, thereby eliminating confusion, guesswork, and debates.

Use the documention style guide as a companion guide.

## Text formatting

* Use a pair of double stars for bold emphasis.
* Use a pair of single stars for italic emphasis.
* Don't use underscores to mark emphasis.
* Don't use strikethrough.
* Don't use uppercase for emphasis.
* Don't use quotes for emphasis.

## Whitespace and linebreaks

* Put 1 space after a sentence (except if followed by a line break).
* Put 1 empty line berfore and after all block elements:
    * paragraphs
    * headings
    * lists
    * tables
    * images
* Press **Enter** once to break within a paragraph (\<br\>). Press **Enter** twice to start a new paragraph.
* Use horizontal rulers sparingly if at all. Type 3 or more consecutive hyphens to produce an \<hr\>.

### Line wraps

* TBD

### Indentation

* TBD

## Escaping special characters

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

## Links

* Type the link text in square brackets directly followed by the url in parentheses.

Format: \[Link text\]\(url\)

Example:
```markdown
[link to Google!](http://google.com)
```

### Relative links

Format: \[Link text\]\(local-path\)

Example:
```markdown
[Logos](logos.html)
```

## Images

Format: \!\[Alt text\]\(url\)

Example:
```markdown
![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)
```

## Headings

* Start the line with 1 or more \#. The number of hashes determines the heading level. For example, \#\# means H2.
* Don't nest headings lower than H4.

## Lists

* Use numbers for ordered lists.
* Use stars for bulleted lists. Don't use dashes.
* colons can be used to align columns

## Tables

```markdown
| default (left) | centered | right |
|--------|:------:|-------:|
| corn | (winter) squash | beans |
```

| default (left) | centered | right |
|--------|:------:|-------:|
| corn | (winter) squash | beans |

* Separate columnss with a pipe char |. Use surrounding pipes too.
* Separate the header row from the body with a row of dashes (and pipes to match the cols).
* Put 1 space on either side of a pipe (except the left-most and right-most).

## Quotes

* Start the line with a \>

## Code samples

/* What to mark as code? */

### Inline code

* wrap in backticks \`

### Code blocks

* Use code fencing with tripple backticks before and after.
* Place the programming language after the opening backticks for syntax highlighting.

<pre>
```javascript
This is some JavaScript code.
```
</pre>

## Inline HTML

### Definition lists

* List of term/description pairs

```html
<dl>
    <dt>term1</dt>
    <dd>description1</dd>
    <dt>term2</dt>
    <dd>description2</dd>
</dl>
```

### HTML tables

* If you need a more sohpisticated layout or formatting.
* If you need to add a class to the table.
* If you need to add a caption or indicate table head (as you should for universal design compliance).
