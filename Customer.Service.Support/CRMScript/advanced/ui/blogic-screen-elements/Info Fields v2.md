---
title: Info Fields v2
path: /Blogic/Screen Elements/Info Fields v2
sortOrder: 38
---

Next version of Infofields.
This element will display a grid of information fields, where the values can be ordered in groups. The information will be based on a query to the database.



###The configuration will accept the following values:###


 - <b>"columns"</b>: Number of columns
 - <b>"header"</b>: The header. Either a value or a field
 - <b>"headerIsField"</b>: true if the header is a field, otherwise false.
 - <b>"headerChop"</b>: Max amounts of characters to be shown in the header
 - <b>"width"</b>: Width of element as HTML style, for example 100% or 300px
 - <b>"autoBreaks"</b>: If true, columns will break
 - <b>"autoUrl"</b>: If true, make automatic URLs for relevant fields
 - <b>"iconUrl"</b>:
 - <b>"iconHeader"</b>:
 - <b>"table"</b>:
 - <b>"showFavourite"</b>:
 - <b>"entityIdField"</b>:



 - <b>"where"</b>
        - <b>"field"</b>
        - <b>"operator"</b>
        - <b>"value"</b>
        - <b>"valueId"</b>
        - <b>"rowOperator"</b>
        - <b>"critPriority"</b>



 - <b>"groups"</b>: group configuration
        - "groups.n.label": label of group n
        - "groups.n.fields": the number of fields in group n
        - "groups.n.fields.i.newColumn":
        - "groups.n.fields.i.label": label of item i in group n
        - "groups.n.fields.i.field":
        - "groups.n.fields.i.baseUrl": the url of item i in group n
        - "groups.n.fields.i.appendField": the value of the field you want to include to the url of item i in group n.
        - "groups.n.fields.i.function":
        - "groups.n.fields.i.chop":
        - "groups.n.fields.i.isHeader":
        - "groups.n.fields.i.isBold":
        - "groups.n.fields.i.nowrap":



 - ""fields": fields at root configuration
        - "fields.n.newColumn":
        - "fields.n.type":
        - "fields.n.label":
        - "fields.n.field":
        - "fields.n.baseUrl":
        - "fields.n.appendField":
        - "fields.n.value":
        - "fields.n.function":
        - "fields.n.chop":
        - "fields.n.isHeader":
        - "fields.n.isBold":
        - "fields.n.nowrap":



 - <b>"statusMonitorFields"</b>
        - "statusMonitorFields.n.id":
        - "statusMonitorFields.n.label":



- <b>"column"</b>: column width
        - "column.n.width"





###Example:###
    
    groups.0.fields.0.appendField = ticket.id
    groups.0.fields.0.baseUrl = ?action=listTicket&id=
    groups.0.fields.0.field = ticket.title
    groups.0.fields.0.label = Tittel
    groups.0.fields.1.appendField = ticket.id
    groups.0.fields.1.baseUrl = ?action=listTicket&id=
    groups.0.fields.1.field = ticket.owned_by.username
    groups.0.fields.1.label = Eier
    groups.0.fields.length = 2
    groups.0.label = Forste
    groups.length = 1
    header = ticket.title
    headerIsField = true
    where.0.critPriority = 0
    where.0.field = ticket.id
    where.0.operator = OperatorEquals
    where.0.rowOperator = OperatorAnd
    where.0.valueId = true
    where.length = 1
    width = 100%


