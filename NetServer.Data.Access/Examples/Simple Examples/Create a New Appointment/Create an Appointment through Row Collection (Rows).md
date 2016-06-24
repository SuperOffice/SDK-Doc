<properties date="2016-05-11"
SortOrder="14"
/>

Rows type consists of a collection of Rows such as AppointmentRows type consists of a Collection of AppointmentRow types. Therefore, it is possible to create an AppointmentRow with the AppointmentRows class which has being explained in the example shown below.

```
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("sam", "sam"))
{
      //Instantiate a AppointmentRow Type
      AppointmentRow newAppointment = AppointmentRow.CreateNew();
 
      //Set Default values to the Appointment Row
      newAppointment.SetDefaults();
 
      //Assign values to the instantiated AppointmentRow
      newAppointment.Location = "Seminar Room 661";
      newAppointment.ContactId = 20;
      newAppointment.PersonId = 10;
      newAppointment.Alarm = 1254;
      newAppointment.DoBy = new DateTime(2007, 3, 31);
      newAppointment.HasAlarm = 1;
 
      //Instantiate an AppointmentRows type class
      AppointmentRows newAppRows = AppointmentRows.CreateNew();
 
      //Adding the created Contacted to the Collection
      newAppRows.Add(newAppointment);
 
      //Saving the ContactRows Collection
      newAppRows.Save();
}
```

 

An AppointmentRow can be created according the example shown in Creating an Appointment Row. [Create an Appointment Row](Create%20an%20Appointment%20Row.md) the Appointment Row has being created, the next phase of the code segment is to instantiate an AppointmentRows class. After which the instance can be added to the collection with the execution of the Add() method.

```
            AppointmentRows newAppRows =
AppointmentRows.CreateNew();
            newAppRows.Add(newAppointment);
            newAppRows.Save();
```

 

Once the AppointmentRow is added the Collection could be saved by executing the Save() method which ensures that the created entity is added to the Appointment table in the database.
