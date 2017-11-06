---
uid: Visualsection
title: Visual section
---

---
uid: prefVisual
title: Visual section
---

Preference section 'Visual'
===========================

In order to view all preferences in this section, use the following SQL:

```SQL
    SELECT \* FROM UserPreference WHERE prefsection='Visual'
```

Visual effects - these don't affect the functionality of the client, but how information is presented to the user in the client.

* **AcademicTitle**
Use academic title for persons. (Default = NO)
*Control type: Bool, access: Admin, Admin users, Wizard*
* **AnimatePanels**
Enables animation when switching screens
*Control type: Bool, access: Wizard*
* **CalendarPos**
Where should the calendar appear in SIX. 0 = at the top of the Navigator or 1 = in the top right-hand corner. (Default = 1)
*Control type: Bool, access: Wizard*
* **FilterCompletedFromTodo**
Filter: Removes completed activities from the checklist
*Control type: Bool, access: Admin, Crm, Admin users, Wizard*
* **FilterShowRedLimit**
Percentage below which 'Shows x out of y' is red in archives (Default = 10)
*Control type: Number, access: Admin, Crm, Admin users, Wizard*
* **FilterShowYellowLimit**
Percentage below which 'Shows x out of y' is yellow in archives (Default = 40)
*Control type: Number, access: Admin, Crm, Admin users, Wizard*
* **FrameType**
Which frame type to use in edit fields
*Control type: Text, access: Wizard*
* **HistorySize**
The maximum number of elements in a history list
*Control type: Number, access: Admin, Crm, Admin users, Wizard*
* **JpegQuality**
Quality parameter for JPEG compression of stored images, from 0 to 100; 100 is best, default is 40. Setting high values will result in sharper images, at the cost of storage space in the database and loading times.
*Control type: Number, access: Admin, Crm, Admin users, Wizard*
* **MonitorLight**
Status images are processed to make them seem transparent. This parameter controls how much the light level is increased from a normalized starting point. Higher values will result in lighter images, possibly resulting in loss of detail. Default is 80.
*Control type: Number, access: Admin, Admin users, Wizard*
* **ShowNotepad**
Should the Notepad be displayed when SIX is started? (Default = NO)
*Control type: Bool, access: Admin, Admin users, Wizard*
* **SundayFirstDay**
Display Sunday as the first day of the week in the calendar and diary. (Default = NO, meaning that Monday will be used as the first day of the week.)
*Control type: Bool, access: Admin, Crm, Admin users, Wizard*
* **Tooltips**
Turn tooltips on or off
Control type: Bool, access: Admin, Crm, Admin users, Wizard