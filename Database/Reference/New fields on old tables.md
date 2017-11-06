---
uid: Newfieldsonoldtables
title: New fields on old tables
---

New fields on old CRM database tables
=====================================

|                |                        |
|----------------|------------------------|
| **Table name** | **Name**               |
| company        | ownerContactName       |
| company        | ownerDepartmentName    |
| company        | ownerContactId         |
| company        | dbContactName          |
| company        | dbDepartmentName       |
| company        | dbContactId            |
| company        | serialNo               |
| company        | extraInfo              |
| company        | encryptedCheck         |
| associate      | locationAddress        |
| associate      | ejuserId               |
| associate      | encryptedCheck         |
| contact        | ticketPriorityId       |
| contact        | deleted                |
| contact        | supportLanguageId      |
| contact        | supportAssociateId     |
| contact        | supportPersonId        |
| contact        | dbi\_agent\_id         |
| contact        | dbi\_key               |
| contact        | dbi\_last\_syncronized |
| contact        | dbi\_last\_modified    |
| person         | sentInfo               |
| person         | showContactTickets     |
| person         | ticketPriorityId       |
| person         | supportLanguageId      |
| person         | supportAssociateId     |
| person         | dbi\_agent\_id         |
| person         | dbi\_key               |
| person         | dbi\_last\_syncronized |
| person         | dbi\_last\_modified    |
| person         | blockEmarketing        |
| phone          | searchPhoneNumber      |
| appointment    | sale\_id               |
| appointment    | suggestedAppointmentId |
| appointment    | suggestedDocumentId    |
| project        | activeLinks            |
| project        | done                   |
| URL            | url\_address           |

Removed fields on existing tables
=================================

|                |                     |
|----------------|---------------------|
| **Table name** | **Name**            |
| company        | reserved            |
| company        | reserved2           |
| company        | keyCode             |
| associate      | reserved            |
| associate      | reserved2           |
| associate      | osname              |
| associate      | mailname            |
| associate      | timeZoneId          |
| contact        | timeZoneId          |
| person         | timeZoneId          |
| phone          | search\_phone       |
| phone          | phoneNumber         |
| phone          | strippedPhoneNumber |
| appointment    | opportunity\_id     |
| project        | timeZoneId          |
| country        | phone\_prefix       |
| country        | time\_offset        |
| country        | time\_name          |
| country        | defaultTimeZone     |
| URL            | url\_address1       |
| URL            | url\_address2       |
| DiaryView      | timeZoneId          |

 

Changed fields on existing tables
=================================

|                |                    |                 |
|----------------|--------------------|-----------------|
| **Table name** | **Type of change** | **Name**        |
| company        | datetime           | registered      |
| company        | datetime           | updated         |
| associate      | datetime           | lastlogin       |
| associate      | datetime           | lastlogout      |
| associate      | datetime           | checklistlimit  |
| associate      | datetime           | registered      |
| associate      | datetime           | updated         |
| contact        | extended           | name            |
| contact        | extended           | kananame        |
| contact        | extended           | department      |
| contact        | extended           | number1         |
| contact        | extended           | number2         |
| contact        | datetime           | registered      |
| contact        | datetime           | updated         |
| contact        | extended           | orgNr           |
| person         | extended           | lastname        |
| person         | extended           | firstname       |
| person         | extended           | mrmrs           |
| person         | extended           | title           |
| person         | datetime           | registered      |
| person         | datetime           | updated         |
| person         | extended           | person\_number  |
| person         | extended           | kanalname       |
| person         | extended           | kanafname       |
| person         | extended           | post1           |
| person         | extended           | post2           |
| person         | extended           | post3           |
| person         | extended           | middleName      |
| phone          | extended           | phone           |
| phone          | extended           | description     |
| phone          | datetime           | registered      |
| phone          | datetime           | updated         |
| phone          | datetime           | validFrom       |
| phone          | datetime           | validTo         |
| appointment    | datetime           | registered      |
| appointment    | datetime           | done            |
| appointment    | datetime           | do\_by          |
| appointment    | datetime           | activeDate      |
| appointment    | datetime           | endDate         |
| appointment    | datetime           | updated         |
| project        | extended           | name            |
| project        | extended           | project\_number |
| project        | datetime           | registered      |
| project        | datetime           | updated         |
| country        | datetime           | registered      |
| country        | datetime           | updated         |
| URL            | datetime           | registered      |
| URL            | datetime           | updated         |
| DiaryView      | datetime           | registered      |
| DiaryView      | datetime           | updated         |