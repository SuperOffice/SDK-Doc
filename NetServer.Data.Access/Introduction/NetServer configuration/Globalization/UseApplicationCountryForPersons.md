<properties date="2016-05-11"
SortOrder="126"
/>

This key enables you to relate all Persons accessing the application to the country defined in the previous setting. So all Persons (internal and external users), will be represented by one country that’s defined for the entire application. If the value is defined as ‘True’, then all Persons will be represented by a single country. If the setting is defined as ‘False’ this method of localization will not be implemented. This is used in instances where the application does not support localization.

```
<add key="UseApplicationCountryForPersons" value="True" />
<add key="UseApplicationCountryForPersons" value="False" />
```

 

 
