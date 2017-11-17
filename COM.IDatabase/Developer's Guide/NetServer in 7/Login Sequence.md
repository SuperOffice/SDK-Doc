---
uid: NetServer_Login_Sequence
title: Login Sequence
---

![](../../images/Netserver-and-odbc.gif)

Login Sequence
==============

Starting SOCRM will load the SUPEROFFICE.INI file.

For there it parses the ODBC settings and archive path.

SOCRM will load NetServer

NetServer loads the SUPEROFFICE.CONFIG file, which contains the db user + db password.

SOCRM adds overrides to fill in the details that it got from the ODBC source, like the server name, database type, connection string etc.

NetServer connects to the database.

SOCRM uses the NetServer connection to authenticate the user's credentials (AD user, username+password, ticket, whatever) against the credentials table.

If the NetServer authentication system approves the user, then the SOCRM process starts its login, initializing its own ODBC connection using the db user + db password from the NetServer config file.

The SO Application COM object is initialized

At this point the document plugin, sentry plugin and scripts are loaded, the event server is started.

 

NetServer is always available
=============================

In your C\#/VB.net plug-ins you can safely assume that NetServer has been loaded and is ready to use.

You do not need to do your own SoSession.Authentication call - you can just start using the NetServer row and entity objects to read and update the database.

 <span><span id="ctl00_contentContainer_ctl36_ctl00_ctl07"></span></span>