<properties date="2016-05-11"
SortOrder="80"
/>

Some Entities consists of Collection of Entities as one of its properties. For example the Contact Entity has a property called Persons which is a Collection of Person Entities. With the use of the Delete() method it is possible to delete such a collection, however the relevant data contained in such collection will not actually be deleted from the database; only the references that link the Entity to the Entity Collection will be deleted.

 

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
      //Retrieve an entity                   
      Contact newContact = Contact.GetFromIdxContactId(25);
      //Deleting an Entity Collection through a Contact
      newContact.Persons.Delete();
}

 
```

Here we use the Delete() method to delete the references to the Entities of an Entity Collection.

 

If we wish to delete a particular Entity of the collection the following piece of code may be used.

 

```
      newContact. Persons[0].Delete();
```
