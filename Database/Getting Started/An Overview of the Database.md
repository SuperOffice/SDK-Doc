---
uid: startTableMap
title: An Overview of the Database
---

The database has quite a few tables in it. About 456 tables in total. Nothing like a Siebel or SAP system, but still enough to be confusing at first look.

 

The main objects in the system are:

-   Activities (Appointment table) - which includes the date and time the activity happened,
-   Companies (Contact table),
-   Projects ,
-   Users (Associate table)
-   Tickets

In the database these relationships are expressed using the following set of tables and fields.

![](../Images/so-table-structure.gif)

This gives us the following join conditions we can use:

> Appointment.contact\_id = Contact.contact\_id
>
> Appointment.person\_id = Person.person\_id
>
> Appointment.project\_id = Project.project\_id
>
> Appointment.associate\_id = Associate.associate\_id
>
> Person.contact\_id = Contact.contact\_id
>
> Associate.person\_id = Person.person\_id
>
> Ticket.cust\_id = person.person\_id

 

The appointment table contains foreign keys to all the other important tables, plus a date field (ActiveDate).

Because the people working for your customers are often important too, we keep track of them as well. We break 3rd normal form (a database design principle) by storing both the contact\_id and the person\_id in the appointment. We do this to make the database more efficient.

Also, at some point in the future we may break the Person-contact relation, allowing consumers to be registered -- person records without a corresponding company.

The key point here is that whenever a user enters an appointment, it will have a non-zero associate id, an activeDate, and one of the other two ids set (contact, or project). The person id can be zero even if the user has set a contact (i.e. selected a company, but no person).