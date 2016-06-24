<properties date="2016-05-11"
SortOrder="12"
/>

SuperOffice.CRM.Entities namespace exposes Entity Collections such as AppointmentCollection, PersonCollection and so on. It is therefore possible to create an Appointment Entity and assign it to the Collection and there by saving the collection the Appointment Entity will be saved. The following example demonstrates the method of doing the above.

```
using SuperOffice.CRM.Entities;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("sam", "sam"))
{
      //Create an Appointment Entity
      Appointment newAppointment = Appointment.CreateNew();
 
      //Setting the Defualt values for the Appointment
      newAppointment.SetDefaults();
 
      //Assigning values to the individual properties of the
Appointment Entity
      //Assigning basic properties to the Appointment
      newAppointment.Location = "Seminar Room 662";
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
 
      //Instantiating the Appointment Collection
      AppointmentCollection newAppCol =
AppointmentCollection.CreateNew();
                 
      //Adding the Contact Entity to the Collection and Saving the
Collection
      newAppCol.Add(newAppointment);
      newAppCol.Save();
}
```

 

After creating an instance of the Appointment Entity and assigning the desired values the next step is to assign the Created Appointment to the Collection.

First we create an Appointment collection and then Add the Appointment to the Collection with the use of the Add() method. Once it has being added the Collection can be saved with the use of the Save() as shown below.

```
            AppointmentCollection newAppCol =
AppointmentCollection.CreateNew();
            newAppCol.Add(newAppointment);
            newAppCol.Save();
```
