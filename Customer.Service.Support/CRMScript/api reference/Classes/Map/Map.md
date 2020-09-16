---
title: Map
path: /EJScript/Classes/Map
intellisense: 1
classref: 1
sortOrder: 522
---


The Map class represents a collection of key-value pairs. Both key and value are strings.

When using the constructor, the key-value pairs must be separated by "\n". Don't add space between \n and the 1st character of the key!

## Example code

```crmscript
Map m = Map("foo = bar\n2+2 = 4\ntestNumber = 3");

m.insert("test", "someValue");
m.remove("testNumber");
printLine(m.exists("testNumber").toString());

m.first();
while (!m.eof()){
  printLine(m.getKey() + " = " + m.getVal());
  m.next();
}
```

1. autolist
