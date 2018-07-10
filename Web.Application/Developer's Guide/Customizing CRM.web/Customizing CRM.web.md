---
uid: CustomizingCrmWeb
title: Customizing CRM web
date: 2018-04-17
SortOrder: 1
---
In this section we will be examining the contents of the CRM web installation, highlighting how it is structured, discuss page configuration, as well as provide guidance how to build customizations and integrations.

## Application Structure

The following table describes the folders most likely to be involved when creating and/or deploying customizations. Most integrations are only concerned with the App_Data, Bin and JavaScripts folders, but sometimes so are Themes and Images.

|Folder| Description|
|------|-------------|
|App_Data|Contains all SuperOffice Markup Language (SOML) configuration files that constitute the entire application structure.  Change configuration files to suit your needs, i.e. add your own or edit existing pages. |
|App_Themes| Contains all stylesheets used by the application. The use of themes also lets you change all of the design elements, like fonts, colors, etc. in the entire application to e.g. fit your own corporate design. |
|Bin| Contains all application-dependent assemblies, from archive providers to web controls, as well as NetServer Service assemblies. |
|Images| Contains all images used by SuperOffice CRM Web. Custom images should be placed in a subfolder inside.|
|Javascripts| Contains all JavaScript (.js) files used by the application. Custom scripts should be placed in subfolders.|

Nearly all customizations involve changing at least one of the configuration files so that's the best place to continue this discussion.

[Page Configuration](Page%20Configuration/Page%20Configuration.md)
presents the SuperOffice Markup Language (SOML), which is the cornerstone of SuperOffice web client, and explains how SOML is used to define the structure of the web application.

[User Controls](User%20Controls/User%20Controls.md)
In this article we will be taking a look at how to create a user control that is inherited from the CRM.web SDK and that will be put inside two new panels in the Sale dialog.

[Data Handlers](Data%20Handlers/Data%20Handlers.md)
In order to have control over what happens when data is retrieved and stored from a page in CRM.web, you will need to create your own data handler.

[Custom MDO Controls](Custom%20MDO%20Controls/Custom%20MDO%20Controls.md)
You can create your own MDOs containing anything, whether that would be static data, data from another system, or specific data from Superoffice. These controls has a lot built-in, like search capabilites, history, etc.

[Custom Archive Controls](Custom%20Archive%20Control/Custom%20Archive%20Control.md)
Create controls that display rows of information from built-in or custom archive providers.

[Custom AJAX Methods](Custom%20Ajax%20Methods/Custom%20Ajax%20Methods.md)
Taking a look at how to call server-side methods both asynchronously and synchronously from client-side javascript inside CRM.web
*This series of articles written by Steffan Alte in 2007*
