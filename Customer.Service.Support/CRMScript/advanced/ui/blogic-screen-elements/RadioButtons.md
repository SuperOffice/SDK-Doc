---
title: RadioButtons
uid: blogic_radiobuttons
sortOrder: 18
---

Adds radio-buttons to your screen.

## Configuration

* buttons.value
* buttons.label
* buttons.checked

## Example

```crmscript
buttons.0.value = lunch
buttons.0.label = Lunch
buttons.0.checked = true
buttons.1.value = dinner
buttons.1.label = Dinner
buttons.length = 2
```

## Functions

### getValue()

Returns the value of the checked button.

### toString()

Converts the value of the checked button to a string.

### setFieldValue("addButton", Map)

For adding buttons.

```crmscript
values.insert("value", <buttonValue>);
values.insert("label",< buttonLabel>);
values.insert("checked", <buttonChecked> (0 or 1) );
```

### setFieldValue("setChecked", Map)

For setting the checked button.

```crmscript
values.insert("buttonValue", value of button to be checked);
```
