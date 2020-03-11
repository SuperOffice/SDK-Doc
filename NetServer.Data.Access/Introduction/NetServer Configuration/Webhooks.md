---
uid: netserver_configuration_webhooks
title: NetServer Webhooks Element
date: 2018-06-06
SortOrder: 97
---
Configure values related to webhooks - events broadcast to remote servers.

```xml
<Webhooks>
  <add key="EnableWebhooks" value="true" />
  <add key="RequireHttps" value="true" />
  <add key="ValidateHttps" value="true" />
</Webhooks>
```

|Name|Description|
|------------|----|
|EnableWebhooks|Broadcast events to remote servers. Default value is false.|
|RequireHttps|Require webhooks target URLs use HTTPS protocol. Should only be turned off during development. Default value is true.|
|ValidateHttps|Require valid public HTTPS certificates. Self-signed or expired certs on webhook target URLs are refused. Should only be turned off during development. Default value is true.|
|NumThreads|How many background threads to run for dispatching webhooks. Default 0 = scale automatically according to demand.|
|Timeout|Stop background threads after X number of seconds of idle time. Default 30 seconds.|

## WebServices