---
uid: culture_helper
title: Culture Helper
date: 2018-05-08
SortOrder: 2
---
# Culture Helper

The CultureSettingHelper class is used to perform tasks in a temporary culture context. It remembers the previous culture settings, executes the containing code in the set culture, then resets the culture to the previous culture when disposed.

```csharp
// Here the current culture is known
...
// set both system and UI cultures on current thread
using( new CultureSettingHelper("es-ES") )
{
    // culture-dependent processing
}
// culture has been restored
```

There are multiple overloads that enable more behaviors. See [CultureSettingsHelper](https://community.superoffice.com/documentation/SDK/SO.NetServer.Data.Access/html/T_SuperOffice_Globalization_CultureSettingHelper.htm) documentation for more details.
