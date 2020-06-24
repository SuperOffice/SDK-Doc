---
title: D Data table
path: /Examples/Equipment screen Intro/D: Data table
sortOrder: 9573
---

This element is used to create a generic grid to display the customers that have used the equipment in our database, their email addresses and the period they have been using it.


###Use the following code for this element:###

criteria.0.field = y\_reservations.x\_eqid
criteria.0.indent = 0
criteria.0.operator = OperatorEquals
criteria.0.rowOperator = OperatorAnd
criteria.0.valueId = true
criteria.length = 1
fields.0.field = y\_reservations.x\_customer
fields.0.label = Customer
fields.1.field = y\_reservations.x\_customer.display\_email
fields.1.label = Email
fields.2.field = y\_reservations.x\_fromdate
fields.2.label = From date
fields.3.field = y\_reservations.x\_todate
fields.3.label = To date
fields.length = 4
limit = 100
orderColumn = 0
url = /bin/ticket?action=viewExtraTableEntry&field=&extraTable=5&id=

    urlAppendField = y_reservations.id
    



###Sort the elements in the following order:###


