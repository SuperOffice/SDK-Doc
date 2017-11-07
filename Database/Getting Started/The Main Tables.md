---
uid: TheMainTables
title: The Main Tables
---
<properties SortOrder="2" />

The main tables in the system are:

 

|        Table                                   |  Contains                                                |
|-------------------------------------------------------------------|---------------------------------------------------------|
| [Contact](../Tables/Contact.md)                  | The companies                                           |
| [Person](../Tables/PERSON.md)                   | The contact persons                                     |
| [Associate](../Tables/ASSOCIATE.md)             | The users - these are linked to contact persons         |
| [Appointment](../Tables/APPOINTMENT.md)         | Meetings, to-do activities                              |
| [Document](../Tables/DOCUMENT.md)               | Document activities                                     |
| [Sale](../Tables/SALE.md)                       | Sale activities                                         |
| [Project](../Tables/PROJECT.md)                 | Projects                                                |
| [ProjectMember](../Tables/PROJECTMEMBER.md)     | Persons who are part of a project                       |
| [Selection](../Tables/SELECTION.md)             | Selections                                              |
| [SelectionMember](../Tables/SELECTIONMEMBER.md) | Link table for Contact+Person who are selection members |
| [Ticket](../Tables/TICKET.md)                   | Service tickets                                         |

 

A source of confusion needs to be explained. The database schema was defined early on (about fifteen years ago in fact) and the names for various entities in the code was locked down.

Unfortunately the user interface came up with names which do not match the table names used to generate the user interface.

* "Company" in the user interface   =  **Contact** table
* "Contact" in the user interface   =  **Person** table

The [Company](../Tables/Company.md) table is used to store the id of the company that owns the license. It has nothing to do with the company display in the user interface.
