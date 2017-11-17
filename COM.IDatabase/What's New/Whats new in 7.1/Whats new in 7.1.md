---
uid: Whatsnewin7.1
title: What's new in 7.1
---

New in Sales & Marketing
The Project Guide
-----------------

If you are familiar with the Sales Guide in 7.0, you will recognize the functionality in the [Project Guide](Project%20guide.md). Planning project stages, activities and milestones related to standard document templates makes working with projects in SuperOffice a new experience.

Sales Stakeholder
-----------------

In SuperOffice 7.0 we introduced Sales as an separate entity (panel) along with a lot of new functionality. In 7.1 we even added the possibility of attaching [stakeholders](Sale%20Stakeholder.md) to a specific Sale. Stakeholders can be compared with project members as you know from the project module in SuperOffice. This feature provides the ability to attach internal as well as external persons and companies directly to a Sale. This creates of course a valuable overview of stakeholders for a specific sale, but it also creates powerful relations that can be used for generating selections that in turn can be used for multiple purposes. The sales stakeholder facility will also create relations that makes it very easy to see which sales a company or person have been involved in from the Contact Card view in SuperOffice.

Archives
--------

More columns available in window clients archives. Windows and Web client now shares the same set of columns the user can choose to be displayed in the archives.The NetServer is the provider of the archives and will offer the same set of columns to view in all archives in both clients.

New in COM
A summary of the new and changed COM APIs in 7.0
================================================

 

SaleStakeholders + SaleStakeholder

SuggestedAppointments

SuggestedDocuments

 

**SODatabase**

-   CreateSaleStakeholder
-   GetSaleStakeholder

 

**SOAppointment**

-   IsSuggestedItem
-   SuggestedItemId

 

**SODocument**

-   IsSuggestedItem
-   SuggestedItemId

 

**SOProject**

-   ActivityLinks
-   Done
-   EndDate
-   NextMilestoneDate
-   IsGuided
-   SuggestedAppointments
-   SuggestedDocuments

 

**SOSale**

-   Stakeholders
-   GetActivityList