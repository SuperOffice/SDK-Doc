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

                Database.GetListItem( … )

                Database.GetListItems( … )



Database.GetStagesForSaleType( item )

-          For filtering the stages list correctly.



Appointment.Sale

-          The sale this appointment is linked to

Appointment.SuggestedAppointmentId

-          This appointment came from a sales guide



Document.Sale

-          The sale this document is linked to

Document.SuggestedDocumentId

-          This document came from a sales guide



Sale.ActiveLinks

Sale.CanBeCompleted – is the completed checkbox enabled?

Sale.PostItText

Sale.NextDueDate

Sale.ReasonStalled

Sale.ReasonSold

Sale.ReasonLost

Sale.ReopenDate

Sale.SaleType

Sale.Stage

Sale.GetSuggestedAppointments

Sale.GetSuggestedDocuments



**The Guide Admin will not be exposed via the COM API, like most of the admin client.**