---
title: Static Grid
path: /Blogic/Screen Elements/Static Grid
sortOrder: 84
---

This element lets you create a static grid/table (i.e. a table where the contents is manually added, and not directly fetched from the database).



###The grid can have the following configuration elements:###


 - "hideWhenEmpty": If true, hides the grid if it has no rows.
 - <b>"persistent"</b>: If true, preserves grid content between requests.
 - <b>"showTicketStatus"</b>: If true, the grid will show the ticket status. Only used for generic grids.
 - <b>"sortByArrows"</b>: If true, headers with arrows (see below) are used for sorting.
 - <b>"hideFooter"</b>: If true, the footer is not printed.
 - <b>"noVerticalScrollbar"</b>: This flag is deprecated and will no longer have any effect.
 - <b>"setFocusOnLoad"</b>: If true, the grid will get focus when the page is loaded




###The grid will have headers specified from the following configuration elements:###


 - "headers"
    - "headers.length": The number of columns or headers in the grid
    - "headers.i.selectRow": If true, then this column will contain a checkbox that will specify which row is selected
    - "headers.i.arrows": If true, then this column will contain arrows for sorting the elements.
    - "headers.i.hidden": If true, then this column will not be displayed.
    - "headers.i.left": If true, the contents of this column will be left-justified.
    - "headers.i.center": If true, the contents of this column will be centered.
    - "headers.i.right": If true, the contents of this column will be right-justified.
    - "headers.i.orderByInteger": If true, the grid will sort by the numerical values in this column.
    - "headers.i.noSorting": If true, this column will not be selectable for sorting.
    - "headers.i.textBox": If true, this column will contain an editable text field.
    - "headers.i.dropDown": If true, this column will contain a dropdown.
    - "headers.i.checkBox": If true, then this column will contain a checkbox.
    - "headers.i.delete": If true, this column will contain an icon that will remove the row when clicked.
    - "headers.i.containsHtml": If true, the contents of this column will be parsed as straight HTML.
    - "headers.i.dragDrop": If true, this column can drag rows up and down with the mouse.
    - "headers.i.icon": If true, this column will be shown as an icon.
    - "headers.i.label": The label of this column.
    - "headers.i.chop"




###Functions:###


 - setFieldValue(string, Map):
    - <b>"addHeader"</b>: Will add a header with:
        - <b>"label"</b>
        - <b>"flags"</b>
        - <b>"chop"</b>
        - <b>"width"</b>
    - <b>"addRow"</b>: Will add a row with:
        - <b>"id"</b>
        - <b>"url"</b>
        - <b>"target"</b>
        - <b>"flags"</b>
        - <b>"color"</b>
        - <b>"toolTip"</b>
        - <b>"selected"</b>
    - <b>"addRowUnique"</b>: Will add a row with a unique id with:
        - <b>"id"</b>
        - <b>"url"</b>
        - <b>"target"</b>
        - <b>"flags"</b>
        - <b>"color"</b>
        - <b>"toolTip"</b>
        - <b>"selected"</b>
    - <b>"addCell"</b>: Will add a cell with:
        - <b>"label"</b>
        - <b>"sort"</b>
        - <b>"url"</b>
        - <b>"target"</b>
        - <b>"flags"</b>
        - <b>"toolTip"</b>
    - <b>"deleteSelectedRows"</b>: Will delete the selected rows.
    - <b>"clearSelectedRows"</b>: Remove selected mark on the selected rows.
    - <b>"deleteRows"</b>: Will delete all rows.
    - <b>"set"</b>: Will set various fields:
        - <b>"pageSize"</b>: The number of entries per page.
        - <b>"flags"</b>: The flags for the grid.
        -  <b>"maxHeight"</b>: The maxium height for the grid in pixels.
        - <b>"width"</b>: The width of the grid in pixels or %.
        - <b>"allRowsCount"</b>: Whether to count the number of rows in total.
        - <b>"selectedRows"</b>: A comma-separated list of row ids that will be selected.
    - <b>"defaultOrder"</b>: Sets the column that by default orders the rows, values are:
        - <b>"column"</b>
        - <b>"direction"</b>: can be "asc" or "desc" for ascending or descending sort order.
    - "setDropDownOptions.n": Sets the dropdown options for column n.
    - <b>"addCommand"</b> (from v4.5): Will add a menu command with parameters
        - <b>"title"</b>
        - <b>"url"</b>
        - <b>"returnUrl"</b>
        - <b>"idString"</b>
        - <b>"menuIndex"</b>: Optional (zero based indexes for placement)
        - <b>"commandIndex"</b> Optional (zero based indexes for placement)
    - <b>"addCommandMenu"</b> (from v4.5): Will add a menu (for commands) with parameters
        - <b>"label"</b>: the menu label
        - <b>"title"</b>: the popup window title
        - <b>"iconUrl"</b>
        - <b>"idString"</b>
        - <b>"url"</b> From version 7.1. will create an instant menu (a button that navigates directly, instead of opening up a context menu).
    - <b>"deleteCommand"</b> (from v4.5): Will delete menu `command(s)`
        -  <b>"idString"</b>
    - <b>"deleteCommandMenu"</b> (from v4.5): Will delete `menu(s)`
        -  <b>"idString"</b>
    - <b>"addGroup"</b> (from 8.4R07): Will add groups
        - <b>"column"</b>: The column (from 0) to group by
        - "order=descending": Sort descending. Default = ascending.



 - `getFieldValue(string)`
    - <b>"numRows"</b>: Returns the number of rows in the grid.
    - <b>"pageSize"</b>: Returns the size of a page.
    - <b>"flags"</b>: The flags for the grid.
    - <b>"maxHeight"</b>: The maxium height.
    - <b>"width"</b>: The width of the grid.
    - <b>"allRowsCount"</b>: Whether to count all rows.
    - "header.n.label": The label for header n.
    - "header.n.flags": The flags for header n.
    - "header.n.chop": The max amount of characters shown for cells in column n.
    - "row.n.id": The id for row n.
    - "row.n.url": The url for the row.
    - "row.n.flags": The flags for the row.
    - "row.n.selected": Whether the row is selected.
    - "row.n.numCells": The number of cells in the row.
    - "row.n.cell.m.label": The label of cell m in row n.
    - "row.n.cell.m.m\_sortString": The sort string.
    - "row.n.cell.m.m\_sortInteger": The sort number.
    - "row.n.cell.m.m\_flags": The flags.
(One can also use rowid.n.\<field> where n is the id of the row instead of its number)




###The flags:###
To get the decimal value: use 2^shift value
For instance, to get HeaderFlag\_Right use the formula 2^3 -> 8



###Table flags:###
Flag\_HideWhenEmpty        = 1<<0,

    Flag_Persistent           = 1<<1, // Only used by HtmlStaticGrid
    Flag_ShowTicketStatus     = 1<<2, // Only used by HtmlGenericGrid
    Flag_SortByArrows         = 1<<3, // Sort grid by arrows
    Flag_HideFooter           = 1<<4, // Hide footer
    Flag_NoVerticalScrollbar  = 1<<5, // Ignore height parameter and make the grid in full height
    Flag_ShowFooterFunctions  = 1<<6, // Show footer aggregate functions at the bottom of the grid.
    Flag_SelectRow            = 1<<7, // Select a row with the mouse
    Flag_LinksForSuperOffice  = 1<<8, // Used for superoffice-screen with grids, row links will open in new window without framework
    Flag_OuterBorder          = 1<<9, // Show a border around
    Flag_NoExportMenu         = 1<<10,// Do not show the export menu
    



###Header flags:###

    HeaderFlag_Hidden         = 1<<0, // Hide column
    HeaderFlag_Left           = 1<<1, // Left align header
    HeaderFlag_Center         = 1<<2, // Center align header
    HeaderFlag_Right          = 1<<3, // Right align header
    HeaderFlag_OrderByInteger = 1<<4, // Order by integer value instead of string value cell.m_sort
    HeaderFlag_NoSorting      = 1<<5, // Disable sorting by clicking on header
    HeaderFlag_SelectRow      = 1<<6, // This is an checkbox column
    HeaderFlag_TextBox        = 1<<7, // This is a textbox column
    HeaderFlag_DropDown       = 1<<8, // This is a drop-down column
    HeaderFlag_Arrows         = 1<<9, // This is an arrows column
    HeaderFlag_CheckBox       = 1<<10, // This is an checkbox column
    HeaderFlag_ContainsHtml   = 1<<11, // Do not encode text
    HeaderFlag_Delete         = 1<<13, // Delete icon
    HeaderFlag_DragDrop       = 1<<14, // Drag and drop this cell
    HeaderFlag_Icon           = 1<<15 // Custom icon
    



###Row flags:###
RowFlag\_Bold            = 1<<0,
RowFlag\_JavaScriptLink  = 1<<1,
RowFlag\_Color           = 1<<2,
RowFlag\_OwnedByUser     = 1<<3
RowFlag\_IsDeleted       = 1<<4,



###Cell flags:###
CellFlag\_Red            = 1<<0,
CellFlag\_Yellow         = 1<<1,
CellFlag\_Green          = 1<<2,
CellFlag\_Disabled       = 1<<3,
CellFlag\_IconFromLabel  = 1<<4,
CellFlag\_ContextMenuIcon = 1<<5,


