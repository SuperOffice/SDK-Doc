---
uid: netserver_configuration_webapi
title: NetServer WebApi Element
date: 2018-06-06
SortOrder: 96
---
Configuration values related to the WebApi web services.

```xml
<WebApi>
  <add key="AuthorizeWithUsername" value="true" />
  <add key="AuthorizeWithTicket" value="true" />
  <add key="AuthorizeWithImplicit" value="false" />
  <add key="CORSEnable" value="true" />
  <add key="CORSOrigin" value="http://foo.bar http://localhost/ http://localhost *" />
</WebApi>
```

|Name|Description|
|------------|----|
|AuthorizeWithUsername|Allow WebAPI to authorize with username + password. Default value is true.|
|AuthorizeWithTicket|Allow WebAPI to authorize with session tickets. Default value is true.|
|AuthorizeWithImplicit|Allow WebAPI to authorize with implicit identity from IIS. Default value is true.|
|CORSEnable|Allow 3rd party web pages to call WebAPI from the browser. Default value is false.|
|CORSOrigin|If CORS is enabled, define space delimited Origins that are allowed to call the WebAPI from the browser. No default is set. Example value: ```"http://foo.bar http://localhost/ http://localhost *"```.|
