<properties date="2016-05-11"
SortOrder="11"
/>

An entity is a composite object which contains several related rows in one object. The entity handles maintaining the relationships for you. Entities are business objects – not all tables have a corresponding entity.

There is a small set of entities:

* Contact
* Person
* Project
* ProjectMember
* Appointment
* Document
* Sale
* Selection

 

An entity is suitable for one-at-a-time work. Each entity will load its sub-objects greedily, so loading an entity will load its related data in one big SELECT. Entity collections should be used with care, since accessing a sub-entity of an item in the collection in a loop may trigger an extra select for each item in the collection.

You can use an entity’s properties without worrying about the relationship details in the database. The PostalAddress is related to the Contact through an owner\_id and atype\_idx field, but these details are hidden by the entity:

```
using SuperOffice;
using SuperOffice.CRM.Entities;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    //Get a contact through Idx class
    Contact theContact = Contact.GetFromIdxContactId(1234);
    //Access the Name property
    string name = theContact.Name;
    //Update the postal address
    theContact.PostalAddress.City = "Oslo";
    // Saves the address row
    theContact.Save();
}
```

 

------------------------------------------------------------------------

**See Also:** [Rows](../Persistence%20Layers/Rows.md)
