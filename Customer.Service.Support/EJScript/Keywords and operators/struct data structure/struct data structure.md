---
title: struct data structure
path: /EJScript/Other language constructs and operators/struct data structure
intellisense: 1
langref: 1
sortOrder: 9563
---

A struct defines the kinds of data and the functionality their objects will have. A struct enables you to create your own custom types by grouping together variables of other types and methods.



###A struct definition consists of the struct keyword, followed by:###


- The name of the struct
- The CRMScript statements that define the struct, enclosed in curly brackets, followed by a semi-colon, { };




###For example, the following code defines a simple struct named Hello:###


    struct Hello {
      String who;
      Void setWho(String who) {
        this.who = who;
      }
      Void print() {
        printLine("Hello " + this.who);
      }
    };
    



###Usage:###


    Hello h;
    h.setWho("World!");
    h.print();
    



###Declaration Order Matters:###



###Methods must be declared before they can be used. Building on the previous example, the following will result in an error:###


    struct Hello {
      String who;
      Date when;
      Integer age;
    
      Void setWho(String who) {
        this.who = who;
        this.age = rand(10, 90);
        this.when = getCurrentDate();
      }
      Void tryPrint() {
        this.print();
      }
      Void print() {
        printLine("Hello " + this.who);
      }
    };
    



###Error:###

Unknown function: print at line 22, char 10. Did you mean tryPrint?



###Swapping the order of methods will work as expected:###


    struct Hello {
      String who;
      Date when;
      Integer age;
    
      Void setWho(String who) {
        this.who = who;
        this.age = rand(10, 90);
        this.when = getCurrentDate();
      }
      Void print() {
        printLine("Hello " + this.who);
      }
      Void tryPrint() {
        this.print();
      }
    };




1. autolist

