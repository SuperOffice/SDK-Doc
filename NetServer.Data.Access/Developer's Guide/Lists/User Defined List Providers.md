<properties date="2016-05-11"
SortOrder="86"
/>

It is possible for users to define their own fields and tables. If you need to create a list for a user defined field or table it is done via a User Defined List Provider. The following example demonstrates how this is done.

 

```
using SuperOffice;
using SuperOffice.CRM.Lists;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
 
    //Retrieve a userDifined list provider
    ISoListProvider mdoProvider = SoLists.GetUserDefinedList(4);
 
 
//Check whether it contains any history items
    if (mdoProvider.HistoryItems.Count > 0)
    {
      //Display the History Items
        foreach (ISoListItem item in mdoProvider.HistoryItems)
        {
            string historyString;
            historyString = item.Id + " " + item.Name;
            HistoryListView.Items.Add(historyString);
        }
    }
//Check whether it contains any Heading items
    if (mdoProvider.HeadingItems.Count > 0)
    {
      //Display the Heading Items
        foreach (ISoListHeading item in mdoProvider.HeadingItems)
        {
            string headingString;
            headingString = item.Heading.Id + " " +
item.Heading.Name;
            HeadingListView.Items.Add(headingString);
        }
    }
//Check whether it contains any Root items
    if (mdoProvider.RootItems.Count > 0)
    {
      //Display the Root Items
        foreach (ISoListItem item in mdoProvider.RootItems)
        {
            string rootString;
            rootString = item.Id + " " + item.Name;
            RootListView.Items.Add(rootString);
        }
    }
}

 
```

When creating a list for a user defined table/field we have to give the Id of the list we need.

Thus udlist requires an integer id to identify which of the multiple lists in that table should be created. The behavior of this list provider differs from the rest only by the fact that it searches the udlist instead of the conceptualtable to retrieve lists. In the above example we have created a user defined list for the user defined List with id 4. With the Udlist provider we are capable of retrieving the Historyitems, Headingitems and Rootitems if that list has any.

 
