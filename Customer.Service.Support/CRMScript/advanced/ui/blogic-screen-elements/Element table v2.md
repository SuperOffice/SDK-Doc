---
title: Element table v2
path: /Blogic/Screen Elements/Element table v2
sortOrder: 29
---


This element is a layout element that can be used to lay out its children on the screen. The children are laid out in a tabular fashion, starting in the top-left corner, and then wrapping to the next row when all columns in the current row have been filled. All rows and columns can be sized in pixels, percentage or "dynamic" (divide remaining space). Furthermore, each cell can have additional padding on all sides. The whole table supports cellpadding (padding on all cells), and cellspacing (space between cells, but not between cells and the outer border of the table). Each cell can also contain a header.




###The element supports the following attributes:###


 - <b>"rows"</b>, "columns": The initial size of the table. Note that the number of rows will expand dynamically if there are more children than initial space.
 - <b>"border"</b>: If true, then a border will be drawn outside the table and between the cells.
 - <b>"cellspacing"</b>: The number of pixels between two cells, both horizontally and vertically. Note: this value does not create space between cells and outer table edges.
 - <b>"cellpadding"</b>: The number of pixels to pad each cell on each side. Will also pad against outer table edges.
 - <b>"row"</b>: This is an optional array which allows you to set size and padding for each row. Use row.length to specify length of array.
 - "row.n.size": The vertical size of row n. Use '%' to indicate a relative size, or 'px' to indicate exact size, or '*' to indicate dynamic size (evenly shared between all dynamic rows)
 - "row.n.paddingTop": Top padding in pixels for all cells in this row.
 - "row.n.paddingBottom": Bottom padding in pixels for all cells in this row.
 - <b>"column"</b>: This is an optional array which allows you to set size and padding for each column. Use column.length to specify length of array.
 - "column.n.size": Sam as row.n.size, but specifies horizontal size.
 - "column.n.paddingLeft": Left padding in pixels for all cells in this column.
 - "column.n.paddingRight": Right padding in pixels for all cells in this column.


From version 8, the following attributes are supported for setting an outer margin:


 - "margin": Set margin for all 4 sides. Or set margin individually for one side (overrides "margin"):
     - <b>"marginLeft"</b>
     - <b>"marginTop"</b>
     - <b>"marginRight"</b>
     - <b>"marginBottom"</b>


The element will pick up certain attributes from its immediate children. I.e. you can define these config values for the children, and they will be picked up by the layout table and applied.


 - "layout.label": If this value is set, we will print a header above the child element.
 - "layout.colspan": If this value is set, the child may span multiple columns.
 - "layout.rowspan": If this value is set, the child may span multiple rows.
 - "layout.paddingLeft": left padding of only this child in pixels
 - "layout.paddingRight": right padding of only this child in pixels
 - "layout.paddingTop": top padding of only this child in pixels
 - "layout.paddingBottom": bottom padding of only this child in pixels.


