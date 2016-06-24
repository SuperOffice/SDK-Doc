<properties date="2016-05-11"
SortOrder="35"
/>

The following demonstrates how to retrieve a Contact using the Database GetContact() method.

```
using SuperOffice.COM.SuperOfficeDB;
 
Database newDb = new Database();
bool isOK = newDb.Login("sam", "sam");
if (isOK)
{
    //Create a New Contact instance
    SOContact newContact = newDb.GetContact(10);
 
    //Retieve values stored in the Contact
    string conName = newContact.Name;
 
    //modify values stored in the Contact
    newContact.Name = "Valantine";
 
    //Save the contact
    newContact.Save();
}
else
Console.WriteLine("Incorrect Username or Password");
```

We can replace existing contact values, similar to when we first created a new Contact, and then save those changes using the contact Save() method. Notice how now it is not necessary to call the SetDefault() method - default values should already have been set.
