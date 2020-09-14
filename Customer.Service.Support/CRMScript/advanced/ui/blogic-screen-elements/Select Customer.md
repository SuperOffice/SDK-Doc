---
title: Select Customer
uid: blogic_select_customer
sortOrder: 19
---

This element adds the **Select Customer** field to your screen, the same feature that is available under new request.

## Configuration

| Value              | Description                    |
|:-------------------|:-------------------------------|
| notEmpty           | Will not allow an empty choice |

### Selecting customers

It's possible to define the columns used to select a customer in reg_id=226 (v. 4.9).

**Syntax:**
[displayField:searchField:op:label],[displayField:searchField:op:label],[displayField:searchField:op:label]

## Functions

### setValue()

Sets the selected customer with the given ID.

### toInteger()

Returns the selected customer ID.

### toString()

Returns the selected customer ID.
