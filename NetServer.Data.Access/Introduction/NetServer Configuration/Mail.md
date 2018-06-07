---
uid: netserver_configuration_Mail
title: NetServer Mail Element
date: 2018-06-06
SortOrder: 82
---
## (SuperOffice Only)

Mail component configuration options.

```xml
<Mail>
  <Component>
    <add key="Reader" value="EasyMail" />
    <add key="Sender" value="EasyMail" />
  </Component>
</Mail>
```

### Component

|Name|Description|
|------------|-|
|Reader|The Key used for mail reader.|
|Sender|The Key used for mail sender.|
|NumberOfDaysToDownload|Initial number of days to fetch mail for.|
