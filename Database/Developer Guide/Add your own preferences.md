---
uid: guidePrefDesc
title: Add your own preferences
---

It's possible to add your own preferences to the database so they appear as they where builtin. See the [PrefDesc table](../Tables/PrefDesc.md) info for values needed.

If valuetype = 4, it means it would find a list of the allowed values in PrefDescLine with the prefdescline.prefdesc\_id=prefdesc.prefdesc\_id

If valuetype = 5 then the maxvalue points to the tablenumber of the list in question. Like 2 for associate
ValueType = 0 means a heading, like if you want to add your own preference section named "My own preference" preferences, you add the following (use HakonClient to insert):

 
```SQL
insert into prefdesc (prefsection, prefkey, name, valuetype, maxlevel, sysmaxlevel, accessflags, description) values ('My\_own\_preference','.', 'US:"My own preference";NO:"Min egen preferanse"', 0, 5, 5, 15, 'US:"The heading only translated to English and Norwegian";NO:"Overskriften - kun oversatt til engelsk og norsk"') 
insert into prefdesc (prefsection, prefkey, name, valuetype, maxlevel, sysmaxlevel, accessflags, description) values ('My\_own\_preference', 'My system preference', 'US:"My system preference";NO:"My system preferanse"', 7, 2, 2, 7, 'US:"Preference only visible in admin and only possible to set for system(contact\_id)";NO:"Preferanse som kun er synlig i admin og kun kan settes for hele systemet (contact\_id)"') 
insert into prefdesc (prefsection, prefkey, name, valuetype, maxlevel, sysmaxlevel, accessflags, description) values ('My\_own\_preference', 'My client preference', 'US:"My client preference";NO:"Min klient preferanse"', 1, 5, 5, 15, 'US:"Preference visible in GUI, may be set by each user (number)";NO:"Synlig i klienten og kan settes pr bruker(nummer)"') 
```

![](../Images/PrefDesc.JPG)

Accessflags here is what makes it appear in the different clients.
So, if accessflags = 15, then it should appear in (wizardmode)1 + (General admin) 2 +  (admin client) 4 + (CRM client) 8

This is the preferences in SOAdmin

![](../Images/PrefAdmin.JPG)

 

And in the client

![](../Images/PrefClient.JPG)
