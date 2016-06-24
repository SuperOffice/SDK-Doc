<properties date="2016-06-24"
SortOrder="6"
/>

How to create an Appointment
============================

The example below will create an Appointment in Associate 103’s diary, while the logged in user is SAL0.

```
using SuperOffice.CRM.Services;
using SuperOffice;
 
using(SoSession newSession = SoSession.Authenticate("SAL0", ""))
{
    //Create an appointment agent
    using(AppointmentAgent appointmentAgent = new AppointmentAgent())
    {
        //Create an appointment entity through the appointment agent
        AppointmentEntity myAppointment = appointmentAgent.CreateDefaultAppointmentEntityByTypeAndAssociate(SuperOffice.Data.TaskType.Appointment, 103);
         
        //Assign values to some of the properties of the appointment
        myAppointment.Location = "5th Floor,Seminar Room";
        myAppointment.AlarmLeadTime = TimeSpan.FromMinutes(10.00);
        myAppointment.StartDate = DateTime.Today.AddDays(5);
        myAppointment.EndDate = DateTime.Today.AddDays(5);
        myAppointment.HasAlarm = true;
        myAppointment.Description = "this is a new appointment";
        myAppointment.AlldayEvent = true;
         
        //Save the newly created appointment in the database
        appointmentAgent.SaveAppointmentEntity(myAppointment);
    }
}
```

 

In the example we create an Appointment with the use of the CreateDefaultAppointmentEntityByTypeAndAssociate() method exposed through the agent factory. The method requires two parameters to be passed in to it. I.e. Type which is the type of the task requested and the AssociateID which is the id for whom the Appointment should be created for.

 
