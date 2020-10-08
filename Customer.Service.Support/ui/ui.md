---
title: UI interaction and customization
uid: crmscript_ui
SortOrder: 50
---

A guide to interacting with and customizing the SuperOffice UI through CRMScript.

## Screen events and hook scripts

* **[Screen events](./screen-events.md)** represent steps in the process of loading Service screens.

* **Hook scripts** are event-driven CRMScripts that do stuff at a specific point during loading.

## Extra menus and button scripts

* **[Extra menus](./extra-menus.md)** let you make something easily available in SuperOffice Service. For example, a button that takes the user directly to a specific screen or a menu option that triggers a script.

* **[Button scripts](./button-scripts.md)** are CRMScripts that are referenced by their **includeId** and run when the user clicks a custom button.

## Custom screens (bLogic)

**bLogic** is a system for [designing screens](./create-custom-screen.md) and displaying content in SuperOffice Service.

Custom screens are based on a set of [screen elements](./add-screen-element.md) (controls) such as text, date, grid, and CRMScript.

There are 3 types of screen elements:

* [View elements](./view-elements.md): display info (read-only)
* [Form elements](./form-elements.md): create user interaction with input fields
* [Group elements](./layout-elements.md): create a hierarchy of elements and determine the layout of the screen

With scripts, you can:

* process the form data of a screen - for example, to create a request or send an email

* construct and modify a screen that requires a more dynamic layout - for example, to add an element only if the customer is of a specific category

## Screen choosers

**[Screen choosers](./screen-choosers.md)** are CRMScripts that redirect to a custom screen (or perform other actions before loading a standard screen).

## URL parameters

**[URL parameters](./url-parameters.md)** let you control SuperOffice Service using simple HTTP commands.

## Web panels

**[Web panels](./web-panels.md)** let you add webpages inside SuperOffice CRM.

## SOProtocol

**[SOProtocol](./so-protocol.md)** is a standard for defining URL short-cuts to SuperOffice entities. It lets you control the user interface without scripting and send users directly to the entry in question.

## Reference

* [EventData](./eventdata.md)
* [HtmlElement](./htmlelement.md)
* [MainMenu](./mainmenu.md)
* [Screen element reference](./blogic-screen-elements/blogic-screen-elements.md)
