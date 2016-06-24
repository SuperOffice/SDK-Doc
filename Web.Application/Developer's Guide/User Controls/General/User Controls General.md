<properties date="2016-06-24"
SortOrder="2"
/>

There is a set of user component elements (GUI controls) composed of “aspx” file and “cs” code behind file that are common in the CRM.web application. These controls are in the web control library named SuperOffice.Web.UI.Controls. These controls are custom controls that inherit from System.Web.UI.Control and System.Web.UI.WebControl control libraries from .NET Framework version 2.0.

An important point to remember!

Some of the web controls will be standard ASP.NET controls with SuperOffice SIX look, while others may be more complex and be dependent on data and services from the page framework. All controls should implement a common interface for data binding and sentry, making it possible for them to be used outside web client context and be plugged into a back-end of another application.
