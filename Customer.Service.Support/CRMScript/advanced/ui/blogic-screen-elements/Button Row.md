---
title: Button row
uid: blogic_button_row
sortOrder: 2
---

This element adds a row of clickable buttons to your screen.

## Configuration values

| Value             | Description                    |
|:------------------|:-------------------------------|
| buttons.i.name    | adds a name to the ith button  |
| buttons.i.label   | adds a value to the ith button |
| buttons.i.warning | adds a warning message<br/>shown in a pop-up when the button is pressed |
| buttons.i.iconurl | |
| buttons.i.style   | |
| align             | can be set to justify the button row <br/> left, center (default), right |

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

### setFieldValue(String, Map)

**addButton:**

name
label
warning
iconUrl
className

> [!NOTE]
> The name of the buttons must be mapped to the scripts that might be run for the current screen.
