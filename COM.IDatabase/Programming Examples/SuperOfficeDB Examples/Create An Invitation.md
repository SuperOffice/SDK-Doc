---
uid: exampleCreateAnInvitation
title: Create An Invitation
---

### Creating an invitation in the SuperOffice database

Here we log in to the database directly, so the SOCRM application does not need to be running for this to work.

If the login fails, then isOk will be false and an error message is displayed.

Create a new invitation, with associates and external persons on the database owner company card.

```
set soDb = CreateObject("SuperOfficeDB.Database")
isOk = soDb.Login("user", "pass")
if isOk Then 
    Set theInvitation = soDb.CreateAppointment
    theInvitation.SetDefaults
    theInvitation.Contact = soDb.GetContact(soDb.OwnerContactId)
    theInvitation.Description = "You're all invited to pizza and playstation-night 5 days from now"
    theInvitation.DoBy = DateAdd("d", "5", Now())
    theInvitation.AddParticipant soDb.GetPerson(2), False
    theInvitation.AddParticipant soDb.GetPerson(3)
    theInvitation.AddParticipant soDb.GetAssociate(2)
    theInvitation.AddParticipant soDb.GetAssociate(3)
    soDb.GetAssociate (3)
    theInvitation.Save
else
   MsgBox "Login failed"
end if
```

 

How we can create an Invitation using the SuperOffice.COM.SuperOfficeDB namespace available in the SuperOfficeDB.dll.
To create an Invitation we would need to create and Appointment and invite persons. These are called invitations.

There are no classes called SOInvitation exposed through SuperOfficeDB.dll.

In the following example we show how to create an Appointment and add participants to it.

```
using SuperOffice.COM.SuperOfficeDB;
Database newDb = new DatabaseClass();
bool isOK = newDb.Login("USER", "PASS");
if (isOK)
{
    //Create a new Invitation/Appoinment instance
    SOAppointment newAppointment = newDb.CreateAppointment();
    //Assign default values to the created Invitation
    newAppointment.SetDefaults();
    //Set values to the properties of the Invitation/Appointment               
    newAppointment.DoBy = new DateTime(2008, 8, 9);
    newAppointment.Location = "new meeting room";
    newAppointment.Associate = newDb.GetAssociate(103);
               
    //Add participants
    SOPerson newPar1 = newDb.GetPerson(11);
    SOPerson newPar2 = newDb.GetPerson(12);
    SOPerson newPar3 = newDb.GetPerson(13);
    newAppointment.AddParticipant(newPar1, false);
    newAppointment.AddParticipant(newPar2, false);
   newAppointment.AddParticipant(newPar3, false);
                
   //Save the created Invitation/Appointment
    newAppointment.Save();
}
else
   Console.WriteLine("Incorrect Username or Password");
```

Once the above appointment has been saved it can be seen through the window or web client.