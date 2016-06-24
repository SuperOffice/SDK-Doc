<properties date="2016-06-24"
SortOrder="5"
/>

Update a person with new name, address, position
================================================

Person details can be updated only in one way when using the NetServer Services layer. Which is by using the PersonAgent and its SavePersonEntity() method.

The example below shows how we could make use of this method.

```
using SuperOffice;
using SuperOffice.CRM.Services;
 
using(SoSession newSession = SoSession.Authenticate("sam", "sam"))
{
        //Instantiating a Agents required
    using(PersonAgent newPerAgt = new PersonAgent())
    {
        using(ListAgent newLstAgt = new ListAgent())
        {
            //Retrieving a Person Entity
            PersonEntity newPerEnt = newPerAgt.GetPersonEntity(214);

            //Updating Properties of the Person Entity
            //String type properties
            newPerEnt.Firstname = "Luke";
            newPerEnt.Lastname = "Skywalker";

            //Updating a property of LocalizedFeild type
            LocalizedField[][] newAddress = newPerAgt.GetAddressByCountry(4, 144);
            newAddress[0][0].Value = "65, Sky Lane, LayLand.";
            newPerEnt.Address = newAddress;
                       
            //Updating a Country type property                   
            newPerEnt.Country = newLstAgt.GetCountry(60);

            //Adding a EntityElement type Property
            //creating an Email
            EntityElement[] newEmailArr = new EntityElement[1];
            newEmailArr[0] = new EntityElement();
            newEmailArr[0].Value = "luke@example.com";
            newEmailArr[0].Description = "Testing";
                       
            //Assigning the Email to the Email property of the Person
            newPerEnt.Emails = newEmailArr;

            //Modifying an existing Email
            newPerEnt.Emails[0].Value = "lukeUpdated@example.com";
            newPerEnt.Emails[0].Description = "Test Updated";

            //Assign the Position
            newPerEnt.Position = newLstAgt.GetPosition(1);

            //Saving the updated Person Entity
            newPerAgt.SavePersonEntity(newPerEnt);  
        }
    }
}
```

 

We need to use the GetPersonEntity() method available in the PersonAgent to retrieve the PersonEntity that needs to be updated. Once the Entity is retrieved, the properties that are exposed can be updated. The example shows how we can update different types of properties exposed by the PersonEntity.

Entity types consists of simple data types such as String, Boolean, DateTime, int etc and complex data types consists of types such as LocalizedFields, EntityElement types and many more.

1. autolist
