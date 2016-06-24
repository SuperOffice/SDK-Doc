<properties date="2016-06-24"
SortOrder="12"
/>

The MDOAgent provides a very different API than that of the ListAgent. This API provides us with a set of methods that can be used to build the list that we want. The methods in this API do not focus on one particular list, but can be used to retrieve any list we want. Below is an example that shows how we may use the GetSelectableList method.

An important point to remember!

MDOAgent also return the list grouped and filtered according to how they are defined in SOAdmin (MDO mode).  

```
using SuperOffice.CRM.Services;
using SuperOffice;
 
using (SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
      //get the MDO agent
      using(MDOAgent mdoAgent = new MDOAgent())
      {
          //retrive a list you wish and you can use the parameter to specify
          //how the list should look like
          SelectableMDOListItem[] countryList =
          mdoAgent.GetSelectableList("country", false, "", false);
          //add the display coloumn you want to the control
          foreach (SelectableMDOListItem selectableItem in countryList)
          {
                cmbCountry.Items.Add(selectableItem.Name);
          }
      }
}
 
```

By using the other parameters we can specify how we want the list to appear and whether we want any other extra information. Here we can see that the returned object is not a specific entity likes that of in the ListAgent methods. The second parameter in the method can be used to force a fat list without the groupings. The third parameter can be used to specify any additional information that we may want and get the returned list based on the additional information. For example the below line will return us a list of persons for the given contact ID.

```
SelectableMDOListItem[] personList = mdoAgent.GetSelectableList("person", false, "contact_id=4" , false);
```

 

The third parameter can be used to get only the history items. Below are some of the methods that exist in the API.

* GetSelectableList
* GetList
* GetListWithHistory
* GetListWithRestriction
* GetSelectableListWithHistory
* GetSelectableListWithRestriction

As we can see from the above list the methods don’t point to one single list. They are general methods that can be used to retrieve any list that we want and the advantage here is that we do not have to depend on the NetServer way of retrieving the list but we can decide on how the list should look like. Below are some examples that use few of the methods that are listed above.

```
using SuperOffice.CRM.Services;
using SuperOffice;
 
using (SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
      //get the MDO agent
      using(MDOAgent mdoAgent = new MDOAgent())
      {
          //retrive a selectable list with a restriction
          SelectableMDOListItem[] countryList = mdoAgent.GetSelectableListWithRestriction("country", "", "A");
          //add the display coloumn you want to the control
          foreach (SelectableMDOListItem selectableItem in countryList)
          {
                cmbCountry.Items.Add(selectableItem.Name);
          }
      }
}
```

 

Here we retrieve the country list according to a restriction that we have set. In this case we have told NetServer to give us all the countries that starts with letter A.
