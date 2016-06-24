<properties date="2016-05-11"
SortOrder="7"
/>

Now that we have taken good look at the Associate List, now let’s look at the Associate Cache. The Associate Cache provides the same list as the Associate List, but the Associate Cache is pulled from the cache as opposed to the associate list which is pulled from the database. The associate cache is a very good resource to use if your application is a performance critical application since pulling data from the cache is much faster than pulling data from the database.

First let’s look at how we can retrieve the associate list from the cache.

```
using SuperOffice.CRM.Cache;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
AssociateCache assoCache = AssociateCache.GetCurrent();
}
```

 

Here when you get the associate cache through the GetCurrent method of the AssociateCache class it will return an object of type AssociateCache populated with current associates that are listed in the SuperOffice database. The returned list of associates will be categorized to the following list of categories.

* Associate Names – the list of names of the current associates.
* Associate Persons – the list of persons that are associates.
* Associates – the list of associates with all there information.

The returned object type AssociateCashe implements a lot of methods that you can use in manipulating the returned list of associates. Below is some of the vital methods that this class implements.

* GetAssociate
* GetAssociateContact
* GetAssociateFirstName
* GetAssociateFullName
* GetAssociatePersonId
* IsAssociateRetired
* IsPersonAssociate
* ValidateAndTestAssociate

The above are some of the methods that the class implements. There are more, but a explanation on all of them are beyond the scope of this section. The example below shows how some of these methods can be used.

 

```
using SuperOffice.CRM.Cache;
using SuperOffice.CRM.Rows;
using(SuperOffice.SoSession session =
SuperOffice.SoSession.Authenticate("SAL0", ""))
{
AssociateCache assoCache = AssociateCache.GetCurrent();
     //get the full details of the associate ID 4 as a Associate
Row object
     AssociateRow assoRow = assoCache.GetAssociate(4);
     //get the full details of the contact of associate ID 4 as a
Contact Row object
     ContactRow assoContact =  assoCache.GetAssociateContact(4);
     //get the first name of the associate ID 4 as a string
      string assoFirstName = assoCache.GetAssociateFirstName(4);
     //get the full name of the associate ID 4 as a string
     string assoFullName = assoCache.GetAssociateFullName(4);
      //get the person ID of the associate ID 4 as a int
     int assoPersonID = assoCache.GetAssociatePersonId(4);
      //check the associate ID 4 is retired or not this will return
bool value
      //true if the associate is retired and false otherwise
     bool isRetired = assoCache.IsAssociateRetired(4);
     //check the person ID 5 to see if the person is a associate
this will return
      //true if the person is a associate and false otherwise
      bool isAssociate = assoCache.IsPersonAssociate(5);
      //this method will check if the associate ID 4 actually
exists this will
      //return true if the associate exists and false otherwise
      bool isAssoExists = assoCache.ValidateAndTestAssociate(4);
}
```

 

The above code snippet shows the use of some of the methods that exists in the AssociateCache object. Using methods like above you can get some very vital information of the associates that are listed in the SuperOffice database from the cache without going to the database.

 

 

 
