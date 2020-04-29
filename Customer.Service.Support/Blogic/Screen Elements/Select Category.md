---
title: Select Category
path: /Blogic/Screen Elements/Select Category
sortOrder: 56
---



###This element is a hierarcical dropdown which allows you to select a ticket category. The following configuration values are available:###


- <b>"empty"</b>: will add "(none)" as a choice
- <b>"onlyLeafCategory"</b>:  when set to "true", only leaf categories are valid choices
- <b>"parentCategory"</b>: the root category of the tree, default is -1
- <b>"includeCategory"</b>: forces this category to be included, although it is not among the categories the user chooses




###Functions:###


- `setValue()`: sets the selected category with the given id.
- `toInteger()`: returns the selected category id.
- `toString()`: returns the selected category id.


