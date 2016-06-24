<properties date="2016-05-11"
SortOrder="3"
/>

Preferences keep track of an Associate’s likes and dislike such as calendar size, calendar starting date, default appointment text etc. In NetServer, these preferences are kept track of using the SoPreference class located in the SuperOffice.Data name space. Note that all preferences are stored in the UserPreference table. This section shows how to Get and Set Preferences using the Netserver.

The following example shows how we may change the calendar start date, i.e. whether it is going to be Monday or Sunday.

```
using SuperOffice;
using SuperOffice.Data;
 
using(SoSession mySession = SoSession.Authenticate("sam", "sam"))
{
      SoPreference.SetPreference("Visual", "SundayFirstDay", true);
}
```

 

When the above code is executed wherever in the application a colander is displayed, its starting date will be Sunday as shown below.

 <img src="Get%20Set%20Preferences_files/image001.jpg" width="605" height="409" /> 

When considering the code above the part that is related to the above change is the statement below.

```
            SoPreference.SetPreference("Visual", "SundayFirstDay",
true);
```

 

Here we have made use of the SetPreference() method provided in the SoPreference class. The method provides four overloads depending on the input value, which could be either a string, int, DateTime, or bool value. The first two parameters preference section and the corresponding preference key is always set and they are both of string types. When setting preferences we may need to know what sections are already found in the database. To get the available sections we may use the GetSections() method exposed in the SoPreference class. The method will return an array of all sections defined for the current associate from the cache if possible or from the database. However, it is possible to add your own preference sections to the application.

```
            string[] test2 = SoPreference.GetSections();
```

 

Once we have figured out which section to use the next is to get specific key, which relates to the part that we are planning to change. For this we use the GetKeys() method. The method gets all available keys within a section from the cache or from the database.

```
            string[] test = SoPreference.GetKeys("Visual");
```

 

Through the above code segment, we get the available keys, which are within the section called “Visual”.

The SetPreference() method has four overloads depending on the value passed which could be of data type string, int, bool or DateTime. The SoPreference class provides four corresponding methods to retrieve the current value of a given preference.

```
using SuperOffice;
using SuperOffice.Data;
 
using(SoSession mySession = SoSession.Authenticate("sam", "sam"))
{
      bool value = SoPreference.GetBool("Visual", "SundayFirstDay",
false);
}
```

 

The example above retrieves whether the calendar for the signed in user begins with Sunday or Monday. In this case since

GetBool() method in the SoPreference class requires three parameters namely section and key. The default value of the key should also be passed in. The default value parameter should only be passed in when using the GetBool().

See Also:

[Cache list, preferences](../../Developer's%20Guide/Caching%20Lists,%20Preferences/Caching%20Lists,%20Preferences.md)
TODO link to the SuperOffice namespace
