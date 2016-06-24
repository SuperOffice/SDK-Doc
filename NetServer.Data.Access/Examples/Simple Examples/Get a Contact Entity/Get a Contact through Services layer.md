<properties date="2016-05-11"
SortOrder="7"
/>

 

The other method of retrieving a Contact Entity is via Services layer. The following example shows how it is done.

```
using SuperOffice.CRM.Services;
using SuperOffice ;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    //Create a Contact Agent
    IContactAgent myContactAgent = AgentFactory.GetContactAgent();
    //Get a Contact Entity through the Contact Agent
    Contact myContact = myContactAgent.GetContact(4);
    //Retrieving the Name Property of the Contact
    string name = myContact.Name;
                                     
}
```

 

First you need to create a ContactAgent. Once the ContactAgent is created we can retrieve a Contact Entity carrier by passing the Contact\_id to the GetContact() method. At this moment all the properties of this particular Contact will be passed in to memory from the database. Now you can access all the properties of this Contact via this newly created Contact carrier.
