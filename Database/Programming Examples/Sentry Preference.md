---
uid: SentryPreference
title: Sentry Preference
---

**Sentry Preference Example**

When you override sentry, you add new records to the UserPreference table. This example will override the sentry so the SuperOffice user with associate\_id=42 are no longer able to edit the address of existing contacts:

Maxlevel and deflevel are set to 5 and owner\_id to the associate\_id (see [userpreference](../Tables/USERPREFERENCE.md) table).

Note that the user can still enter addresses on new contacts, since the preference only restricts **existing** contact records.

```SQL
insert into userpreference (userpreference_id,deflevel,maxlevel,owner_id,prefsection,prefkey,prefvalue,registered,
registered_associate_id,updated,updated_associate_id,updatedCount) values (2,5,5,42,'Rights-contact-Existing','Address.Address1','1,Tooltip',0,0,0,0,0)

insert into userpreference (userpreference_id,deflevel,maxlevel,owner_id,prefsection,prefkey,prefvalue,registered,
registered_associate_id,updated,updated_associate_id,updatedCount) values (3,5,5,42,'Rights-contact-Existing','Address.Address2','1,Tooltip',0,0,0,0,0)

insert into userpreference (userpreference_id,deflevel,maxlevel,owner_id,prefsection,prefkey,prefvalue,registered,
registered_associate_id,updated,updated_associate_id,updatedCount) values (4,5,5,42,'Rights-contact-Existing','Address.Address3','1,Tooltip',0,0,0,0,0)

insert into userpreference (userpreference_id,deflevel,maxlevel,owner_id,prefsection,prefkey,prefvalue,registered,
registered_associate_id,updated,updated_associate_id,updatedCount) values (5,5,5,42,'Rights-contact-Existing','Address.City','1,Tooltip',0,0,0,0,0)

insert into userpreference (userpreference_id,deflevel,maxlevel,owner_id,prefsection,prefkey,prefvalue,registered,
registered_associate_id,updated,updated_associate_id,updatedCount) values (6,5,5,42,'Rights-contact-Existing','Address.ZipCode','1,Tooltip',0,0,0,0,0)

insert into userpreference (userpreference_id,deflevel,maxlevel,owner_id,prefsection,prefkey,prefvalue,registered,
registered_associate_id,updated,updated_associate_id,updatedCount) values (7,5,5,42,'Rights-contact-Existing','Address.State','1,Tooltip',0,0,0,0,0)

insert into userpreference (userpreference_id,deflevel,maxlevel,owner_id,prefsection,prefkey,prefvalue,registered,
registered_associate_id,updated,updated_associate_id,updatedCount) values (8,5,5,42,'Rights-contact-Existing','Address.County','1,Tooltip',0,0,0,0,0)
```

**Note**:
The number in red (userpreference\_id) has to be updated to a free number in the next unallocated number in the [userpreference](../Tables/USERPREFERENCE.md) table.
