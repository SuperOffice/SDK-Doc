<properties date="2016-05-11"
SortOrder="38"
/>

To delete a Contact we use the Delete() method available in the Contact class as shown below.

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using (SoSession mySession = SoSession.Authenticate("sam", "sam"))
{
    //Retreive a Contact Entity
    Contact newContact = Contact.GetFromIdxContactId(10);
 
    //Delelte a Contact
    newContact.Delete();
}
```

Once again, exactly like the COM example, with the contact instance in memory, simply calling the Delete() method will delete the contact from the database.
