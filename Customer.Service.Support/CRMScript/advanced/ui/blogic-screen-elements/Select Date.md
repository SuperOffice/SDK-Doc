---
title: Select Date
uid: blogic_select_Date
sortOrder: 63
---

This element is used to input a date.

## Configuration

| Value              | Description                  |
|:-------------------|:-----------------------------|
| mayBeNull          | If true, the element accepts an empty date. Otherwise, a valid date must be supplied |
| empty              |The same as mayBeNull |

## Functions

### setValue()

Sets the selected date. The date must be on a standard format, such as YYYY-MM-DD. Other formats are also recognized.

### toString()

Returns the selected date as a YYYY-MM-DD string.
