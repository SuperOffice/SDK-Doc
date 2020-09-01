---
title: Calendar and todo list
SortOrder: 20
uid: crmscript_followups
---

The diary in SuperOffice CRM is fundamentally a personal diary. It consists of a calendar and a todo list and is used similar to a Filofax with separate pages for every day, week, and month.

* **calendar**: shows entries allocated to a particular time or date
* **todo list**: shows stuff that you have not yet completed, mostly calls and tasks without time or date

In the UI, both are closely linked to the **Diary** screen.

## Three types of follow-ups

In SuperOffice CRM, *follow-up* is a collective term for **appointments**, **phone calls**, and **tasks** . These entities are always tied to an [associate](xref:crmscript-employees) and have some form of [time](../../datatypes/datetime-type.md) reference.

| type        | start time | end time | duration   | deadline | displayed | description | example |
|-------------|:----------:|:--------:|:----------:|:--------:|-----------|-------------|---------|
| appointment | x          | x        | calculated |          | calendar  | activity w/ defined start and end time | meetings |
| task/todo   |            |          |            | x        | todo list | follow-up w/ no start time | reminder for stuff due by a specific time |
| call        | x          |          | x          |          | todo list | phone call  |         |

> [!NOTE]
> Overdue appointments will by default also appear in the todo list!<br />Logged phone calls will also appear in the calendar.

## Follow-ups vs. activities

Follow-ups are part of a broader group of entities labeled **activities**:

* follow-ups
  * [appointment](xref:crmscript_appointments)
  * [task](xref:crmscript_tasks)
  * [call](xref:crmscript_calls)
* documents
  * document
  * email
* mailings and form submissions
* chat sessions

> [!NOTE]
> It is important to understand the distinction between activities and follow-ups. When you get data from the [appointment table](https://community.superoffice.com/documentation/SDK/SO.Database/html/Tables-appointment.htm) or use the CRMScript [NSAppointment class](https://community.superoffice.com/documentation/SDK/SO.Customer.Service.Support/html/EJScript-Classes-NSAppointment-NSAppointment.htm), it is crucial that you pay attention to the **type** field.

## Follow-ups vs. other entities

When working with follow-ups, data will often intersect with the following entities:

* [company](xref:crmscript-class-company) (contact table)
* [contact](xref:crmscript-class-customer) (person table)
* project
* [sale](xref:crmscript_sale-leads)

## In this section

1. autolist
