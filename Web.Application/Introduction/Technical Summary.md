<properties date="2016-06-24"
/>

Technical Information
=====================

This page points out in short the technical platform of the CRM.web application. Most of them will probably require more in-depth explanations to be valued and understood and we will provide such information when we are closer to the release.

Development platform
--------------------

* Microsoft .NET
* Code in C\#
* Web in ASP.NET 2.0
* Asynchronous calls via Ajax.NET

Client side - Multiple browser support
--------------------------------------

* Internet Explorer 6, 7 and 8 on Windows
* FireFox + Opera on Windows, Mac and Linux

Server side
-----------

* Windows Server 2003 for production Web & Application servers
* We support Database, Application Server and Web Server on separate or the same machine
* Windows XP (for demo and test/single-machine setup supported)
* We support Network Load Balancing

Database
--------

* We support SQL Server 2000, 2005; Oracle 9, 10; Sybase Anywhere 8, 9; DB/2 on Windows, Linux, iSeries.
* The SuperOffice Datamodel is NOT modified and hence requires no data conversion process. New tables and fields are however added to the existing data model.

Architecture
------------

* Service Oriented Architecture (SOA)
* Dynamic Client Foundation (DCF)

Unicode
-------

The CRM.web product is prepared for Unicode, but are depending on several other elements in the SuperOffice CRM concept to work properly. Hence, support for Unicode is not part of this release.
