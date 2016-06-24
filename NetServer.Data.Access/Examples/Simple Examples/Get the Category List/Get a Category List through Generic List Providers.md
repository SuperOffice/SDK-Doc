<properties date="2016-05-11"
SortOrder="9"
/>

 

 

```
using SuperOffice;
using SuperOffice.CRM.Lists;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    ISoListProvider categoryList =
SoListProviderFactory.Create("category");
    //Retrieving the History items of the AssociateList
    if (categoryList.HistoryItems.Count > 0)
    {
        foreach (ISoListItem item in categoryList.HistoryItems)
        {
            string historyString;
            historyString = item.Id + " " + item.Name;
            HistoryListView.Items.Add(historyString);
        }
    }
    //Retrieving the HeadingItems of the AssociateList    
    if (categoryList.HeadingItems.Count > 0)
    {
       foreach (ISoListHeading item in categoryList.HeadingItems)
       {
           string headingString;
           headingString = item.Heading.Id + " " +
item.Heading.Name;
           HeadingListView.Items.Add(headingString);
       }
    }
    //Retrieving the RootItm
    if (categoryList.RootItems.Count > 0)
    {
       foreach (ISoListItem item in categoryList.RootItems)
       {
           string rootString;
           rootString = item.Id + " " + item.Name;
           RootListView.Items.Add(rootString);
       }
    }
}
```

 

By passing correct parameters to the Create() method of the SoListProviderFactory, you can create a CategoryList. The Create() method has seven overloads providing a typed, customized interface for each list. In the example above, we have passed the name of the list needed (i.e. category).  The way how RootItems, HeadingItems and HistoryItems are defined is consistent for all the Generic Lists. All RootItems are taken for the corresponding table. Hence here the RootItems are taken from the category table. If the MDO mode of the Category list is turned on, then some records may be present in the history table corresponding to the category list so that the history list may be nonempty. Similarly if the heading table contains records corresponding to the Category list, then the HeadingItems of the Category list will also be nonempty.

 

 

 

 

 
