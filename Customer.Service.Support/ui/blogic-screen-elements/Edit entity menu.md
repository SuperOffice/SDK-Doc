---
title: Edit entity menu
uid: blogic_edit_entity_menu
sortOrder: 5
---

This element allows you to add an entity menu to a screen.

A default configured menu is available for customers and companies. These menus contain items that allow you to edit the entity, create new ones, merge the entity with others and send password.

## Configuration

| Setting    | Description       |
|:-----------|:------------------|
| entity     | customer, company |
| entityMenu | customer, company |

These must contain corresponding values for the default configuration of the menu to be added to a screen.

### Example

```crmscript
entity = customer
entityMenu = customer
```

## Functions

### setFieldValue(String action, Map values)

You can add to the default configuration or create an entire new menu by setting field values.

To create a new menu, exclude the simple values from the configuration.

| Action         | Map keys               | Description                           | |
|:---------------|:-----------------------|:--------------------------------------|-|
| addMenu        | label<br/>iconUrl<br/>url<br/>target<be/>appendId (true/false) | |
| addAnchor      | label<br/>iconUrl<br/>url<br/>target<br/>appendId (true/false) | |
| addModificator | label<br/>options.length<br/>field<br/>options.x.name<br/>options.x.value |

> [!NOTE]
> `appendId` (v.8.4R07) will append the ID of the current entity to the URL for the anchor or menu.

## Example maps

```crmscript
Map m;
m.insert("label", "VG");
m.insert("iconUrl", "");
m.insert("url", "http://www.vg.no");
m.insert("target", "");

Map m2;
m2.insert("label", "DN");
m2.insert("iconUrl", "");
m2.insert("url", "http://www.dn.no");
m2.insert("target", "");

Map m3;
m3.insert("options.length", "2");
m3.insert("label", "Modificator");
m3.insert("field", "2");
m3.insert("options.0.name", "Option1");
m3.insert("options.0.value", "");
m3.insert("options.1.name", "Option2");
m3.insert("options.1.value", "");

em.setFieldValue("addMenu", m);
em.setFieldValue("addAnchor", m2);
em.setFieldValue("addModificator", m3);
```
