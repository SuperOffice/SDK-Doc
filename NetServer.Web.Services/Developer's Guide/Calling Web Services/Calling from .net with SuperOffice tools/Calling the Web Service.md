<properties date="2016-06-24"
SortOrder="7"
/>

This method uses the SoSession object from the SoCore to handle the authentication logic for us. The secret is calculated for us during the Authenticate call. The Proxy objects returned by the agent factory will automatically add the SOAP authentication header for us. This makes working with the service API much simpler.

```
using SuperOffice.CRM.Services;
using SuperOffice;
using SuperOffice.Security.Principal;
 
//Authenticate using the SoSession class
using( SoSession mySession = SoSession.Authenticate("SAL0", "") )
{
     //get a contact agent
     using(ContactAgent myContactAgent = new ContactAgent())
     {
          //retrive a contact entity through the agent
          ContactEntity myContactEntity = myContactAgent.GetContactEntity(4);
          //retrive the department name
          string dept = myContactEntity.Department;
     }
}
```

 

What will happen behind the scene is the Proxy dll will generate the SOAP header using the credentials and makes the SOAP call.

Here we can see that we have retrived a Contact entity using the contact agent. What actually happen here is that the proxy dll will call the GetContactEntity method of the Contact web service.

 

This is the recommended calling pattern. The Session object is scoped with using(), so that the session is automatically closed at the end of the scope.

You can use SoSession.Suspend and Continue to avoid authenticating all the time.

------------------------------------------------------------------------

**See Also:** SoSession, AgentBase
