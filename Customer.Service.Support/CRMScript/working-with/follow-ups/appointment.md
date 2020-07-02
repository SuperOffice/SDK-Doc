---
title: Calendar appointments
SortOrder: 10
uid: crmscript_appointments
---

An *appointment* is a type of **follow-up** with a defined start and end time, such as a meeting. It will be shown in the calendar of the owner's diary.

## Common scenarios

| scenario          | resource | 2+ participants | description                                         |
|-------------------|:--------:|:---------------:|-----------------------------------------------------|
| own time reserved |          |                 | you have set aside time to work on something, alone |
| own time and resource reserved   | x           |                 | as above + need room or equipment |
| meeting w/ multiple participants | x   | x     | a meeting, commonly also w/ a resource or location  |

**Also:**

* Appointments can be single events or part of a recurring series.
* Overdue and completed appointments will be in the todo list in addition to the calendar.
* Appointments involving a resource and/or additional participants are called **bookings** (or group reservation).
* Appointments can be created by the owner or assigned/delegated to an associate.

## Get appointments

> [!TIP]
> You can only retrieve appointments for persons that are SuperOffice users (associates). The signed-in user must also have permission to view those appointments. Otherwise, an exception is thrown.

### NSAppointment[] GetPersonDiary(Integer personId, DateTime startTime, DateTime endTime, Integer count)

Fetches a limited number of appointments within a time range for the given person.
`GetPersonDiary()` will ignore appointments not shown in the user's diary.

> [!TIP]
> Set `count` to -1 to not restrict the collection of appointments retrieved.

### NSAppointment[] GetPersonAppointments(Integer personId, Bool includeProjectAppointments, DateTime startTime, DateTime endTime, Integer count)

Same as `GetPersonDiary()`, but will also include all appointments in projects that the user is a member of if set to **true**.

### Create appointment

### Update appointment

...

### Move appointment

...

### Delete appointment

...

### Mark as complete

You can't edit completed follow-ups until you have undone their Completed status!

## Resources

...

## Delegation

Delegation is the act of assigning a follow-up **to someone else**. This means that the creator and owner of the appointment are 2 different persons. Common scenarios:

* A personal assistant manages the CEO's diary on their behalf.
* HR is onboarding a new hire and sets up the introductory program for the employee ahead of time.
* A team lead is charged with calling 20 customers and delegates 4 calls to each of their 5 direct reports.
* A colleague is on vacation, but they need to phone a client when they get back.
* A consultant has arranged a meeting with a client, but has become ill and needs to send someone else.

**To delegate an appointment:**

1. Create or update the follow-up as usual.
2. Set `owner` to the associate ID you are delegating to.
3. Set `AssignedBy` to the previous owner.
4. Save.

> [!NOTE]
> `AssignedBy` is set when you change the owner, but not before.

### Relevant statuses

| Status | Description                                                 |
|:------:|:------------------------------------------------------------|
| 11     | Appointment has been assigned to user (initial status)      |
| 12     | User has seen, but not accepted or declined the appointment |
| 13     | User has declined the assigned appointment                  |

## Reference

### Appointment types

| Type | Description                                     |
|:----:|:------------------------------------------------|
| 0    | Undefined/initializing                          |
| 1    | In calendar, if overdue or done today, also in todo list |
| 2    | In todo list (no start time)                    |
| 6    | Meeting invite (changes to 1 when accepted)     |
| 7    | Pending assignment (changes to 2 when accepted) |

### Status

| Status | Description        |
|:------:|:-------------------|
| 0      | Unknown/ a post-it |
| 1      | Not started        |
| 2      | Started            |
| 3      | Completed          |
| 4      | Hidden             |
| 5-10   | Booking            |
| 11-13  | Assignment         |

### Frequently used fields

| Field          | Description                                  |
|:---------------|:---------------------------------------------|
| appointment_id | ID                                           |
| associate_id   | owner                                        |
| contact_id     | company                                      |
| person_id      | participant if a meeting                     |
| task_idx       | FK Task list                                 |
| type           | EnumAppointmentType                          |
| status         | EnumAppointmentStatus                        |
| mother_id      | For group reservations and invites           |
| location       | Custom string or info from a booked resource |
| alldayEvent    | 0 = no; 1 = yes                              |
| freeBusy       | 0 = busy; 1 =  free                          |

For a complete list of fields, see the [database reference](https://community.superoffice.com/documentation/SDK/SO.Database/html/Tables-appointment.htm).

### Timestamp values

| Field         | Description                          |
|:--------------|:-------------------------------------|
| registered    | UtcDateTime of registration          |
| updated       | UtcDateTime of last update           |
| done          | When a task was completed (DateTime) |
| do_by         | Planned deadline for task (DateTime) |
| activeDate    | Display date (DateTime)              |
| endDate       | Planned completion time (DateTime)   |
