

##SUMMARY

Unattended. 

Read update files (the *.up or *.dwn files) into the travel or central database for a travel user. This file has information regarding changes in the central or travel database. (Replication info). 

CanReadFile is called before this function, and if CanReadFile returns False, this function will not be performed. In the central database all users with User Level 0 may read files. 

In a travel database, the only associate who is allowed to read these files is the owner of the travel database. Administrator does not have access to a travel database.


##EXAMPLE

**UAReadFile**

This text may be copied to the notepad, and saved as a *.vbs file. Remember to change the login information.

This may be used to run an unattended Read updatefile (in SuperOffice travelgateway). DBID must be a valid travelling associate. The database preference is set so the progress bar will not be shown.

![](../../Examples/vbs/SOTravelInfoInterface.UAReadFile.vbs.txt)




##RETURNS

Boolean – true if operation succeeded





##PARAM: DbId

Long DBID = associate id

Preference Travel,GWSilent show progress bar when =  0



