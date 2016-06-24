<properties date="2016-05-11"
SortOrder="69"
/>

The Sale Entity contains properties which in itself is an Entity, like Contact and Person properties. These properties consist of different properties which could be of different data types such as String, Double, Integer, Row, DateTime and many more.

 

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    //Retriving a Sale using the index of a Sale
    Sale newSale = Sale.GetFromIdxSaleId(2);
 
    //Updating a Contact Entity property through a Sale     Entity
    newSale.Contact.Name = "Name Changed 2";
 
    newSale.Contact.OrgNr = "SA-5454545";
 
    //Creating a Row and assigning it to the Sale Entity and     
modifying its values
    BusinessRow newBusinessRw =
BusinessRow.GetFromIdxBusinessId(10);
    newSale.Contact.Business = newBusinessRw;
    newSale.Contact.Business.Name = "New Business 2";
    newSale.Contact.Business.Tooltip = "New Tool tip";
 
    //Creating a Row Collection and assigning it the Sale   Entity
and modifying its vlues
    PhoneRow newPhoRow = PhoneRow.CreateNew();
    newPhoRow.PhoneNumber = "987654321";
    newPhoRow.Description = "Testing Method 2";
    int posPhoRow = newSale.Contact.Phones.Add(newPhoRow);
    newSale.Contact.Phones[posPhoRow].PhoneNumber = "5555555555";
    newSale.Contact.Phones[posPhoRow].Description = "Testing
methods    2B";
 
    //Creating an Entity and assigning it to the Sale Entity     
and modifying it values
    Person newPers = Person.CreateNew();
    int posPersonRow = newSale.Contact.Persons.Add(newPers);
    newSale.Contact.Persons[posPersonRow].Firstname = "Will";
    newSale.Contact.Persons[posPersonRow].Lastname = "Turner";
    URLRow newUrl = URLRow.CreateNew();
    int posURLRow =
newSale.Contact.Persons[posPersonRow].Urls.Add(newUrl);
   
newSale.Contact.Persons[posPersonRow].Urls[posURLRow].UrlAddress1 =
"www.testSuperOffice.com";
 
    if (newSale.IsDirty == true)
    {
        //Saving the Sale Entity
        newSale.Save();
    }
}

 
```

Here a Sale Entity has been retrieved through the use of the GetFromIdxSaleId method and some basic properties of the Contact Entity are accessed through the Sale Entity and have being modified. The business property on the Contact of the Sale Entity is Row type which means that it represents a row in the Business table. In the example a Business row has been retrieved and assigned to the contact after which its properties have being modified through the Sale Entity. However if the Sale Entity’s Contact has a Business already assigned there is no need to create a new Business Row and assign it.

 

Its needs to be noted that Sale Entity’s Contact has a property called Phones which consists of multiple phone rows of type PhoneRow. The example shows us how to create a phone row and assign it to a Contact’s Phones property through the use of the Add method. The added values are modified through the Sale Entity by indexing the Phones property of the Contact.

The Persons property is similar to the Phones property; however it differs in that Persons consists of Entities of persons as opposed to Rows. With the use of the CreateNew() method a new Person entity has being created and assigned to the Sale Entity’s Contact’s Persons property. These statements can be avoided if the Contact’s Persons property already consists of data. The next few statements relates to changing different types of properties which are contained in the Persons Entity through the Sale Entity.

An Important Point to remember!

The Sale entity is save through the use of the Save() method any modifications made to properties such as Contact Entity, Person Entity etc in the case of the above example will also be saved.

 
