---
title: Invoice
path: /Blogic/Screen Elements/Invoice
sortOrder: 39
---

This element is used for listing out and adding invoice lines (such as the one in editRequest). It has a grid for the lines, and some input fields for adding a new line.



###You can change the price of one or more invoice type by using this configuration:###


 - "rows.length": Number of elements you want to change
 - "rows.i.id": The id of the invoice type to change
 - "rows.i.price": The new price for the invoice type. Note that this number have to be multiplied by 100




###Functions:###


 - setFieldValue(string, Map)
     - <b>"add"</b>: Adds a line to the grid with values:
        - <b>"id"</b>
        - <b>"type"</b>
        - <b>"description"</b>
        - <b>"price"</b>
        - <b>"quantity"</b>
        - <b>"discount"</b>
        - <b>"discountMoney"</b>
        - <b>"date"</b>
     - <b>"addCurrent"</b>: Just adds the current line to the grid
     - <b>"default"</b>: Set the default invoice type to show. You must enter field "default" and the value is the id of the invoice type.



 - `getFieldValue(string)`
    - <b>"rows"</b>: Returns the number of rows in the grid.
    - "row.n.type": Return the invoice type for row n.
    - "row.n.description": Return the description for row n.
    - "row.n.price": Return the price for row n.
    - "row.n.quantity": Return the quantity for row n.
    - "row.n.discount": Return the discount in % for row n.
    - "row.n.discountMoney": Return the discount in monetary units for row n.
    - "row.n.date": Return the date for row n.


