---
uid: startLoggingIn
title: Logging In
---

Create a SuperOffice database object, and call the Login method with the username and password you use to log in to the client.

```
Set db = CreateObject("SuperOfficeDB.Database")
isOk = Db.Login( "name", "pass" )
```

The component finds the Superoffice.ini file by looking in the registry for the HKCU\\Software\\SuperOffice\\ProgDir value.

This value is set every time you run SOCRM.EXE.

This path is needed by the components system to load the database and language resource DLLs.

Alternatively, you can set the path yourself before logging in:

```
Set db = CreateObject("SuperOfficeDB.Database")
db.Settings.SuperofIniPath = "\\\\myserver\\aplace"
isOk = db.Login( "name", "pass" )
```

This can be useful if you have different configurations that you need to switch between. Each configuration would then be stored in a separate directory.

The database object then reads the ini-file and figures out where the database and documents are located using the Datapath and ArchivePath settings and attempts to log in.

If the central db fails, then the local travel database is attempted.

If both of the logins fail, then the Login call returns false, and attempts to use the database object will fail.

 

Integrated Login
----------------

Use blank name and password to try an integrated login.

The database components will pick up the name of the currently logged in user and try to use that.

```
isOk = db.Login( "", "" )
```

If the database is not configured for integrated logins, or if the current windows user is not registered with the database, then the login will fail.

 

NetServer Ticket Login
----------------------

If you have a NetServer ticket ("7T:ABC....12XYZ=") you can use this instead of a username + password, like this:

```
ticket = "7T:ABC....12XYZ="
isOk = db.Login( ticket, "" )
```
