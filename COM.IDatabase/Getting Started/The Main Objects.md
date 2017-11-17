---
uid: startMainObjects
title: The Main Objects
---

The database object gives you the major objects directly: Contact, Person, Project, Sale, Document, Appointment, Selection, Relation

Starting from there, you can follow properties to sub-objects and list items, like the address or a list of phone numbers and e-mail addresses.

![](../images/models-diagram.gif)

**Examples**

```
db.GetContact(123).PostalAddress.City
db.GetContact(123).Phones(2).Description

db.GetPerson(123).Emails(1).Address
db.GetPerson(123).Position.Text
```
