---
uid: prefDiaryView
title: DiaryView section
---

Preference section 'DiaryView'
==============================

In order to view all preferences in this section, use the following SQL:

```SQL
    SELECT \* FROM UserPreference WHERE prefsection='DiaryView'
```

Diary preferences control the calendar display in the diary panel.

* **AllDayEndTime**
End time for an all-day appointment
*Control type: Date, access: Admin, Crm, Admin users, Wizard*
* **AllDayStartTime**
Start time for an all-day appointment
*Control type: Date, access: Admin, Crm, Admin users, Wizard*
* **DefaultAlarmTime**
Default number of minutes before a follow-up alarm is triggered
*Control type: Number, access: Admin, Crm, Admin users, Wizard*
* **DiaryStartTime**
Specifies the time your calendar starts in the morning. Use a number to indicate the whole hour. Default = 8, meaning that your calendar will start at 08:00
*Control type: Number, access: Admin, Admin users, Wizard*
* **DiaryViewAssociates**
A comma-separated list of the associates and resources to display in the group view
*Control type: Text, access: Wizard*
* **DiaryViewNumAssociates**
Number of columns to display in the group view
*Control type: Number, access: Wizard*
* **DiaryViewSubList**
Preference used to remember the setup/state of the Filter dialog
*Control type: Number, access: Wizard*
* **DiaryViewShowUserGroup**
Preference used to remember the current diary view
*Control type: Text*
* **LunchEndTime**
End time for your lunch-break
*Control type: Date, access: Admin, Crm, Admin users, Wizard*
* **LunchStartTime**
Start time for your lunch-break
*Control type: Date, access: Admin, Crm, Admin users, Wizard*
* **SecretaryMode**
Keeps the current diary owner in all panels (Default = No)
*Control type: Bool, access: Admin, Crm, Admin users, Wizard*
* **SilentAfter**
The alarm can be silenced after a given number of minutes to avoid unnecessary office disruption when you are away.
*Control type: Number, access: Admin, Crm, Admin users, Wizard*
