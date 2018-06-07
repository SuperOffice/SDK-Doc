---
uid: netserver_configuration_Threading
title: NetServer Threading Element
date: 2018-06-06
SortOrder: 94
---
Configuration values related to threading.

```xml
<Threading>
  <add key="MaxParellalThreads" value="30" />
  <add key="DisableMultithreading" value="false" />
  <add key="ForceMultithreading" value="false" />
</Threading>
```

|Name|Description|
|------------|-|
|MaxParellalThreads|Max parallel operations that is permitted to be run in parallel.  -1 is infinite. The default value is 30.|
|DisableMultithreading|Determines whether NetServer should run in single threaded mode. Default is false.|
|ForceMultithreading|Determines whether NetServer should force multi-threaded mode. Default is false.|
