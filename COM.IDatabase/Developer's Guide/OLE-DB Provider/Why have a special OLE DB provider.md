---
uid: WhyhaveaspecialOLEDBprovider
title: Why have a special OLE DB provider
---


ADO is Microsoft’s latest standard for talking to databases. It is a successor to ODBC, DAO, and RDS. ADO uses OLE-DB providers to talk to databases. 

![](../images/ado-diagram.gif)

ADO makes dealing with databases easy. It provides a standard high-level API, while the OLE-DB provider provides a low-level API for reading records. It’s fairly complex and pretty much everyone uses ADO instead.

ADO defines four basic objects (there are more, but these are the most important ones – the core objects):
• Connection
• Command – an object that represents a select query or an insert/update/delete command.
• Resultset – what you get after executing a command
• Field – a part of a resultset.

ADO has nothing to do with ADO.NET – which is a completely new and different technology for use in the .Net environment.

Each database has its own special SQL variant to make life difficult. Outer-join syntaxes vary. Some databases are case sensitive while others are not. Dates are formatted in different formats. ADO has no opinion on these. It sees its job as ferrying the command text to the OLE-DB provider, which will shift it along to the database.

Most software in the world is written with one customer, one installation in mind, so having these dependencies locked into your code is not a big problem. For anyone who has to deal with more than one type of database, the differences become a source of bugs.

SuperOffice uses a special database translator layer we call SODBIF (SuperOffice DataBase InterFace). The CRM client and the SDK rely on this to talk to the database. In order to make this database translator available to other systems we have created an OLE-DB provider which converts standard SQL to the special SQL variant needed by the database you are logged in to.

![](../images/ADO-OLEDB-stack.png) 
Our special OLE-DB provider does CRM database housekeeping for you.

• counts record ids
• timestamps all updates
• updates transaction log
• updates "magic" fields like soundex.
• updates free text index automatically.