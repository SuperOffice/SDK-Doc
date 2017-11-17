---
uid: startFreshObjects
title: Fresh Objects
---

Sometimes we want to add new companies or new appointments to the database. Instead of calling db.GetThingy we then use db.CreateThingy.

The objects we get back from CreateThingy are very blank. Everything is 0 or "".

Set db = createObject("SuperOfficeDB.Database")
db.Login "name", "pass"
Set newContact = db.CreateContact

At this point, the newContact has no name, no our-contact associate, no category id, no number assigned (this may be required).

It is possible to manually get the list items and type fields all set properly – but it requires careful study of the SDK to figure out what the correct values are.

When creating a new document (for example), the appointment record must have a type field = 4.

The CRM client will not display appointments/documents/sales with bad status and type flags.

 

There is an easy way to set all the values to something sensible:

Use the [SetDefaults](SUPEROFFICEDBLib~SOContact~SetDefaults.md) method. This will save you wondering why the object won't display.  It is usually because you forgot to fill in a status or type field.

```
Set db = createObject("SuperOfficeDB.Database")
db.Login "name", "pass"
Set newContact = db.CreateContact
newContact.SetDefaults
newContact.name = "New Contact Name"
newContact.Save
MsgBox "Contact created"
```

So just remember to call SetDefaults after you’ve used CreateContact.

 

### Appointments have three defaults

Note that appointment objects have three set default methods – one for each set of defaults.

There is one set of defaults for each appointment button at the bottom of the CRM 5 window.
 
![](../images/toolbar-appointment.gif)

```
Set db = CreateObject("SuperOfficeDB.Database")
db.Login "name", "pass"
Set newAppoint = db.CreateAppointment
newAppoint.SetDefaults      ‘ Appointment
newAppoint.SetDefaultsToDo  ‘ Task
newAppoint.SetDefaultsCall  ‘ Phone call
```