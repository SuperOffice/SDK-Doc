<properties date="2016-05-11"
SortOrder="13"
/>

An AppointmentRow refers to a row in the database‘s Appointment Table. Therefore, the AppointmentRow consist of basic data type such as string, int, datetime etc, which are supported by the SQL. In order to create an AppointmentRow we make use of the SuperOffice.CRM.Rows namespace. The following example shows how we make create a Appointment using the AppointmentRow class.

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
      newAppointment.Location = "Seminar Room 663";
      newAppointment.ContactId = 20;
      newAppointment.PersonId = 10;
      newAppointment.Alarm = 1254;
      newAppointment.DoBy = new DateTime(2007, 3, 31);
      newAppointment.HasAlarm = 1;
                   
      //Saving the created Appointment Row
      newAppointment.Save();
}
```

 

The first step of the example shows how to instantiate an AppointmentRow class and then the next step is to set the default values of it with the use of the SetDefaults() method.

```
            AppointmentRow newAppointment =
AppointmentRow.CreateNew();
            newAppointment.SetDefaults();
```

 

The next statements show how the different properties of the AppointmentRow are assigned. Once such assignments are made the row could be saved with Save() method available in the AppointmentRow class.
