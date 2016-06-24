<properties date="2016-05-11"
SortOrder="10"
/>

Under the Lists categorization, the following classes can be added. AssociateCache, CategoryCache, MDOListTableCache, PriorityCache, ProbCache and RedLetterDayCache.

The following is an example of how we may use the different classes grouped as Lists relating to caching.

```
using SuperOffice.CRM.Rows;
using SuperOffice.CRM.Cache;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAM", "sam"))
{
      //Retrieve the Category from the cache
      CategoryCache newCatCache = CategoryCache.GetCurrent();
     
      //Using of methods which are available in the Category Cache
      string catName = newCatCache.GetNameFromId(2);
      CategoryRow myCat = newCatCache.GetRowFromId(2);
 
      //Retrieve a property of a catergory which are in the cache
      string myCatName = myCat.Name;
 
      //Modifying values in the CategoryCache
      myCat.Name = "Tester";
      myCat.Save();
                 
      //Disposes the cache
      newCatCache. Dispose();
}
```

 

The aim of the above example is to retrieve the current instance of the Category Cache. For this we use the GetCurrent() method. Once the instance is retrieved, we may access the information in cache and update it as shown above. Once the cache has being update, the database will be updated accordingly. It should be noted that when updating values of the cache the relevant row should be retrieved first. Once the row is retrieved, we may update it in similar manner as when we update row types exposed in NetServer.

See Also:

[Rows Description and Example](../Rows/Rows.md)
Though we have made use of the Dispose() method it is not necessary to explicitly call the Dispose() method since the Caches implements the IDisposable interface which releases allocated unmanaged resources.
