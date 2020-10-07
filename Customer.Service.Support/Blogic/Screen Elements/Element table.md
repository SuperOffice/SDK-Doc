---
title: Element table
path: /Blogic/Screen Elements/Element table
sortOrder: 28
---

This element is a layout element, containing other elements. The elements will be laid out in a table.



###The element accepts the following configuration values:###


 - "columns": The number of columns in the table.
 - <b>"verticalSpace"</b>: If true, then elements will be separated vertically with some space.
 - <b>"cellspacing"</b>: The number of pixels of cellspacing in the table.
 - <b>"cellpadding"</b>: The number of pixels of cellpadding in the table.
 - <b>"width"</b>: The width of the table in % or pixels.


Children attributes: The following attributes will be picked up from immediate children. Note, these attributes must be in the configuration of the child, not the table.


* "label": The label used to the left or top of the element.
* "labelPos": "above" wil adjust label on top of element, otherwise to the left.
* "verticalSpace": "full" will allow this element to be full size, i.e. not limited vertically. The value "rest" will resize this element to whatever vertical space is left. If more than one element in a table has the "rest" value, then they will share remaining space equally.


As of version 4.2.21 or 4.4.2, we support the following attributes for an immediate child of an layout table which are used to control the dynamic resize model. Note; this only applies to child elements which support dynamic resizing. Several elements do not support dynamic resizing, and will consequently ignore these attributes.


* "sizeAttributes\_blockSetHeight": if true, then this element will not be resized vertically.
* "sizeAttributes\_blockSetWidth": if true, then this element will not be resized horizontally.
* "sizeAttributes\_minHeight": if set, then the height of the element will not be set to less than this value.
* "sizeAttributes\_maxHeight": if set, then the height of the element will not be set to more than this value.
* "sizeAttributes\_absoluteHeight": if set, then the height of the element will be set to this value.
* "sizeAttributes\_minWidth": if set, then the width of the element will not be set to less than this value.
* "sizeAttributes\_maxWidth": if set, then the width of the element will not be set to more than this value.
* "sizeAttributes\_absoluteWidth": if set, then the width of the element will be set to this value.


