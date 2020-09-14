---
title: Text
uid: blogiv_text
sortOrder: 20
---

This element is a single-line text input field.

## Configuration

| Value               | Description                                          |
|:--------------------|:-----------------------------------------------------|
| isPassword          | If true, then this field expects a password input |
| isSingleEmail       | If true, then this field expects a single email address |
| isMultipleEmail     | If true, then this field expects one or more email addresses |
| notEmpty            | If true, then the field cannot be empty |
| notEditable         | If true, then the field cannot be changed |
| isSingleSms         | If true, then the field expects a valid SMS message |
| maxLength           | The maximum length of the field (defaults to 255) |
| size                | The size (in characters) of the field (displayable) |
| placeholder         | A placeholder string (from 8.4R08) |
| isNumber            | From version 7.1, the field supports "isNumber ", which will make the control a number-only |accepting control.

### isNumber mode

* notEmpty: If true, then the field cannot be empty
* precision: The number of digits after a comma for floating point values
* minValue: The minimum value of the control
* maxValue: The maximum value of the control
* noRangeCheck: If true, then range is not checked.

## Functions

### setValue()

Sets the contents of the field.

### toString()

Converts the contents to a field to a string.
