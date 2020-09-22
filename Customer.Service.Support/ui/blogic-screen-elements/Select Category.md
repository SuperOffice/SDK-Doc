---
title: Select Category
uid: blogic_select_category
sortOrder: 19
---

This element is a hierarchical drop-down that allows you to select a ticket category.

### Configuration

| Value              | Description                  |
|:-------------------|:-----------------------------|
| empty              | Adds "(none)" as a choice |
| onlyLeafCategory   | If set to "true", only leaf categories are valid choices |
| parentCategory     | The root category of the tree, default is -1 |
| includeCategory    | Forces this category to be included, although it is not among the categories the user chooses |

## Functions

### setValue()

Sets the selected category with the given ID.

### toInteger()

Returns the selected category ID.

### toString()

Returns the selected category ID.
