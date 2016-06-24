<properties date="2016-06-24"
SortOrder="11"
/>

As the name implies the ListAgent is the agent that provides us with all the named lists. This agent API consists of methods that are named the same as the list that is returned by the method. The advantage of using this agent is that it is very straight forward to use since all we have to do is choosing the correct method, and then the method will return us the list with no added work. Below are some of the methods that this API provides.

* GetCountries
* GetBusinesses
* GetCategories
* GetCrediteds
* GetCurrencies
* GetDepartments
* GetProjectTypes
* GetReasons

The above list is an example of one type of methods that this API provides. There is another type of methods that this API provides and they are methods which we can retrieve a single entry of a given list by providing the unique identifier of the list as a parameter. For example we can get a specific country by using the method GetCountry and providing the country ID as the parameter. Below is a list of such methods that corresponds to above list of methods.

* GetCountry
* GetBusiness
* GetCategory
* GetCredited
* GetCurrency
* GetDepartment
* GetProjectType
* GetReason

All of the above methods accept the unique identifier of each as the parameter. We can put these methods to good use when we want a single entry as a selectable item. Below is an example that uses both kind of methods that exists in the API.

 

 

 

 

```
using SuperOffice.CRM.Services;
using SuperOffice;
 
using (SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    //create a ListAgent agent
    using(ListAgent listAgent = new ListAgent())
    {
        //retrive the list you want using the specific method
        Reason[] reasonList = listAgent.GetReasons();       
        //add the display coloumn you want to the control
        foreach (Reason reasonRow in reasonList)
        {
            cmbReason.Items.Add(reasonRow.Value);
        }
        //retrive a single reason
        Reason reasonSingel = listAgent.GetReason(1);
        //show the value of the reason entry in a text box
        txtReason.Text = reasonSingel.Value;
    }
}
```
