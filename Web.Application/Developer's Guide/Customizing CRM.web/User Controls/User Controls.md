<properties date="2016-06-24"
SortOrder="9"
/>

In this article we will be taking a look at how to create a user control that is inherited from the CRM.web SDK and that will be put inside two new panels in the Sale dialog.

In addition to customizing the existing pages in CRM.web you can of course create new ones. The pages you create can contain any ASP.NET controls, but to be able to tap into the rest of CRM.web you will need to inherit from the CRM.web controls.

In this article we will create a user control that will be put inside a new panel in the Sale dialog. The control will contain a datagrid that lists all foreign keys connected to a sale.

1. autolist
