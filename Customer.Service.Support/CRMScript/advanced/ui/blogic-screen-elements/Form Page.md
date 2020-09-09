---
title: Form Page
path: /Blogic/Screen Elements/Form Page
sortOrder: 32
---


This element is a standard root frame used in a lot of screens.




###This element has the following configuration values:###


- "label"
- <b>"iconUrl"</b>




###Functions:###


- setFieldValue(String field, Map \<String, String>)
  - <b>"addButton"</b>
    - <b>"name"</b>
    - <b>"label"</b>
    - <b>"style"</b>
    - <b>"warning"</b>
  - <b>"label"</b>




###Styles available:###


- StyleNormal
- StyleGreen
- StyleBlue
- StyleRed
- StyleLargeBlue
- StyleLargeGreen
- StyleSmall
- StyleIconOnly





###Example code:###

    Map m;
    m.insert("name", "testButton");
    m.insert("label", "Button");
    m.insert("style", "StyleGreen");
    m.insert("warning", "Are you sure?");
    
    fp.setFieldValue("addButton", m);


