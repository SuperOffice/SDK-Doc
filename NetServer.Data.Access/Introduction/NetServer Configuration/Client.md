---
uid: netserver_configuration_client
title: NetServer Client Element
date: 2018-06-06
SortOrder: 69
---
## (SuperOffice Only)

Configuration values related to client configuration, extension of ClientConfigurationProvider.

```xml
<Client>
  <add key="ExportPageSize" value="10" />
</Client>
```

|Name|Description|
|------------|-|
|ApplicationName|Web client application name - used to resolve page config files. Default value is WebClient. Do not change this value.|
|ApplicationInstance|Web client instance name - used to resolve page config files. Default value is Web. Do not change this value.|
|HelpFilesBaseUrl|Override the help files location - to support local deployments. |
|ExportPageSize|Default value is 10000.|
|ApplicationTitle|Application title. Default value is SuperOffice® CRM.|
|WebAppUsage|Enable the collection of Web Client usage statistics (only view usage, no references to actual data).|
|ClientCacheKey|Cache key that is appended (if it exists) to the querystring for javascript and css includes.|
|UrlSchemeOverride|Overridden value of sheme (HTTP or HTTPS).|
|UrlHostOverride|Overridden value of host, like: web.superoffice.com.|
|UrlPortOverride|Overridden value of port, like: 80 or 443.|
|GoogleImportDispatcher|URL to import from google.|
|GoogleImportClientId|Client ID when importing from google.|
|GoogleImportClientSecret|Client secret when importing from google.|
|MasterDcfConfigHashKeyFormat|The format key used to generate a unique DCF page config hash. {0} = MachineName. {1} = Build-label. {2} = Assembly version. Defaults to {0}.|
|NetServicesStatusUrl|Override the default NetServices Status URL with this value. Useful for testing.|
|NetServicesNextDate|Override the Next Check Date preference for NetServices Status checking. Useful for testing. YYYY.MM.DD|
|ShowWelcomeDialogs|Allow automated tests to disable webtools and welcome dialogs.|
|WWW3Url|The root-URL of the global SuperOffice www3 host.|