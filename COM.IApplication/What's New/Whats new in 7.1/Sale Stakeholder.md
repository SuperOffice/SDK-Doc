---
uid: SaleStakeholder
title: Sale Stakeholder
---

Script events
=============

-   OnCurrentSaleStakeholderIdentityChanged
-   OnSaleStakeholderBeforeDelete
-   OnSaleStakeholderBeforeSave
-   OnSaleStakeholderCanceled
-   OnSaleStakeholderCreated
-   OnSaleStakeholderDeleted
-   OnSaleStakeholderFieldsChanged
-   OnSaleStakeholderSaved

Stakeholders archive in sale panel.
===================================

A new archive can be shown in the Sales panel where you can see all stakeholders in this specific sale and what role the have. This can be used to specify different roles and contact

points at the customer. It can be used to assign internal roles in the sale or keep track of subcontractors or partners.

![](../../images/SaleStakeholder.png)

Preference to activate Stakeholderarchive.
------------------------------------------

A preference is added that is used to enable or hide the Stakeholder archive for users, groups, databases or the entire system.points at the customer.

Can be used to override visibility between users regardless of the setting on the sale type.

![](../../images/SaleStakeholderPref.png)



Stakeholders archive per sale type.
-----------------------------------

In the Admin client you can specify what sale types that should have a stakeholders archive. Depending on the type of sale you have, it may vary if you want to maintain a list of stake holders. If a sale doesn’t need stakeholders, the archive is removed from the sales type.

![](../../images/SaleStakeholderType.png)

Include stakeholder sales in sales archive on company card.
-----------------------------------------------------------

A checkbox is added to the footer of the sales archive in the company panel. This will show sales where this company is a stakeholder in. This can be used to list sales where a company is involved as a stakeholder. This can be a partner or subcontractor of some kind.

![](../../images/StaleStakeholderArchive.png)
