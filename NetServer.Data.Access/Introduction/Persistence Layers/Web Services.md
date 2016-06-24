<properties date="2016-05-11"
SortOrder="9"
/>

The web-services layer is described in a separate help file. When you are calling a web-service, you typically don’t have direct access to the database. This is the highest level for working with NetServer.

A typical service call looks like this when using the NetServer helper classes:

```
using SuperOffice.CRM.Services;
using SuperOffice ;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    //Create a Contact Agent
    IContactAgent myContactAgent = AgentFactory.GetContactAgent();
    //Get a Contact carrier through the Contact Agent
    ContactEntity myContact =
myContactAgent.GetContactEntity(1234);
    //Retrieving the Name Property of the Contact
    string name = myContact.Name;
    // warning: hard-coded address layout assumption!
    string city = myContact.Address[2][1];
}
```

 
