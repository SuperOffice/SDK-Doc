---
title: Form Page
uid: blogic_form_page
sortOrder: 6
---

This element is a standard root frame used in a lot of screens.

## Configuration

| Value             | Description                             |
|:------------------|:----------------------------------------|
| label             | |
| iconUrl           | |

## Functions

### setFieldValue(String action, Map values)

| Action   | Map keys               | Description   |
|:---------|:-----------------------|:--------------|
| addButton| name<br/>label<br/>style<br/>warning | |

#### Styles

* StyleNormal
* StyleGreen
* StyleBlue
* StyleRed
* StyleLargeBlue
* StyleLargeGreen
* StyleSmall
* StyleIconOnly

#### Example

```crmscript
Map m;
m.insert("name", "testButton");
m.insert("label", "Button");
m.insert("style", "StyleGreen");
m.insert("warning", "Are you sure?");

fp.setFieldValue("addButton", m);
```
