---
uid: netserver_configuration_webservices
title: NetServer WebServices Element
date: 2018-06-06
SortOrder: 98
---
Configuration section used to define SuperOffice CRM web service settings.

```xml
<WebServices>
  <add key="AllowWebServiceRequests" value="true" />
  <add key="WrapExceptions" value="true" />
  <add key="RemoveInvalidXMLText" value="false" />
</WebServices>
```

|Name|Description|
|------------|-|
|AllowWebServiceRequests|Permit requests to web services.  This value is supported in the default SoWcfRequestInterceptor and can be overriden by making a custom SoWcfRequestInterceptorPlugin.|
|WrapExceptions|Check if NetServer shall wrap and serialize exceptions, or leave it up to communication carrier (i.e. WCF).|
|RemoveInvalidXMLText|If we should remove UTF-8 characters that are not valid XML. The Text table is the only place where this filter is active.|
|RemoteBaseURL|Base URL for remote services. Default value is http://localhost/webs/SuperOffice.Web.Services.  This value will override by Services.RemoteBaseURL.|