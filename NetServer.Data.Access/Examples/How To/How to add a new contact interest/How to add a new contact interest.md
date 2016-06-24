<properties date="2016-05-11"
SortOrder="4"
/>

The following document tells us how we can make use of the NetServer 3.0 and adding a new Contact interest.

An important Point to remember!

This is not the same as setting an existing interest on. Here what we are doing is that of a new interest to the already existing list of interests.

1. autolist

When adding a new Contact Interest new rows should be added to a number of tables such as ContInt, ContactInterest, ConIntGroupLink and the ContIntHeadingLink table. The code segment below shows us how we can do this. We have made use of the SuperOffice.CRM.Rows namespace.

```
using SuperOffice;
using SuperOffice.CRM.Rows;
 
using (SoSession newSession = SoSession.Authenticate("sam", "sam"))
{
      //Retrieve a Contact
      Contact newContact = Contact.GetFromIdxContactId(10);
 
      //Create a new ContIntRow. Each row represents one row in the
ContInt table.
      ContIntRow newConInt = ContIntRow.CreateNew();
      newConInt.SetDefaults();
      newConInt.ElementType = MDOListElementType.SubNode;
      newConInt.Name = "Sams Interest";
      newConInt.Tooltip = "Sams Interests";
      newConInt.Save();
 
      //Create a New ContactInterestRow. Each row represents one
row in the ContactInterest table.
      ContactInterestRow newconIntRw =
ContactInterestRow.CreateNew();
      newconIntRw.SetDefaults();
      newconIntRw.CinterestIdx = newConInt.ContIntId;
      newconIntRw.ContactId = newContact.ContactId;
      newconIntRw.EndDate = DateTime.MaxValue;
      newconIntRw.StartDate = DateTime.MinValue;
      newconIntRw.Save();
 
      //Create a new ContIntGroupLinkRow. Each row represents one
row in the ContIntGroupLink table.
      // You would need to create a new row for each group that you
require the interest to be visible for.                  
      ContIntGroupLinkRow newContGrpLink =
ContIntGroupLinkRow.CreateNew();
      newContGrpLink.SetDefaults();
      newContGrpLink.ContIntId = newConInt.ContIntId;
      newContGrpLink.GroupId = SoContext.CurrentPrincipal.GroupId;
      newContGrpLink.Save();
                                             
      //Since the ContInt is defined as a SubItem, we need to give
a header to fall under.
      //for this we create a new ContIntHeadingLinkRow. Each row
represents one row in the ContIntHeadingLink table.                
 
      ContIntHeadingLinkRow newContHeadingRow =
ContIntHeadingLinkRow.CreateNew();
      newContHeadingRow.SetDefaults();
      newContHeadingRow.ContIntId = newConInt.ContIntId;
      //looking up and assigning the heading Id.                   
      newContHeadingRow.HeadingId =
newContact.InterestHelper.HeadingItems[0].Heading.Id;
      newContHeadingRow.Save();
}
```

 

What we have done first is to create ContIntRow using the CreateNew() method and assign values to its properties and then saved it using the Save() method available in the ContIntRow class.

Next we have created a ContactInterestRow using a similar approach as above. We have assigned the earlier created ContIntRow id to the ContactInterestRow’s CinterestIdx. We have also assigned the ContactId property to the id of Contact as well. Once this row has been saved we move onto creating a ContIntGroupLinkRow.

What we have done here is that assigned the group id of the currently logged in Associate. But if you wish to add multiple groups for which the contact interest will be visible for, the following code segment may be useful.

```
int[] groupIds = { 2, 3, 4, 5, 6 };
ContIntGroupLinkRows newContGrpLinkRows =
ContIntGroupLinkRows.GetFromIdxContIntId(newConInt.ContIntId);
foreach (int groupId in groupIds)
{
      ContIntGroupLinkRow newContGrpLinkRow =
newContGrpLinkRows.AddNew();
      newContGrpLinkRow.SetDefaults();
      newContGrpLinkRow.GroupId = groupId;
      newContGrpLinkRow.Save();
}
```

 

Finally we need to create a ContIntHeadingLinkRow. This is necessary because the ContInt is defined as a sub-item, we would need to create a heading for under which it should fall. This is done using the CreateNew() method available in the ContIntHeadingLinkRow class and assigning values to its properties.

------------------------------------------------------------------------

[How to set an interest on or off for a contact](../How%20To%20set%20an%20interest%20on%20or%20off%20for%20a%20contact.md)

[How to list all selected interests for a contact](../How%20To%20list%20all%20selected%20interests%20for%20a%20contact.md)
