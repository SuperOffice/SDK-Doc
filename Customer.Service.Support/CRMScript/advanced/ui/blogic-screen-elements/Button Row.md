---
title: Button row
uid: blogic_button_row
sortOrder: 2
---

This element adds a row of clickable buttons to your screen.

## Configuration

| Value             | Description                                                             |
|:------------------|:------------------------------------------------------------------------|
| buttons.i.name    | Adds a name to the ith button                                           |
| buttons.i.label   | Adds a value to the ith button                                          |
| buttons.i.warning | Adds a warning message<br/>Shown in a pop-up when the button is pressed |
| buttons.i.iconurl | Custom icon to use                                                      |
| buttons.i.style   |                                                                         |
| align             | Can be set to justify the row<br/>left, center (default), right         |

### Styles

* StyleNormal
* StyleGreen
* StyleBlue
* StyleRed
* StyleLargeBlue
* StyleLargeGreen
* StyleSmall
* StyleIconOnly

## Example

```crmscript
buttons.0.name = ok
buttons.0.label = Ok
buttons.1.warning = Are you sure?
buttons.1.name = delete
buttons.1.label = Delete
buttons.2.name = cancel
buttons.2.label = Cancel
buttons.length = 3
```

## Functions

### setFieldValue(String action, Map values)

| Action    | Map keys               | Description                                            |
|:----------|:-----------------------|:-------------------------------------------------------|
| addButton | name<br/>label<br/>warning<br/>iconUrl<br/>className | Adds a button to the row |

> [!NOTE]
> The name of the buttons must be mapped to the scripts that might be run for the current screen.
