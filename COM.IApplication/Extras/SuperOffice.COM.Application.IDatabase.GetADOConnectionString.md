

##SUMMARY


To connect to the database we have made it simple to get the connection string, this will only return the string and not build the connection. 

This will require some sort of login. Its only possible to call GetADOConnectionString trough the SuperOfficeDB Library, calling it from SOApplication will generate an error. 



##EXAMPLE

**Get the name of the datasource**

This text may be copied to the notepad, and saved as a *.vbs file. Remember to change the login information.

![](../../Examples/vbs/Database.GetADOConnectionString.vbs.txt)




##RETURNS

String – the connection string



