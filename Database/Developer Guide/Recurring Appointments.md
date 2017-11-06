---
uid: RecurringAppointments
title: Recurring Appointments
---

### Recurring Appointments

A recurring appointment is stored in two parts:

-   A recurrence rule is stored which defines the pattern of the recurrence
-   All the appointments created by the recurrence are created in the appointment table, and each one points to the recurrence rule that defines it.

 

|                            |                                                                                                                                                                                                                                                                                                                                                                                        |
|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![](../Images/hs-caution.gif) | Modifying the start/end dates on recurring appointment after it has been saved is a bad idea. Changing the start/end time on a recurring appointment will work fine, but changing the date will only lead to confusion. Note that changing the start time on an appointment will trigger an update on all subsequence recurrences if you have set the update mode to this-and-forward. |

 

**Recurrence Pattern**

Pattern is a new enum: enPatternDaily, enPatternWeekly, enPatternMonthly, enPatternYearly, enPatternCustom
Subpattern is a new enum: enSubPatternNone, enDailyWorkday, enDailyEveryDay, enDailyCycle, enMonthlyDate, etc.

The enum values correspond to what you see in the pattern dialog.

![Recurring Appointment dialog](../Images/repeat%20dialog.gif)

 

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><img src="../images/hs-caution.gif" /></td>
<td><p>The sub-pattern should match the pattern. There is little error checking if you mix the wrong set.</p>
<p>i.e. you can set pattern = yearly and sub-pattern = dailyEveryDay and something strange will probably happen.</p></td>
</tr>
</tbody>
</table>

 

The system generates appointment records for all the recurrence instances:

```SQL
SELECT appointment\_id, associate\_id, activeDate, type, status, recurrenceRuleId 
FROM appointment WHERE recurrenceRuleId = 5
```

![](../Images/RecurrenceRuleTable.png)

Taking a look at the rule itself:

```SQL
SELECT \* FROM recurrencerule WHERE recurrencerule\_id = 5
```

![](../Images/RecurrenceRule5.png)

This recurrence rule has

-   pattern = 2 (weekly) (corresponds to the radio-button choice in the dialog).
-   subPattern = 0 (none)
-   weekdays = 3 ( = 1+3 = monday + tuesday) (corresponds to the checkboxes marked in the dialog)
-   cyclicWeek = 1  = "every 1 week(s)"

 

Editing
-------

If you decide to change the rule pattern in the middle of a series of appointments, then a new rule is created, and the old rule is stopped at the point where the break occurs.

If you change the start-time for a single appointment, the rule is not affected. The appointment is treated as an exception to the rule. The exception can be made un-exceptional by moving it back into line with the other appointments.

 

 


### See Also:

[recurrencerule Table](../Tables/recurrencerule.md)