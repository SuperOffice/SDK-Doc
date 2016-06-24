<properties date="2016-06-24"
SortOrder="5"
/>

```
 
using SuperOffice.CRM.Services;
using SuperOffice;
 
using (SoSession newSession = SoSession.Authenticate("user", "pass"))
{
    // Create the AppointmentAgent
    IAppointmentAgent agent = new AppointmentAgent();
    // Create an AppointmentEntity
    AppointmentEntity recurringAppointment = agent.CreateDefaultAppointmentEntity();                
   
    // Set the appointment text                   
    recurringAppointment.Description = "This is a recurring appointment..";
    // Set the appointment contact
    IContactAgent contactAgent = new ContactAgent();
    recurringAppointment.Contact=contactAgent.GetContact(2);        
    // Set the appointment duration
    DateTime tomorrow = DateTime.Today.AddDays(1);
    DateTime startTime = new DateTime(tomorrow.Year, tomorrow.Month, tomorrow.Day, 14, 00, 00);
    DateTime endTime = startTime.AddHours(1);
    // Date + start time planned                  
    recurringAppointment.StartDate = startTime;
    // Date + end time planned
    recurringAppointment.EndDate = endTime;          
    // Set the recurrence information as to every working day for 8 days starting from tomorrow
    RecurrenceInfo recurrenceInfo = recurringAppointment.Recurrence;                   
    recurrenceInfo.Pattern = SuperOffice.Data.RecurrencePattern.Daily;     
    recurrenceInfo.DayPattern = new RecurrenceDayPattern();
    recurrenceInfo.DayPattern.Pattern = SuperOffice.Data.RecurrenceDailyPattern.EveryWorkday;
    // recurrence start and end dates
    recurrenceInfo.StartDate = tomorrow;                   
    recurrenceInfo.RecurrenceCounter = 8;                   
    recurrenceInfo.RecurrenceEndType = SuperOffice.Data.RecurrenceEndType.Counter;
   
    // Calculate the days according the the recurrence pattern                   
    agent.CalculateDays(recurringAppointment);                
    recurringAppointment.Recurrence = recurrenceInfo;
   
    // Save the recurrent appointment
    agent.SaveAppointmentEntity(recurringAppointment);                
}
```

 

In creating a recurring appointment first an appointment is created and then the recurrence information has to be set according to the requirement. As shown in the above code sample, we have created an AppointmentAgent, using which a new AppointmentEntity is created. The appointment text, contact and the duration are set next.

The recurrence information is specified by creating a recurrence pattern. In this example the pattern is as such the appointment should recur daily for 8 days starting from tomorrow. Thus the recurrence pattern is set to ‘Daily’ and further specified as ‘EveryWorkday’. The RecurrencePattern and RecurrenceDailyPattern are enumerations.

```
// Set the recurrence information as to every working day for 8 days starting from tomorrow
RecurrenceInfo recurrenceInfo = recurringAppointment.Recurrence;                   
recurrenceInfo.Pattern = SuperOffice.Data.RecurrencePattern.Daily;     
recurrenceInfo.DayPattern = new RecurrenceDayPattern();
recurrenceInfo.DayPattern.Pattern = SuperOffice.Data.RecurrenceDailyPattern.EveryWorkday;
```

 

Our requirement is such that the appointment should recur 8 working days thus an end date cannot be specified directly. Instead, the number of recurrences is set to 8 and the recurrence end date is calculated based on the number of recurrences as shown below.

```
recurrenceInfo.RecurrenceCounter = 8;                   
recurrenceInfo.RecurrenceEndType = SuperOffice.Data.RecurrenceEndType.Counter;
```

 

Next, the recurrence pattern is created using the CalculateDays method of AppointmentAgent.  Finally the recurrence information is assigned to the AppointmentEntity and the appointment is saved to the database.

 

 

 

 

 

 

 

 

 

 

 
