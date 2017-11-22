
##EXAMPLE

**ManageArea**

This text may be copied to the notepad, and saved as a *.vbs file. Remember to change the login information.

![](..\..\Examples\vbs\SOTravelInfoInterface.ManageArea.vbs.txt)


##RETURNS

Boolean – true if on logged user can manage areas.


##SUMMARY

This will show the Area Management dialog as long as the associate/user logged in to the database has permission to see it (User level 0). This dialog is used to define areas, both for data distribution and login rights. See the documentation if you are unsure about the concepts. CanManageArea is called before this function, and if CanManageArea returns False, this function will not be performed. Only associates with user level 0 in the central database may manage area definitions.

