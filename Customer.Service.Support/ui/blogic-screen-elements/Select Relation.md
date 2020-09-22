---
title: Select Relation
uid: blogic_select_relation
sortOrder: 19
---

This element is a general element used to select a relation to a table. That is, **the primary key of a row in a table**.

It can be used to select, for example, a customer, a user, an entry from an extra table, or a ticket. Selecting the element is done by searching a column in the table with the supplied value. The name of the columns in the query are given with the [line-based query syntax](@crmscript_blogic_query_syntax).

## Configuration

| Value              | Description                  |
|:-------------------|:-----------------------------|
| idField            | The column with the ID<br/>For example, ticket.id, customer.id) |
| displayValueColumn | Which column in the display fields that should be displayed when the search dialog box is closed, and the element is "minimalized" |
| orderField         | The field to use for sorting the search results |
| orderDesc          | If true, then sort results descending |
| limit              | The limit of returned hits (v.3.1.8) |
| searchEmpty        | |
| displayField       | The control may contain 1 or more displayFields (columns displayed from the search result) |
| displayField.length| Used for more than 1 display field. |
| displayField.n.field | Used for more than 1 display field. |

Finally, the search may be restricted by "where" clauses:

* criteria.length": The number of where lines
* criteria.n.field": The database field for criteria n
* criteria.n.operator": The operator
* criteria.n.value": The value

## Functions

### setFieldValue()

| Action          | Map keys | Description                          |
|:----------------|:---------|:-------------------------------------|
| addCriteria     | field<br/>operator<br/>values | Adds a criteria |
| addDisplayField | field    | Adds a new display field             |
| limit           |          | Set time limit of the returned hits (v. 3.1.8) |
| setId           | id       | Set the id of the entry you want to be loaded as default (v. 3.1.8.8) |
| clear           |          | Clears the selected value of the element (v. 4.2.21) |
