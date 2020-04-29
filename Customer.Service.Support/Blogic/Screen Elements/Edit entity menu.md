---
title: Edit entity menu
path: /Blogic/Screen Elements/Edit entity menu
sortOrder: 24
---

This element allows you to add an entity menu to a screen. A default configurated menu is available
for customers and companies. These menues contain items that allow you to edit the entity, create new ones,
merge the entity with others and send password.



###The element has the following configuration simple values:###


- "entity" - customer, company
- <b>"entityMenu"</b> - customer, company




###Example simple values:###
entity = customer
entityMenu = customer

The simple values must contain corresponding values for the default configuration of the menu to be added to a screen.



###Functions:###


- setFieldValue(String field, Map \<String, String> values)
  - fields:
    - <b>"addMenu"</b> - "label", "iconUrl", "url", "target", "appendId" (true/false)
    - <b>"addAnchor"</b> - "label", "iconUrl", "url", "target", "appendId" (true/false)
    - <b>"addModificator"</b> - "options.length", "label", "field", "options.x.name", "options.x.value"


You can add to the default configuration or create an entire new menu by setting field values.
To create a new menu exclude the simple values from the configuration.

NOTE: appendId for anchors/menus was added in 8.4R07. It will append the ID of the current entity to the URL for the anchor/menu.



###Example code:###

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


