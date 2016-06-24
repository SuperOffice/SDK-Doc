<properties date="2016-05-11"
SortOrder="3"
/>

The following document tells us how we can make use of the NetServer 3.0 and search for an interest and then set the interest to true of false.

We could use the ContactInterestHelper to search for an interest as shown below.

```
using SuperOffice;
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Lists;
 
using (SoSession newSession = SoSession.Authenticate("sam", "sam"))
{
      //Setting the Interest name to be searched
      string searchIntrsName = "Sams Interests";
                   
      //Retrieve a Contact
      Contact newContact= Contact.GetFromIdxContactId(10);
 
      //Search and find the contact interests by interest name
      ISoListItem newIntrstItm =
newContact.InterestHelper.RootItems.Find(delegate(ISoListItem
ISOLstItm)
            {
                  return ISOLstItm.Name.Equals(searchIntrsName,
StringComparison.InvariantCultureIgnoreCase);
            }
      );
     
      //Check whether the Intereast has been found
      if (newIntrstItm != null && newIntrstItm.Id > 0)
      {
            //Sets the Interest to true or flase
           
newContact.InterestHelper.SetItemSelection(newIntrstItm.Id, true);
      }
}
```

 

Find() method available through the Contact class’s InterestHelper.RootItems can be used to make our search.

```
ISoListItem newIntrstItm =
newContact.InterestHelper.RootItems.Find(delegate(ISoListItem
ISOLstItm)
            {
                  return ISOLstItm.Name.Equals(searchIntrsName,
StringComparison.InvariantCultureIgnoreCase);
            }
```

 

The method returns an ISoListItem and requires a delegate that defines the element for which should searched for to be passed into the method. The method then returns any interest that matches our search interest by using the Equals() method.

Next we move onto setting the interest to true or false. To do this we use the SetItemSelection() method available ContactInterestHelper class. The method requires the intrestid and the new selection status, i.e. true or false to be passed in to it.

------------------------------------------------------------------------

[How to list all selected interests for a contact](How%20to%20list%20all%20selected%20interests%20for%20a%20contact.md)

[How to add a new contact interest](How%20to%20add%20a%20new%20contact%20interest/How%20to%20add%20a%20new%20contact%20interest.md)
