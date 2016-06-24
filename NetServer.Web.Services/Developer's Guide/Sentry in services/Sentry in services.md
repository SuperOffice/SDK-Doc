<properties date="2016-06-24"
SortOrder="5"
/>

As the name implies sentry acts as the watch dog that keeps an eye on all the access to data in the SuperOffice database.

In SuperOffice the security is based on Roles so all the user of SuperOffice belongs to a Role. The different roles have different levels of rights to access the data in the database so Sentry is the mechanism that ensures that these levels get the proper data access. The levels of data access rights in SuperOffice are as follows.

* None
* Read
* Create
* Update
* Delete

 

Here None means that the user does not have any rights to the data, Read means that the user can read the data, Create means the user can create rows in a table, Update means the user can update the data and Delete means the user can delete the data. If a user has the right to delete a data item that means that user has the right to Read, Create and Update the data. If the user has the right to update the user will have the rights to create and read as well.

The role defines what rights he has to the data that he owns, data owned by other associates in his primary user group and to associates of the other user groups he belongs to. It also defines what rights he has to data that belong to other associates outside his user groups and external users/anonymous users. All the users of the SO CRM application must have a role. The rights to each data item will be determined by these roles so that means there is a mechanism in place to protect access to data.

```
using SuperOffice;
using SuperOffice.CRM.Services;
 
using (SoSession mySession = SoSession.Authenticate("sal0", ""))
{
    //get the contact agent
    using(ContactAgent contactAgent = new ContactAgent())
    {
        //retrive the entity you want
        ContactEntity myEntity = contactAgent.GetContactEntity(4);
        //check to see the logged in user have rights to the field that you
        //are about to modify
        if (myEntity.FieldProperties["department"].FieldRight.IsActive)
        {
              //change the department
              myEntity.Department = "Sales";
              //save the entity
              contactAgent.SaveContactEntity(myEntity);
        }
    }
}
```

 

In the above code we are using the sentry mechanisms that are provided in NetServer services. In the NetServer service layer the sentry information is provided in two properties

* FieldProperties
* TableRight  

 

1. autolist
