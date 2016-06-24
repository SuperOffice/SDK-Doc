<properties date="2016-05-11"
SortOrder="55"
/>

As explained earlier there can be more than one way to assign an Entity to a property of another Entity. In this section we will focus on creating a new Entity separately and assigning it to a property.

 

```
using SuperOffice.CRM.Entities;
using SuperOffice;
 
using(SoSession newSession = SoSession.Authenticate("SAL0", ""))
{
    //create a contact entity and assign some of it's properties
with data
    Contact myContact = Contact.CreateNew();
    myContact.SetDefaults();
    myContact.Name = "ABC Company";
   
    //add two elements to the URL's collection since we are going
to add two URL's
    myContact.Urls.AddNew();
    myContact.Urls.AddNew();
    myContact.Urls[0].UrlAddress1 = "ABCCompany.com";
    myContact.Urls[0].Rank = 1;
    myContact.Urls[1].UrlAddress1 = "ABCCompanyServices.com";
    myContact.Urls[1].Rank = 2;
    myContact.PostalAddress.Address1 = "P.O.Box 345";
    myContact.PostalAddress.Address2 = "Kalbakken";
    myContact.PostalAddress.Zipcode = "0901";
    myContact.PostalAddress.City = "OSLO";
 
    //create a project entity and assign some of it's properties
with data
    Project myProject = Project.CreateNew();
    myProject.SetDefaults();
    myProject.Name = "ABC Company Project";
 
 
    //create two ProjectMember instanses and assign them with
person
    ProjectMember memberOne = ProjectMember.CreateNew();
    memberOne.SetDefaults();
    memberOne.Person = Person.GetFromIdxPersonId(24);
    ProjectMember memberTwo = ProjectMember.CreateNew();
    memberTwo.SetDefaults();
    memberTwo.Person = Person.GetFromIdxPersonId(25);
 
    //here we add the two created project member to the members
collection of the project entity
    myProject.Members.Add(memberOne);
    myProject.Members.Add(memberTwo);
 
    //create a sale entity and assign the above created entities to
the respective properties
    Sale mySale = Sale.CreateNew();
    mySale.SetDefaults();
 
    mySale.Contact = myContact;
    mySale.Project = myProject;
    mySale.Save();
}
```

 

Since this example is bit long and complex it will be explained step by step below.

First we create a Contact Entity that we will assign to the Sale Entity later. We give it a name. Then we assign the two URL’s this particular company has. You may notice that the URL property of the contact is given as a collection of URL rows not as a single URL row, this is because one company may have many URL’s so to facilitate that this particular property is exposed as a collection of URL rows. We are going to add two URL’s to this company so that we create two blank elements in the URL rows collection using the AddNew() method provided.

After you have added two blank elements to the Rows collection you can start filling filing its properties with data like we have done above using the index number of each element to access the properties. This same task can be achieved slightly differently using the Add() method and by creating a URL row first and then adding it to the URL rows collection using the Add() method.

```
    URLRow urlOne = URLRow.CreateNew();
    urlOne.SetDefaults();
    urlOne.UrlAddress1 = "ABCCompany.com";
    urlOne.Rank = 1;
    URLRow urlTwo = URLRow.CreateNew();
    urlTwo.UrlAddress1 = "ABCCompanyServices.com";
    myContact.Urls.Add(urlOne);
    myContact.Urls.Add(urlTwo);
```

This is how you create a new URL and add it to the Entity. But if you want to retrieve a URL which is already in the database and assign to the Contact you can use the following method.

```
      myContact.Urls.Add(URLRow.GetFromIdxUrlId(2));
      myContact.Urls.Add(URLRow.GetFromIdxUrlId(3));
```

The next property that we are going to populate with data is the Address. The Address property is also exposed as an Address row but in the example we have directly accessed the properties of the Address row to populate them with data. The method we have used to access the properties of the Address property, and the method we have used to access the properties of the URL property, shows the difference between how we access the properties of a Row and a Row collection. Here also instead of assigning data directly to the Address row you can create an Address row and assign it to the address property.

 

```
    //create a new AddressRow
    AddressRow postalAddress = AddressRow.CreateNew();
    postalAddress.SetDefaults();
    //Assign values to its properties
    postalAddress.Address1 = "P.O.Box 345";
    postalAddress.Address2 = "Kalbakken";
    postalAddress.Zipcode = "0901";
    postalAddress.City = "OSLO";
    //assign the new address to the PostalAddress property of
Contact Entity
    myContact.PostalAddress = postalAddress;

 
```

Now let’s switch back to the main example, up to now we have created a Contact Entity and filled some of its interesting properties with data. Let’s create another Entity which is of type Project Entity.

After filling some basic Entities lets try to add a couple of project members to the project we just created. In the example we have created two new project member instances and assigned two Persons from the person table. If you want to create a new Person and add that Person to the Project Member instances and then add the Project Member instance to the Project you can follow the following method.

 

```
    Project myProject = Project.CreateNew();
    Person projPerson = Person.CreateNew();
    projPerson.SetDefaults();
    projPerson.Firstname = "Mel";
    projPerson.Lastname = "Gibson";
    ProjectMember memberOne = ProjectMember.CreateNew();
    memberOne.Person = projPerson;
    myProject.Members.Add(memberOne);
```

If you want to add a Project Member that is already assigned to another Project you can follow the below method.

 

```
      myProject.Members.Add(
ProjectMember.GetFromIdxProjectmemberId(45));
      myProject.Members.Add(
ProjectMember.GetFromIdxProjectmemberId(69));
```

Now we have created the two Entities that we intended to create and we have populated some of the properties of those Entities with data. Now all we got to do is assigning them to the respective properties of the Sale Entity and then save the Sale Entity back to the database. Here also we only save the Sale Entity and NetServer will ensure that it will save the rest of the newly added entities into the database as well, through NestedPersist.
