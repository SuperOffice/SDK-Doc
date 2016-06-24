<properties date="2016-06-24"
SortOrder="9"
/>

In NetServer a list is a set of data presented as an object that can be directly bound to any control which supports lists. The advantage is that we do not have to construct the list, all we have to do is call a NetServer method, and then we can get the list made exactly the way it is wanted. This saves us a lot of time and we don’t have to do the complex things that involve in building up a list like this all by ourselves. The below example demonstrates how we can show the data in a combo box using the NetServer provided lists.  

```
using SuperOffice.CRM.Services;
using SuperOffice;
 
using (SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    //create a IListAgent agent
    using(ListAgent listAgent = new ListAgent())
    {
        //retrive the list you want using the specific method
        Country[] countryList = listAgent.GetCountries();
        //add the display coloumn you want to the control
        foreach (Country countryRow in countryList)
        {
            cmbCountry.Items.Add(countryRow.EnglishName);
        }
    }
}
```
