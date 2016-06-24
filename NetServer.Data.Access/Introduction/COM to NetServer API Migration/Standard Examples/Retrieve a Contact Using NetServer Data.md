<properties date="2016-05-11"
SortOrder="36"
/>

To get a Contact using NetServer data, use of the static Contact.GetFromIdxContactId() method.

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using (SoSession mySession = SoSession.Authenticate("sam", "sam"))
{
    //Retreive a Contact Entity
    Contact newContact = Contact.GetFromIdxContactId(10);
 
    //Retreive values stored in the Contact Entity
    string conName = newContact.Name;
 
    //Mpdify values stored in the Contact Entity
    newContact.Name = "TrnaceGemanai";
 
    //Save the modified Values
    newContact.Save();
}
```

Any modification to the values of the retrieved Contact properties are saved again by calling the Contact Save() method. As a reminder, SetDefaults() method is not necessary in this context, only when a new contact is created.
