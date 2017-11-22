
##EXAMPLE

**ReadFile**

This text may be copied to the notepad, and saved as a *.vbs file. Remember to change the login information.

![](..\..\Examples\vbs\SOTravelInfoInterface.ReadFile.vbs.txt)


##RETURNS

Boolean – true if operation succeeded


##SUMMARY

Read update files (the *.up or *.dwn files) into the travel or central database for a travel user. This file has information regarding changes in the central or travel database. (Replication info). 

CanReadFile is called before this function, and if CanReadFile returns False, this function will not be performed. In the central database all users with User Level 0 may read files. 

In a travel database, the only associate who is allowed to read these files is the owner of the travel database. Administrator does not have access to a travel database.

