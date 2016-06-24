<properties date="2016-05-11"
SortOrder="11"
/>

The following example demonstrates how we can use the services layer of the NetServer to add members to a static selection

```
using SuperOffice.CRM.Security;
using SuperOffice.CRM.Services;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//create a Selection agent through the agent factory
      ISelectionAgent selectionAgent =
AgentFactory.GetSelectionAgent();
      //create a contact agent through the agent factory
      IContactAgent contactAgent = AgentFactory.GetContactAgent();
      //retrive the contact entity of the persons that you want to
add as
      //members to the selection that you want
      ContactEntity myContact =
contactAgent.GetContactWithPersons(21);
      if (myContact.Persons.Length > 0)
      {
            //we will create a array of ContactPersonIds and add
the array
            //to the selection
            ContactPersonId[] personId = new ContactPersonId[3];
            for (int i = 0; i<3; i++ )
            {
                  personId[i] = new ContactPersonId();
                  personId[i].ContactId = myContact.ContactId;
                  personId[i].PersonId =
myContact.Persons[i].PersonId;  
            }
            //now lets add the members to the selection that we
want
            selectionAgent.AddContactSelectionMembers(65,
personId);
      }
}
```

 

In the above example we are using the agent factory of the NetServer to create all the agents we require. We have used the methods provided in the contact agent to retrieve the contact we want in order to add its persons to a selection. We have used the AddConactSelectionMembers method of the selection agent to add the members to a static selection. As you can see the second parameter of the method is an array of ContactPersonId objects. In the example we loop through the persons array of the contact entity and adding the person IDs to the ContactPersonId array. By looping through the persons we do not need to add the specific person\_id, but if we want it’s also possible to add a new selection member by person\_id. As one can see we have added only one contact person to the selection, but if we want we can add persons from different contacts to a static selection.

Below is an example that shows how we can add members from different contacts to a static selection. Here we hard code the contact\_ids and person\_ids

```
using SuperOffice.CRM.Security;
using SuperOffice.CRM.Services;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//create a Selection agent through the agent factory
      ISelectionAgent selectionAgent =
AgentFactory.GetSelectionAgent();
      //we will create a array of ContactPersonIds and add the
array to the
      //selection
      ContactPersonId[] personId = new ContactPersonId[3];
      personId[0] = new ContactPersonId();
      personId[0].ContactId = 21;
      personId[0].PersonId = 55;
      personId[1] = new ContactPersonId();
      personId[1].ContactId = 23;
      personId[1].PersonId = 59;
      personId[2] = new ContactPersonId();
      personId[2].ContactId = 35;
      personId[2].PersonId = 83;
      //now lets add the members to the selection that we want
      selectionAgent.AddContactSelectionMembers(65, personId);
}
```

 

Now let’s move on to explore how we can achieve the same result using the entities layer.

An important point to remember!

In the above example one can notice that we have given the Contact\_id and the Person\_id to each element of the ContactPersonId array. It is very important that we always give the number of a person belonging to the contact that we specify for that element e.g. in the database table person, the person with person\_id=83 must have a person.contact\_id=35.
