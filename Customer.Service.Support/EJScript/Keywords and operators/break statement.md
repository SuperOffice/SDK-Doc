---
title: break statement
path: /EJScript/Other language constructs and operators/break statement
intellisense: 1
langref: 1
sortOrder: 9556
---

Terminates the loop or switch statement and transfers execution to the statement immediately following the loop.



###Example code:###


    Integer i = 0;
    while(i < 10) {
      if(i == 5)
      {
        printLine("Before break");
        break;
        printLine("After break - Never gets here!");
      }
      i++;
      printLine("number: " + i.toString());
    }


