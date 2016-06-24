<properties date="2016-05-11"
SortOrder="12"
/>

Rows are simple, straightforward persistence objects. Each table in the database has a corresponding Row object and Rows collection.

The row objects do not contain any business logic, so here you need to maintain the relationship between rows yourself.

You can use row objects to read and to update the database. Each row object supports queries and Save() and Delete() methods.

```
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
      //retrive the contact row that we want to change
      ContactRow theContact = ContactRow.GetFromIdxContactId(1234);
      //get the name
      String name = theContact.Name;
 
      //retrive the address of the contact using the address type
      // and the contact id
      AddressRow theAddressRow =
AddressRow.GetFromIdxAtypeIdxOwnerId(
          SuperOffice.Data.AddressType.ContactPostalAddress, 1234);
      //change the address 
      theAddressRow.City = "Oslo";
      //save the changed address row
      theAddressRow.Save();
}
```

 

Note that the address row will have the owner\_id field set to 1234, and the atypeidx field set to 1 (postal address for contact).
