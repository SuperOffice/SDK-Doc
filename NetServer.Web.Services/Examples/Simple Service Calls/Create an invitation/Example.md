<properties date="2016-06-24"
SortOrder="5"
/>

Example
=======

An invitation is created when we add more persons as participants to an existing or new appointment.

 

```
using SuperOffice;
using SuperOffice.CRM.Services;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    //get the appointment agent
    using(AppointmentAgent myAgent = new AppointmentAgent())
    {
        //create a default appointment
        AppointmentEntity myAppointment = myAgent.CreateDefaultAppointmentEntity();
        //set the start date and time
        myAppointment.StartDate = System.Convert.ToDateTime("08/08/2007 3:00:00 PM");
        //set the end date and time
        myAppointment.EndDate = System.Convert.ToDateTime("08/08/2007 5:00:00PM");
        //set a description
        myAppointment.Description = "Team Meeting";
        //create a participant array object
        ParticipantInfo[] myParticipantArray = new ParticipantInfo[3];
        //set the associate id of the participant
        myParticipantArray[0] = new ParticipantInfo();
        myParticipantArray[0].AssociateId = 17;
        //Book resource for the appointment. this can be a
        //meeting room, projector etc...
        myParticipantArray[1] = new ParticipantInfo();
        myParticipantArray[1].AssociateId = 41;
        //add person who is from another contact
        myParticipantArray[2] = new ParticipantInfo();
        myParticipantArray[2].PersonId = 42;
        //set the array to the participants property
        myAppointment.Participants = myParticipantArray;
        //save the appointment
        myAgent.Save(myAppointment,
            SuperOffice.Data.RecurrenceUpdateMode.OnlyThis,false,null,null);   
    }
}
```

 

Here there is no reference to an invitation, when we invite a person to the appointment we have created; the invitation will be created for that person. Here we have created an appointment agent and after filling the start date, end date and the description we have created a ParticipantInfo array. In the participant info array we have given the AssociateId of a user and a resource, and a PersonId of someone who is not a user – a person we want to invite to the newly created appointment.

When we save the appointment an invitation will also be added to the person we invited and will be shown in the diary of the person on appropriate date and time. This only happens if the invited person also is an associate. You may invite persons belonging to other contacts as well, these will not have a diary where the appointment is shown, but it will be shown in the activity archive of their contact instead.

The Save will create three appointments, one for each participant. The service will not create an appointment for the current user unless you add a participant object to the list. If you want to include the current user as a participant, you must remember to add a participant object with the current user as a participating associate.

The first participant does not get an invitation, since the first participant is considered the inviter. The appointment just appears in the first participant’s diary.

Resources and non-user persons do not receive invitations – the appointment is just created as a normal appointment for these participants.

 

An important point to remember!

The AssociateId, PersonId and the ContactId that you specify in the participant info object must be consistent. If you specify more than one field for a participant, then they must agree with the information in the database. Specifying multiple values on a single participant object will not create multiple invitations; each participant object is a single invitation.

 

 

 

 

 

 

 

 

 

 

 

 

 
