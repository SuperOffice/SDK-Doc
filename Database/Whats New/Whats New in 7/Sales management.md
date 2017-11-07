---
uid: Sales_management
title: Sales management
---

Database change:

several new lists (MDO lists with grouplink and headinglink tables)

* [SaleTypeCat](../Tables/SaleTypeCat.md)
* [SaleType](../Tables/SaleType.md)
* [ReasonStalled](../Tables/ReasonStalled.md)
* [ReasonSold](../Tables/ReasonSold.md)
* [SaleStakeholder](../Tables/SaleStakeholder.md)
* [SaleTypeStageLink](../Tables/SaleTypeStageLink.md)
* [StakeholderRole](../Tables/StakeholderRole.md)

New tables for suggested document/appointment

* [SuggestedAppointment](../Tables/SuggestedAppointment.md)
* [SuggestedDocument](../Tables/SuggestedDocument.md)

New fields in Sale/SaleHist

* saleType\_id
* postitText\_id
* reasonStalled\_id
* reopenDate
* nextDueDate
* nddAppointment\_id
* reasonSold\_id
* saleTypeCat\_id


The motivation behind this is:

-   Make a workplace for the sales rep. that really helps him
-   Flexible enough for most sales situations
-   Collect the right data for analyzing and drilling to enable accurate forecast and the right coaching

Done by:

-   Lifting Sale as a main panel, like contact, project, selection and so on
-   Introduce type/category of sale opportunities
-   Each type of sale may have different sales processes