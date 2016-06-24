<properties date="2016-05-11"
SortOrder="70"
/>

 

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using(SuperOffice.SoSession mySession =
SuperOffice.SoSession.Authenticate("SAL0", ""))
{
    //Retriving a Sale using the index of a Sale
    Sale newSale = Sale.GetFromIdxSaleId(2);
 
    //Retrieving a Person Entity
    Person newPerson = Person.GetFromIdxPersonId(25);
 
    //Updating Person Entity Basic properties
    newPerson.Firstname = "Jessica";
    newPerson.Lastname = "Alba";
 
    //Updating Person Entity properties which are of Row type
    BusinessRow newBusiness = BusinessRow.GetFromIdxBusinessId(9);
    newBusiness.Name = "New Business";
    newPerson.Business = newBusiness;
 
    //Updating Person Entity properties which are Entities itself
    Contact newContact = Contact.CreateNew();
    newContact.Name = "John Stevens";
    URLRow newUrls = URLRow.CreateNew();
    newUrls.UrlAddress1 = "www.SuperOffice.com/test";
    newContact.Urls.Add(newUrls);
    newContact.Row.Number1 = "SA-147258";
    if (newContact.IsDirty == true)
    {
       //Assigning the Contact to the Person
       newPerson.Contact = newContact;
    }
 
    //Updating Person Entity porperty which is of Rows type
    EmailRow newEmails = EmailRow.CreateNew();
    newEmails.EmailAddress = "jessica@stars.com";
    newEmails.Description = "Jessica's Email";
    newPerson.Emails.Add(newEmails);
 
    //Assigning the Person property to the Sale
    newSale.Person = newPerson;
 
    if (newSale.IsDirty == true)
    {
       //Saving the Sale Entity
       newSale.Save();
    }
}

 
```

Here a Business Row has being created and its values have being modified. This is then assigned to the Person Entity’s Business property.

The next section of the code shows you how to update a property of the Person Entity which in itself is another Entity. Here we create a new instance of the Entity and assign values to its properties. In this instance the IsDirty property of the modified contact is used to check whether any modifications actually took place and if so only to assign it to the Person Entity’s Contact property.

Emails property of the Person Entity may consist of any amount of Emails Addresses which the person possesses. The Emails property consists of data which are of EmailRow type. Therefore an instance of EmailRow type has to be created, after which values are assigned to it which is then assigned to the Emails Property of the Person Entity.

 

In this scenario as well with the use of the Save() method when the Sale entity has being saved all other relevant Entities and Rows will also be saved in the respective database tables.

 
