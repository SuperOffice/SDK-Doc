
##SUMMARY

The Database Library is a client-side Application Programming Interface (API) available as a COM object. You can access most of the available data in the SuperOffice database through the API without logging in to the SuperOffice CRM Windows client.


##OVERVIEW


The Database class is the root object.


Below the Object Model you'll find a complete list of classes, interfaces and enumerations defined in SuperCOM.



##PROJECT_TITLE

SuperOfficeDB API Reference


##INTRODUCTION


The Database object is used if you want to manipulate the SuperOffice database without having to write SQL.


Instead of writing SQL, you manipulate objects and save the objects. The database is then updated automatically for you.


You can use the objects to do the same sorts of things that the SuperOffice client does.


 


The advantage of using these objects is that you get intellisense and a whole bunch of business-logic built in.


The disadvantage is that the objects may not be as fast as building your own custom queries. This is particularly true for doing batch updates.


 


The database object must be logged in before use. The exception to this is when you obtain the database object belonging to the running SuperOffice client application using the SOApplication.Database property.


 


The components will try to enforce the security system that applies in the SuperOffice client, 
so if you attempt to read another users private appointment with the 
<see cref="SuperOffice.COM.SuperOfficeDB.IAppointment">IAppointmnet object</see>, then your code will raise a security exception. Similarly, attempting to save an object that your 
user is only allowed to read will also lead to a security exception.

Security is enforced based on the user that you are logged in as.

The OLE-DB provider does not enforce security in the same way.



##GETTINGSTARTED

Typically an application will get the username and password from somewhere -- this may be from the running client Application, or it may read the username and password from the user interface.

