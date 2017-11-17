---
uid: Sale_management
title: Sale management
---

Professional sales departments needs a professional tool, and with Seven we introduce the possibility to create sales guides to easier guide sales representative through the sale process. It is still easy to use and at the same time not limiting the user.

The motivation behind this is:

-   Make a workplace for the sales rep. that really helps him
-   Flexible enough for most sales situations
-   Collect the right data for analyzing and drilling to enable accurate forecast and the right coaching

Done by:

-   Lifting Sale as a main panel, like contact, project, selection and so on
-   Introduce type/category of sale opportunities
-   Each type of sale may have different sales processes

![](../../images/SalesGuide.png)

 

The new MDO lists are available via the existing list APIs.

Sale

                Database.GetListItem( [SOTable](SUPEROFFICEDBLib~Enumerations~SOTableId_EN.md) … )

                Database.GetListItems(  [SOTable](SUPEROFFICEDBLib~Enumerations~SOTableId_EN.md) … )

-   SaleStage - same as old Probability, but now filtered according to the SaleType value.

 

[Database.GetStagesForSaleType](SUPEROFFICEDBLib~Database~GetStagesForSaleType.md)( item )

-          For filtering the stages list correctly.

 

[Appointment.Sale](SUPEROFFICEDBLib~SOAppointment~Sale.md)-          The sale this appointment is linked to

[Appointment.SuggestedAppointmentId](SUPEROFFICEDBLib~SOAppointment~SuggestedAppointmentId.md)

-          This appointment came from a sales guide

 

[Document.Sale](SUPEROFFICEDBLib~SODocument~Sale.md)-          The sale this document is linked to

[Document.SuggestedDocumentId](SUPEROFFICEDBLib~SODocument~SuggestedDocumentId.md)

-          This document came from a sales guide

 

[Sale.ActiveLinks](SUPEROFFICEDBLib~SOSale~ActiveLinks.md)

[Sale.CanBeCompleted](SUPEROFFICEDBLib~SOSale~CanBeCompleted.md)() – is the completed checkbox enabled for editing?

[Sale.PostItText](SUPEROFFICEDBLib~SOSale~PostItText.md)

[Sale.NextDueDate](SUPEROFFICEDBLib~SOSale~NextDueDate.md)

[Sale.ReasonStalled](SUPEROFFICEDBLib~SOSale~ReasonStalled.md)

[Sale.ReasonSold](SUPEROFFICEDBLib~SOSale~ReasonSold.md)

[Sale.ReasonLost](SUPEROFFICEDBLib~SOSale~ReasonLost.md)

[Sale.ReopenDate](SUPEROFFICEDBLib~SOSale~ReopenDate.md)

[Sale.SaleType](SUPEROFFICEDBLib~SOSale~SaleType.md)

[Sale.Stage](SUPEROFFICEDBLib~SOSale~Stage.md)

[Sale.GetSuggestedAppointments](SUPEROFFICEDBLib~SOSale~GetSuggestedAppointments.md)()

[Sale.GetSuggestedDocuments](SUPEROFFICEDBLib~SOSale~GetSuggestedDocuments.md)()

 

**The Guide Admin will not be exposed via the COM API, like most of the admin client.**