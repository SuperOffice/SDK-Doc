---
uid: guideADOConnect
title: Getting an ADO Connection
---

Once you are logged in to the database object, you can ask it for an ADO connection object. The database object will take care of logging in the connection for you.

1. Create SuperOfficeDB object
2. [GetADOConnection](SUPEROFFICEDBLib~Database~GetADOConnection.md) makes the connection object for you – there are no complicated parameters to remember.
3. Execute an SQL command
4. Navigate the result set as normal

In practice it looks like this:

Set db = CreateObject("SuperOfficeDb.Database")
Db.Login "name", "pass"
Set objConn = db.GetADOConnection
Set rs = objConn.Execute("select \* from contact where id in (1,2,5)")
While not rs.EOF
  msg = msg & rs.Fields("name").Value & vbCrLf
  rs.MoveNext
wend
Set rs = Nothing
MsgBox  msg, , "Contact names"

 

The advantage is that you don’t have to build the connection string yourself. The database object knows which data source is in use, so it can put together the parameters for you.

The downside is that you always get the database you are logged into at the moment. If you want to log into a different database you will need to build the ADO connection string yourself.

### Application.Database.GetAdoConnection failure

Note that since the SuperOffice database connection (including the ADO Connection object) are just wrappers around an ODBC connection, the ADO connection object is not transferable across process boundaries.

This is most keenly felt when trying to use the Database object via a SuperOffice Application object.

The following will not work, because the ADO connection object cannot be copied from the SuperOffice process (where the database lives) to the program that is connected to it.

Set app = CreateObject("SuperOffice.Application")
Set db = app.Database
Set objConn = db.GetADOConnection

Instead, use the [GetADOConnectionString](SUPEROFFICEDBLib~Database~GetADOConnectionString.md) function to get the connection string, then use that to connect an ADO object you have made yourself.