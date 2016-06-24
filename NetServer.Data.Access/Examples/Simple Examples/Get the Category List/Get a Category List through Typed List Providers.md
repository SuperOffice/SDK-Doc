<properties date="2016-05-11"
SortOrder="8"
/>

 

In the SoList class there are specific methods to create different types of List Providers. Hence there is a method specialized in creating Category List Providers too. The following example shows how to get a Category List using Typed List Providers.

```
using SuperOffice;
using SuperOffice.CRM.Lists;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    ISoListProvider categoryList = SoLists.GetCategoryList();
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

 

By using the CategoryList() method defined in the SoList class you can obtain a CategoryList provider. There are three different items present in the CategoryList Provider. They are HeadingItems, HistoryItems and RootItems. Each of these items contains its own properties and in this example we have used only the Id and the Name properties. The HistoryItems are defined in the history table with its table\_Id field refering to the conceptual table Id of the category table. Unless the MDO mode of the Contact list is turned on, no record will be added to the history table. The RootItems are defined by the records in the category table only if the MDO mode is set to false. If the MDO mode is set to true then the RootItems contain only the items that have not been assigned to any Heading. Normally all the HeadingItems are taken directly from the heading table. 

Output of the example

 <img src="../Get%20the%20category%20list_files/image001.jpg" width="398" height="215" /> 
