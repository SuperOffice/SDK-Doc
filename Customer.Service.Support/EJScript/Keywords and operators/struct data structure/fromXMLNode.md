---
title: fromXMLNode
path: /EJScript/Other language constructs and operators/struct data structure/fromXMLNode
intellisense: 1
langref: 1
sortOrder: 9564
---

Populates a struct from an XMLNode.



###Only supports the following element datatypes:###

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
    
    XMLNode xml = parseXML("<root><who>World</who></root>");
    
    Hello h;
    h.fromXMLNode(xml);
    h.print();
    
    //prints Hello World
    



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


