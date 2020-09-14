---
title: Select company
uid: blogic_select_company
sortOrder: 19
---

This element adds the **Select Company** field to your screen. This is the same feature that is available under new request.

## Configuration

| Value              | Description                    |
|:-------------------|:-------------------------------|
| notEmpty           | Will not allow an empty choice |
| controlVersion     | Which control to use (v. 8.0<br/>1 = old, 2 = new |

### Selecting company

It's possible to define the columns used to select a company in reg_id=227 (v. 4.9).

**Syntax:**
[displayField:searchField:op:label],[displayField:searchField:op:label],[displayField:searchField:op:label]

## Functions

### setValue()

Sets the selected company with the given ID.

### toInteger()

Returns the selected company ID.

### toString()

Returns the selected company iID.
