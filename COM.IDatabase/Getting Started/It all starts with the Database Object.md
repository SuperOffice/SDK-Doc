---
uid: startDatabaseObject
title: It all starts with the Database Object
---

We use the database object when we want more SuperOffice objects.

It is a factory object. The reason for doing this is that we are always going to need a database for storing the companies, appointments and sales we create, so it is easier to ensure that we are successfully connected to a database first.

We do not create new objects ourselves, but we ask the Database to create them for us.

 

The sequence is always:

1. Create the SuperOfficeDB.Database object.

2. Log in with a username and password.

3. Use the database object to get more objects.

 
```
Set db = createObject("SuperOfficeDB.Database")
db.Login "name", "pass"
Set newContact = db.CreateContact
newContact.Name = "New Name"
newContact.Save
Set oldContact = db.GetContact(1234)
oldContact.Department = "another department"
oldContact.Save
```

This is a little different from the ADO system, where you can create a recordset out of thin air, and then attach a connection to it in order to have it do the updates.

Note we say  set newContact = db.CreateContact rather than set newContact = CreateObject("SuperOfficeDB.SOContact")

 

Our components contain lots of business logic, and so they are much easier to deal with if we use a database connection as the starting point. We can look things up as we go – we don’t have to wait until the connection shows up.