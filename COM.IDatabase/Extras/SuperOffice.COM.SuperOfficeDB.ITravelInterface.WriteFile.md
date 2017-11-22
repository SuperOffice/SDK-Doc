
##EXAMPLE

**WriteFile**

This text may be copied to the notepad, and saved as a *.vbs file. Remember to change the login information.

![](..\..\Examples\vbs\SOTravelInfoInterface.WriteFile.vbs.txt)


##SUMMARY

This will show the Active Travel Users dialog as long as the associate/user logged in to the database has permission to see it (User level 0 or a travel user). 

This dialog is used to write the *.up or *.dwn file to a central or travel database. This file has information regarding changes in the central or travel database. (Replication info) 

CanWriteFile is called before this function, and if CanWriteFile returns False, this function will not be performed. In the central database all users with User Level 0 may write files. 

In a travel database, the only associate who is allowed to generate these files is the owner of the travel database. Administrator does not have access to a travel database.


##RETURNS

Boolean – true when operation is completed successfully

