---
uid: Setapreference
title: Set a preference
---


Preferences keep track of an Associate’s likes and dislike such as calendar size, calendar starting date, default appointment text etc. All preferences are stored in the UserPreference table.
The following example shows how we can retrieve the preferences of the calendar start date for the user/Associate whose has logged in.

using SuperOffice.COM.SuperOfficeDB;
Database newDb = new DatabaseClass();
bool isOK = newDb.Login("USER", "PASS");
if (isOK)
{               
  string calenderStart = newDb.Preferences.Get("Visual", "SundayFirstDay", "false",EPrefLevel.enPLIndividual);
}
else
  Console.WriteLine("Incorrect Username or Password");

In the above example we make use of the Get() method available in the Preferences property of the created database class. The method requires four parameters to be passed in. respectively, they are the section, key, default value and the EPrefLevel which is the level at which you want to set the preference to.

The code below shows us how we can modify the above preference so that the calendar start day would not be “Sunday”.

using SuperOffice.COM.SuperOfficeDB;
Database newDb = new DatabaseClass();
bool isOK = newDb.Login("USER", "PASS");
if (isOK)
{               
  newDb.Preferences.Set("Visual", "SundayFirstDay", "true", EPrefLevel.enPLIndividual);
}
else
   Console.WriteLine("Incorrect Username or Password");

Once the above code statement is executed the row will be added to the userpreference table and the calendar start date of the win application will be changed to “Sunday”.
Following is and image of the row added to the userpreference table in the database.
![](../../images/PreferenceTableVisual.png) 
Below is an image of the SuperOffice client when the calendar start date is “Sunday”.

![](../../images/PreferenceClientVisual.png)
