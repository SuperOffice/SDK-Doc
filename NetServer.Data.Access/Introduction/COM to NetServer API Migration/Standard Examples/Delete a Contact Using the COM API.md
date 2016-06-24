<properties date="2016-05-11"
SortOrder="37"
/>

To delete a Contact we use the SOContact Delete() method, as shown below.

```
using SuperOffice.COM.SuperOfficeDB;
 
Database newDb = new Database();
bool isOK = newDb.Login("sam", "sam");
 
if (isOK)
{
    //Create a New Contact instance
    SOContact newContact = newDb.GetContact(10);
 
    //Delete a Contact
    newContact.Delete();
}       
else
    Console.WriteLine("Incorrect Username or Password"); 
```

An entity type, like this contact, is easily deleted by first obtaining the contact, and then calling the Contact Delete() method. At this point it is probably important to note that the contact is not yet deleted in memory, but it is from the database. The contact still in memory though will have the IsDeleted property set to true.
