---
uid: startRemembertoSaveChanges
title: Remember to Save Changes
---

The contact, person, project, sale, document, appointment objects all share several characteristics. They have a similar way of working. They are all what we call “model” objects.

A model is a record buffer that fetches sub-records on demand. It hides the SQL from you - giving you a much simpler programming interface.

 

A model contains one record at a time. You can load a different record into the model by using the [ChangeIdentity](SUPEROFFICEDBLib~SOContact~ChangeIdentity.md) method.

```
SOContact.ChangeIdentity( 3 )
```

This call clears out old data and prepares the model to load record \#3. Note that the record is not read from the database until you access a field.

```
set buf = DB.GetContact( 4 )      ’ set id=4
print buf.Name                    ’ load record
```

 

We can explicitly save our changes to the model.

```
set buf = DB.GetContact( 4 )  *' set id=4*
buf.Name = "New name"  *' load+modify 4*
buf.Save *' save \#4*
```

 

Changing a model’s identity will automatically save any modified data held in the buffer to the database.

set buf = DB.GetContact( 4 )      *’ set id=4*
buf.Name = "New name"             *’ load+modify 4*
buf.ChangeIdentity( 5 )           *’ imply save \#4*

 

The theory behind the automatic save is that it is better to save changes than to lose them.  The user is less likely to be angry because we saved something than if we lost a change he had made.

Note that a model will save automatically when you change identity or call the Save method.  If you want to forget the changes you’ve made to a model, use the [CancelChanges](SUPEROFFICEDBLib~SOContact~CancelChanges.md) method:

```
set buf = DB.GetContact( 4 )      *’ set id=4*
buf.Name = "New name"             *’ load+modify 4
*buf.CancelChanges                 *’ lose change*
*’ buf.Name is back to what is originally was*
```

 

When a  model goes out of scope – i.e. when the object is no longer in use, then we do not save the changes. In the following example we lose the name change. Nothing is written to the database.

```
set buf = DB.GetContact( 4 )      *’ set id=4*
buf.Name = "New name"             *’ modify \#4
*set buf = Nothing                 *’ lose change*
```

 

Another variation on this is when a new object is assigned to the same variable.

In this case the original object goes out of scope and we lose the changes it contains.

```
set buf = DB.GetContact( 4 )      *’ set id=4*
buf.Name = "New name"             *’ modify \#4
*set buf = DB.GetContact( 5 )      *’ set id=5*
*’ change to \#4 is lost*
```

ChangeIdentity will save changes to a model, but assigning a new object to a variable will not.

```
set buf = DB.GetContact( 4 )      *’ set id=4*
buf.Name = "New name"             *’ modify \#4
*buf.ChangeIdentity( 5 )           *’ set id=5*
*’ change to \#4 is saved before id is set = 5*
```
