---
uid: guideForeignKeys
title: Foreign Keys
---

This is a system designed to make it easy for 3rd parties to store keys in external systems.

The values are stored in the ForeignKey table.

The ForeignKey property exists on Contact, Person, Associate, Project, Document, Appointment, and Sale objects.

### Example

Set db = CreateObject("SuperOfficeDB.Database")
loginOk = db.Login("name","pass")
If not loginOk Then
   msgbox "Unable to log in"
   WScript.Quit
End if
Set contact = db.GetContact(2)
contact.ForeignKey.Set "ERP","ERP","ERP-id", 1234
contact.Save

then later on you can say

Set contact = db.GetContact(2)
id = contact.ForeignKey.Get("ERP","ERP","ERP-id")

and you’ll get back 1234.

You can search foreign keys using the [Database.Find.IdFromForeignKey()](SUPEROFFICEDBLib~SOFind~IdFromForeignKey.md) function.

i.e. Given ERP-id “1234”, what is the contact id in the SuperOffice database?

contactId = Database.Find.IdFromForeignKey("ERP", "ERP", "ERP-id", "1234", enTableContact)

 

In SuperOffice CRM 5 you will need to use the [Database.Find.FirstMatch( )](SUPEROFFICEDBLib~SOFind~FirstMatch.md) function since CRM 5 does not have the IdFromForeignKey function.

contactId = Database.Find.FirstMatch("foreignkey", "recordid", "subvalue", "1234")

The downside is that you can’t specify the application-id, device-id and the key name using this type of search. If your ids are not just numbers (i.e. “ERP-1234” instead of just “1234”) then this is not a huge problem. Otherwise you might match someone else’s foreign key and get the wrong record id back. The solution to this problem is to use an ADO query instead of the simple Find searches.

### 
The Tables

The foreign key table can point to any record. A user can have several different foreign keys registered on the same record, with different keys on different applications and devices.

 ![](../images/foreignkeys-db.gif)

 

ForeignApp defines an application. An application is present on one or more devices.

If you’re not dealing with devices, then just repeat the application name, or use a blank string.

A ForeignDevice consists of one or more keys. Each key for a given device has its own name.

Each ForeignKey can consist of several different record pointers. In the example above we named the sub-key “ERP-id” but we could have added a second key called “ERP-name” without affecting the first key.