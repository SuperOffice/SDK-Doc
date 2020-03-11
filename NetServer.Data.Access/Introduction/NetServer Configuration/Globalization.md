---
uid: netserver_configuration_globalization
title: NetServer Globalization Element
date: 2018-06-06
SortOrder: 80
---
Configuration used to access the Globalization section in the config file.

```xml
<Globalization>
  <add key="ApplicationCountryCode" value="GBR" />
  <add key="UseApplicationCountryForPersons" value="True" />
</Globalization>
```

|Name|Description|
|------------|----|
|ApplicationCountryCode|Use this country code for associates that are not persons (e.g. anonymous and system users).  Default is GBR (e.g. England).|
|UseApplicationCountryForPersons|Use the applications country (e.g. ApplicationCountry) for all persons (e.g. employees and external users). This is for applications that are not localized. Current county in the principal will forced to the ApplicationCountry value.|
|AllwaysUseGsmPhoneStyle|Setting this property to true will return all phone numbers formatted for the display in a GSM Phone style. Default value is false.|
