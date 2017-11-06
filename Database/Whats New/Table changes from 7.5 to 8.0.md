---
uid: Tablechangesfrom7.5to8.0
title: Table changes from 7.5 to 8.0
---

Database changes in Superoffice 8.0
===================================

Changes to existing tables
--------------------------

### Traveltransactionlog

·         New field: Flags (ushort) – extra information about the operation, as a bit-masked enum

·         New field: Application\_Id – mainly online, used to track the execution context (who did this?)

### QuoteVersion

·         Increased length: Description and Reason now have 2k characters each

·         Increased length: ExtraField1 - 5 now have 1k characters each

### QuoteAlternative

·         Increased length: Description and Reason now have 2k characters each

·         Increased length: ExtraField1 - 5 now have 1k characters each

### QuoteLineFa

·         Increased length: ExtraField1 - 5 now have 1k characters each

### Product

·         Increased length: Description now has 2k characters

·         Increased length: ExtraField1 - 5 now have 1k characters each

### UdListDefinition

·         New field: RequiredLicense (string 255) – contains name(s) of license(s) needed for this list to become visible

### PrefDesc

·         New field: RequiredLicense (string 255) – contains name(s) of license(s) needed for this preference to become visible

### SearchCriteria

·         New field: DisplayName (string 255) – Display name when these criteria are a saved filter

### Ticket

·         New field: Ticket\_type, supports new functionality for requests

### Mail\_In\_Uidl

·         Increased length: uidl is now 2k characters

### Hierarchy

·         New fields: Registered date/associate, Updated date/associate, UpdatedCount

### Element\_Profile

·         New fields: Filter\_Field, Filter\_Value (both string 255), supports new filtering functionality in Service product

### S\_Shipment

·         New field: Selection\_id – set if this shipment should be related to a selection

·         New field: Project\_id – set if this shipment should be related to a project

·         New field: Generated\_Document\_id – ID of the merged document that is the result of the shipment

·         New fields: Registered date/associate, Updated date/associate, UpdatedCount

### S\_Message

·         New fields: Registered date/associate, Updated date/associate, UpdatedCount

### S\_Link

·         New fields: Registered date/associate, Updated date/associate, UpdatedCount

### S\_Picture\_Folder

·         New fields: Registered date/associate, Updated date/associate, UpdatedCount

### S\_Picture\_Entry

·         New fields: Registered date/associate, Updated date/associate, UpdatedCount

### S\_Shipment\_Addr

·         New field: Bounce\_Reason (string 1k) – reason text received from mailing system

### ResourceOverride

·         New fields: Registered date/associate, Updated date/associate, UpdatedCount

New tables
----------

### Favourites     int         id;                                 // Primary key

        short        table\_id;                           // SuperOffice table reference

        int         record\_id;                          // Record in the referenced table

        int         associate\_id;                       // The user who has marked this favourited

        nvarchar        extra\_info\[255\];                    // Optional extra information

        DateTime     registered;                         // Registered datetime

        int         registered\_by;                      // Registered by whom

 
-

Ticket\_Type, Ticket\_Relation\_Type, Ticket\_Relation\_Action, Ticket\_Relation
--------------------------------------------------------------------------------

These tables support new functionality in Service, where you can define request types, relations between requests of certain types, and actions to be taken.