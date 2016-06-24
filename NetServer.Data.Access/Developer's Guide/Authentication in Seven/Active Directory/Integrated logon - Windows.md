<properties date="2016-05-11"
SortOrder="56"
/>

Remember that we now try to log in, using the Windows Identity, before the login dialog is shown (it takes a few seconds more to show up)

If you are set up with AD authentication, then you will never see the login dialog

To log on as someone else, right-click the program shortcut and choose the **Run as...** option; you then need to know the password of that someone

This is used to be a property of the ODBC connection. That is no longer the case and it is important to **turn off** that option

* Otherwise the Windows user needs to be a database user, and we’re no longer in the db-user business

 

Integrated login is a catch-all: since it is integrated, it happens without asking (otherwise it wouldn’t be integrated, right?). That means you can’t override it once it has started – you have to override it **before** you start.

”Integrated login” in ODBC is a completely different matter. In effect you are telling the ODBC driver, ”ignore whatever username and password is present, and log on as my Windows Identity”. That is absolutely not the same as integrated logon to SuperOffice!  **Turn off** integrated logon in ODBC, unless you really want to have a policy where every AD user is mapped to a database user, and want to maintain things that way.
