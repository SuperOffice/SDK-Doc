---
title: Table
path: /Blogic/Screen Elements/Table
sortOrder: 85
---

This element will display a static grid, i.e. a grid where the contents is not automatically queried from the database, but rather added manually.

This element is deprecated. Use "Static grid" instead.



###It will contain a number of headers, specified by the following values:###

headers.length: The number of headers
headers.i.label: The label of header i
headers.i.url: A url to go to for the content in this column.
headers.i.flags: Possible flags for this header. These are not documentet.
headers.i.width: The width of the column.



###The content may be specified by using:###
rows.length: The number of rows.
rows.i.id: The id of the row.
rows.i.columns.length: The number of columns in the row
rows.i.columns.j.label: The cell content
rows.i.columns.j.url: The url for the cell.
rows.i.columns.j.flags: The flags for the cell.
rows.i.columns.j.target: The target for the url.



###Other flags for the grid:###
"hasCheckbox": specifies whether the grid should have a column with checkboxes. Normally alligned to the right.
"checkboxLeft": if true, then then checkbox column will be placed to the left.
"persistent": If true, then the grid will remember it's content during form submissions.
"width": The width of the grid


example:
    
    checkboxLeft = false
    hasCheckbox = true
    
    headers.length = 3
    headers.0.flags =
    headers.0.label = Header
    headers.0.url = bin/ticket?action=listTicket&header=
    headers.1.flags =
    headers.1.label = Header
    headers.1.url = bin/ticket?action=listTicket&header=
    headers.2.flags =
    headers.2.label = Header
    headers.2.url = bin/ticket?action=listTicket&header=
    
    persistent = true
    

toString() will return a comma separated list of the ids of all the rows.



###Available fields from getFieldValue:###
"rows": Returns the number of rows.
"row.i.id": Returns the id for row i.
"row.i.checked": Returns "1" if the row is checked, otherwise "0".
"row.i.cell.j.label". Returns the contents of the cell at row i and column j.

Available fields/methods for setFieldValue:
"addHeader": Adds a header with the values "label", "url", "flags", "width".
"addRow": Adds a row with the id "id". If "checked"="true", then the row is checked.
"addCell": Adds a cell with "label", "url", "flags", "target".
"deleteSelectedRows": Deletes all checked rows.


