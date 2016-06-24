<properties date="2016-05-11"
SortOrder="4"
/>

RDB layer consists of collections types, which could be either EntityCollection types or Rows type that is a collection of Row types.

An important point to remember!

With execution of statements such,

         CountryRows newCouRow = CountryRows.GetFromIdxEnglishName();      PersonCollection newPerColl = PersonCollection.CreateNew();

Instantiates the collection class but nothing else. The purpose of methods such as these is to make it easy to use efficient queries that match the database indexes. Though the NetServer introduces Collection properties and Collection classes, the Collection classes only contains data groups based on a particular criteria. Data cannot be added through them as in the database there are no such data as Collection types.

1. autolist

When needed to retrieve properties, which are of simple data types as string, int, DateTime etc or when retrieving Row property types it is a good practice to use Entity Collections. However, if we were to use an Entity Collection type to retrieve Entity properties of the Collection item the code would be inefficient since each Entity property would trigger a new “Select” statement.

The following code shows us a bad practice of using the Entity Collection.

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
 
using(SuperOffice.SoSession mySession =
SuperOffice.SoSession.Authenticate("sam", "sam"))
{
      //Retrieving an Entity
      Contact newContact = new Contact.IdxContactId(2);
 
      //Retrieving Properties of a Row through an Entity    
      if (newContact.Persons.Count != 0)
      {
            string conPerName = newContact.Persons[0].Firstname + "
" + newContact.Persons[0].Lastname;
            string conPerDOB =
newContact.Persons[0].DayOfBirth.ToString();
            string conPerDept = newContact.Persons[0].Department;
 
            //Row properties within an Entity Collection
            string conPerAdd =
newContact.Persons[0].Address.Address1;
            string conPerAddCoun =
newContact.Persons[0].Address.County;
            string conCounEng =
newContact.Persons[0].Country.EnglishName;
            string conCounName =
newContact.Persons[0].Country.Name;
 
            //Entity properties within an Entity Collection
            string conPerConName =
newContact.Persons[0].Contact.Name;
            string conPerConCoun =
newContact.Persons[0].Contact.Country.Name;
 
            //Rows properties within an Entity Collection
            if (newContact.Persons[0].Emails.Count != 0)
            {
                  string[] conPerEmailAdd = new
string[newContact.Persons[0].Emails.Count];
                  string[] conPerEmailDesc = new
string[newContact.Persons[0].Emails.Count];
                  int i = 0;
                  foreach (EmailRow email in
newContact.Persons[0].Emails)
                  {
                        conPerEmailAdd[i] = email.EmailAddress;
                        conPerEmailDesc[i] = email.Description;
                        i = i + 1;
                  }
            }
 
            //Entity Collection properties within an Entity
Collection
            if (newContact.Persons[0].Sales.Count != 0)
            {
                  string[] conPerSaleAmt = new
string[newContact.Persons[0].Sales.Count];
                  string[] conPerSaleConName = new
string[newContact.Persons[0].Sales.Count];
                  int i = 0;
                  foreach (Sale sale in
newContact.Persons[0].Sales)
                  {
                        conPerSaleAmt[i] = sale.Amount.ToString();
                        conPerSaleConName[i] = sale.Contact.Name;
                        i = i + 1;
                  }
            }
      }
}
```

 

In the Contact Entity the property, Person is of PersonCollection type. Therefore, when we access the above property as in the above code a new Select is created behind the scene.

```
Contact newContact = new Contact.IdxContactId(2);
 
//Retrieving Properties of a Row through an Entity    
if(newContact.Persons.Count != 0)
{
 
}
```

 

In the case of the above the use of the property is not so bad however if the property was used within the loop it would greatly reduce the efficiency of the code. This is due to that when access a Collection we make use of a nested loop behind the scene. Though this can be easy to program this can be a slow way to use the database. The better practice would be to make use of the PersonCollection as shown below.

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
 
using(SuperOffice.SoSession mySession =
SuperOffice.SoSession.Authenticate("sam", "sam"))
{
      PersonCollection newPerColl =
PersonCollection.GetFromIdxContactId(2);                   
 
      foreach (Person newPer in newPerColl)
      {
            string perName = newPer.Firstname + " " +
newPer.Lastname;
            string PerDOB = newPer.DayOfBirth.ToString();
            string PerDept = newPer.Department;
 
            //Row properties within an Entity Collection
            string perAdd = newPer.Address.Address1;
            string perAddCoun = newPer.Address.County;
            string perCounEng = newPer.Country.EnglishName;
            string perCounName = newPer.Country.Name;
 
            //Entity properties within an Entity Collection
            string perConName = newPer.Contact.Name;
            string perConCoun = newPer.Contact.Country.Name;
                       
            if (newPer.Emails.Count != 0)
            {                           
                  int i = 0;
                  foreach (EmailRow email in newPer.Emails)
                  {
                        string perEmailAdd = email.EmailAddress;
                        string perEmailDesc = email.Description;
                        i = i + 1;
                  }
            }
 
            //Entity Collection properties within an Entity
Collection
            if (newPer.Sales.Count != 0)
            {                           
                  int i = 0;
                  foreach (Sale sale in newPer.Sales)
                  {
                        string perSaleAmt = sale.Amount.ToString();
                        string perSaleConName = sale.Contact.Name;
                        i = i + 1;
                  }
            }
      }
}
```

 

What we have done above is created a Person Collection with all person whose Contact ID is 2. This would result in the execution of one “Select” statement as the Select is used only to retrieve information on the Person Collection. Once this is done, the properties of the Collection are retrieved without any further Selects because none of them is properties of Entity or Entity Collection types.

The following code segment shows another bad practice when using Entity Collection types.

```
using SuperOffice.CRM.Entities;
 
using(SuperOffice.SoSession mySession =
SuperOffice.SoSession.Authenticate("JR", "jr"))
{                   
      //Retrieving a Property of PersonEntity
      PersonCollection personCollection = new
PersonCollection.IdxFirstname("Linda");
      string[] perFirstName = new string[personCollection.Count];
      int i = 0;
      foreach (Person getPerson in personCollection)
      {
            //Retriving First and Last names from the Collection
            perFirstName[i] = getPerson.Firstname + " " +
getPerson.Lastname;
            i = i + 1;                       
      }
}
```

 

The above is a poor practice since we are using the Entity Collection to get data that can be retrieved with the use of a Row collection. In the case of the example, we could use a PersonRow instead of the used PersonCollection. Its should be said that when an Entity or Entity Collection is been used a big join is executed behind the scene, a since we are not using most of the data exposed by the Entity the database ends up wasting a lot of work.

The above code could be done as follows with the use of PersonRows, which is more efficient.

```
singSuperOffice.CRM.Rows;
 
using(SuperOffice.SoSession mySession =
SuperOffice.SoSession.Authenticate("JR", "jr"))
{                   
      //Retrieving a Property of PersonRow
      PersonRows personRows =
PersonRows.GetFromIdxFirstname("Linda");
      string[] perFirstName = new string[personRows.Count];
      int i = 0;
      foreach (PersonRow getPerson in personRows)
      {
            //Retriving First and Last names from the Collection
            perFirstName[i] = getPerson.Firstname + " " +
getPerson.Lastname;
            i = i + 1;
      }
}
```

 

Following is another bad practice when using Entities. Since Entities should be added by themselves. When this happens the relevant Entities will be updated which will change its last updated time and trigger the relevant replication of the Entity.

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
 
using(SuperOffice.SoSession mySession =
SuperOffice.SoSession.Authenticate("sam", "sam"))
{
      //Retrieving a Contact Entity
      Contact newContact = new Contact.GetFromIdxContactId(159);
 
      //Creating anEntity and adding it to the Collection
      Person newPerson1 = Person.CreateNew();
      newPerson1.Firstname = "Tom";
      newPerson1.Lastname = "Hanks";
      Person newPerson2 = Person.CreateNew();
      newPerson2.Firstname = "Fox";
      newPerson2.Lastname = "Jorja";
      newContact.Persons.Add(newPerson1);
      newContact.Persons.Add(newPerson2);
 
      EmailRow newEmail = EmailRow.CreateNew();
      newEmail.EmailAddress = "tom@test.com";
      newEmail.Description = "Tom's email address";
      newContact.Persons[0].Emails.Add(newEmail);
 
      //Modifying the Values Contained in the Entities Collection
type properties
      newContact.Persons[0].Lastname = "Cruise";
      newContact.Persons[0].Emails[0].Description = "Email has was
modified";
 
      //Saving the Entity
      newContact.Save();
}
```

 

In the above example the statements,

```
      newContact.Persons.Add(newPerson1);
      newContact.Persons.Add(newPerson2);
```

 

Is a bad practice since as earlier stated Entities should be added by themselves. This will cause the Contact to be updated, which will change its last updated time, and trigger replication of the Contact, which is not necessary when adding Persons to a Contact.

Following example shows how we may make use of the Delete() method in order to delete a couple of rows. This can be stated as a good practice when dealing with Collection data types.

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
 
using(SuperOffice.SoSession mySession =
SuperOffice.SoSession.Authenticate("JR", "jr"))
      {
            //Retrieve an entity                   
            Contact newContact = new
Contact.GetFromIdxContactId(25);
                                          
            //Deleting an Rows Collection through a Sale
            newContact.Emails.Delete();
      }
```

 

If wish to delete a particular Row of the collection the following piece of code may be used.

```
      newContact.Emails[0].Delete();
```

 

An important point to remember!

It is possible to retrieve a collection of Entity types or Row types through a Collection class such as ContactRows or PersonCollections and then Delete it the entire collection or by indexing and deleting a particular collection item.
