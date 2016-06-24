<properties date="2016-05-11"
SortOrder="6"
/>

 

Getting a Contact through the Entities layer is pretty straight forward. Following example shows how it is done.

```
using SuperOffice;
using SuperOffice.CRM.Entities;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
//Get a contact through Idx class
Contact contactThroughIdx = Contact.GetFromIdxContactId(3);
//Access the Name property
      string name = contactThroughIdx.Name;
                                     
}
```

 

To get a Contact Entity you need to use the SuperOffice.CRM.Entities namespace. When retrieving a Contact Entity through Idx class you have to pass the Id of the Contact Entity. Then all its properties will be retrieved from the database and kept in memory. This allows you to access the properties.
