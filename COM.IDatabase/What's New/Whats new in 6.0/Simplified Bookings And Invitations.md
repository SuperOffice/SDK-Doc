---
uid: SimplifiedBookingsAndInvitations
title: Simplified Bookings And Invitations
---

###     Simplified Bookings And Invitations

Adding appointments is now much easier -- the internal invitation handling code is now available through the COM api:

    <see cref="SOAppointment.AddParticipant">Appointment.AddParticipant</see>( person or associate )
    <see cref="SOAppointment.RemoveParticipant">Appointment.RemoveParticipant</see>( person or associate )
    <see cref="SuperOffice.COM.SuperOfficeDB.SOAppointment.GetParticipants">Appointment.GetParticipants(type)</see> -&gt; Collection containing Associate or Person objects (read-only list)

The Add/remove participant functions figure out if the passed object is a person or an associate and act accordingly.

If an invalid type of object is passed to AddParticipant or RemoveParticipant (e.g. a project member or a contact) then an error is signaled.

We also want to make it easier to accept or reject an invitation.

    <see cref="Database.GetInvitations">Database.GetInvitiations</see> -&gt; IAppointments collection

The returned list of appointments contains invitations that the user has not accepted yet. Rejected appointments may be included in the list so that the user has a chance to reconsider a rejection.

The programmer can then accept or reject the invitations using this call:

    <see cref="SOAppointment.AcceptInvitation">Appointment.AcceptInvitation</see>( response )

Response is a new enum: enReject = 0, enAccept = 1

The Reason field is not used yet.

Appointment booking conflicts can also be detected now:
    <see cref="SOAppointment.HasConflict">Appointment.HasConflict</see> -&gt;  returns true if there is a conflict
