<properties date="2016-05-11"
SortOrder="7"
/>

Under Contact Entity you will get a property named UdefHelper. This property supports you to handle user defined fields easily. After going through this section you will be able to update a user defined field on a contact.

```
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
       //Retrieve a contact
       Contact contact = Contact.GetFromIdxContactId(37);
                  
       //Update the Udef fields using udefHelper
       // You have to pass the progId which identifies the field
       // to the udefHelper
       contact.UdefHelper["SuperOffice:1"] = "Value 1";
       contact.UdefHelper["SuperOffice:2"] = "Value 2";
       contact.UdefHelper["SuperOffice:3"] = 1234;
 
       //Save the changes
       contact.Save();
}
```

 

User Defined fields for Contact are stored in two tables named as udcontactsmall and udcontactlarge. These two tables have lots of fields like”long02”,”string04”, etc, which barely describe their function to the user. Through the SOAdmin application you can define fields and the system controls to which field of the udcontactsmall or udcontactlarge tables, they are assigned. Udcontactsmall table contains short fields such as int, floats etc and udcontactlarge table contains large text fields (ex: varchar\[255\]). You can even assign or update the values on a user defined field on a contact via the UdefLarge and UdefSmall properties of the Contact. But in that manner it will be a bit difficult since you have to work with the physical field names such as ”string04” which give no meaning instead of the logical names. Therefore the UdefHelper shields the physical field names and lets you update the user defined fields with ease.

In the above example we have referred a particular user defined field by using a string. This string is called the progId and it is stored under the progId field of the udeffield table. These values stay constant throughout the life of a field even if the name or the type of the field is changed. If the progid is blank we can assume it to be equal to “SuperOffice:” + udeffield.identity (Ex: SuperOffice: 1). Identity is a sequence number which is allocated whenever you create a new user defined field. This is not an Id field but it retains unchanged between different versions of the same user defined fields. Just like progId, identity field also remains a constant throughout the life time of a user defined field.  The main purpose of the progId is to facilitate 3rd party developers to make their fields with a name they can use in their code to find their user defined fields again.

 

 

 

 

 

 

 
