---
title: Introduction to custom screens
uid: crmscript_blogic_intro
SortOrder: 50
---

**Blogic** is a system for designing screens and displaying content in SuperOffice Service.

**Custom screens** are based on a set of [screen elements](@blogic_elements) (controls) such as text, date, grid, and CRMScript. There are 3 types of screen elements:

* View elements: displays info (read-only)
* Form elements: creates [user interaction](@crmscript_blogic_forms) with input fields
* Group elements: creates a hierarchy of elements and determines the [layout of the screen](@crmscript_blogic_layout)

With scripts, you can:

* process the form data of a screen - for example, to create a request or send an email

* construct and modify a screen that requires a more dynamic layout - for example, add an element only if the customer is of a specific category

## Creating a custom screen

1. Sign in to SuperOffice Service.
2. From the hamburger menu, select **System Design** and then select **Screens**.
3. Click **New screen**.
4. Enter screen properties and click **OK**.
    * Name is mandatory. You can call it whatever you like, but keep in mind that it becomes the heading on your screen.
    * ID string is an optional friendly name. It's considered best practice to set it.
5. Add elements.
6. Click **OK** to save your screen.
7. Toggle preview to test your current screen.
8. Set up a [screen chooser](@crmscript_screen_choosers).

## Adding an element

1. Click **New element**.
2. Select an [element type](@blogic_elements) and enter element properties.
3. Add config in the **Simple values** tab.
4. Click **Apply**.
5. Select the **Creation script tab.
6. Set which data to display by extending the script.
7. Click **Apply**.

> [!TIP]
> Click **Apply** after selecting an element type. This adds information the selected element to the **Help** tab.
