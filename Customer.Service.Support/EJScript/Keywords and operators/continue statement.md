---
title: continue statement
path: /EJScript/Other language constructs and operators/continue statement
intellisense: 1
langref: 1
sortOrder: 9558
---

Causes the loop to skip the remainder of its body and immediately retest its condition prior to reiterating.



###Example code:###


    for(Integer i = 0; i < 10; i++) {
      if(i == 3)
      {
        printLine("Before Continue");
        continue;
        printLine("After Continue - Never gets here!");
      }
      printLine("number: " + i.toString());
    }


