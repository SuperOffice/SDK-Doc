<properties date="2016-05-11"
SortOrder="12"
/>

In this section we will explore how we can add members to a static selection using the entities layer of the NetServer. The example demonstrates the use of entities to achieve the task.

```
using SuperOffice.CRM.Security;
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//retrive the contact that owns the persons we want to add as
members
      //to our static selection
      Contact myContact = Contact.GetFromIdxContactId(21);
      //retrive the selection that we want to add members to
      Selection staticSelection =
Selection.GetFromIdxSelectionId(65);
      //lets loop through the persons of the contact and the them
to the
      // selection as its members
      int i = 0;
      if (myContact.Persons.Count > 0)
      {
            foreach (Person myPerson in myContact.Persons)
            {
                  //create a new selection member row
                  SelectionMemberRow newRow =
                  SelectionMemberRow.CreateNew();
                  //set the default values
                  newRow.SetDefaults();
                  //assign the contact ID
                  newRow.ContactId = myContact.ContactId;
                  //assign the person ID
                  newRow.PersonId = myPerson.PersonId; 
                  //add rows of the selection member rows
collection one by
                  // one to the retrived static selection entity
                  staticSelection.SelectionMembers.Add(newRow);
                  i++;
            }
      }
      //finally save the selection entity
      staticSelection.Save();
}
```

 

Here we have retrieved the contact entity which the persons that we want to add as members to the static selection belong to. Now we can loop through the person collection of the contact entity and add the person’s one by one as members of the static selection. This example only adds persons from one contact, but if you want you may add persons from many contacts as members of a static selection. Also you can notice the contact id and the person id has not been hard coded but if you want to this is also a possibility.  

 

An important point to remember!

If you are adding members to a static selection by hard coding the contact id and the person id or if you are getting these values from a user interface input you must make sure that the person id belongs to a person that belongs to the contact id you are specifying for a given SelectionMemberRow.
