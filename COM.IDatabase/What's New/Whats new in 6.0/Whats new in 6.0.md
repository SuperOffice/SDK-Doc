---
uid: whatsnew6.0
title: What's new in 6.0
---

What's new in the COM API
=========================

 

The COM API reflects the new functionality in SuperOffice 6 compared with SuperOffice CRM 5.

 

New objects:

-   [Role](SUPEROFFICEDBLib~SORole.md) objects allow you to read [what the user can do](Role-Based%20Security.md).
-   [Admin](SUPEROFFICEDBLib~SOAdmin.md) object define [new roles](SUPEROFFICEDBLib~SOAdmin~CreateRole.md), [new status monitors](SUPEROFFICEDBLib~SOAdmin~CreateStatusMonitor.md).
-   [Find](SUPEROFFICEDBLib~SOFind.md) object allows [searches on SAINT counters](Saint%20Counters%20And%20Values.md).
-   [Selection](SUPEROFFICEDBLib~SOSelection.md) object allows [dynamic selections to be defined](Dynamic%20Selections.md).
-   [Appointments](SUPEROFFICEDBLib~SOAppointment.md) support [invitations and responding to invitations](Simplified%20Bookings%20And%20Invitations.md) as well as [recurrence](Recurring%20Appointments.md).
-   Appointment, Sale, Document all support the [ActivityLinks](SUPEROFFICEDBLib~SOAppointment~ActivityLinks.md) object instead of the old DocumentLink.

-   All model objects (Contact, Person, Project, Appointment, Sale, Document, Selection) have a [Sentry](SUPEROFFICEDBLib~SOSentry.md) property that can answer questions about permissions. 

-   [Person](SUPEROFFICEDBLib~SOPerson.md), [Project](SUPEROFFICEDBLib~SOProject.md) and [StatusMonitor](SUPEROFFICEDBLib~SOStatusMonitor.md) have a [Picture property](SUPEROFFICEDBLib~SOPerson~Picture.md) to manipulate the picture blob.

-   The database object has new [Import](SUPEROFFICEDBLib~Database~ImportBlobFromFile.md) and [ExportBlobToFile](SUPEROFFICEDBLib~Database~ExportBlobToFile.md) functions to use blobs for things other than pictures.

-   Some [new list tables](New%20lists.md) have been added to the database.

-   A new ListItem helper has been added: [GetListItemByName](SUPEROFFICEDBLib~Database~GetListItemByName.md) - get a list item by the text rather than id.

 

Some functionality has been disabled because it has been replaced by new functionality:

-   Associate.Userlevel is replaced by [roles](SUPEROFFICEDBLib~SORole.md).
-   DocumentLink has been replaced by [ActivityLinks](SUPEROFFICEDBLib~SOActivityLinks.md).