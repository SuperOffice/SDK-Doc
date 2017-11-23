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

                Database.GetListItem( <see cref="Enumerations.SOTableId_EN">SOTable</see> … )

                Database.GetListItems(  <see cref="Enumerations.SOTableId_EN">SOTable</see> … )

-   SaleStage - same as old Probability, but now filtered according to the SaleType value.

 

<see cref="Database.GetStagesForSaleType">Database.GetStagesForSaleType</see>( item )

-          For filtering the stages list correctly.

 

<see cref="SOAppointment.Sale">Appointment.Sale</see>-          The sale this appointment is linked to

<see cref="SOAppointment.SuggestedAppointmentId">Appointment.SuggestedAppointmentId</see>

-          This appointment came from a sales guide

 

<see cref="SODocument.Sale">Document.Sale</see>-          The sale this document is linked to

<see cref="SODocument.SuggestedDocumentId">Document.SuggestedDocumentId</see>

-          This document came from a sales guide

 

<see cref="SOSale.ActiveLinks">Sale.ActiveLinks</see>

<see cref="SOSale.CanBeCompleted">Sale.CanBeCompleted</see>() – is the completed checkbox enabled for editing?

<see cref="SOSale.PostItText">Sale.PostItText</see>

<see cref="SOSale.NextDueDate">Sale.NextDueDate</see>

<see cref="SOSale.ReasonStalled">Sale.ReasonStalled</see>

<see cref="SOSale.ReasonSold">Sale.ReasonSold</see>

<see cref="SOSale.ReasonLost">Sale.ReasonLost</see>

<see cref="SOSale.ReopenDate">Sale.ReopenDate</see>

<see cref="SOSale.SaleType">Sale.SaleType</see>

<see cref="SOSale.Stage">Sale.Stage</see>

<see cref="SOSale.GetSuggestedAppointments">Sale.GetSuggestedAppointments</see>()

<see cref="SOSale.GetSuggestedDocuments">Sale.GetSuggestedDocuments</see>()

 

**The Guide Admin will not be exposed via the COM API, like most of the admin client.**