---
title: Introduction to custom screens
uid: crmscript_blogic_intro
SortOrder: 50
---

**Blogic** is a system for designing screens and displaying content in SuperOffice Service.

## Screen choosers

A **screen chooser** is a CRMScript that redirects to a custom screen or performs other actions. It can, for example, do calculations before displaying the screen.

The Screen choosers are organized in a folder structure based on where in the system they are run from.

To redirect, call `setVariable("url", String url)` with the new URL you want to redirect **to**.

> [!NOTE]
> The actual redirect happens **after the entire script has run**, not when calling `setVariable()`.<br/>Remember to resend GET/POST variables if needed.

### Creating a screen chooser

1. Sign in to SuperOffice Service.
2. From the hamburger menu, select **System Design** and then select **ScreenChoosers**.
3. Select the screen you want to redirect **from**.
4. Enter a description (what and why) and set it to enabled.
5. Write your script and click **OK**.

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

### Adding an element

1. Click **New element**.
2. Select an element type and enter element properties.
3. Add config in the **Simple values** tab.
4. Click **Apply**.
5. Select the **Creation script tab.
6. Set which data to display by extending the script.
7. Click **Apply**.

> [!TIP]
> Click **Apply** after selecting an element type. This adds information the selected element to the **Help** tab.
