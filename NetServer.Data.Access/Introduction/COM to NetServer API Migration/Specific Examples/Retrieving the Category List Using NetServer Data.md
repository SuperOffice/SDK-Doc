<properties date="2016-05-11"
SortOrder="46"
/>

Found in the SuperOffice.CRM.Lists namespace, use the static SoLists.GetCategoryList() method to retrieve an ISoListProvider instance. With the ISoListProvider type, it is easy to loop over the list items and retrieved Category names.

```
using SuperOffice;
using SuperOffice.CRM.Rows.Util;
using SuperOffice.CRM.Rows;
using SuperOffice.CRM.Data;
using SuperOffice.Data;;
 
using (SoSession mySession = SoSession.Authenticate("sam", "sam"))
{
    //Instantiation of the List Provider
    ISoListProvider newCatList = SoLists.GetCategoryList();
 
    if (newCatList.RootItems.Count > 0)
    {
        Console.Write("ID" + "\t\t\t" + "Category");
        Console.WriteLine();
 
        //Retrieving the items in the list
        foreach (ISoListItem item in newCatList.RootItems)
        {
            Console.Write(item.Id + "\t\t\t" + item.Name);
            Console.WriteLine();
        }
    }
}
```

Below is the result from both the COM and NetServer code examples.

```
ID   Category
4 Samarbeidspartner
5 Tapt kunde
6 Konkurent
1 Kunde
7 SaleItem 1
8 SaleItem 2
2 Potensiell kunde
10 MarketingItem 2
```
