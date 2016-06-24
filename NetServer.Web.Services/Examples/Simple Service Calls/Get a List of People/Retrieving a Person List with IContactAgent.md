<properties date="2016-06-24"
SortOrder="6"
/>

Retrieving a Person List with IContactAgent
===========================================

The ContactEntity has several properties of which the Persons property is a Collection of Person Entity types.

An important point to remember!

A ContactEntity contains a list of Persons as one of its properties. However this list of persons is only accessible when the ContactEntity has been retrieved with the use of the GetContactWithPersons() method exposed in the ContactAgent.

The example below uses the GetContactWithPersons() method to retrieve the first and last names of Persons of a particular contact.

```
using SuperOffice;
using SuperOffice.CRM.Services;
 
using(SoSession newSession = SoSession.Authenticate("sam", "sam"))
{
      //Instantiating the Contact Agent
      using(ContactAgent newConAgt = new ContactAgent())
      {
          //Retrieving a Contact Entity with the use of the Contact Agent
          ContactEntity newConEnt = newConAgt.GetContactWithPersons(143);
      
          //Retriving properties of a Person from the Contact Entity
          if (newConEnt.Persons.Length > 0)
          {
                Console.WriteLine("Full Name" + "\t" + "ContactName" + "\t" + "Email");
                foreach (Person newPerson in newConEnt.Persons)
                {
                      Console.WriteLine(newPerson.Firstname + " " + newPerson.Lastname + "\t");
                      Console.Write(newPerson.ContactName + "\t");
                      Console.Write(newPerson.Email);
                      Console.WriteLine();
                }          
          }
      }
}
```

 

After we havecreated an instance of the ContactEntity with the use of the ContactAgent’s GetContactWithPersons() method we can iterate through the Person property of the instantiated Entity and retrieve its properties.

The results of the above code are as follows.

```
Full Name         ContactName             Email
Admin Adminson    StateZeroDatabase       example@example.com
Arne Arnesen      StateZeroDatabase       example@example.com
Brede Bredesen    StateZeroDatabase       example@example.com
Cato Carlsson     StateZeroDatabase       example@example.com
Donald Duck       StateZeroDatabase       example@example.com
Erik Eide         StateZeroDatabase       example@example.com
```

 
