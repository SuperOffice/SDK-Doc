---
uid: UseForeignKeys
title: Use Foreign Keys
---


Set db = CreateObject("SuperOfficeDB.Database")
loginOk = db.Login("name","pass")
If not loginOk Then
   msgbox "Unable to log in"
   WScript.Quit
End if
Set contact = db.GetContact(2)
contact.ForeignKey.Set "ERP","ERP","ERP-id", 1234
contact.Save
Set contact = db.GetContact(2)
id = contact.ForeignKey.Get("ERP","ERP","ERP-id")
MsgBox "Contact 2 has foreign key " & id
contactid = db.Find.FirstMatch(
   "foreignkey", "record\_id", "subvalue", "1234")
MsgBox "Foreign key 1234 is contact " & contactid
tabno = 5   ' enTableContact = 5
contactid = db.Find.IdFromForeignKey(
   "ERP", "ERP", "ERP-id", 1234, tabno)
MsgBox "Foreign key 1234 is contact " & contactid

The script first sets an id on a contact object.

Then it retrieves the id from the contact object – not terribly complicated.

Then we do two searches of the foreign key tables.

The first search will work on all CRM 5 version 5.5 releases.

The second search will only work on the CRM 5 version 5.6.10 releases and above.