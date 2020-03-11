---
uid: netserver_configuration_services
title: NetServer Services Element
date: 2018-06-06
SortOrder: 88
---
Configuration settings used to manage SuperOffice Web Services.

```xml
<Services>
  <add key="DefaultMode" value="Local" />
  <add key="SwitchDefault" value="Remote" />
  <add key="SwitchFailover" value="60" />
  <add key="RemoteBaseURL" value="http://localhost/remote/services86/" />
  <add key="ApplicationToken" value="" />
</Services>
```

|Name|Description|
|------------|----|
|DefaultMode|Mode used for Service calls. Options are Local or Remote. Default value is Local.|
|SwitchDefault|If Default mode is unsuccessful, default mode for the switch. Default value is Remote.|
|SwitchFailover|Timeout before failover in seconds. Default value is 60.|
|RemoteBaseURL|Base URL for remote web services Default value is http://localhost/webs/SuperOffice.Web.Services.  This value will be overridden by WebServices.RemoteBaseURL|
|ApplicationToken|Application token passed with servicves to identify the client application.|
