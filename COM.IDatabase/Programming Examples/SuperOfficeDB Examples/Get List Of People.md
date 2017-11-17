---
uid: GetListOfPeople
title: Get List Of People
---


### Getting a list of people from the SuperOffice database

Here we log in to the database directly, so the SOCRM application does not need to be running for this to work.

If the login fails, then isOk will be false and an error message is displayed.

 

We get all persons belonging to the contact with contact\_id=2

```
set soDb = CreateObject("SuperOfficeDB.Database")
isOk = soDb.Login("user", "pass")
if isOk Then
    Set persons = soDb.GetContact(2).GetPersons()
    For Each person In persons
        msg = msg & person.FullName & vbCrLf
    Next
    MsgBox msg, vbInformation + vbOKOnly, "SuperCOM"
else
   MsgBox "Login failed"
end if
```

 

We get all persons added as project members to the project with project\_id=2

```
set soDb = CreateObject("SuperOfficeDB.Database")
isOk = soDb.Login("user", "pass")
if isOk Then
       Set projMembs = soDb.GetProject(2).Members
    For Each projMember In projMembs
        msg = msg & projmMembs.Item(projMember.PersonId).person.FullName & vbCrLf
    Next
    MsgBox msg, vbInformation + vbOKOnly, "SuperCOM"
else
   MsgBox "Login failed"
end if
```

 

We get all associates

```
set soDb = CreateObject("SuperOfficeDB.Database")
isOk = soDb.Login("user", "pass")
if isOk Then
    Set objAssocs = soDb.GetAssociateList
    For Each Associate In objAssocs
        msg = msg & Associate.FullName & vbCrLf
    Next
    MsgBox msg, vbInformation + vbOKOnly, "SuperCOM"
else
   MsgBox "Login failed"
end if
```

 

We get all external persons on an appointment booking (invitation)

```
set soDb = CreateObject("SuperOfficeDB.Database")
isOk = soDb.Login("user", "pass")
if isOk Then
    Set soapnt = soDb.GetAppointment(2)
    If soapnt.Type = 6 Then
    Set persons = soapnt.GetParticipants(enPartTypeExtPerson)
    Set person = persons.GetFirst
    While Not persons.EOF
        msg = msg & person.FullName & vbCrLf
        persons.GetNext
    Wend
    MsgBox msg, vbInformation + vbOKOnly, "SuperCOM"
else
   MsgBox "Login failed"
end if
```

 

Retrieve a list of Persons using the SuperOffice.COM.SuperOfficeDB namespace available in the SuperOfficeDB.dll.

Since the Contact Entity’s Persons property consists of list of Persons we have created an instance of Contact and then retrieve the list of person that belongs to that specific Contact.

```
using SuperOffice.COM.SuperOfficeDB;
Database newDb = new DatabaseClass();
bool isOK = newDb.Login("USERNAME", "PASSWORD");
if (isOK)
  {
  //create a new Contact instance
  SOContact newContact = newDb.GetContact(2);
  //Retreive the list of Persons that belongs to the Contact
  SOPersons contactPersons = newContact.GetPersons(); 
  Console.Write("Name" + "\\t\\t\\t" + "Country");
  Console.WriteLine();
  //Diplay the retireved list of Persons
  foreach (SOPerson person in contactPersons)
    { 
    //Display properties of each Person
    Console.Write(person.FirstName + " " + person.LastName + "\\t"); 
    Console.Write(person.Country.Text + "\\t");
    Console.WriteLine(); 
    } 
  }
  else
    Console.WriteLine("Incorrect Username or Password");
```

 

In the above code we have retrieved a list of Persons that belongs to the specific Contact. Since the list is a property of the Contact we need to create an instance of the Contact by using the GetContact() method available in the Database class. Once the Contact instance is created we can retrieve the list of that property by using the GetPersons() method as shown below. The method returns SOPersons objects.

```
SOPersons contactPersons = newContact.GetPersons();
```

 

By using a foreach loop we can loop through the above retrieved Persons list and access any property of any element in that list.

The output of the above code is as follows.

```
Name Country Contact Name
Admin Adminson Norway StateZeroDatabase
Arne Arnesen Norway StateZeroDatabase
Brede Bredesen Norway StateZeroDatabase
Cato Carlsson Norway StateZeroDatabase
Donald Duck Norway StateZeroDatabase
Erik Eide Norway StateZeroDatabase
```
