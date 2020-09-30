---
title: Select category
uid: blogic_select_category
sortOrder: 19
---

This element is a hierarchical drop-down menu that lets you select a ticket category.

### Configuration

| Setting          | Description                                                             |
|:-----------------|:------------------------------------------------------------------------|
| empty            | Adds "(none)" as a choice                                               |
| onlyLeafCategory | Whether only leaf categories are valid choices                          |
| parentCategory   | The root category of the tree<br/>Default is -1                         |
| includeCategory  | Forces a category to be included, even if it was not chosen by the user |

## Functions

### setValue(String id)

Sets the selected category with the given ID.

### toInteger()

Returns the selected category ID as a number.

### toString()

Returns the selected category ID as a string.
