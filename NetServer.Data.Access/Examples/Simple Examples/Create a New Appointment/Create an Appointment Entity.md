<properties date="2016-05-11"
SortOrder="10"
/>

Using the Appointment entity exposed in the SuperOffice.CRM.Entities is one of the easiest ways to create an Appointment as shown in the example below.

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
      newAppointment.Location = "Seminar Room 123";
      newAppointment.EndDate = new DateTime(2007,3, 4);
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
 
      //Saving the Created Appointment Entity
      newAppointment.Save();
}
```

 

After a SoSession has being created, we proceed on to creating an appointment.

In order to create an Appointment it is required to create an instance of the Appointment Entity with the use of the CreateNew() method exposed in the Associate class, after which the default values for the Entity will be set using the SetDefaultes() method as shown below.

```
            Appointment newAppointment = Appointment.CreateNew();
            newAppointment.SetDefaults();
```

 

The Appointment Entity exposes different types of properties, which are of types such as int string, DateTime along with SuperOffice types such as Entity and Entity Collection types, Row types and many more. The next section of the code shows how values are assigned to such properties. These assignments can be done as explained in the Entities section. However, special note should be taken on when assigning the Alarm property as show below.

[Entities description and examples](../../../Developer's%20Guide/Entities/Entities.md)
```
            newAppointment.HasAlarm = 1;
            newAppointment.Alarm = 5;
```

 

The HasAlarm property should be assigned first before the value for the Alarm property is assigned. Once the required values to the properties of the Appointment Entity has been added or assigned it could be saved with the Save() method available in the Appointment class as shown below.

```
            newAppointment.Save();
```

 
