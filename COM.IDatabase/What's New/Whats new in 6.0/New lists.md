---
uid: Newlists
title: New lists
---

###     New Lists

The SOTables enum has been updated with the new tables :
   enTableRole = 191,
   enTableUserRoleLink = 192,
   enTableFunctionRight = 193,
   enTableFunctionRightRoleLink = 194,
   …
   enTableTimeZoneCountry = 230,
   enTableDiaryView = 231,
   enTableDiaryViewRow = 232

 

The new lists in SIX:

   enTableAmountClass - SAINT classification list
   enTableIntent  - SAINT classification list
   enTableSalutation - Combo list of greetings/titles in the Person dialog. Similar to MrMrs list.
   enTableRejectReason - combo list of reasons to reject an invitation (not used in SIX)
 

 

Example:

   Set db = createobject(“superofficedb.database”)
   db.login “username”, “password”
   Set item = db.GetListItem( enTableIntent, 1 )
   Msgbox item.name,,”Intent 1 name”

[ListTextItem.Value](SUPEROFFICEDBLib~IListTextItem~Value.md)() supports the following new fields on existing lists:

**Task**

   taskItem.Value(“DefaultAllDayEvent”)
   taskItem.Value(“DefaultFreeBusy”)
   taskItem.Value(“DefaultPublishType”)
   taskItem.Value(“IntentId”)

**DocTmpl**

   docTemplateItem.Value(“IntentId”)
   docTemplateItem.Value(“MimeType”)
   docTempalteItem.Value(“DefaultPublishType”)