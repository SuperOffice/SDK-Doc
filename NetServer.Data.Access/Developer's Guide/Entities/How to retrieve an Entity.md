<properties date="2016-05-11"
SortOrder="51"
/>

When retrieving an Entity, either by using the GetFromIdx function or the CustomSearch, it retrieves the data from the database and temporality stores them in the instance. This instance can be used to manipulate the data which will not affect the data in the database unless it is intentionally saved using the Save() method.

The following example explains the use of the “Idx……” function to retrieve an Entity.

 

```
using SuperOffice.CRM.Entities;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    //Retrieving a Property of PersonEntity
    Person newPerson = Person.GetFromIdxPersonId(20);
    string personName = newPerson.Firstname;
}
```

 

As stated earlier this layer exposes us to Entity collections as well. In order to retrieve such a Collection as well we may use the “Idx….” function.

 

```
using SuperOffice;
using SuperOffice.CRM.Entities;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    //Retrieving a Property of PersonEntity
    PersonCollection personCollection =
PersonCollection.GetFromIdxFirstname("Linda");
    string[] perFirstName = new string[personCollection.Count];
    int i = 0;
    foreach (Person getPerson in personCollection)
    {
        //Retriving First and Last names from the     Collection
        perFirstName[i] = getPerson.Firstname + " " +
getPerson.Lastname;
        i = i + 1;
    }
}

 
```

Here we use the GetFromIdxFirstname function in order to retrieve a Collection of Person Entities that has the Firstname as “Linda”.

Another method of retrieving Entities or Entity Collections is with use of CustomSearch class. However in order to use the CustomSearch class we need to use the following namespaces i.e. SuperOffice.CRM.Rows, SuperOffice.CRM.Data and SuperOffice.Data in addition to the SuperOffice.CRM.Entities namespace.

 

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
using SuperOffice.CRM.Data;
using SuperOffice.Data;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    PersonCollection.CustomSearch newSearch = new
PersonCollection.CustomSearch();
    PersonTableInfo pTable = newSearch.TableInfo;
    newSearch.Restriction = pTable.ContactId.Equal(S.Parameter(5));
    PersonCollection perColl =
PersonCollection.GetFromCustomSearch(newSearch);
    string[] perFirstName = new string[perColl.Count];
    int i = 0;
    foreach (Person per in perColl)
    {
        //Retriving First and Last names from the Collection
        perFirstName[i] = per.Firstname + " " + per.Lastname;
        i = i + 1;
    }
}

 
```

Here we have first created an instance of the CustomSearch class which we are using to retrieve a Person Collection Entity. Then we create a cache of the Person table and using the restriction clause we have restricted the number of rows that are stored in cache table. The cache table can be used as there after to retrieve any information required.
