<properties date="2016-05-11"
SortOrder="58"
/>

An Entity can have properties of type Entity Collection. Entity Collection type consists of a Collection of Entity types, just as its name implies.

 

```
using SuperOffice;
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
 
using(SoSession newSession = SoSession.Authenticate("SAL0", ""))
{
      //Creating a new Contact Entity and assigning values to some
of its properties
    Contact newContact = Contact.CreateNew();
    newContact.SetDefaults();
    newContact.Name = "EuroCenter DDC";
    newContact.Department = "Editing";
 
    //Creating a Person Entity and adding it to the   Collection
    Person newPerson = Person.CreateNew();
    newPerson.SetDefaults();
    newPerson.Firstname = "Mark";
    newPerson.Lastname = "Anthony";
               
    //Creating an Appointment Entity
    Appointment newAppointment = Appointment.CreateNew();
    newAppointment.SetDefaults();
    newAppointment.Alarm = 7;
 
//Adding the Appointment Entity to the Appointment Collection in
the Person Entity
    newPerson.Appointments.Add(newAppointment);
 
//Adding the Person to the Persons Collection in the Contact Entity
    newContact.Persons.Add(newPerson);
 
    //Saving the Entity
    newContact.Save();
}

 
```

Here we first created a new Contact Entity and assigned values to some of its properties. Contact Entity contains properties of Entities Collection type such as Persons. Persons is a property of the Contact Entity which is of the type PersonCollection. PersonCollection is a collection of Person Entities.

AppointmentCollection is a Collection of Entities of type Appointment. We have created a new Appointment Entity and assigned values to some of its basic properties just as we did with the Person Entity.

We have built a link between the Appointment and the Person Entity. As you can see, the Person Entity can even contain properties of Entities Collection type, Appointments is one such property. Hence we can add the newly created Appointment to the Appointments property of the Person Entity.

It can even be done in another way.

```
    //another method of creating an Entity and adding to the
Collection
     newPerson.Appointments.Add(Appointment.CreateNew());
     newPerson.Appointments[0].SetDefaults();
     newPerson.Appointments[0].Alarm = 7;

     

 
```

[]() []() Here several tables get updated. When the new Contact Entity is saved a new row will be added to the Contact table in the database and also new rows will be added to the Appointment and Person tables. Those rows in the Person and Appointment table will be linked to the entry in the Contact table by the contact\_id field in each table. This cascade of events happen with we invoke of the Save() method.
