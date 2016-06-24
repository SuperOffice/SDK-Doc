<properties date="2016-06-24"
SortOrder="7"
/>

Retrieving a Person List with IPersonAgent
==========================================

Another method of retrieving a Person list is with the use of the GetPersonList() method available through the PersonAgent. In order to use this service we must know the ids of the people we want before we can make the call. If we do not know the ids, we need to use a different service, for example a method like GetPersonsFromContact.

```
using SuperOffice;
using SuperOffice.CRM.Services;
 
using(SoSession newSession = SoSession.Authenticate("sam", "sam"))
{
      //Instantiating the Person Agent
      using(PersonAgent newPerAgt = new PersonAgent())
      { 
          //Local variable Declaration
          int [] personIds = {100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110};
     
          //Retrieving a List of Persons
          Person[] newPersonArr = newPerAgt.GetPersonList(personIds);
     
          Console.WriteLine("Full Name" + "\t" + "ContactName" + "\t" + "Email");
     
          //Retrieving Properties of Person in the Person list
          foreach (Person newPerson in newPersonArr)
          {
                Console.Write(newPerson.Firstname + " " + newPerson.Lastname + "\t");
                Console.Write(newPerson.ContactName + "\t");
                Console.Write(newPerson.Email);
                Console.WriteLine();
          }
     }
}
```

 

A list of PersonIds have been passed in to the GetPersonList() method which returns an array of Person data types. Once the values have been assigned to a Person type array we may access the properties of each person by looping through the array elements.

Following is the list of result that can be obtained once the code has being executed.

```
Full Name         ContactName                  Email
Unni Ukultsted    Uri Geller International     example@example.com
Veronika Viseth   Vertigo AS                   example@example.com
Vebjørn Valstad   Vin & Sprit AB                example@example.com
Werner Wigseth    Warner Brothers Norway        example@example.com
Wenche Wilson     Werner & Werner               example@example.com
Ulf Ulstein       Uniformeffekter AS            example@example.com
Ulster Undervold  Uri Geller International     example@example.com
Vilde Veum        Vertigo AS                    example@example.com
Varg Vigernes     Vin & Sprit AB                example@example.com
Waldorf Weem      Warner Brothers Norway        example@example.com
Wilma Wetter      Werner & Werner               example@example.com
```

 

See Also:

[Entity Services](../../../Developer's%20Guide/Entity%20Services/Entity%20Services.md)

 

 

 
