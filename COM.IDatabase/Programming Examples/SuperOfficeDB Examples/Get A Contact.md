---
uid: GetAContact
title: Get A Contact
---


### Getting the name of a specific company from the SuperOffice database

Here we log in to the database directly, so the SOCRM application does not need to be running for this to work.

If the login fails, then isOk will be false and an error message is displayed.

We get the record by using the record id.

```
set soDb = CreateObject("SuperOfficeDB.Database")
isOk = soDb.Login("user", "pass")
if isOk Then
   set theContact = soDb.GetContact( 123 )
   id = theContact.Identity
   name = theContact.Name
   MsgBox id & " = " & name
else
   MsgBox "Login failed"
end if
```

 

If we don't know the id, but know the name, then we can use the <see cref="SuperOffice.COM.SuperOfficeDB.SOFind">Find</see> object to find the id for a given name using <see cref="IFind.FirstMatch">Find.FirstMatch</see> or <see cref="IFind.ContactsByName">Find.ContactsByName</see> for example.

 

```
set soDb = CreateObject("SuperOfficeDB.Database")
isOk = soDb.Login("user", "pass")
if isOk Then
   theName = "Bob's Hardware"
   theContacts = db.Find.ContactByName( theName )
   set theContact = theContacts.GetFirst()
   id = theContact.Identity
   name = theContact.Name
   MsgBox currentId & "=" & currentName
else
   MsgBox "Login failed"
end if
```
