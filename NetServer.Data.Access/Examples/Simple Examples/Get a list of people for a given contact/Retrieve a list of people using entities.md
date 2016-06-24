<properties date="2016-05-11"
SortOrder="7"
/>

The below example demonstrates the use of entities in retrieving a list of persons for a given contact.

```
using SuperOffice.CRM.Entities;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAL0",""))
{
//retrive the contact that the person we want belongs to
      Contact myContact = Contact.GetFromIdxContactId(21);
      //retrive the person collection
      PersonCollection myPersons = myContact.Persons;
      if (myPersons.Count > 0)
      {
            //Iterate through the persons collection and show the
name
            //in a combo box
            foreach (Person myPerson in myPersons)
            {
                  cmbPersonName.Items.Add(myPerson.Firstname + " "
+ myPerson.Lastname);   
            }
}
}

 
```

In the above example we retrieve the contact of the person we want to retrieve. Since we are retrieving an entity it contains the person that belong to it as a property so that we can take the person to a person’s collection. Ones we have the persons in the person’s collection we can iterate through it access any of its properties. In the above example we are accessing the FirstName and the LastName property and showing them in a combo box. 

 <img src="../Get%20a%20list%20of%20people%20for%20a%20given%20contact_files/image001.jpg" width="388" height="145" /> 
