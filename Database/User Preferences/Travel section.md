---
uid: Travelsection
title: Travel section
---

Preference section 'Travel'
===========================

In order to view all preferences in this section, use the following SQL:

SELECT \* FROM UserPreference WHERE prefsection='Travel'

Travel preferences affect how the Travel Gateway works, and how travel is shown to the user.

* **AdvancedTravelMenu**
Should the Travel icon/menu display the advanced Travel options
*Control type: Bool, access: Wizard*
* **EnableTravel**
Is Travel enabled?
*Control type: Bool, access: Wizard*
* **FlushAfterReadAll**
If Yes, the Travel Gateway will force a refresh on all clients after the Read update from all users event has been executed. (Default = YES)
*Control type: Bool, access: Admin, Admin users, Wizard*
* **GWSilent**
Should progress dialogs be displayed when Travel Gateway is executing activities? (Default = NO)
*Control type: Bool, access: Admin, Admin users, Wizard*
* **OfferBlockCentralLogin**
Allows Remote Travel users to prevent SIX from trying to perform a Central update even if the central database is available when SIX is started while the Remote Travel user is travelling.(Default = NO)
*Control type: Bool, access: Admin, Admin users, Wizard*
* **RemoteTravelClient**
Program file used to synchronise between a local Remote Travel user and the central document archive. (Default = SORT.EXE)
*Control type: Text, access: Admin, Crm, Admin users, Wizard*
* **RemoteTravelServer**
Name of the EXE file used as your Remote Travel Server. (Default = SORTS.EXE)
*Control type: Text, access: Admin, Admin users, Wizard*
* **TravelAsMenu**
Should the Navigator display a Travel icon for users allowed to use Travel?
*Control type: Bool, access: Admin, Crm, Admin users, Wizard*
* **EnableStats**
Enable logging of usage patterns in SIX. These logs may be subsequently used as background information for improvements to the product and for enhanced user training. (Default = YES)
*Control type: Bool, access: Wizard*
