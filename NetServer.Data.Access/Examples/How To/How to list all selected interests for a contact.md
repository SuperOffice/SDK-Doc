<properties date="2016-05-11"
SortOrder="3"
/>

The following document tells us how we can make use of the NetServer 3.0 and list all selected interests for a specific Contact.

In order to retrieve a list of selected interests for a Contact we have use of the ContactInterestHelper class. It is also possible to use the PersonInterestHelper class to do the above as well. The helper classes provides the functionality that combines the MDO lists and what is actually selected, i.e. they combine entity sub collections with MDO lists.

```
using SuperOffice;
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Lists;
 
using (SoSession newSession = SoSession.Authenticate("sam", "sam"))
{
      //Retrieve a Contact Based on the Contact ID
      Contact newContact = Contact.GetFromIdxContactId(10);
 
      //Get the list of heading items that are currently selected,
// i.e.,  have link rows to the parent entity.
      List<ISoListHeading> newLstHdItms =
newContact.InterestHelper.SelectedHeadingItems;
 
      //Get the list of root items that are currently selected,
// i.e., have link rows to the parent entity.
      List<ISoListItem> newLstItms =
newContact.InterestHelper.SelectedRootItems;
}
```

 

In the code above once we have created an instance of the Contact entity by using the Contact class we have use the Contact’s InterestHelper to retrieve the selected interests. As shown above we can retrieve the interest in two was, i.e. either by using the SelectHeadingItems property or SelectRootItems property as shown.

 

------------------------------------------------------------------------

[How to set an interest on or off for a contact](How%20to%20set%20an%20interest%20on%20or%20off%20for%20a%20contact.md)

[How to add a new contact interest](How%20to%20add%20a%20new%20contact%20interest/How%20to%20add%20a%20new%20contact%20interest.md)
