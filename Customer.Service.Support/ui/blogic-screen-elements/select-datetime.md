---
title: Select DateTime
uid: blogic_select_datetime
sortOrder: 19
---

This element is used to input a [DateTime](../../crmscript/datatypes/datetime-type.md).

## Configuration

| Setting   | Description                          |
|:----------|:-------------------------------------|
| mayBeNull | Whether the field is required (Bool) |
| empty     | Whether the field is required (Bool) |

## Functions

### setValue(String dateTime)

Sets the selected `DateTime`. The value must be formatted in a standard way, for example, YYYY-MM-DD HH:MI:SS.

### toString()

Returns the date as a string formatted as **YYYY-MM-DD HH:MI:SS**.
