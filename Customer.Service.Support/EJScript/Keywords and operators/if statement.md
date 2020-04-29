---
title: if statement
path: /EJScript/Other language constructs and operators/if statement
intellisense: 1
langref: 1
sortOrder: 9560
---



###Example code:###


    Integer i = 3;
    
    if (i <= 3)
      print("i is tiny, just: " + i.toString());
    else if (i <= 10)
      print("i is not so small: " + i.toString());
    else
      print("i is huge: " + i.toString());
    
    
    Bool value = false;
    
    if (value == true)
     print("value is true\n");
    else
     print("value is false\n");
    



The expression in the parenthesis must be a boolean expression. Comparison with the special values "true" and "false" is allowed, as indicated in the script above.



###Operators:###


- Or: ||
- And: &&
- Equal: ==
- Less than: <
- Greater than: >
- Less than or equal: <=
- Greater than or equal: >=


Parenthesis can be used to specify resolution.


