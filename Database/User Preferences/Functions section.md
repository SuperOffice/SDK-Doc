---
uid: prefFunctions
title: Functions section
---

Preference section 'Functions'
==============================

In order to view all preferences in this section, use the following SQL:

```SQL
    SELECT \* FROM UserPreference WHERE prefsection='Functions'
```

The Functions section contains a variety of preferences which affect the SuperOffice client behavior in small but useful ways.

* **ThreeStateStatusCheckbox**
Enables three completion statuses for follow-ups: Not started, Started and Completed. (Default = NO)
*Control type: Bool, access: Admin, Admin users, Wizard*
* **ActiveSound**
Enables the use of sounds for events in SuperOffice SIX. The various sounds may be defined individually under Sounds and Audio Devices in the Windows Control Panel.
*Control type: Bool, access: Admin, Crm, Admin users, Wizard*
* **BackgroundDocumentCheckTimer**
Documents on the Activities section tab can be checked in the background. The availability of a specified document plug-in and of each individual document is checked. Here you enter the number of seconds between each document check. Default: 1.
*Control type: Bool, access: Admin, Admin users, Wizard*
* **BlankApptClick**
Specifies the type of activity to create when you double-click on a blank line in the Activities section tab in the Company or Project screens.
*Control type: List, access: Admin, Crm, Admin users, Wizard*
* **CapitalFirstLetterCompanyName**
Should the first letter in every word in the company name automatically be converted to a capital letter? (Default = YES)
*Control type: Bool, access: Admin, Crm, Admin users, Wizard*
* **CapitalFirstLetterPersonName**
Should the first letter in every word in the contact name automatically be converted to a capital letter? (Default = YES)
*Control type: Bool, access: Admin, Crm, Admin users, Wizard*
* **DisableContactDogEar**
Removes the corner tabs on the Company card if there are too many companies - i.e. more than this number
*Control type: Bool, access: Admin, Admin users, Wizard*
* **DisableDelKey**
If YES, the user has to use the menu in order to delete a company, project or selection (Default = YES).
*Control type: Bool, access: Admin, Admin users, Wizard*
* **DisplayDateFormatInLists**
Specifies the date format used in section tabs in SIX (ex. dd.mm.yyyy hh:mm). (Default: computer's regional settings for short date format.)
*Control type: Text, access: Wizard*
* **EditIfVisible**
Allows other users to add and remove members from any selection visible to the user
*Control type: Bool, access: Admin, Admin users, Wizard*
* **EnableBackgroundDocumentCheck**
Documents on the Activities section tab can be checked in the background. The availability of a specified document plug-in and of each individual document is checked. This may happen at the cost of server capacity. Alternatively, documents are checked when the user enables the right-click menu. It will then take longer for a document to open, since it first has to be checked. The default is ON.
*Control type: Bool, access: Admin, Admin users, Wizard*
* **FilterBookingSlaves**
Filter out invitations for everyone except the person making the invitation, to avoid duplicates in the list.
*Control type: Bool, access: Admin, Crm, Admin users, Wizard*
* **ForceConfirmation**
Always displays confirmation dialog when deleting
*Control type: Bool, access: Admin, Admin users, Wizard*
* **GetAdvanceDays**
Number of days ahead to display tasks in the checklist. Default is 21 days
*Control type: Number, access: Admin, Crm, Admin users, Wizard*
* **GetRecordCounts**
Whether to display record counts in lists. This takes slightly longer but provides a useful overview.
*Control type: Bool, access: Admin, Crm, Admin users, Wizard*
* **HomeContact**
Which contact is displayed when you click on Hugo (the owl in the Navigator)
*Control type: ContactId, access: Admin, Crm, Admin users, Wizard*
* **InternetUseIntegratedBrowser**
Uses the internal SIX browser when clicking a URL within SIX. Default is Yes. If you set this preference to No, your computer's default browser will be used instead.
*Control type: Bool, access: Admin, Crm, Admin users, Wizard*
* **PastDateAlert**
Marks overdue activities in section tabs (Default = YES)
*Control type: Bool, access: Admin, Crm, Admin users, Wizard*
* **PeriodicCheckInterval**
How often (in minutes) should SIX check the database for new invitations etc.
*Control type: Number, access: Admin, Admin users, Wizard*
* **RemoveInvitationDuplicates**
This ensures that invitations are displayed only once in the Activities section tab in SIX (Default = YES).
*Control type: Bool, access: Admin, Admin users, Wizard*
* **ShowAllPhoneNumbers**
Allows the option of adding several phone numbers of the same type (e.g. mobile phone) in the Contact dialog. (Default = NO).
*Control type: Bool, access: Admin, Admin users, Wizard*
* **ShowDocs**
Shows documents in the Activities section tab
*Control type: Bool, access: Wizard*
* **ShowFollowUps**
Shows appointments in the Activities section tab
*Control type: Bool, access: Wizard*
* **ShowInviteDlgFromView**
Should SIX automatically display the Invitation dialog when creating an activity from the diary view. (Default = NO).
*Control type: Bool, access: Admin, Crm, Admin users, Wizard*
* **ShowRetiredPersons**
Show former employees in the Contacts section tab
*Control type: Bool, access: Wizard*
* **ShowSales**
Shows sales in the Activities section tab
*Control type: Bool, access: Wizard*
* **ShowTipNumber**
Next tip of the day to be displayed.
*Control type: Number, access: Wizard*
* **ShowTipsAtStart**
Should a tip of the day be displayed every time a user logs in to SuperOffice. (Default = YES)
*Control type: Bool, access: Admin, Crm, Admin users, Wizard*
* **ShowToDo**
Shows tasks in the checklist
*Control type: Bool, access: Wizard*
* **UseCaseOnTemplateVariables**
The template variables used in, for instance, documents and addresses are output in lower case and get the text exactly as stored in the database by default. Setting this preference will change the text to uppercase for all or just the first letter, depending how the template variable is input. (Default: No).
*Control type: Bool, access: Admin, Admin users, Wizard*
* **UseMiddleName**
Enables the use of middle names in the Contact dialog
*Control type: Bool, access: Admin, Admin users, Wizard*
* **ShowProgressInfo**
Should a progress dialog be displayed on the Travel Gateway when active tasks are running? (Default = YES)
*Control type: Bool, access: Admin, Admin users, Wizard*
* **IdAllocationBatchSize**
How many records should be inserted into the database during an import before they are committed?
*Control type: Number, access: Admin, Admin users, Wizard*
