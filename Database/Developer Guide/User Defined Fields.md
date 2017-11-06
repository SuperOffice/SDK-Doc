---
uid: UserDefinedFields
title: User Defined Fields
---

User defined fields use a layout described in a table called UDefField

One row in the UDefField table describes one field in one particular version of the layout. The same field can be described many times in the table, once for each layout that has been published.

Every time the admin publishes a new layout of fields, a new version of the layout is created. One row is added for each field being published. After the new layout is created, the values are shifted around if necessary.

This is the part of the publishing process that takes time.

SELECT \* FROM udeffield
ORDER BY ownerTable\_id, updatedCount, version

This will show you how a field has changed over time.

The owner-table tells you where the field belongs (contact, person, project, sale)

The updatedCount is a unique id for each field that does not change as the field is changed.

The version is updated every time a new layout is published. The current version number is stored in a userpreference.

For most fields you’ll see the same info repeated for each version. Sometimes a new field is added, sometimes the tab-order will change slightly. The travel system uses these old versions to handle travelers who return home after the layout has changed. Their changed data is mapped to the new layout when they return.

Column ids
----------

SELECT columnId, fieldLabel, fieldType, version, udefidentity
FROM udeffield
WHERE ownerTable\_id = 9
ORDER BY udefidentity, version

![](../Images/UdefField.png)

udefidentity is a unique identifier for the field allocated by the udef system when a field is created.  You can change the tab-order, the name of the field or the type – the udefidentity remains the same.

This value used to be stored in updatedCount in CRM 5.

The column id is the dictionary id of the table and field used for storing the value..
36358 = UdProjSmall.Long06 (not indexed --&gt; not fast to search)
36353 = UdProjSmall.Long01 (indexed field)

Value tables
------------

The values are stored in two tables: UDProjectSmall and UDProjectLarge
• The Small table contains integer values and short strings (10 chars)
• The Large table contains long strings (200 chars max)

Some fields are indexed, some are not. The first four fields are indexed for searching. (long01-long04, string01-string04, string41-string44)

The same structure applies to all the user-defined fields.
![](../Images/UDef-diagram.png)

 

SELECT userdef\_id FROM project WHERE name='Client SDK Work'

SELECT \* FROM udprojectsmall WHERE udprojectsmall\_id = 2345

![](../Images/UDProjectSmall.png)

 

If you change a field from non-searchable to searchable, its values are moved from a non-indexed to indexed field when you publish the change.

e.g. from long05 to long01

The only thing that has changed is that the new field is indexed. Unfortunately we can’t just add an index on the table – we have to move the data into the indexed field.

These fields are indexed:

long01  – long04  (UdXxxSmall table)
string01  – string04
double01 – double04
string41  – string44  (UdXxxLarge table)


### See Also:

[udeffield Table](../Tables/udeffield.md)
[udcontactsmall Table](../Tables/udcontactsmall.md)
[udpersonsmall Table](../Tables/udpersonsmall.md)
[udprojectsmall Table](../Tables/udprojectsmall.md)
[udsalesmall Table](../Tables/udsalesmall.md)
[uddocsmall Table](../Tables/uddocsmall.md)
[udappntsmall Table](../Tables/udappntsmall.md)