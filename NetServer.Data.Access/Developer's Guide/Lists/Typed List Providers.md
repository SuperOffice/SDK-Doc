<properties date="2016-05-11"
SortOrder="85"
/>

 

TypedListProviders are the specific List Providers that can be directly created using the SoLists class. You can create various types of ListProviders using the SoList class. The behavior of TypedListProviders does vary, this is the main reason why there are specific methods to create each TypedListProvider. Each TypedListProvider has three different types of items. They are HeadingItems, HistoryItems and RootItems. For Typed List Providers the way each item is defined can differ, and therefore the Typed List Providers are specialized for their functionality. The following example shows how to create a Typed List Provider.

 

```
using SuperOffice;
using SuperOffice.CRM.Lists;
 
using(SoSession newSession = SoSession.Authenticate("SAL0", ""))
{
    //Retrieve a typed list prpovider of type Associate
    ISoListProvider mdoProvider = SoLists.GetAssociateList();
    //Check whether it contains any history items
    if (mdoProvider.HistoryItems.Count > 0)
    {
        //if it contains any display them in the HistoryListView
        foreach (ISoListItem item in mdoProvider.HistoryItems)
        {
            string historyString;
            historyString = item.Id + " " + item.Name;
            HistoryListView.Items.Add(historyString);
        }
    }
    //Check whether it contains any heading items
    if (mdoProvider.HeadingItems.Count > 0)
    {
        //Display the heading items in the HeadingListView
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
        //Display root items in the RootListView
        foreach (ISoListItem item in mdoProvider.RootItems)
        {
            string rootString;
            rootString = item.Id + " " + item.Name;
            RootListView.Items.Add(rootString);
        }
    }
 
}

 
```

Here we create an Associate List Provider by using the GetAssociateList() method of the SoList class.  Each item in a List has a set of properties, and we have retrieved only two of these properties which are Name and Id.

The history items are defined in the History table with the table Id field referring to the table Id of the Associate table. When a particular list has its MDO mode turned on then if any item is selected from that list, a record will be added to the History table. Hence every list doesn’t have history items. If its MDO mode is turned off by the Admin client then the history items of that list will be empty.

The Root items are defined by the records in the corresponding table only if the MDO mode is set to false. If the MDO mode is set to true then Root Items contain just items that have not been assigned to a heading. This is why the root items may be empty.

Generally all the Heading Items are taken directly from the heading table. If a particular list doesn't have a record in the Heading table, then it will not have any Heading Item. A heading with no items in it will be hidden. A heading must have items in order to be included. But the behavior of the TypeList Providers does differ from one another, and therefore the history, heading and root items may be different. For example, heading items of the associates are defined in the UserGroup table. Hence in the above example the heading items are taken from the UserGroup table. 

 

 

 

An Important point to remember!

The ListName generally corresponds to a conceptual table in the database; however, some tables have multiple lists associated with them. For example an associate can be viewed as an associate list, a resource list, or both. And also some lists do not correspond to tables at all, or hybrids of tables and hard-coded values.
