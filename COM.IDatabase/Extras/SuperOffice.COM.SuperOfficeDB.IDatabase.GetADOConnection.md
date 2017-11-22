
##SUMMARY


To connect to the database we have made it simple to get the connection string. This will require some sort of login. GetADOConnection creates a new connection each time you call it, and its only possible to call it trough the SuperOfficedb Library, calling it from SOApplication will generate an error.



##RETURNS

Object - The actual connection string


##EXAMPLE

**Get the ADO connection**

This text may be copied to the notepad, and saved as a *.vbs file. Remember to change the login information.

![](..\..\Examples\vbs\Database.GetADOConnection.vbs.txt)

