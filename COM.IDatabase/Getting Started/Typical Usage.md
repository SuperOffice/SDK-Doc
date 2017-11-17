---
uid: startTypicalUsage
title: Typical Usage
---

A model object will read and write the database as needed.

Typical read sequence runs like this:

1.  A model is created using db.GetXxx(123) method. The model object just contains the id (123) at this point. It has not read anything from the database yet.
2.  A model property is accessed (e.g.: contact.name or project.type). The model notices that it hasn’t read from the database yet, so it loads the record it needs to fulfil the property call. It uses the id we got in step one as the primary key.
3.  A security check verifies that the user has permission to read the object in question. If the user does not, then an error has occurred.
4.  A model’s sub-object is accessed (e.g.: contact.PostalAddress or Project.Urls) – the sub object is created, the corresponding record is loaded from the database. In the case of the Urls, Phones and similar collections, the object loads all the elements in the collection at once.

 
```
Set db = CreateObject("SuperOfficeDB.Database")
isOK = db.Login( "name", "pass" )
Set theContact = db.GetContact( 123 )
MsgBox theContact.name & vbCrLf & theContact.PostalAddress.City
```

 

 

When it is time to update something on a model object, a similar thing happens – nothing is written to the database until necessary.

1.  A model is created using db.GetXxx(123).
2.  A model property is accessed in order to set it to a specific value. The model notes that the value being modified hasn’t been read from the database yet, and loads the record.
3.  The new value is stored, and the record is marked as modified, so that the model knows that it has to save it later on.
4.  The Save method is called. All parts of the object that have been marked as modified are saved back to the database.

```
Set db = CreateObject("SuperOfficeDB.Database")
isOK = db.Login( "name", "pass" )
Set theContact = db.GetContact( 123 )
theContact.Department = "Some other dept."
theContact.PostalAddress.City = "Newport"
theContact.Save
set theContact = Nothing
```

 The call to Save will save both the Address and the main Contact record that contains the Department field.