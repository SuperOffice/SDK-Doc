---
title: Select Faq
uid: blogic_select_faq
sortOrder: 19
---

This element is used to select an entry from the FAQ database.

## Configuration

| Value              | Description                  |
|:-------------------|:-----------------------------|
| accessLevel        | The minimum access level     |

### Access levels

* 1: private entries
* 2: internal entries
* 3: public authenticated entries (default)
* 4: public not authenticated entries

When you set a specific access level, all FAQ entries with that and higher level will be returned.

## Functions

### getValue()

Returns the ID of the FAQ entry.
