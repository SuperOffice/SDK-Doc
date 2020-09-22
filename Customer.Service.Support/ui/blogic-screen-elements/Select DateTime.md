---
title: Select DateTime
uid: blogic_select_datetime
sortOrder: 19
---

This element is used to input a DateTime.

## Configuration

| Value              | Description                  |
|:-------------------|:-----------------------------|
| mayBeNull          | If true, then the element accepts an empty date. Otherwise, a valid date must be supplied |
| empty              | Same as mayBeNull |

## Functions

### setValue()

Sets the selected DateTime. The date must be on a standard format, such as YYYY-MM-DD HH:MI:SS. Other formats are also recognized.

### toString()

Returns the selected date as a YYYY-MM-DD HH:MI:SS string.
