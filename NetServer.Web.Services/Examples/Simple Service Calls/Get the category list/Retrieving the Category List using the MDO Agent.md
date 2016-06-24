<properties date="2016-06-24"
SortOrder="6"
/>

Retrieving the Category List using the MDO Agent
================================================

```
using SuperOffice;
using SuperOffice.CRM.Services;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    //get the MDO agent
    using(MDOAgent mdoAgent = new MDOAgent())
    {
        MDOListItem[] catagoryList =
        mdoAgent.GetSimpleList("category");
        //loop through the retrived list and output them on the console
        foreach (MDOListItem item in catagoryList)
        {
              Console.WriteLine(item.Name);
        }
    }
}
```

 

The example above shows how we can use the GetSimpleList() method available through the MDOAgent to retrieve the category list. The method requires the name of the list to
