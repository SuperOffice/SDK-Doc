<properties date="2016-05-11"
SortOrder="41"
/>

Now lets see how we can retrieve and set preferences using NetServer data. First, an example:

```
using SuperOffice;
using SuperOffice.Data;
 
using (SoSession mySession = SoSession.Authenticate("sam", "sam"))
{
    SoPreference.SetPreference("Visual", "SundayFirstDay", true);
}
```

Here we use the SoPreference SetPreference() method, located in the SuperOffice.Data namespace. The method provides four overloads to accomodate the input datatype. This is either a string, integer, DateTime, or boolean type. The first two parameters, preference section and preference key are required and are both string types. To discover what sections already exist in the database, use the SoPreference GetSections() method. The method will return an array of strings defining all section names for the current associate - either from the cache if possible or from the database. It is also possible to add your own preference sections to the application.

```
string[] test1 = SoPreference.GetSections();
```

With a section name, we need to specify the key name that relates to the value we are planning to change. For this use the SoPreference GetKeys() method. GetKeys returns all keys within a section from the cache, or from the database.

```
string[] test2 = SoPreference.GetKeys("Visual");
```

With the code examples above, we get all the available keys in the preference section called â€œVisualâ€.

The SetPreference() method has four overloads to accomodate the preference value data type. The SoPreference class also provides four corresponding GetXxx methods, such as GetBool and GetInt, to return proper data type of a given preference.

```
using SuperOffice;
using SuperOffice.Data;
 
using (SoSession mySession = SoSession.Authenticate("sam", "sam"))
{
    bool value = SoPreference.GetBool("Visual", "SundayFirstDay",
false);
}
```

The example above retrieves the start date preference. The GetBool method of the SoPreference class requires three parameters, the section and key name, and the default value. The default value parameter is an overload on two of the four GetXxx methods.

Below is an image of the WInGUI when the calendar start date is set to â€œSundayâ€ - using either the COM API or NetServer data.

**![](../../COM%20to%20NetServer%20API%20Migration_files/COM_NetServerMigration_A.png)**
