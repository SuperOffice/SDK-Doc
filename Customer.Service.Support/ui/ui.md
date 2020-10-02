---
title: UI interaction and customization
uid: crmscript_ui
SortOrder: 50
---

A guide to interacting with and customizing the SuperOffice UI through CRMScript.

## [Screen events and hook scripts](@screen_events_and_hook_scripts)

* **Screen events** represent steps in the process of loading Service screens.

* **Hook scripts** are event-driven CRMScripts that do stuff at a specific point during loading.

## [Extra menus](@extra_menus) and [button scripts](@crmscript_button_scripts)

* **Extra menus** let you make something easily available in SuperOffice Service. For example, a button that takes the user directly to a specific screen or a menu option that triggers a script.

* **Button scripts** are CRMScripts that are referenced by their **includeId** and run when the user clicks a custom button.

## [Custom screens](@blogic_create_custom_screen) (bLogic)

**bLogic** is a system for designing screens and displaying content in SuperOffice Service.

Custom screens are based on a set of [screen elements](@blogic_add_screen_element) (controls) such as text, date, grid, and CRMScript.

There are 3 types of screen elements:

* View elements: [display info](@blogic_view_elements) (read-only)
* Form elements: create [user interaction](@blogic_form_elements) with input fields
* Group elements: create a hierarchy of elements and determines the [layout of the screen](@blogic_layout)

With scripts, you can:

* process the form data of a screen - for example, to create a request or send an email

* construct and modify a screen that requires a more dynamic layout - for example, add an element only if the customer is of a specific category

## [Screen choosers](@screen_choosers)

**Screen choosers** are CRMScripts that redirect to a custom screen (or perform other actions before loading a standard screen).

## [URL parameters](@url_parameters)

**URL parameters** let you control SuperOffice Service using simple HTTP commands.

## [Web panels](@web_panels)

**Web panels** let you add webpages inside SuperOffice CRM.

## [SOProtocol](@so_protocol)

**SOProtocol** is a standard for defining URL short-cuts to SuperOffice entities. It lets you control the user interface without scripting and send users directly to the entry in question.

## Reference

* [EventData](@crmscript_eventdata)
* [HtmlElement](@crmscript_htmlelement)
* [MainMenu](@crmscript_main_menu)
* [Screen element reference](@blogic_elements)
