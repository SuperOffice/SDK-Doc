<properties date="2016-05-11"
SortOrder="11"
/>

Creating an Appointment through an entity can be done in two different ways, i.e. if you create an Entity called “A” and assign it to an Entity called “B”, when saving Entity “B” entity will be saved through NestedPersistent, or you could create an Entity which is a property of another Entity. Then when saving the main Entity the Entity created as the property of it will be saved as well. Both these would give the same results.

```
using SuperOffice.CRM.Entities;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("sam", "sam"))
{    
      //Create an Appointmnet Entity
      Appointment newAppointment = Appointment.CreateNew();
 
      //Setting the Defualt values for the Appointment
      newAppointment.SetDefaults();
                 
      //Assigning values to the individual properties of the
Appointment Entity
      //Assigning basic properties to the Appointment
      newAppointment.Location = "Seminar Room 665";
      newAppointment.EndDate = new DateTime(2007, 3, 4);
      newAppointment.Status =
SuperOffice.Data.AppointmentStatus.NotStarted;
      newAppointment.Private =
SuperOffice.Data.AppointmentPrivate.Public;
      newAppointment.HasAlarm = 1;
      newAppointment.Alarm = 5;
 
      //Assigning a Row type property to the Appointment Entity
      newAppointment.Associate =
SuperOffice.CRM.Rows.AssociateRow.GetFromIdxAssociateId(100);
 
      //Assigning an Entity type property to the Appointment
      newAppointment.Contact = Contact.GetFromIdxContactId(20);
      newAppointment.Person = Person.GetFromIdxPersonId(10);
     
      //Retrieving an Intsance of another Entity
      Contact newContact = Contact.GetFromIdxContactId(10);
                                      
      //Assing the Created Contact to the other Entity
      newContact.Appointments.Add(newAppointment);
 
      //Saving the Updated Entity
      newContact.Save();
}

Example 1
```

In the example above, we have created an Appointment as explained in example creating an Appointment Entity. [Creating Entities](../../../Developer's%20Guide/Entities/Entities.md) difference is that we do not save the created Appointment. Instead, we assign it to the Appointments property of the Contact instance created and then save the Contact instance as shown below.

```
            Contact newContact = Contact.GetFromIdxContactId(10);
            newContact.Appointments.Add(newAppointment);
            newContact.Save();
```

 

Below is the example of how we may make use of the AddNew() method available in the Appointments property of the Contact class in order to create a new Appointment.

```
using SuperOffice.CRM.Entities;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("sam", "sam"))
{
      //Retrieving an Intsance of another Entity
      Contact newContact = Contact.GetFromIdxContactId(10);
 
      //Create a new instance of the Appointment ot be added to the
Collection
      newContact.Appointments.AddNew();
 
      //Set Deafult Values to the created Appointment
      newContact.Appointments[0].SetDefaults();
    
      //Assigning values to the individual properties of the
Appointment Entity
      //Assigning basic properties to the Appointment
      newContact.Appointments[0].Location = "Seminar Room 664";
      newContact.Appointments[0].EndDate = new DateTime(2007, 3,
4);
      newContact.Appointments[0].Status =
SuperOffice.Data.AppointmentStatus.NotStarted;
      newContact.Appointments[0].Private =
SuperOffice.Data.AppointmentPrivate.Public;
      newContact.Appointments[0].HasAlarm = 1;
      newContact.Appointments[0].Alarm = 5;
 
      //Assigning a Row type property to the Appointment Entity
      newContact.Appointments[0].Associate =
SuperOffice.CRM.Rows.AssociateRow.GetFromIdxAssociateId(100);
 
      //Assigning an Entity type property to the Appointment
      newContact.Appointments[0].Contact =
Contact.GetFromIdxContactId(20);
      newContact.Appointments[0].Person =
Person.GetFromIdxPersonId(10);
 
      //Saving the Updated Entity
      newContact.Save();
}

Example 2
```

The difference between Example 1 and Example 2 is that in Example 2 we have created an instance of the Appointment to be added to the Appointments Collection and by indexing through the collection we have assigned the desired values for the specific Appointment as shown below.

```
      newContact.Appointments.AddNew();
      newContact.Appointments[0].Location = "Seminar Room 664";
      newContact.Appointments[0].Contact =
Contact.GetFromIdxContactId(20);
```

 

The Appointment created will be saved when saving the Contact Entity with the use of it’s Save() method.

An important point to remember!

When adding an Appointment by indexing through the Appointment Collection of any Entity you should take caution to identify and add to the newly created Appointment, without updating an earlier Appointment. For instance in the Example 2 if there was an Appointment already existing in Appointment\[0\] location when u assigned values to properties as shown in the example 2 what actually would happen is an update instead of an insert since the values that already exists in the 0 <sup>th</sup> location will be modified.
