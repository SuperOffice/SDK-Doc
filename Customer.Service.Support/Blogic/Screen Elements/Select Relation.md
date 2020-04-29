---
title: Select Relation
path: /Blogic/Screen Elements/Select Relation
sortOrder: 72
---


This element is a general element used to select a relation to a table, i.e. the primary key of a row in a table. It can be used to select e.g. a customer, a user, an entry from an extra table, a ticket, etc. Selecting the element is done by searching a column in the table with the supplied value.


The name of the columns in the query are supplied in eJournal's line based query syntax.



###The element accepts the following configuration values:###


- "idField": The column with the id (e.g. "ticket.id", "customer.id").
- <b>"displayValueColumn"</b>: Which column in the display fields that should be displayed when the search dialog box is closed, and the element is "minimalized".
- <b>"orderField"</b>: The field to use for sorting the search results.
- <b>"orderDesc"</b>: If true, then sort results descending.
- <b>"limit"</b>: the limit of returned hits, as of version 3.1.8
- <b>"searchEmpty"</b>
- <b>"displayField"</b>: the control may contain one or more displayFields (columns displayed from the search result).
    - "displayField.length" and "displayField.n.field": use for more than one diplay field.


Finally, the search may be restricted by "where" clauses. They are specified like this:


- "criteria.length": The number of where lines.
- "criteria.n.field": The database field for criteria n.
- "criteria.n.operator": The operator
- "criteria.n.value": The value


Through ejScript using `setFieldValue()`, you can specify the following values:


- "addCriteria": Adds a criteria. Populate map:
    - <b>"field"</b>
    - <b>"operator"</b>
    - <b>"values"</b>
- <b>"addDisplayField"</b>: Adds a new display field. Populate map:
    - <b>"field"</b>
- <b>"limit"</b>: Set time limit of the returned hits (from version 3.1.8)
- <b>"setId"</b>: Set the id of the entry you want to be loaded as default (from version 3.1.8.8).Populate map:
    - <b>"id"</b>
- <b>"clear"</b>: Clears the selected value of the element. Available from 4.2.21.


