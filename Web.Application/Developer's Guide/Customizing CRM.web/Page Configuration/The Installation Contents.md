<properties date="2016-06-24"
SortOrder="29"
/>

After you have installed CRM.web, you will see that the application is built as a ASP.NET web application with standard elements like App\_Data, App\_Themes, web.config etc in place.







In this section we will be examining the contents of the CRM.web installation. 

**The Installation Contents**
==================================================================

After you have installed CRM.web, you will see that the application is built as a ASP.NET web application with standard elements like App\_Data, App\_Themes, web.config etc in place.







In this section we will be examining the contents of the CRM.web installation. 

### App\_Data

The App\_Data folder contains all of the configuration files that define all pages, controls, fields, assemblies, etc. This is where you can tap in to the application to make your own modifications, add your own pages, and also remove elements completely.



 

With the configuration files you can actually change CRM.web completely to suit your needs. We will be taking a much closer look at the different configuration files later.



 

### App\_Themes

The stylesheets used in CRM.web are defined by using ASP.NET themes, which lets you create custom controls that look exactly like standard CRM.web controls.



 

The use of themes also lets you change all of the design elements, like fonts, colors, etc in the entire application to e.g. fit your own corporate design.



 

The App\_Themes/Six/ folder contains all of the CSS and Skin files used by the default theme.



 

### Bin

The bin folder contains all assemblies used by the application, along with all NetServer assemblies needed for running the Services layer against the SuperOffice database.



 

The Services layer of NetServer 3.0 has been improved drastically both in functionality and performance since version 2.5, and all operations made against the SuperOffice database from CRM.web are done using the Service layer.



 

When creating your own assemblies and controls that you want to be using inside CRM.web, you should also be using the Service layer for all your Create, Read, Update, and Delete (CRUD) operations.



 

CRM.web can be configured to run everything on the web server. This requires that the web server have direct access to the database, which can be dangerous. In a high-security setup, the web server will be placed in your DMZ zone with direct access from the internet. Your database server will be placed inside your internal network, along with the CRM.web application server. The web server uses SOAP web-services to talk to the CRM.web application server. The web-server has no direct access to the database in this scenario.

### Config

Here you will find the CRM.web configuration application, used for setting up database connection parameters, logging, language settings, etc.



 

All of the changes made from this application will be written to the web.config file in the root folder of CRM.web.



 

### Help

Empty.



 

### Images

Here you will find all images used in the CRM.web controls. If you want to add your own images, you should place them in your own subfolder inside the Images folder.



 

### Log

Empty.



 

### Masterpages

The ASP.NET master pages used by CRM.web.



 

### NetServer

The complete installation of NetServer 3.0.



 

### ScriptLibrary

This folder contains javascript (.js) files used by the Atlas (AJAX) framework.



 

### Scripts

This folder contains all javascript files used from the controls inside CRM.web. We will be using objects and functions defined here later in this series of articles.



 

### Security

Login pages.



 

### Services

TrayApp controls. The Tray Application is a separate application used for handling diary event notifications etc.



 

### WebParts

All web controls (.ascx files) used in CRM.web. You can change the placement of HTML elements and SIX controls from within these files, but you can not easily remove or add elements here. It is recommended to create your own controls that replace the standard ones instead of modifying these. We will be looking at examples on how to do this from the configuration files later.


