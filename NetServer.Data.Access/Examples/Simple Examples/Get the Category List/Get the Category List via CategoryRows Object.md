<properties date="2016-05-11"
SortOrder="11"
/>

 

CategoryRows are defined under SuperOffice.CRM.Rows namespace. You can even get a Category List via the CategoryRows object. The intention of the following example is to explain how it is done.

```
using SuperOffice.CRM.Rows;
using SuperOffice.Data;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
 
CategoryRows.CustomSearch mySearch = new
CategoryRows.CustomSearch();
      //Add a Search Restriction to make sure that only the rows
with the Field Deleted = 0 will be returned
      mySearch.Restriction = mySearch.TableInfo.Deleted.Equal (
S.Parameter( 0 ) );
 
     //Retrieve CategoryRows through CustomSearch
     CategoryRows myResult = CategoryRows.GetFromCustomSearch(
mySearch );
                    //Display the CategoryID and the Name on the
ListView
     foreach (CategoryRow row in myResult)
     {
            ListView.Items.Add(row.CategoryId + " " + row.Name);
     }
 
}
```

 

We have first created an instance of the CustomSearch class. Through this we are trying to retrieve all the category rows which are not deleted. In this example we are simply retrieving a list of Categories. You can even group those categories according to their headings by adding more restrictions to the CustomSearch instance. The above example is a very simple demonstration of how a Category List is obtained via CategoryRows object; you can even enhance it according to your requirement.
