<properties date="2016-06-24"
SortOrder="3"
/>

Retrieving a contact entity in the services layer is fairly simple, create a contact agent and use the GetContactEntity() method to retrieve the contact entity we want.

```
using SuperOffice.CRM.Services;
using SuperOffice ;
 
using (SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    //Create a Contact Agent    
    using(ContactAgent myContactAgent = new ContactAgent())
    {
        //Get a Contact Entity through the Contact Agent    
        ContactEntity myContact = myContactAgent.GetContactEntity(4);
        //Retrieving the Name Property of the Contact
        string name = myContact.Name;
    }
}
```

 

First we need to create a ContactAgent. Then we can retrieve a Contact Entity carrier by passing the Contact\_id to the GetContactEntity() method. At this moment all the properties of this particular Contact will be passed in to memory from the database. Now we can access all the properties of this Contact via this newly created Contact carrier.

 

------------------------------------------------------------------------

**See Also:** ContactAgent, ContactEntity
