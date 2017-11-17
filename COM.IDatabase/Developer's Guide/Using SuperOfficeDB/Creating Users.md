---
uid: guideCreatingUsers
title: Creating Users
---

Users can be created, retired or deleted using the Admin object on the database object.

If you want to add users from scratch, then remember that users (associates) are based on Persons, so first you need to create a new Person object for the associate.

You can only have one Associate per Person.

 

You must be logged in with UserLevel 0 (admin) to access this object. If you attempt to access the object when logged in at a lower userlevel, then an error will be raised.

You can only add persons on the central database. Adding users on a satellite is not a good idea. Their user ids will be out of sync with the rest of the system.

The admin interface counts the number of licenses you have left. You can’t exceed the number of users allowed by your license. Attempts to exceed the allowed number of licenses will raise an error.

So typically you would do something like this when creating a new user:

Set pers = db.CreatePerson
pers.SetDefaults
pers.Firstname = "foo"
pers.Lastname = "bar"
pers.contact = db.GetContact( db.OwnerContactId )
pers.Save
set user = db.Admin.AddUser( pers )
user.IsLoginEnabled = true
user.IsWinLoginEnabled = true
user.Save