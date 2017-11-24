---
uid: TempVarAppointments
title: Variables for appointments
---

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td>baid</td>
<td>AppointmentId.</td>
</tr>
<tr class="even">
<td><em>bapa</em></td>
<td><em>Appointment, date of event. (<strong>obsolete and return an empty string</strong>)</em></td>
</tr>
<tr class="odd">
<td>bape</td>
<td>Appointment, end date for publication.</td>
</tr>
<tr class="even">
<td>baps</td>
<td>Appointment, start date for publication.</td>
</tr>
<tr class="odd">
<td>bate</td>
<td>Formatted list of inviteted ??, made for iCal</td>
</tr>
<tr class="even">
<td>bcon</td>
<td>The name of the appointment's contact</td>
</tr>
<tr class="odd">
<td>bcrd</td>
<td>The appointment's creationdate, formatted YYYYMMdd.</td>
</tr>
<tr class="even">
<td>bcrt</td>
<td>The appointment's creationtime formatted HHmmss.</td>
</tr>
<tr class="odd">
<td>bdlg</td>
<td>The connection from &quot;superoffice:invitations&quot; to the invitation dialog box</td>
</tr>
<tr class="even">
<td>bdll</td>
<td>The connection from &quot;Click here to open the SuperOffice SIX dialog box&quot; shown for registered contacts. Blank if the recipient not is a registered contact.</td>
</tr>
<tr class="odd">
<td>beda</td>
<td>The appointment's enddate, formatted YYYYMMdd.</td>
</tr>
<tr class="even">
<td>bema</td>
<td>The appointment's owner's emailaddress</td>
</tr>
<tr class="odd">
<td>beti</td>
<td>The appointment's endtime, formatted HHmmss</td>
</tr>
<tr class="even">
<td>bfre</td>
<td>Free/Busy time</td>
</tr>
<tr class="odd">
<td>biid</td>
<td>User ID for this rows invitee (Used with bookings)</td>
</tr>
<tr class="even">
<td>binf</td>
<td>The appoinment's description</td>
</tr>
<tr class="odd">
<td>binl</td>
<td>The first line of the appointment's description</td>
</tr>
<tr class="even">
<td>binv</td>
<td>The name of this rows invited person.</td>
</tr>
<tr class="odd">
<td>blab</td>
<td>Date or deadline if this is a task or an appointment</td>
</tr>
<tr class="even">
<td>bloc</td>
<td>The appoinment's location</td>
</tr>
<tr class="odd">
<td>bold</td>
<td>The appointments old start date, formatted as YYMMdd</td>
</tr>
<tr class="even">
<td>bolt</td>
<td>The appointments old start time, formatted as HHmmss.</td>
</tr>
<tr class="odd">
<td>bown</td>
<td>The appointment's owner, name</td>
</tr>
<tr class="even">
<td>bpat</td>
<td>The main feature of the appointments repeating pattern, formatted like the Daily pattern &quot;FREQ=DAILY;&quot; for example</td>
</tr>
<tr class="odd">
<td>bper</td>
<td>The appointment's person, name</td>
</tr>
<tr class="even">
<td>bprd</td>
<td>The appointment's priority by number, 1 = low, 2 = medium, 3 = high</td>
</tr>
<tr class="odd">
<td>bpri</td>
<td>The appointment's priority in clear text</td>
</tr>
<tr class="even">
<td>bpro</td>
<td>The appointment's project, name</td>
</tr>
<tr class="odd">
<td>bprt</td>
<td>The appointment's priority converted to iCal format<br />
our 1 = iCal 9, our 2 = iCal 5, our 3 = iCal 9.</td>
</tr>
<tr class="even">
<td>brec</td>
<td>The appointment's tooltip for repeating appointments.</td>
</tr>
<tr class="odd">
<td>bred</td>
<td>The end date for the appointment's repeating pattern, formatted as YYYYMMdd.</td>
</tr>
<tr class="even">
<td>brei</td>
<td>The text &quot;This appointment is part of a repeating pattern:&quot;.</td>
</tr>
<tr class="odd">
<td>brel</td>
<td>The text &quot;See below in this message for a list of the repeating appointments.&quot;.</td>
</tr>
<tr class="even">
<td>brid</td>
<td>Appointment ID for any repeating appointments</td>
</tr>
<tr class="odd">
<td>brsd</td>
<td>The start date for the appointment's repeating pattern, formatted as YYYYMMdd.</td>
</tr>
<tr class="even">
<td>brul</td>
<td>The entire appointment's repeating pattern, formatted as &quot;RRULE:&quot; + bpat + bsub + bunt.</td>
</tr>
<tr class="odd">
<td>bsda</td>
<td>The appointment's startdate, formatted YYYYMMdd</td>
</tr>
<tr class="even">
<td>bsta</td>
<td>The state of the appointment: &quot;TENTATIVE&quot;, &quot;CONFIRMED&quot; eller &quot;CANCELLED&quot;.</td>
</tr>
<tr class="odd">
<td>bsti</td>
<td>The appointment's starttime, formatted HHmmss</td>
</tr>
<tr class="even">
<td>bsub</td>
<td>The secondary feature of the appointment's repeating pattern, formatted as the sub-pattern Daily Workday &quot;BYDAY=MO,TU,WE,TH,FR;&quot;, for example.</td>
</tr>
<tr class="odd">
<td>bsun</td>
<td>The start of the week for the appointment's repeating pattern, formatted as &quot;WKST=SU&quot; or &quot;WKST=MO&quot;.</td>
</tr>
<tr class="even">
<td>btim</td>
<td>The appointment's date and time. E.g. 30.03.2005 (16:00)-(17:00).</td>
</tr>
<tr class="odd">
<td>btyp</td>
<td>Activitytype</td>
</tr>
<tr class="even">
<td>buid</td>
<td>Unique id made for iCal<br />
SerialnoDappointmentIdDinvitedIdDupdated<br />
Where D is a separator </td>
</tr>
<tr class="odd">
<td>bupc</td>
<td>Number of times the appointment has been updated.<br />
(Only counts from version SIX)<br />
</td>
</tr>
<tr class="even">
<td>bupd</td>
<td>The date of the last update, formatted YYYYMMdd.</td>
</tr>
<tr class="odd">
<td>bupt</td>
<td><p>The time of the last update, formatted HHmmss.</p></td>
</tr>
</tbody>
</table>