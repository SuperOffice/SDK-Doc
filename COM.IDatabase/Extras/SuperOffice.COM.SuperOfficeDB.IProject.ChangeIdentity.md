
##EXAMPLE

**ChangeIdentity**

This text may be copied to the notepad, and saved as a *.vbs file. Remember to change the login information.



This will change the description text of the project. If you dont want to save the changes, NO calls the CancelChanges method. If you want to save the changes, YES calls the ChangeIdentity() that saves the project model to the database.

![](..\..\Examples\vbs\SOProject.ChangeIdentity.vbs.txt)


##SUMMARY

Saves the changes made to the project model to the database. The last thing you do to an object if you want the changes you made to be saved. The ChangeIdentity method calls the save method first.


##PARAM: NewIdentity

NewIdentity – as project_id (long), the internal identity in the database.

