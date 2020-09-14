---
title: Select Extra Field
uid: blogic_select_extra_field
sortOrder: 19
---

This elements is used to input the contents of an extra field. The input element depends on the field's type.

## Configuration

| Value    | Description                  |
|:---------|:-----------------------------|
| id       | The ID of the extra field    |
| field    | The name of the extra field, incl. table name.<br/>For example, ticket.x_myfield |
| notEmpty | If true, the field will not allow empty values

### Ticket relations

For ticket relations, it is possible to define the columns used to select a ticket in reg_id=228 (v. 4.9).

**Syntax:**
[displayField:searchField:op:label],[displayField:searchField:op:label],[displayField:searchField:op:label]

## Functions

Depending ofn the type of the field, the `setValue()` and `getValue()` methods will return the selected value (a date, the ID in a dropdown, a text value, and so on).

### getValue()

### setValue()

The flags of the extra field (such as **cannot be empty**) are used to specify the behavior of the field.
