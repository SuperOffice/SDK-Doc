<properties date="2016-06-24"
SortOrder="7"
/>

The TableRight property on the other hand focuses on the table as a whole. It has mechanisms to determine whether the logged in user has the rights to the table. A typical use of this property is imagine you have a full form of fields that are of Contact information. If a particular user logging in does not have the rights to change data you can make all the fields disable. Below is an example that demonstrates the use of this property.

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
        //check to see if the user has the right to update the table.
        //if not disable the data fields
        if (!myEntity.TableRight.HasUpdate)
        {
              txtBusiness.Enabled = false;
              txtCategory.Enabled = false;  
        }
    }
}
```

 

Here we have used the table right property to check whether the user has the sufficient right to the table if he does not have we don’t let him update the data. It’s easier to check the rights of the table than checking each field if you are trying to restrict updates to an entire table, since it is easy checking the right of the table than checking each field by field.

 

An important point to remember!

If you let the user do some operation that the user does not have proper rights to, NetServer will throw errors so it is always good to check for data rights before we let a user do some operation.
