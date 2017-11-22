
##SUMMARY

This reflects the general rules that SuperOffice uses for filtering stuff, but not all the specifics.


##VALUE

Integer


##EXAMPLE

**Check AccessLevel**

This text may be copied to the notepad, and saved as a *.vbs file. Remember to change the login information. 

This will check the access the logged in user has to an appointment:

![](..\..\Examples\vbs\SOAssociate.AccessLevel.vbs.txt)


##REMARKS

For example, the contact-specific rule about changes only being allowed on contacts registered today for user level 3 is not taken into account here. 

You should only show an edit or save button on appointments, sales and documents when the access level is &lt; 4. 


1=all access 

2=no delete 

3=read+update 

4=read-only 

5=partial reads only 





##PARAM: pOwner

SOAssociate object to compare with

