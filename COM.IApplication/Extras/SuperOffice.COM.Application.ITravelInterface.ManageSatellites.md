

##SUMMARY

This will show the Generate satellite dialog as long as the associate/user logged in to the database has permission to see it (User level 0). 

This dialog is used to generate and regenerate satellites. 

CanManageSatellites is called before this function, and if CanManageSatellites returns False, this function will not be performed. Only associates with user level 0 in the central database may manage satellites.


##EXAMPLE

**ManageSatellites**

This text may be copied to the notepad, and saved as a *.vbs file. Remember to change the login information.

![](../../Examples/vbs/SOTravelInfoInterface.ManageSatellites.vbs.txt)




##RETURNS

Boolean – true if on logged user can manage satellites



