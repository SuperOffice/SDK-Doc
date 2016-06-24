<properties date="2016-06-24"
SortOrder="7"
/>

Responding to an Invitation
===========================

Next we plan to accept the invitation which has the appointmentId = 150. This is done using the Appointment Agent. All call to the agent corresponds to a web service services call.

```
using SuperOffice;
using SuperOffice.CRM.ArchiveLists;
using SuperOffice.CRM.Services;
 
using(SoSession newSession = SoSession.Authenticate("sam", "sam"))
{
      //Createing an instance of the Appointment Agent
      using(AppointmentAgent newAppAgt = new AppointmentAgent())
      {
        //Accepting the invitation
        AppointmentEntity newAppEnt = newAppAgt.Accept(150,SuperOffice.Data.RecurrenceUpdateMode.OnlyThis);
      }
}
```

 

In the example, we have created an instance of the AppointmentAgent provided in the SuperOffice.CRM.Services namespace. Then by using the Accept() method we can accept the invitation by passing the appointmentId and the UpdateMode.

After the above code has been executed, the output would be as follows.

```
associate/contactFullName    date        endDate           appointmentId
StateZeroDatabase       [D:07/05/2007]    [D:07/05/2007]    [I:186]    
StateZeroDatabase       [D:07/26/2007]    [D:07/26/2007]    [I:179]    
StateZeroDatabase       [D:04/28/2007]    [D:04/28/2007]    [I:172]    
StateZeroDatabase       [D:06/14/2007]    [D:06/14/2007]    [I:161]
```

 

The reason that the details of Invitation with appointmentId 150 is not shown is that once the invitation has been accepted it becomes a normal Appointment without the invitation status set and it can no longer be retrieved by using the InvitationProvider.

See Also:

[Create an Invitation](../Create%20an%20invitation/Create%20an%20invitation.md)

 

 

 
