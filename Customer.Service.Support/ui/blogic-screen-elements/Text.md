---
title: Text
uid: blogic_text
sortOrder: 20
---

This element is a single-line text input field.

## Configuration

| Setting         | Description                                           |
|:----------------|:------------------------------------------------------|
| label           | UI label                                              |
| maxLength       | The maximum length of the field<br/>Default is 255    |
| size            | The number of displayable characters                  |
| placeholder     | A temporary string (v. 8.4R08)                        |
| isPassword      | Whether the input should be a valid password          |
| isSingleEmail   | Whether the input should be a single email address    |
| isMultipleEmail | Whether the input should be 1 or more email addresses |
| notEmpty        | Whether the field can be empty                        |
| notEditable     | Whether the field can be changed                      |
| isSingleSms     | Whether the input should be a valid SMS message       |
| isNumber        | Whether to restrict input to numbers only (v. 7.1)    |

All settings starting with *is* or *not* are Bool.

### isNumber mode

| Setting      | Description                                   |
|:-------------|:----------------------------------------------|
| precision    | The number of digits after a comma for floats |
| minValue     | The lowest acceptable number                  |
| maxValue     | The highest acceptable number                 |
| notEmpty     | Whether the field may be empty (Bool)         |
| noRangeCheck | Whether to skip checking range (Bool)         |

## Example

```crmscript
label = title
notEmpty = true
```

## Functions

### setValue(String value)

Sets the contents of the field.

### toString()

Converts the contents to a field to a string.
