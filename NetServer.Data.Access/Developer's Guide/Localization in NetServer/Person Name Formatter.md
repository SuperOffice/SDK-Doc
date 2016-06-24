<properties date="2016-05-11"
SortOrder="11"
/>

The person name formatter class that exists in the SuperOffice.CRM.Globalization namespace is designed to format the names of person that exists in the database or a name that we specify. This class contains two main methods

* GetFormalName

* GetFullName

The GetFormalName method has three overloads and the GetFullName method has six overloads. Let’s take each overload of each method and discuss further based on an example.

First let’s discuss the overloads of GetFormalName method.

```
using SuperOffice.CRM.Globalization;
using SuperOffice.CRM.Security;
using SuperOffice.CRM.Entities;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//retrive a person entity through a person ID 
      Person formatPerson = Person.GetFromIdxPersonId(59);
      //format the name of the retrived person according to the
name fromat
      //of the country the person belongs to
      string formatedName =
      PersonNameFormatter.GetFormalName(formatPerson);
      //output Kent Larsen Karlsen
}
```

 

Here we format the name of the person according to the formal name format that should appear in a label. Though the above person has a title of Dr and Mr. both of them are ignored in the formal name since a normal label that carries the name in Norway does not have them. This is all determined by the properties of the personal address format. If the personal address format specifies that the title should be added to the name this method will return it, but in the above case the Norwegian personal address format does not specify that title should appear with the name. To make it clear lets change the country of origin for the person and see what happens to the name format.

```
using SuperOffice.CRM.Globalization;
using SuperOffice.CRM.Security;
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//retrive a person entity through a person ID 
      Person formatPerson = Person.GetFromIdxPersonId(59);
      //get the country of the new country lest take Germany
      CountryRow newCountry = CountryRow.GetFromIdxCountryId(276);
      //assign it to the country property of the person entity
      formatPerson.Country = newCountry;
      //save the person entity
      formatPerson.Save();
      //we have to retrive it again so that the new changes are
visible
      formatPerson = Person.GetFromIdxPersonId(59);
      //now lets format the name and see what happens
      string formatedName =
      PersonNameFormatter.GetFormalName(formatPerson);
      //output Mr Kent Larsen Karlsen\nDr
}
```

 

Here you see the difference it makes from country to country. Since we changed the country of origin of the person to Germany now we get the Mr. prefix in front of the name and the Dr title at the end of the name separated by a new line character. If you assign the return string to the text property of a label control you will have the Dr title as new line after the name. All this is determined by the accepted personal address format of the country that the person belongs to.

 

```
using SuperOffice.CRM.Globalization;
using SuperOffice.CRM.Security;
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//get the person row of the person ID 60
      PersonRow formatPersonRow = PersonRow.GetFromIdxPersonId(60);
      //format the name of the person
      string formatedName =
      PersonNameFormatter.GetFormalName(formatPersonRow);
      //output Kjell Kristiansen
}
```

 

This example demonstrates overload method of the GetFormalName method where it accepts a person row as the parameter. It also behaves in the same way as the overload method where it accepts a person entity as the parameter. The format of the name will be determined by the properties of the personal address format of the country the person belongs to.

 

```
using SuperOffice.CRM.Globalization;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//pass the full name of the person and get it formated to the
formal
//name format of the country we specify
      string formatedName =
PersonNameFormatter.GetFormalName("Kent",
      "Larsen", "Karlsen", 578, "Dr", "Mr");
      //output Kent Larsen Karlsen
}
```

 

The above overload of the method lets you specify the name you want without getting it from the database. The name components you pass in as parameters will be formatted according to the properties of the personal address format of the country that you specify. Here we format the name according to the Norwegian rules, and it does not include the title or Mr. prefix before the name hence it explains the output we have got in example.

 

Now let’s focus on the other method that exists in the personal name formatter calls that will help us to get the formatted full name of a person. The GetFullName method which has six overloads will format the person’s full name according to a style that we specify or according to the style that is stored in the user preference.

```
using SuperOffice.CRM.Globalization;
using SuperOffice.CRM.Security;
using SuperOffice.CRM.Entities;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//retrive a person entity through a person ID 
      Person formatPerson = Person.GetFromIdxPersonId(59);
      //retrive the full name of the person according to the style
stored
      //in the user Preference cache if not in the cache will be
pulled
      //from the DB
      string formatedName =
PersonNameFormatter.GetFullName(formatPerson);
//output Kent Larsen Karlsen
}

 
```

The above overloaded of the GetFullName method accepts a person entity as a parameter. When you use this method the method will format the name of the person according to the style that is stored in the user preference cache, if it is not stored in the cache the user preference will retrieved from the database. Here the cached name format preference of the user is FirstNameLastName.

 

```
using SuperOffice.CRM.Globalization;
using SuperOffice.CRM.Security;
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//retrive the person row for ID 59
      PersonRow personRow = PersonRow.GetFromIdxPersonId(59);
//retrive the full name of the person according to the style stored
//in the user Preference cache if not in the cache will be pulled
//from the DB
      string formatedName =
PersonNameFormatter.GetFullName(personRow);
      //output Kent Larsen Karlsen
}
```

 

Here we use the overload GetFullName that accepts a person row as the parameter. The method will format the name of the person according to the name format style preference that is stored in the cache, if it is not present in the cache the preference will be retrieved from the database.

```
using SuperOffice.CRM.Globalization;
using SuperOffice.CRM.Security;
using SuperOffice.CRM.Entities;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//retrive a person entity through a person ID 
      Person formatPerson = Person.GetFromIdxPersonId(59);
      //get the full name of the person according to the style we
specify
      string formatedName =
PersonNameFormatter.GetFullName(formatPerson,
     
PersonNameFormatter.NameFormatStylePreference.LastNameFirstName);
//output Larsen Karlsen, Kent
}
```

 

The above overload of the GetFullName method accepts a person entity and a name format style preference. The NameFormatStylePreference is an enum where different name format styles are defined so you can give the style you want the person name to be formatted with out of the defined styles. Here we use the LastNameFirstName style which explains the output we have got.

 

```
using SuperOffice.CRM.Globalization;
using SuperOffice.CRM.Security;
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//retrive the person row for ID 59
      PersonRow personRow = PersonRow.GetFromIdxPersonId(59);
      //get the full name of the person according to the style we
specify
      string formatedName =
PersonNameFormatter.GetFullName(personRow,
      PersonNameFormatter.NameFormatStylePreference.FirstNameOnly);
      //output Kent
}
```

 

Here the method accepts a person row and a name format style. We have specified the FirstNameOnly as the name format style, and we therefor get the output “Kent” which is the first name of the person.

```
using SuperOffice.CRM.Globalization;
using SuperOffice.CRM.Security;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//get the full name of the person from the name components that we
//Specify according to the name style preference stored in the user
//Preference cache
      string formatedName = PersonNameFormatter.GetFullName("Kent",
      "Larsen", "Karlsen");
//output Kent Larsen Karlsen
}
```

 

The above demonstrated overload of the GetFullName method lets us specify the name components and the method will format the full name out of the name components that we specify according to the name style format stored in the user preference cache.

 

```
using SuperOffice.CRM.Globalization;
using SuperOffice.CRM.Security;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//get the full name of the person from the name componants that we
//Specify according to the name style preference that we specify
 
      string formatedName = PersonNameFormatter.GetFullName("Kent",
      "Larsen", "Karlsen",
      PersonNameFormatter.NameFormatStylePreference.LastNameOnly);
      //output Larsen Karlsen
}
```

 

Here we use the overload that lets us specify the name components and the name format style of the GetFullName method. Here the method will format the name components that we specify according to the name style format that we specify. In the above case we have given the LastNameOnly style as the name format style preference so we get Larsen Karlsen as the output.
