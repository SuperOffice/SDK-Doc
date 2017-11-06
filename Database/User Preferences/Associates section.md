---
uid: prefAssociates
title: Associates section
---

Preference section 'Associates'
===============================

In order to view all preferences in this section, use the following SQL:

SELECT \* FROM UserPreference WHERE prefsection='Associates'

Associate preferences like which radiobutton did I select the last time I used this dialog/control
or which item did I select last time I used this dropdownlist

* AssocSubListWeb
  Preference used to remember what sublist in the associate selector that was last used 
  Value -2 = All users
  Value -1 = History
  Value &gt; 0 = Id of department
  Control type: Number, access: crm
* ResourceSubListWeb
  Preference used to remember the setup/state of the Filter dialog
  Value -2 = All resources
  Value -1 = History
  Value &gt; 0 = Id of resource heading
  Control type: Number, access: crm
* AssocHomeCountry
  Home country of associate if it differ from company