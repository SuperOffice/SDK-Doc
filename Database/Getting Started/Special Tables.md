---
uid: startSpecialTables
title: Special Tables
---

Special tables in SuperOffice
=============================

Some of the tables in a SuperOffice database are very special.

 

Dictionary Tables
-----------------

Firstly, in a SuperOffice database there are "dictionary information tables" which contain a description of the database itself. These tables are not shown in the table listing. Nothing must be inserted into or deleted from this table – any changes will cause SuperOffice to crash or corrupt the database.

 

### The following tables are "dictionary information tables":

Changes to these tables may make it impossible to log in or to repair the database.

Use the SODictionarySDK in the client Data API to add new tables to the dictionary information tables safely.

 

> [ConceptualDatabase](../Tables/CONCEPTUALDATABASE.md)
>
> [ConceptualTable](../Tables/conceptualtable.md)
>
> [ConceptualField](../Tables/conceptualfield.md)
>
> [PhysicalSchema](../Tables/physicalschema.md)
>
> [PhysicalDatabase](../Tables/physicaldatabase.md)
>
> [PhysicalTable](../Tables/physicaltable.md)
>
> [PhysicalField](../Tables/physicalfield.md)
>
> [Relationship](../Tables/relationship.md)
>
> [DicIndex](../Tables/dicindex.md)
>
> [IndexField](../Tables/indexfield.md)

 

### The following tables are part of the SuperOffice Reporter “dictionary”. Do not change layout.

Modifying these tables may break the print-out function in SuperOffice.

Report definitions and layouts are stored in these tables.

 

> OLEField
>
> OLEFIeldText
>
> OLESubject
>
> OLESubjectText
>
> OLEView
>
> OLEViewText
>
> SORCriteria
>
> SORFCT
>
> SORField
>
> SOROperators
>
> SORPublish
>
> SORSection
>
> SORTemplate

 

User-Defined fields
-------------------

The following tables contain user-defined fields and the layout must not be changed.

Doing so will result in a corrupt database. Updates to the tables may cause loss of data.

 

> UDContactLarge
>
> UDContactSmall
>
> UDPersonLarge
>
> UDPersonSmall
>
> UDProjectLarge
>
> UDProjectSmall
>
> UDAppntLarge
>
> UDAppntSmall
>
> UDDocLarge
>
> UDDocSmall
>
> UDSaleLarge
>
> UDSaleSmall
>
> UDTempLarge
>
> UDTempSmall
>
> UdefField
>
> UdefFieldGL

 

 

Licensing Information:
------------------------------------------------------

[Company](../Tables/COMPANY.md)     This table contains the owner of the database. Tampering with this table will cause SuperOffice login to be disabled.

[Associate](../Tables/ASSOCIATE.md)     Contains all users or employees in the owner Company. Any change to this table may result in users being locked out of the database.

[Sequence](infoSequence.md)     This table contains rows for generating unique id's for each SuperOffice table. Nothing must be inserted into or deleted from this table.

[ActiveUser](../Tables/ACTIVEUSER.md)    Any changes made to this table may result in users being logged out automatically.

 

Travel tables
---------------------------------------------

Containing information on users with the Travel option in SuperOffice.

You should never change any of these tables:

[Traveltransactionlog](../Tables/TRAVELTRANSACTIONLOG.md) (but see explanation under Info documents – [Travel & Satellite](infoTraveltransactionlog.md))

[TravelCurrent](../Tables/TRAVELCURRENT.md)

[TravelGeneratedDatabase](../Tables/TRAVELGENERATEDDATABASE.md)

[TravelGeneratedTransaction](../Tables/TRAVELGENERATEDTRANSACTION.md)

[TravelIDMapping](../Tables/TRAVELIDMAPPING.md)

[Traveller](../Tables/TRAVELLER.md)

[Area](../Tables/AREA.md)

[AreaUserAssigment](../Tables/AREAUSERASSIGNMENT.md)  

[AreaUserInclusion](../Tables/AREAUSERINCLUSION.md)

[Satellite](../Tables/SATELLITE.md)

[OwnerContactLink](../Tables/ownercontactlink.md)

 

### Information on different country-specific information is also stored

[Country](../Tables/COUNTRY.md)         Defines address layout, phone prefixes and other country-specific information.

### Calendar information

[RedLetterDay](../Tables/REDLETTERDAY.md) Calendar information regarding which days are to be red is stored here.
