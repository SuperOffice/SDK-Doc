<properties date="2016-05-11"
SortOrder="14"
/>

Rows type consists of a collection of Rows such as ContactRows type consists of a Collection of ContactRow types. Therefore, it is possible to create a ContactRow with the ContactRows class, which has been explained in the example shown below.

```
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("sam", "sam"))
{
      ContactRows newConRows = ContactRows.CreateNew();
 
      //Instantiate a ContactRow type
      ContactRow newContact = ContactRow.CreateNew();
 
      //Assign values to the instantiated ContactRow       newContact.SetDefaults();
      newContact.Name = "EuroCenter";
      newContact.OrgNr = "1234523";
      newContact.Number1 = "7412885";
 
      //Adding the created Contacted to the Collection
      newConRows.Add(newContact);
 
      //Saving the ContactRows Collection
      newConRows.Save();
}
```

 

First step is to instantiate the ContactRows class with the use of the CreateNew() method. Next step is to instantiate a ContactRow class and assign the necessary values to it as show in the previous example. With the use of the Add() method available in the instantiated ContactRows class the instantiated ContactRow is added to the collection and it has been saved with the use of the Save() method which has being shown below.

```
      newConRows.Add(newContact);
      newConRows.Save();
```

 
