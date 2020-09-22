---
title: List box
uid: blogic_listbox
sortOrder: 12
---

This element adds a drop-down menu to your screen.

## Configuration

| Setting            | Description         |
|:-------------------|:--------------------|
| options.length     | The number of items |
| options.i.value    |                     |
| options.i.name     |                     |
| options.i.selected | If true, will set the option as selected by default (v. 7.5SR1) |
| JavaScript         | HTML code           |

## Example

```html
JavaScript = onblur="alert('Wow! You changed it!');"
```

## Functions

### setFieldValue(String, Map) (v.7.0 SR1)

| Action | Map keys       | Description        |
|:-------|:---------------|:-------------------|
| add    | name<br/>value |                    |
| remove | value          | Remove all options with the given value |
| clear  |                | Remove all options |

### toString()

Converts the selected value to a string.

### toInteger()

Converts the selected value to a number.
