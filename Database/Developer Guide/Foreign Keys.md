---
uid: ForeignKeys
title: Foreign Keys
---

This is a system designed to make it easy for 3rd parties to store keys in external systems.
The values are stored in the ForeignKey table, along with a pointer to the relevant entity (Contact, Person, Project record) that the foreign key identifies.

The values are identified by the ForeingDevice and ForeignApp tables.

The Tables
----------

![](../Images/foreignkeys.gif)

The foreign key table can point to any record. There can be several different foreign keys registered on the same record, with different keys on different applications and devices.

ForeignApp defines an application. An application is present on one or more devices. If you’re not dealing with devices, then just repeat the application name, or use a blank string.

A ForeignDevice consists of one or more keys. Each key for a given device has its own name. The device record is intended to allow the same superoffice record to be mapped to different devices. For example, Company A might be stored as record 123 on my mobile phone, but as record 456 on your PocketPC.

Each ForeignKey can consist of several different record pointers. In the example above we named the sub-key “ERP-id” but we could have added a second key called “ERP-name” without affecting the first key.

If the key value is particularly long, then the sequence id on the foreignkey can be used to chain several values together into one long identifier.

 

System Integration
------------------

Often a system integration approach will use the Number fields (e.g. Contact.Number1 or Project.Number).

If the identifier is too complex or if there are more systems than there are number fields, then the Foreign Key system is worth checking out.

It is more complex than the number fields, but it is much more flexible.

 

Example
-------

We have an ERP system that we want to synchronize with SuperOffice.

First we need to create a foreign key application for the ERP system.

![](../Images/fk-app.gif)

App\_id = 461, name = "erp"

 

Then we create a dummy device - since the ERP system does not travel around on mobile phones.

![](../Images/fk-device.gif)

 

Finally we add a foreign key entry for the ERP-id for the contact

![](../Images/fk-value.gif)

 

We can retrieve the SuperOffice contact-id using the ERP id 1234 like this:

Select record\_id from foreignkey
where foreigndevice\_id = 461 and table\_id = 5
and subkey='erp-id' and subvalue='1234'

 

We can find the ERP id using the SuperOffice contact-id 56200 like this:

Select subvalue from foreignkey
where foreigndevice\_id = 461 and table\_id = 5 and record\_id = 56200 and subkey = 'erp-id'

 


### See Also:

[foreignapp Table](../Tables/foreignapp.md)
[foreigndevice Table](../Tables/foreigndevice.md)
[foreignkey Table](../Tables/foreignkey.md)