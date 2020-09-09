---
title: HtmlGrid
path: /Blogic/Screen Elements/HtmlGrid
sortOrder: 36
---

This element is the oldest grid version that allows you to create an htmlgrid.



###The following configuration values are available:###


 - <b>"hasCheckbox"</b> - the grid will output a checkbox row
 - <b>"checkboxLeft"</b> - the checkbox row will be left aligned
 - <b>"persistent"</b> - the grid will retain values between requests
 - <b>"width"</b> - the width of the grid



 - <b>"headers"</b>
    - "headers.n.label":
    - "headers.n.url":
    - "headers.n.flags":
    - "headers.n.width":



 - <b>"rows"</b>
    - "rows.n.id":
    - "rows.n.columns":
    - "rows.n.columns.i.label"
    - "rows.n.columns.i.url"
    - "rows.n.columns.i.flags"
    - "rows.n.columns.i.target"



 - setFieldValue(string, Map)
    - <b>"addHeader"</b>: Adds a header. Map populated by:
        - <b>"label"</b>
        - <b>"url"</b>
        - <b>"flags"</b>
        - <b>"width"</b>
    - <b>"addRow"</b>: Adds a row. Map populated by:
        - <b>"unique"</b>
        - <b>"id"</b>
        - <b>"checked"</b>
    - <b>"addCell"</b>: adds a cell. Map populated by:
        - <b>"label"</b>
        - <b>"url"</b>
        - <b>"flags"</b>
        - <b>"target"</b>
    - <b>"deleteChecked"</b>




###Functions:###


 - `getFieldValue(string)`
    - <b>"rows"</b>
    - <b>"all"</b>
    - "row.n.checked"
    - "row.n.column.label"
    - "row.n.id"


