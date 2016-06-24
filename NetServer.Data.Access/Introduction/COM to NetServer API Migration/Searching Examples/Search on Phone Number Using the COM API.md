<properties date="2016-05-11"
SortOrder="54"
/>

The following code demonstrates how to use the SOFind.ContactsByPhone() method to retrieve a collection of Contacts filtered by â€œPhone Number. Notice how the method returns a collection object and should be looped over to retrieve a specific contact.

```
using SuperOffice.COM.SuperOfficeDB;
 
Database newDb = new Database();
bool isOK = newDb.Login("sam", "sam");
 
if (isOK)
{
    //Create a New Contact instance using SOFind
    SOContacts newContacts =
newDb.Find.ContactsByPhone("944496325");
 
    //Retrieve values stored in eacg Contact
    foreach (SOContact newContact in newContacts)
    {
        string conName = newContact.Name;
    }
}       
else
    Console.WriteLine("Incorrect Username or Password");
```
