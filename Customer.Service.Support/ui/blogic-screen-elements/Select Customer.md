---
title: Select contact
uid: blogic_select_contact
sortOrder: 19
---

This element adds the **Select contact** field to your screen.

Previously called *Select customer*.

## Configuration

| Setting  | Description                   |
|:---------|:------------------------------|
| notEmpty | Whether an empty choice is OK |

### Selecting a contact

It's possible to define the columns used to select a contact in reg_id=226 (v. 4.9).

**Syntax:**
[displayField:searchField:op:label],[displayField:searchField:op:label],[displayField:searchField:op:label]

## Functions

### setValue(String id)

Sets the selected contact with the given ID.

### toInteger()

Returns the selected contact ID as a number.

### toString()

Returns the selected contact ID as a string.
