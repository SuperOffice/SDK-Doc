<properties date="2016-06-24"
SortOrder="23"
/>

In order to retrieve a Person Entity we have to create a Person Agent. This instance can be used to manipulate the data stored in a particular row of the person table. But the changes we make will not update the person table unless it is intentionally saved using the Save() method. The following example shows how a PersonEntity is retrieved, updated and saved.  

```
using SuperOffice.CRM.Services;
using SuperOffice;
 
using (SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    //Retrieve a Person Agent
    using(PersonAgent personAgent = new PersonAgent())
    {
        //Retrieve a Person Entity Carrier using the Person Agent
        PersonEntity myPerson = personAgent.GetPersonEntity(9);
     
        //Update some properties of the Person
        using(AssociateAgent associateAgent = new AssociateAgent())
        {
            myPerson.Associate = associateAgent.GetAssociate(2);
        }
        using(ContactAgent contactAgent = new ContactAgent())
        {
            myPerson.Contact = contactAgent.GetContact(4);
        }
     
        //Saving the Person Entity
        personAgent.SavePersonEntity(myPerson);
    }
}  
```

 

------------------------------------------------------------------------

**See Also:**
