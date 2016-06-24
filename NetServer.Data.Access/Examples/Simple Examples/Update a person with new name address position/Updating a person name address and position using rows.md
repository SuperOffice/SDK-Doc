<properties date="2016-05-11"
SortOrder="8"
/>

 

Now let’s focus how we can update the person name, position and address using rows.

```
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
//retrive the person row that we want to change
      PersonRow myPersonRow = PersonRow.GetFromIdxPersonId(17);
      //change the first name and the last name
      myPersonRow.Firstname = "John";
      myPersonRow.Lastname = "White";
      //change the position here we have to know the position
number we
      // want to change to
      myPersonRow.PositionIdx = 1;
      //save the person row
      myPersonRow.Save();
      //retrive the address of the person using the address type
and the
      //person id
      AddressRow personAddressRow =
AddressRow.GetFromIdxAtypeIdxOwnerId(SuperOffice.Data.AddressType.PersonPrivateAddress,
17);
      //change the address
      personAddressRow.Address1 = "No: 73";
      personAddressRow.Address2 = "West Gate Street";
      personAddressRow.Address3 = "Lexington";
      personAddressRow.City = "Kentucky";
      //save the address row
      personAddressRow.Save();
}
```

 

In the above example we have done the job using exclusively rows. We use the person row to change the name and the position of the person. Here we have assumed that we know the position id of the position row that we want so we simply give that id as the person’s position id. We changed the address of the person using an address row independent of the person row. Here we have retrieved the address row of the person using the address type and the person id so we know that this is the address that was assigned to this person. We have to save the person row and the address row separately since they are two different objects.

 
