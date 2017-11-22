
##SUMMARY

Saves the changes made to the contact model to the database. The last thing you do to an object if you want the changes you made to be saved. The ChangeIdentity method calls the save method first


##EXAMPLE

**ChangeIdentity**

This text may be copied to the notepad, and saved as a *.vbs file. Remember to change the login information.



This will change the name of the company. If you dont want to save the changes, NO calls the CancelChanges method. If you want to save the changes, YES calls the ChangeIdentity() that saves the contact model to the database.

![](..\..\Examples\vbs\SOContact.ChangeIdentity.vbs.txt)


##PARAM: NewIdentity

Contact_id (long), the internal identity in the database

