<properties date="2016-06-24"
SortOrder="12"
/>

The only way to let CRM web know about your user controls, and hence let you use them in existing or new pages, is by adding them in the SoObjectMapping.config page.

It is always a good idea to put your modifications at the end of this file, and also add a comment letting other developers know that this is not a part of the standard installation.

```xml
<!-- DevNet demo controls -->

<object type="UserControl" mappingname="DevNetSaleForeignKeys" assemblyname="CustomizingSIXwebPart2" objectname="~/DevNet/SaleForeignKeys.ascx"></object>
```

Another thing that is good practice is to always put your own controls (and other files) in separate folders instead of mixing them up with the installed files. This makes life a lot easier when upgrading CRM.web down the road.
