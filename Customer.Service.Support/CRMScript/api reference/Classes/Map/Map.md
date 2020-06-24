---
title: Map
path: /EJScript/Classes/Map
intellisense: 1
classref: 1
sortOrder: 522
---


Class for representing a key->value map. Both key and value are strings.




###Example code:###


    Map m = Map("foo = bar, 2+2 = 4, testNumber = 3");
    
    m.insert("test", "someValue");
    m.remove("testNumber");
    printLine(m.exists("testNumber").toString());
    
    m.first();
    while (!m.eof()){
      printLine(m.getKey() + " = " + m.getVal());
      m.next();
    }




1. autolist

