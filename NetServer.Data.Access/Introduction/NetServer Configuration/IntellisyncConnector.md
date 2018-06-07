---
uid: netserver_configuration_intellisyncconnector
title: NetServer IntellisyncConnector Element
date: 2018-06-06
SortOrder: 81
---
## (Legacy - SuperOffice Only)

Not used in version 7 or higher.

Configuration settings used by SoIntellisyncConnector.

|Name|Description|
|------------|-|
|SessionTimeout|Intellisync Server authenticates against Intellisync Connector.  When an Intellisync Server sync session for a particular user is ended, the authentication session is always removed.  When a synchronization session exceeds the this time-out, an error is returned to Intellisync Server.  Intellisync Server will then try to re synchronize later.  Extensive traffic in the database resulting in a slowed up synchronization will typically trigger this.  Synchronization for a normal user will seldom take more than 5 minutes (300 seconds), hence the default value of 10 minutes (600 seconds) is a rather conservative value.  Situations where a lot of database locks are occurring should probably result in this default value being decreased, rather than increased. Extremely slow hardware as a result of virtualization should probably result in an increased value.   |
|IntellisyncConnectorUri|The endpoint hosted by SoConnectorService used by Intellisync Server for communication. Default value is http://*:8000/.|
|EnableDiagnosticsWeb|True to make SoIntellisyncConnector host an internal web server enabling the possibility to analyze the current activity of SoIntellisyncConnector.  The Uri listened on is described by DiagnosticsWebUri.|
|DiagnosticsWebUri|The end-point used by the SoIntellisyncConnector internal diagnostics web server. Default value is http://*:8001/.|
