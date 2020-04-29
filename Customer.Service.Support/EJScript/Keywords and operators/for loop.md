---
title: for loop
path: /EJScript/Other language constructs and operators/for loop
intellisense: 1
langref: 1
sortOrder: 9559
---

A for loop will run as long as the condition given is true (e.g. i < 10)



###Example code:###


    for(Integer i = 0; i < 10; i++) {
      if(i == 3)
      {
        printLine("Before Continue");
        continue;
        printLine("After Continue - Never gets here!");
      }
    
      if(i == 5) {
        printLine("Before Break");
        break;
        printLine("After Break - Never gets here!");
      }
      printLine("number: " + i.toString());
    }
    





###Prints:###

number: 0
number: 1
number: 2
Before Continue
number: 4
Before Break


