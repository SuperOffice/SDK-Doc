<properties date="2016-05-11"
SortOrder="5"
/>

```
 
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
using SuperOffice.CRM.Services;
using SuperOffice.Data;
 
try
{
    using (SoSession newSession = SoSession.Authenticate("p", "p"))
    {
        // Create an appointment
        Appointment recurringAppointment = Appointment.CreateNew();
        recurringAppointment.SetDefaults();
        // Set the appointment text
        TextRow appointmentText
=recurringAppointment.AppointmentText;
        appointmentText.Text = "This is a recurring appointment.";
        recurringAppointment.AppointmentText = appointmentText;
        // Set the appointment contact
        recurringAppointment.Contact =
Contact.GetFromIdxContactId(2);
       
        // Set the appointment type and status
        recurringAppointment.Type = AppointmentType.inDiary;
        recurringAppointment.Status = AppointmentStatus.NotStarted;
        // Set the appointment duration
        DateTime tomorrow = DateTime.Today.AddDays(1);
        DateTime startTime = new DateTime(tomorrow.Year,
tomorrow.Month, tomorrow.Day, 14, 00, 00);
        DateTime endTime = startTime.AddHours(1);
        // Date + start time planned
        recurringAppointment.DoBy = startTime;
        // Date + end time planned
        recurringAppointment.EndDate = endTime;
                           
        // Create the Appointment Matrix
        AppointmentMatrix appointmentMatrix = new
AppointmentMatrix(recurringAppointment,
RecurrenceUpdateMode.ThisAndForward);
       
        // Set the recurrence information as to every working day
for 8 days starting from tomorrow
        RecurrenceInfo recurrenceInfo =
appointmentMatrix.Recurrence;
        recurrenceInfo.Pattern = RecurrencePattern.Daily;
        recurrenceInfo.DayPattern = new RecurrenceDayPattern();
        recurrenceInfo.DayPattern.Pattern =
RecurrenceDailyPattern.EveryWorkday;
 
        recurrenceInfo.StartDate = tomorrow;
        recurrenceInfo.EndDate =
recurrenceInfo.StartDate.AddDays(8);
 
        // Calculate the days according the the recurrence pattern 
        appointmentMatrix.CalculateDays();
        appointmentMatrix.Recurrence = recurrenceInfo;    
       
        // Save the recurrence matrix
        appointmentMatrix.Save();                                  
          
    }
}
catch (Exception ss)
{
    Console.WriteLine(ss.Message);
    Console.ReadKey();
}
 
 
```

 

First we have created the appointment that should recur, using the CreateNew method exposed in the Appointment Entity. The appointment text is set next, followed by setting the contact, appointment type and status for the appointment. Next we have created the appointment matrix passing the appointment to recur.

In creating recurring appointments the most important part is setting the recurrence information. This is done by creating a recurrence pattern. In this example the pattern is as such the appointment should recur daily for 8 days starting from tomorrow. Thus the recurrence pattern is set to ‘Daily’ and further specified as ‘EveryWorkday’. The RecurrencePattern and RecurrenceDailyPattern are enumerations.Next we have set the start and end dates for the repetition pattern. Using the CalculateDays method the days for the recurrence pattern are created. Finally the recurrence information is assigned to the matrix and the matrix is saved to the database.

 

 

 

 

 

 

 

 

 

 

 

 
