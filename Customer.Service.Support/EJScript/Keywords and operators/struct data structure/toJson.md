---
title: toJson
path: /EJScript/Other language constructs and operators/struct data structure/toJson
intellisense: 1
langref: 1
sortOrder: 9565
---

Populates a struct from a JSON string.



###Only supports the following item datatypes:###

Bool
Float
Integer
String
struct

Date and DateTime is not supported.




###Example:###
    
    struct Hello {
      String who;
      Void setWho(String who) {
        this.who = who;
      }
      Void print() {
        printLine("Hello " + this.who);
      }
    };
    
    JSONBuilder jsBuilder;
    Hello h;
    
    h.setWho("World");
    h.toJson(jsBuilder);
    
    print(jsBuilder.getString());
    
    //prints {"who": "World"}
    



###Common Patterns:###

As JSON has become the preferred transfer representation, it's common for structs to implement ways to be populated by a JSON string, and to write itself out as a JSON string.

Below are a couple common methods structs implement to facilitate reading and writing a struct using JSON.


    struct Hello {
      String who;
      Void setWho(String who) {
        this.who = who;
      }
      Void print() {
        printLine("Hello " + this.who);
      }
      Void fromJson(String json) {
        this.fromXMLNode(parseJSON(json));
      }
      String toJson() {
        JSONBuilder jb;
    		this.toJson(jb);
    		return jb.getString();
      }
    };


