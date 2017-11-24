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

 

<see cref="IAppointment.Sale">Appointment.Sale</see>-          The sale this appointment is linked to

<see cref="IAppointment.SuggestedAppointmentId">Appointment.SuggestedAppointmentId</see>

-          This appointment came from a sales guide

 

<see cref="IDocument.Sale">Document.Sale</see>-          The sale this document is linked to

<see cref="IDocument.SuggestedDocumentId">Document.SuggestedDocumentId</see>

-          This document came from a sales guide

 

<see cref="ISale.ActiveLinks">Sale.ActiveLinks</see>

<see cref="ISale.CanBeCompleted">Sale.CanBeCompleted</see>() – is the completed checkbox enabled for editing?

<see cref="ISale.PostItText">Sale.PostItText</see>

<see cref="ISale.NextDueDate">Sale.NextDueDate</see>

<see cref="ISale.ReasonStalled">Sale.ReasonStalled</see>

<see cref="ISale.ReasonSold">Sale.ReasonSold</see>

<see cref="ISale.ReasonLost">Sale.ReasonLost</see>

<see cref="ISale.ReopenDate">Sale.ReopenDate</see>

<see cref="ISale.SaleType">Sale.SaleType</see>

<see cref="ISale.Stage">Sale.Stage</see>

<see cref="ISale.GetSuggestedAppointments">Sale.GetSuggestedAppointments</see>()

<see cref="ISale.GetSuggestedDocuments">Sale.GetSuggestedDocuments</see>()

 

**The Guide Admin will not be exposed via the COM API, like most of the admin client.**