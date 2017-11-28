

##SUMMARY

Unattended. 

Generate non-satellite areas unattended (use SuperOffice Travel Gateway)


##EXAMPLE

**UAGeneratePrototype**

This text may be copied to the notepad, and saved as a *.vbs file. Remember to change the login information.



UAGeneratePrototype(1)

Database.preferences.set(Travel, GWSilent, 0) 



This may be used to run an unattended Read updatefile (in SuperOffice travelgateway). AreaID must be a valid area, not a satellite. The database preference is set so the progress bar will not be shown.

![](../../Examples/vbs/SOTravelInfoInterface.UAGeneratePrototype.vbs.txt)




##RETURNS

Boolean – true if operation succeeded





##PARAM: AreaId

Long - area id

Preference Travel,GWSilent show progress bar when =  0



