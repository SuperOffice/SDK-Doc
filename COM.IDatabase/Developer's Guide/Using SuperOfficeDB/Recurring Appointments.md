---
uid: RecurringAppointments
title: Recurring Appointments
---

###     Recurring Appointments

A recurring appointment is stored in two parts:

-   A recurrence rule is stored which defines the pattern of the recurrence
-   All the appointments created by the recurrence are created in the appointment table, and each one points to the recurrence rule that defines it.

 

The recurrence rule system is exposed as a separate object.
    Appointment.Recurrence -&gt; IRecurrence (read-only)
    Appointment.IsRecurring -&gt; Variant Bool (read-only)

<see cref="SuperOffice.COM.SuperOfficeDB.SORecurrence">SORecurrence Object</see> 

    UpdateMode  ERecurrenceUpdateMode
    Description  string  (read-only) (GetRecurrenceInfoText)
    StartDate  DATE
    EndDate   DATE
    NumberOfRecurrences short
    Pattern   enum ERecurrencePattern
    SubPattern  enum ERecurrenceSubPattern
    Weekday short -  bit-flag: monday=1, tuesday=2, wednesday=4 etc.
    Day   short - day value in day rule -     Week   short - week number in week rules
    Month   short  - month number in month rules
    AddDate( date )  - add any random date
    RemoveDate( date ) - remove any random date from rule.
    ComputeDates()  -&gt; Collection of DATEs that recurrences fall on

 

So we can say things like this:

    Set appnt = db.GetAppointment( 123 )
    appnt.Recurrence.AddDate( \#2005-03-14\# )
    appnt.Recurrence.Weekday( enDayTuesday ) = true
    appnt.Recurrence.UpdateMode = kThisAndForward
    set dates = appnt.Recurrence.ComputeDates
    for each d in dates
       msg = msg & d & vbcrlf
    next
    msgbox “Recurs on “ & msg
    appnt.Save

 

Recurrence.UpdateMode defaults to this-and-forward if nothing else is specified.
A new recurrence object is created if one does not exist, so Appointment.Recurrence will never return NULL.

 

You must call ComputeDates for the new settings on the recurrence object to take effect.

The new appointments are not created until you save the root appointment object.

|                            |                                                                                                                                                                                                                                                                                                                                                                                        |
|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![](../images/hs-caution.gif) | Modifying the start/end dates on recurring appointment after it has been saved is a bad idea. Changing the start/end time on a recurring appointment will work fine, but changing the date will only lead to confusion. Note that changing the start time on an appointment will trigger an update on all subsequence recurrences if you have set the update mode to this-and-forward. |

 

**Recurrence Pattern**

Pattern is a new enum: enPatternDaily, enPatternWeekly, enPatternMonthly, enPatternYearly, enPatternCustom
Subpattern is a new enum: enSubPatternNone, enDailyWorkday, enDailyEveryDay, enDailyCycle, enMonthlyDate, etc.

The enum values correspond to what you see in the pattern dialog.

![Recurring Appointment dialog](../images/repeat%20dialog.gif)

 

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><img src="images/hs-caution.gif" /></td>
<td><p>The sub-pattern should match the pattern. There is little error checking if you mix the wrong set.</p>
<p>i.e. you can set pattern = yearly and sub-pattern = dailyEveryDay and something strange will probably happen.</p></td>
</tr>
</tbody>
</table>