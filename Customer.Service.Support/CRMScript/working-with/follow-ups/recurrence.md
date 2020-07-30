---
title: Recurrence
SortOrder: 50
uid: crmscript_recurrence
---

A repeating follow-up is a series of appointments, tasks, or calls scheduled to occur at regular intervals. For example, a weekly status meeting.

## Frequency

| Value   | Description  f                                | Comment                | Example                        |
|:--------|:---------------------------------------------|:-----------------------|:-------------------------------|
| daily   | every working day<br />every day of the week | or custom              | every other day                |
| weekly  | every week on given day                      | must set weekday       | every 3 weeks on Tuesday       |
| monthly | every month on given day                     | must set day of month  | on the 5th of the month, every 4th month |
| yearly  | every year on given date                     | must set day and month | every 23rd of September        |

A **cycle** is the number of days between each recurrence.

## Get follow-ups belonging to a series

## Reference

### NSRecurrenceInfo

| Field             | Type             | Description                         |
|:------------------|:-----------------|:------------------------------------|
| IsRecurrence      | Bool             | whether it is a repeating follow-up |
| RecurrenceId      | Integer          | unique ID of the rule               |
| RecurrenceEndType | Integer          | 0 = unknown<br/>1 = end by date<br />2 = end after n repetitions                 |
| RecurrenceCounter | Integer          | the number of repetitions<br />used only when the end is calculated from a count |
| StartDate         | DateTime         | when repetition starts              |
| EndDate           | DateTime         | when repetition ends<br />used only when the end is calculated from a date       |
| Dates             | RecurrenceDate[] | List of all dates the follow-up occurs<br />wraps a DateTime                     |
| Pattern           | Integer          | the main pattern of recurrence      |

### Main patterns

| Value | Description |
|:-----:|:------------|
| 0     | unknown     |
| 1     | daily       |
| 2     | weekly      |
| 3     | monthly     |
| 4     | yearly      |
| 5     | custom      |

### Sub-patterns

| Value | Name           | Type   | Description                     |
|:-----:|:---------------|--------|---------------------------------|
| 0     | Unknown        |        |                                 |
| 1     | EveryWorkday   | daily  | Mon-Fri                         |
| 2     | EveryWeekday   | daily  | Mon-Sun                         |
| 3     | EveryCyclicDay | daily  | cyclic interval of days         |
| 4     | DayOfMonth     | weekly | repeat on day n of the month<br />ex: the 17th day of every 2 months        |
| 5     | WeekdayOfMonth | weekly | repeat on given weekday     <br />ex: the 3rd Thursday of every 3 months    |
| 6     | DayOfMonth     | yearly | repeat on given date every year |
| 7     | WeekdayOfMonth | yearly | repeat on given weekdays of month<br />ex: the 3rd Thursday of every August |

### Weekdays

| Value | Weekday   |
|:-----:|:----------|
| 0     | Unknown   |
| 1     | Monday    |
| 2     | Tuesday   |
| 4     | Wednesday |
| 8     | Thursday  |
| 16    | Friday    |
| 32    | Saturday  |
| 64    | Sunday    |

> [!TIP]
> Enumeration flag values can be combined.

### Week of month

| Value | Description                |
|:-----:|:---------------------------|
| 0     | Unknown                    |
| 1     | The 1st week of the month  |
| 2     | The 2nd week of the month  |
| 3     | The 3rd week of the month  |
| 4     | The 4th week of the month  |
| 5     | The last week of the month |
