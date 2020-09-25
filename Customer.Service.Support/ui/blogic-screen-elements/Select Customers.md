---
title: Select contacts
uid: blogic_select_contacts
sortOrder: 19
---

A variant of @blogic_select_contact that lets you select more than 1 contact person.

Previously called *Select customer*.

## Functions

### getFieldValue(String field)

| Field | Description                      |
|:------|:---------------------------------|
| all   | Returns a list of all recipients |

### setFieldValue(String, Map)

| Action      | Map keys | Description                          |
|:----------- |:---------|:-------------------------------------|
| addCustomer | id       | Adds 1 contact with the specified ID |

### toString()

Returns a comma-separated list of the IDs of the customers.
