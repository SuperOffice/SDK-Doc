---
uid: netserver_configuration_client_configuration
title: NetServer ClientConfigurationProvider Element
date: 2018-06-06
SortOrder: 70
---
## (SuperOffice Only)

Configuration for the Web Client configuration data provider.

```xml
<ClientConfigurationProvider>
  <add key="CacheConfigurations" value="false" />
</ClientConfigurationProvider>
```

|Name|Description|
|------------|----|
|FilePath|File path for standard .config files.|
|CacheConfigurations|Should GUI config data be cached?|
|CacheUserPreferences|Should GUI config data be cached? Default value is true.|
|ValidateConfigurations|Should GUI config data be validated runtime?|
|CustomPath|List of alternate paths for GUI .config files. When more than one, each additional path must have a numbered suffix, i.e. CustomPath1, CustomPath2, etc.|
