<properties date="2016-05-11"
SortOrder="88"
/>

The providers that were mentioned so far are specialized for particular tasks. When you need to create lists that have a similar behavior you can use the Generic List Provider. 

The following example shows how Generic List Providers are used to create lists.

 

```
using SuperOffice;
using SuperOffice.CRM.Lists;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    string[] listsToTest = new string[] {
    "Category",
    "Task",
    "Country",
    "Person",
    };
    //Create a provider of Catergory,Task,Country and Person
    foreach (string list in listsToTest)
    {
        ISoListProvider mdoProvider =
SoListProviderFactory.Create(list, "0");
        //Display all the History Items of each list provider in
the HistoryListView
        if (mdoProvider.HistoryItems.Count > 0)
        {
            foreach (ISoListItem item in mdoProvider.HistoryItems)
            {
                string historyString;
                historyString = item.Id + " " + item.Name;
                HistoryListView.Items.Add(historyString);
            }
        }
        //Display all the Heading Items of each list provider in
the HeadingListView
        if (mdoProvider.HeadingItems.Count > 0)
        {
            foreach (ISoListHeading item in
mdoProvider.HeadingItems)
            {
                string headingString;
                headingString = item.Heading.Id + " " +
item.Heading.Name;
                HeadingListView.Items.Add(headingString);
            }
        }
        //Display all the Root Items of each list provider in the
RootListView
        if (mdoProvider.RootItems.Count > 0)
        {
            foreach (ISoListItem item in mdoProvider.RootItems)
            {
                string rootString;
                rootString = item.Id + " " + item.Name;
                RootListView.Items.Add(rootString);
            }
        }
    }
}

 
```

In the former sections we discussed how to create Lists that differ from one another. Those lists have their own providers. But some lists have the same output and almost the same behavior, that’s where generic SoList providers come to play. SoListProviderFactory will create a SoList provider of the correct type according to the parameters passed. 

In the SoListProviderFactory, there are 8 overloaded Create functions providing a typed, customized interface for each list.

In the above example we are passing the values to the listname and additionalinfo parameters of the Create() method. According to the listname and additionalinfo parameters the type of the provider needed is decided. Here we are creating three lists, namely Category list, Task list and Country list. 
