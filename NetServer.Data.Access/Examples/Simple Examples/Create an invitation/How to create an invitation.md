<properties date="2016-05-11"
SortOrder="5"
/>

After creating an appointment you may need to invite members. The following example demonstrates how this is done.

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
using SuperOffice.Data;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    //Create a New Appointment
    Appointment appointmentOne = Appointment.CreateNew();
    appointmentOne.SetDefaults();
    appointmentOne.AlldayEvent = 1;
    appointmentOne.DoBy = DateTime.Now.AddHours(8);
    appointmentOne.Task = TaskRow.GetFromIdxTaskId(14);
    appointmentOne.AppointmentText = TextRow.CreateNew();
    appointmentOne.AppointmentText.Text = "This is a Project
Meeting";
 
    //Retrieve a person to invite
    Person invitee = Person.GetFromIdxPersonId(5);
 
    //Add participants to the Appointment
    SuperOffice.CRM.Services.ParticipantInfo[] participants = new
SuperOffice.CRM.Services.ParticipantInfo[1];
    participants[0] = new
SuperOffice.CRM.Services.ParticipantInfo();
 
    //Set the properties of the participant
    participants[0].AssociateId = invitee.AssociateId;
    participants[0].PersonId = invitee.PersonId;
    participants[0].SendEmail = false;
 
    RecurrenceUpdateMode recurrenceMode =
RecurrenceUpdateMode.OnlyThis;
 
    //Add the appoitment to the appointmentMetrix
    AppointmentMatrix appType = new
AppointmentMatrix(appointmentOne, recurrenceMode);
    appType.AddParticipant(participants);
 
    //Save the appointment
    appType.Save();
}
```

 

In this example, we have initially created an appointment. We have set certain properties of the appointment. A Person Entity is used for the purpose of adding as a participant to this appointment. In the latter part of the above example we have set some properties of the participant such as AssociateId, PersonId and SendEmail. You can create an array of ParticipantInfo as we have done above. An   instance of the AppointmentMatrix is created by passing the newly created appointment.

You can add the participants to the AppointmentMatrix by using the AddParticipant() method.

When the AppointmentMatrix is saved two records will be added to the appointment table.  One is corresponding to the creator of the appointment and the other one is referring to the participant. If we have added more participants more records will be entered in to the appointment table.
