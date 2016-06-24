<properties date="2016-06-24"
SortOrder="13"
/>

To let CRM.web know about any of your own objects, you will need to define them in the SoObjectMapping.config file. The same goes for the new data handler;

```
<!-- DevNet datahandlers  -->
<object type="IDataHandler" mappingname="DevNetSaleDataHandler" assemblyname="CustomizingSIXwebPart3" objectname="CustomizingSIXwebPart3.DevNetSaleDataHandler">
</object>
```
