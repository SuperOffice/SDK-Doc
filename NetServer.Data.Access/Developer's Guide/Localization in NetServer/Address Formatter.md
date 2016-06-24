<properties date="2016-05-11"
SortOrder="8"
/>

<img src="../Localization%20in%20NetServer_files/image001.gif" id="Picture 1" width="427" height="137" />

This class, as the name implies, contains all the static functions that will help you to format the address that exists in the SuperOffice database to suit the address format of your country. In the SuperOffice database an address can exist either linked to a person or a contact. The address formatter class gives two separate functions for you to manipulate these two addresses.

The address formatter class contains a static method call FormatContact which has three overloads.

```
using SuperOffice.CRM.Globalization;
using SuperOffice.CRM.Security;
using SuperOffice.CRM.Entities;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//retrive the contact ID 4
Contact formatAddContact = Contact.GetFromIdxContactId(4);
//format the address of the contact to the format of the
//country that the conatct belongs to
FormattedAddress formatedAddress =
AddressFormatter.FormatContact(formatAddContact);
foreach (FormattedFields fs  in formatedAddress)
      {
            foreach (IFormattedField f in fs)
            {
                  Console.Out.Write(f.Value);
            }
            Console.Out.WriteLine();
      }
      //output
      //A-gata 23
      //0123
      //OSLO
}
```

 

We retrieve the contact with contact\_id=4 and then we format the address of the contact to the country that the contact belongs to. When you run this example you will see that the FormatContact method returns an object of FormattedAddress this is a structure that hold the formatted address for us. 

Now let’s look how we can do this using Rows. 

```
using SuperOffice.CRM.Globalization;
using SuperOffice.CRM.Security;
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//retrive the contact row no 4
      ContactRow conRow = ContactRow.GetFromIdxContactId(4);
      //get the postal address of the contact row no 4
      AddressRow postalAddress =
     
AddressRow.GetFromIdxAtypeIdxOwnerId(SuperOffice.Data.AddressType.Con
      tactPostalAddress,4);
      //get the street address of the contact row no 4
      AddressRow streetAddress =
     
AddressRow.GetFromIdxAtypeIdxOwnerId(SuperOffice.Data.AddressType.Con
      tactStreetAddress,4);
      //format the address according to the country that the
contact belong
      //to
      FormattedAddress formatedAddress =
      AddressFormatter.FormatContact(conRow, postalAddress,
streetAddress);
}
```

 

You can see we have done the same thing using only rows. Here also the FormatContact method will convert the postal and street address passed to the method to the format of the country that the contact belongs to. In the example you can see that we have used a method called GetFromIdxAtypeIdxOwnerId in the address Row class in order to get the desired address type of the contact we want. 

Using the other overloaded method you can specify a country and pass in the postal and street address as parameters and get them formatted to the style of the specified country. Let’s see how we can use this method through an example.

```
using SuperOffice.CRM.Globalization;
using SuperOffice.CRM.Security;
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//get the postal address of a contact you want
      AddressRow postalAddress =
     
AddressRow.GetFromIdxAtypeIdxOwnerId(SuperOffice.Data.AddressType.Con
      tactPostalAddress, 4);
      //get the street address of a contact you want
      AddressRow streetAddress =
     
AddressRow.GetFromIdxAtypeIdxOwnerId(SuperOffice.Data.AddressType.Con
      tactStreetAddress, 4);
      //format the address according to the specified country in
      //this case country ID 36 (Australia)
      FormattedAddress formatedAddress =
AddressFormatter.FormatContact(36,
      postalAddress, streetAddress);     
}
```

 

This method is useful if you want to format the address of a contact to a particular country irrespective of the country that the contact belongs to. As the above example shows we have retrieved the postal and street address of a contact and using this overload of the method we are formatting the address to a format of a country that we specify.

Now that we have finished discussing how we can localize the address of a contact let’s focus on how we can localize the address of a person. As in the case of formatting the address of a contact the address formatter class has a method to format the address of person called FormatPerson. This method also has two overloads let’s take closer look at each overload through an example.

```
using SuperOffice.CRM.Globalization;
using SuperOffice.CRM.Security;
using SuperOffice.CRM.Entities;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//get the person ID 10
      Person myPerson = Person.GetFromIdxPersonId(10);
      //format the address of person ID 10 to the format of
      //the country that the person belongs to
      FormattedAddress formatedAddress =
      AddressFormatter.FormatPerson(myPerson);
}
```

 

Here we use to first overload of the method. We first retrieve the person using the person ID and then simply pass that person entity to the method and the method will format the address of the person to the format of country that the person belongs to.

Now let’s take a look at the other overload.

```
using SuperOffice.CRM.Globalization;
using SuperOffice.CRM.Security;
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//get the person row of person ID 10
      PersonRow myPersonRow = PersonRow.GetFromIdxPersonId(10);
      //get the address row of person ID 10
      AddressRow perAddressRow =
     
AddressRow.GetFromIdxAtypeIdxOwnerId(SuperOffice.Data.AddressType.Per
      sonPrivateAddress, 10);
      //format the address of the operson to the format of the
country
      //that the person belongs to
      FormattedAddress formatedAddress = 
      AddressFormatter.FormatPerson(myPersonRow, perAddressRow);
}
```

 

Here we use the second overload of the method. We take a person row object of a person that we want and we have to retrieve the address row object of that person as well. To do this we use the method call GetFromIdxAtypeIdxOwnerId of the address row class. This method will help us retrieve the correct address type and the correct address of the person that we want. We can pass in the two row objects to the method and the method will format the address we specified according to the country that the person we specified belongs to.

 
