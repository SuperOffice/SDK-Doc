---
uid: netserver_configuration_scripting
title: NetServer Scripting Element
date: 2018-06-06
SortOrder: 86
---
Configuration values related to NetServer Service Scripting.

```xml
<Scripting>
  <add key="ScriptPath" value="" />
  <add key="EnableScripting" value="false" />
  <add key="TimeoutLimit" value="20000" />
  <add key="MaxTimeouts" value="5" />
</Scripting>
```

|Name|Description|
|------------|----|
|ScriptPath|UNC path to directory containing .cs, .vb or .dll script files.|
|EnableScripting|Determines whether scripts will be invoked when web service methods are called. Default value is true.|
|TimeoutLimit|Number of milliseconds before a script times out. Default value is 20000.|
|MaxTimeouts|Maximum number of timeouts before a script is disabled.|
