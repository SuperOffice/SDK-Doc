---
title: Show recipients
path: /Blogic/Screen Elements/Show recipients
sortOrder: 83
---

Show recipients is a control that lists all recipients.



###Function:###


- setFieldValue(String field, Map \<String, String> values)
  - Fields: "set", "add"
  - Values: "to", "cc", "bcc", "sms"





###Example code:###

    Map m;
    m.insert("to", "Tor");
    m.insert("sms", "Tove");
    m.insert("cc", "Trond");
    
    e.setFieldValue("add", m);


