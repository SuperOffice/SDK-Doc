
##SUMMARY

Saves the changes made to the person model to the database, and retrieves the new data from the database again. The last thing you do to an object if you want the changes you made to be saved. The ChangeIdentity method calls the save method first


##EXAMPLE

**ChangeIdentity**


This text may be copied to the notepad, and saved as a *.vbs file. Remember to change the login information.


This will change the first name of the person. If you dont want to save the changes, NO calls the CancelChanges method. If you want to save the changes, YES calls the ChangeIdentity() that saves the person model to the database.


![](..\..\Examples\vbs\SOPerson.ChangeIdentity.vbs.txt)


##PARAM: NewIdentity

as person_id (long), the internal identity in the database

