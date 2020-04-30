---
title: call chaining
path: /EJScript/Other language constructs and operators/call chaining
intellisense: 1
langref: 1
sortOrder: 9557
---

Call chaining makes it possible to call functions inside other functions



###Example code:###

```crmscript!
    Integer printNum(Integer a){
      print(a.toString());
      return a;
    }
    
    Bool addNumbers(){
      Integer b;
      for (Integer i = 0; i < 10; i++){
        b += printNum(i);
      }
      print(" The sum is: " + b.toString());
      return true;
    }
    
    addNumbers(); // Prints "0123456789 The sum is: 45"

```
