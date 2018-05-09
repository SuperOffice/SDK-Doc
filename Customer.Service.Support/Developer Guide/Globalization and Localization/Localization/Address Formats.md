---
uid: address_formats
title: Address Formats
date: 2018-05-08
SortOrder: 2
---
# Address Formats

Depending on where you live in the world, a company or person address can come in various shapes and sizes. SuperOffice supports these various shapes and sizes with address format definitions for each country and region in the database.

## Introduction

Due to the dynamic nature of addresses, address fields in the SuperOffice UI appear differently depending on the selected country for any particular company or person.

Below is an example of six different country formats and how they appear in SuperOffice. It is interesting to note that while the top two are similar, the middle two are also similar but different from the first two. The bottom two are uniquely different from both each other and the other four.

![Address Formats](../Localization_files/CombinedAddressLayouts.png)

To support multiple address variants, SuperOffice data structures must be generic. An address type must be flexible enough to support all address formats in the world, and this is accomplished by placing all address fields in a structure called NSLocalizedAddress.

![Localized Address](../Localization_files/NSLocalizedAddress.png)

A NSLocalizedAddress is a multidimentional array of NSLocalizedField – where the first dimension of NSLocalizedField contains each address line. The second dimension of a NSLocalizedField contains each field in that line.

Each NSLocalizedField contains, among others, three key properties: AddressType, Name and Value.

AddressType determines which type of address a field belongs to, of which there are three possibilities:

1. ContactPostalAddress
2. ContactStreetAddress
3. PersonStreetAddress

The first two types correspond to a company address, used to differentiate a company's postal address versus its' physical, or visiting, address. The third address type represents a contact person address.

The Name and Value properties are just what they sound like; the name is a unique field keyname, and the value is populated with the value from the database. For example, the address format of Norway defines 4 lines total. The first and third lines contain just one element, while the second and fourth lines containing two elements.

France, however, has 3 lines total, with the first and second lines containing just one field element and the third line containing two field elements.

![Field array elements](../Localization_files/NSLocalizedFieldArray.png)<br

It's important to understand some company addresses contain only a postal address while others contain both postal and street addresses.

Because line elements are simply array containers, they don't know if they contain postal address information or street address information. As mentioned earlier, each field has an AddressType property that signals to which it belongs.

So how does one go about reading and writing address information using this generic construct?

Reading the NSLocalizedAddress data structure is straightforward, simply loop over the NSLocalizedField lines and print out each field on each line. The following code example demonstrates this using a NSContactAgent to get a company and then looping over and printing out each address field.

```csharp
#setLanguageLevel 3;

NSContactAgent contactAgent;

NSContactEntity contactEntity = contactAgent.GetContactEntity(2);
NSAddress contactAddress = contactEntity.GetAddress();
NSLocalizedField[][] fields = contactAddress.GetLocalizedAddress();

for (Integer i=0; i < fields.length(); i++)
{
  for (Integer j=0; j<fields[i].length(); j++)
  {
    print(fields[i][j].GetName() + " " + fields[i][j].GetValue());
  }
}

```

Writing address information back to this data structure is often complex when the consumer application does not share the same dynamic address structure as SuperOffice. In that case, the application must develop a strategy to format their address data structure into one SuperOffice understands.

Assuming the company or person from SuperOffice has the correct address format, each line contains one or more field keynames that can be used to locate the same field in a different but corresponding address data structure.

There are two groups of pre-defined address field names, one for person and one contact.

| **Person Address Fields** | **Contact Address Fields** |
|---------------------------|----------------------------|
| Address1                  | PostalAddress1             |
| Address2                  | PostalAddress2             |
| Address3                  | PostalAddress3             |
| City                      | PostalCity                 |
| County                    | PostalCounty               |
| State                     | PostalState                |
| Zipcode                   | PostalZipcode              |
|                           | StreetAddress1             |
|                           | StreetAddress2             |
|                           | StreetAddress3             |
|                           | StreetCity                 |
|                           | StreetCounty               |
|                           | StreetState                |
|                           | StreetZipcode              |

Knowing what the field keynames are for each address type makes it easy to flatten the address data structure into a Map. Then, it becomes easy to access each address field values and get or set the address information.

So what about SuperOffice Service and CRMScript? Well interesting you should ask. Our friends over at Ganske Enkelt has been kind enough to share similar CRMScript code that you can incorporate into your own Customer Service solutions.

This example demonstrates how to get and set address fields for a company.

```javascript
#setLanguageLevel 3;

//Helperclass for working with Addresses in SuperOffice CRM and CS.
//Frode Lillerud, Ganske Enkelt AS

Map validAddressTypes;
validAddressTypes.insert("PostalAddress1", "");
validAddressTypes.insert("PostalAddress2", "");
validAddressTypes.insert("PostalAddress3", "");
validAddressTypes.insert("PostalCity", "");
validAddressTypes.insert("PostalCounty", "");
validAddressTypes.insert("PostalState", "");
validAddressTypes.insert("PostalZipcode", "");
validAddressTypes.insert("StreetAddress1", "");
validAddressTypes.insert("StreetAddress2", "");
validAddressTypes.insert("StreetAddress3", "");
validAddressTypes.insert("StreetCity", "");
validAddressTypes.insert("StreetCounty", "");
validAddressTypes.insert("StreetState", "");
validAddressTypes.insert("StreetZipcode", "");

//Get the addresses of a contact as values in a map.
Map GetContactAddresses(NSContactEntity contact)
{
  NSAddress contactAddress = contact.GetAddress();
  NSLocalizedField[][] fields = contactAddress.GetLocalizedAddress();

  Map addr;
  for (Integer i=0; i < fields.length(); i++)
  {
    for (Integer j=0; j<fields[i].length(); j++)
    {
      addr.insert(fields[i][j].GetName(), fields[i][j].GetValue());
    }
  }
  return addr;
}

NSContactEntity SetContactAddresses(NSContactEntity contact, Map addresses)
{
  //For troubleshooting - detect illegal addresstypes.
  for (addresses.first(); !addresses.eof(); addresses.next())
    if (!validAddressTypes.exists(addresses.getKey()))
      exitWithMessage("Illegal address type: " + addresses.getKey());

  NSAddress contactAddress = contact.GetAddress();
  NSLocalizedField[][] fields = contactAddress.GetLocalizedAddress();

  for (Integer i = 0; i < fields.length(); i++)
  {
    for (Integer j = 0; j < fields[i].length(); j++)
    {
      if (addresses.exists(fields[i][j].GetName()))
      {
        fields[i][j].SetValue(addresses.get(fields[i][j].GetName()));
      }
    }
  }
  contactAddress.SetLocalizedAddress(fields);
  contact.SetAddress(contactAddress);
  return contact;
}
```

And of course the script is easily adapted to support NSPersonEntity address as well.

```javascript

#setLanguageLevel 3;

Map validAddressTypes;
validAddressTypes.insert("Address1", "");
validAddressTypes.insert("Address2", "");
validAddressTypes.insert("Address3", "");
validAddressTypes.insert("City", "");
validAddressTypes.insert("County", "");
validAddressTypes.insert("State", "");
validAddressTypes.insert("Zipcode", "");

//Get the addresses of a contact as values in a map.
Map GetPersonAddresses(NSPersonEntity person)
{
  NSAddress address = person.GetAddress();
  NSLocalizedField[][] fields = address.GetLocalizedAddress();

  Map addr;
  for (Integer i=0; i < fields.length(); i++)
  {
    for (Integer j=0; j<fields[i].length(); j++)
    {
      addr.insert(fields[i][j].GetName(), fields[i][j].GetValue());
      print(fields[i][j].GetName() + " " + fields[i][j].GetValue());
    }
  }
  return addr;
}

NSPersonEntity SetPersonAddresses(NSPersonEntity person, Map addresses)
{
  //For troubleshooting - detect illegal addresstypes.
  for (addresses.first(); !addresses.eof(); addresses.next())
    if (!validAddressTypes.exists(addresses.getKey()))
      exitWithMessage("Illegal address type: " + addresses.getKey());

  NSAddress address = person.GetAddress();
  NSLocalizedField[][] fields = address.GetLocalizedAddress();

  for (Integer i = 0; i < fields.length(); i++)
  {
    for (Integer j = 0; j < fields[i].length(); j++)
    {
      if (addresses.exists(fields[i][j].GetName()))
      {
        fields[i][j].SetValue(addresses.get(fields[i][j].GetName()));
      }
    }
  }

  address.SetLocalizedAddress(fields);
  person.SetAddress(address);
  return person;
}

```

### Conclusion

Working with address information in SuperOffice had never been an easy task to deal with. Now you understand the NSLocalizedAddress structure, its' madness, and know better how to deal with it in future projects.
