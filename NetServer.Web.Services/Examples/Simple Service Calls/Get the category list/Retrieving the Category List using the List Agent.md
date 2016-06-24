<properties date="2016-06-24"
SortOrder="7"
/>

Retrieving the Category List using the List Agent
=================================================

```
using SuperOffice;
using SuperOffice.CRM.Services;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    //get the list agent
    using(ListAgent listAgent = new ListAgent())
    {
        //retrive the category list using the methods of the agent
        Category[] catList =  listAgent.GetCategories();
        //loop through the list and output the value to the console
        foreach (Category item in catList)
        {
              if (item != null)
              {
                    Console.WriteLine(item.Value);
              }
        }
    }
}
```

 

Here we have used the list agent to retrieve the category list. In the list agent we will get specific methods to retrieve the lists that have been exposed by the NetServer. Like the list agent returns an array of Category objects rather than general MDOListItems. However, the Category objects have no means of grouping the items into headings. It is always just a simple list of items.
