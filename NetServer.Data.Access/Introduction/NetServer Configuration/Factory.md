---
uid: netserver_configuration_factory
title: NetServer Factory Element
date: 2018-06-06
SortOrder: 78
---
Configuration values used to access class factory information. The ```ClassFactory``` is part of a NetServer extension mechanism to support plug-ins.

```xml
<Factory>
  <CustomFactories>
    <add key="FullClassNameToOverride" value="DevNetCustomFactories.dll" />
  </CustomFactories>
  <DynamicLoad>
    <add key="MyArchiveProviders" value="DeNetArchiveProviders.dll" />
  </DynamicLoad>
</Factory>
```

|Name|Description|
|------------|----|
|CustomFactories|Custom factories that are to replace the default factories. The name of the class to override is the key and the name of the assembly where the custom factory resides is the value.|
|DynamicLoad|This is the most common way to extend NetServer, and it used to create custom Archive and MDO Providers, Sentry and Document plug-ins and more. Contains a list of assemblies dynamically loaded at runtime. Keys will be ignored, values must specify assemblies.|
