---
title: Select Extra Field
path: /Blogic/Screen Elements/Select Extra Field
sortOrder: 65
---


This elements is used to input the contents of an extra field (the input element is dependent of the field's type). It accepts the following configuration values:



 - <b>"id"</b>: The id of the extra field.
 - <b>"field"</b>: The name of the extra field, including the table name. For example ticket.x\_myfield
 - <b>"notEmpty"</b>: If true, the field will not allow empty values




###Functions:###


 - `setValue()`
 - `getValue()`
Depending of the type of the field, the `setValue()` and `getValue()` methods will return the selected value (a date, the id in a dropdown, a text value, etc).


The flags of the extra field (such as "cannot be empty") will be used to specify the behaviour of the field.

For ticket relations, it is possible to define the columns used to select a ticket in reg\_id=228 from v4.9. The syntax is as follows:
[displayField:searchField:op:label],[displayField:searchField:op:label],[displayField:searchField:op:label]


