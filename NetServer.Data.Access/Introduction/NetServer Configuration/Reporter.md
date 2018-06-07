---
uid: netserver_configuration_Reporter
title: NetServer Reporter Element
date: 2018-06-06
SortOrder: 85
---
Configuration values related to Reporter.

```xml
<Reporter>
  <add key="ExePath" value="bin\\Reporter" />
  <add key="Timeout" value="300000" />
  <add key="ODBC" value="SuperOffice" />
</Reporter>
```

|Name|Description|
|------------|-|
|ExePath|Contains the path to the folder where the file SoReporterExecuter.exe is located. Default value is _bin\\Reporter_|
|Timeout|Timeout in milliseconds for the reporter process. Default value is 300000.|
|ODBC|ODBC Datasource name to use when running Reporter.|
