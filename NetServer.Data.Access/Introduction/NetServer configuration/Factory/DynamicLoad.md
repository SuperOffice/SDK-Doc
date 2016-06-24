<properties date="2016-05-11"
SortOrder="123"
/>

DynamicLoad is another type of configuration that you can use to configure your own customizations out of the methods provided by NetServer. Here you can develop your own custom DLL and request NetServer to load it dynamically. In this configuration setting the key should be the unique identifier of your custom DLL and the value should be the location of the custom DLL.

```
<add key="MyPlugin" value="C:\MyPlugin\Plugin\MyPlugin.dll"
/>
```

 

An Important Point to Remember!

It is important to note that a unique key is used should you provide several customizations, or else your key will be ignored.

 
