---
uid: startCreateAContact
title: Create A Contact
---

```
Set db = CreateObject("SuperOfficeDB.Database")
db.Login "name", "pass"
Set newContact = db.CreateContact
newContact.name = "New Contact Blank"
newContact.Save
Set newContact = db.CreateContact
newContact.SetDefaults
newContact.name = "New Contact With Default"
newContact.Save
MsgBox "Contacts created"
```
 

### Check Using the CRM Client

Go to the SuperOffice CRM client

Search for the "New Contact Blank" company using the navigator.

(Click on the company button in the navigator and type “New con” into the search field.)

Compare the two companies.

You should see that one has the following fields set, while the other does not: our contact, country, category, code,  number (maybe), and business.

![](../../images/new-contact-blank.gif)

 

![](../../images/new-contact-default.gif)
