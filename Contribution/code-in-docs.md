---
title: How to include code in docs
---

There are multiple ways to include code in a page published on docs.microsoft.com:

* Individual words within a line
* Code blocks in the current Markdown file

## Inline code

Wrap the code text in single backticks (\`).

For example, \`getDate()\`

> [!NOTE]
> Don't style links as code. It can obscure the fact that the text is a link.

### When to use it

Use `inline code` when referring to:

* Named parameters and variables in a nearby code block in your text
* Properties
* Methods and classes
* Language keywords
* Database table and column names
* SQL commands
* NuGet package names

It's not always obvious what qualifies as code. If in doubt, see [Text formatting guidelines](text-formatting-guidelines.md).

### Placeholders

To indicate that the user must replace something in the code with their own values, use placeholder text marked off by angle brackets.

## Fenced code blocks

* Use code fencing with triple backticks (\`\`\`) before and after.
* Place the programming language after the opening backticks for syntax highlighting.
* Don't use indentation only to indicate a code block.

**Markdown:**

```markdown
    ```crmscript
      for(Integer i = 1; i < 10; i++) {
        printLine(i.toString());
      }
    ```
```

**Rendered:**

```crmscript
for(Integer i = 1; i < 10; i++) {
  printLine(i.toString());
}
```

### Screenshots

Avoid IDE screenshots with code, unless you want to illustrate something specific about the IDE.

Fenced code blocks can be copied and pasted and they're indexed by search engines.
