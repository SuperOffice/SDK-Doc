
##EXAMPLE

**UAWriteFile**

This text may be copied to the notepad, and saved as a *.vbs file. Remember to change the login information.

This may be used to run an unattended Read updatefile (in SuperOffice travelgateway). DBID must be a valid travelling associate. The database preference is set so the progress bar will not be shown.

![](..\..\Examples\vbs\SOTravelInfoInterface.UAWriteFile.vbs.txt)


##SUMMARY

Unattended. 

Write the *.up or *.dwn file to a central or travel database. This file has information regarding changes in the central or travel database. (Replication info) 

CanWriteFile is called before this function, and if CanWriteFile returns False, this function will not be performed. In the central database all users with User Level 0 may write files. 

In a travel database, the only associate who is allowed to generate these files is the owner of the travel database. Administrator does not have access to a travel database.


##RETURNS

Boolean – true if operation succeeded


##PARAM: DbId

Long  DBID = associate id

Preference  Travel,GWSilent show progress bar when =  0

