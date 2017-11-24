---
uid: guideCurrent
title: Using current
---

Using the applications current system
=====================================

Setting the current sale, appointment, document may change the current contact, person and/or project since the current objects are interlinked. This means that when you sett the current sale, this will cause the current contact to be changed to the sale's contact, the current person to the sale's person and the project to the sale's project.

```vb
Set app = CreateObject("SuperOffice.Application")
MsgBox App.CurrentContact.Name, 0, "Current Contact"
App.CurrentContact.ChangeIdentity 5
App.CurrentContact.ChangeIdentity 4
App.CurrentContact.ChangeIdentity 3
App.CurrentContact.ChangeIdentity 2
App.CurrentContact.ChangeIdentity 1
App.CurrentContact.Department = "Change the value"
```

Changing the current contact's identity will cause the display to update if the contact panel is visible.

If you're looking at the diary, then you won't see any change in the user interface until you switch to the contact panel.

 Tell me each person in the person-list:

```vb
 Set SoPersons = SoApp.Currentcontact.GetPersons
 For each SoPers in SoPersons
 msgbox SoPers.firstname & " " & SoPers.Lastname
 Next
```


The Current Person:

```vb
 set pers = soApp.CurrentPerson
 Msgbox pers.firstname & " " & pers.lastname
```

The current person can blank if the user has not selected a person

```vb
Set app = CreateObject("SuperOffice.Application")
 MsgBox app.CurrentContact.Name, 0, "Current Contact"
 Set SoPersons = app.Currentcontact.GetPersons
 msg = ""
 For each SoPers in SoPersons
 msg = msg & SoPers.firstname & " " & SoPers.Lastname
  If not SoPers.Phones.Empty Then
  msg = msg & SoPers.Phones(1).Number
 End If
 msg = msg & vbCrLf
 Next
 MsgBox msg,,"People and phone numbers"
```

Each person is loaded separately – just the ids are retrieved by the GetPersons call, so performance can be slow on this type of code.