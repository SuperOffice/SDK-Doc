<properties date="2016-06-24"
SortOrder="6"
/>

An agent is an object that represents a set of service calls. Each method on the agent corresponds to one service call.

```
IContactAgent newConAgt = new ContactAgent();
```

 

The code segment above shows how we create a ContactAgent. The agent is the class factory that loads the local or remote agent based on the config file settings used when communicating remote using SOAP WebServices.

Once the Agent has been created, we may use it to access the different methods exposed by the Agent. These methods would vary according to the Agent created. Following example shows how we may retrieve a ContactEntity using the IContactAgent.

```
using SuperOffice;
using SuperOffice.CRM.Services;
 
using(SoSession newSession = SoSession.Authenticate("sam", "sam"))
{
      //Retriving a Contact Entity from a service agent
      //Instantiating a Contact Agent
      using(ContactAgent newConAgt = new ContactAgent())
      { 
          //Retrieving a Contact Entity carrier from a service call
          ContactEntity newConEnt = newConAgt.GetContactEntity(5);
     
          //Retrieving values of the carrier properties
          string conName = newConEnt.Name;
          string conDept = newConEnt.Department;
      }
}
```

 

In the example above we have create an instance of the IContactAgent with use of the GetContactAgent() method exposed by the AgentFactory class. Next, we use the created implementation of the IContactAgent to retrieve the ContactEntity as shown below.

```
ContactEntity newConEnt = newConAgt.GetContactEntity(5);
```

 

It should be noted that the IContactAgent class provides methods such as GetAddress, GetAddressByCountry, GetContact, DeleteContactEntity and many more, which can be used in a manner similar to the above.

 

1. autolist

 
