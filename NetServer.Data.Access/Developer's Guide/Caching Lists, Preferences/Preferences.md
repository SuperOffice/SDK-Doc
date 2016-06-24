<properties date="2016-05-11"
SortOrder="11"
/>

The PreferenceCache stores information about what the user prefers. The aim of this is to make the application more user friendly. For example by adding default values for a document, appointment and so on. Another aspect of this is that it may define how your application looks. For example, whether the calendar starts on Sunday or Monday.

The classes that can be grouped as preference caches included DataRightsCache, FunctionRightsCache, OwnerContactCache, RefCountsPermissionCache, SentryPreferanceCache and UserGroupCahce. However, it is possible for the programmer to make his own preferences to the database that controls his application.

In order to find an overview of the available references we may make use of methods such as GetSections() and GetKeys() exposed in the SoPreference class.

[Get/Set Preferences](../../Examples/Simple%20Examples/Get%20Set%20Preferences.md)
The example below shows how we may change the calendar start date i.e. Sunday or Monday for a given user.

```
using SuperOffice.Data;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("sam", "sam"))
{
      SoPreference.SetPreference("Visual", "SundayFirstDay", true);
}
```

 

Once the code is executed the results can be see through the Application.

 <img src="../Caching%20Lists,%20Preferences_files/image001.jpg" width="605" height="409" /> 

The relevant section from the code that made the above change is,

```
      SoPreference.SetPreference("Visual", "SundayFirstDay", true);
```

 

The parameters that has being passed to it includes name of the preference section, the key and the new value used.

See Also:

[Get/Set Preferences](../../Examples/Simple%20Examples/Get%20Set%20Preferences.md)
 

 

 
