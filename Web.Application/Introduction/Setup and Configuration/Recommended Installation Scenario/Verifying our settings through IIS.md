<properties date="2016-06-24"
SortOrder="21"
/>

If we selected **I would like to launch IIS configuration** in step 9 of installing SuperOffice CRM.web, Microsoft Internet Information Services (IIS) is launched automatically when the installation is complete. Here we can verify our selected settings.

IIS settings of interest to CRM.web are:

* ASP.NET runtime version: This should be 2.0.50727.

* ASP.NET configuration settings: The application identity settings and session state settings are often changed from the default when running in clusters or high-security configurations.

* Directory security: Anonymous access may be enabled for the application.
