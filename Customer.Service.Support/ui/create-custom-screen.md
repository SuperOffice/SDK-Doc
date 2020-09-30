---
title: Create custom screen
uid: blogic_create_custom_screen
SortOrder: 10
---

**Custom screens** are based on a set of [screen elements](@blogic_elements) (controls) such as text, date, grid, and CRMScript.

**Screen properties** are a combination of settings and CRMScripts.

## Creating a custom screen

1. Sign in to SuperOffice Service.
2. From the hamburger menu, select **System Design** and then select **Screens**.
3. Click **New screen**.
4. Enter screen properties (name is mandatory) and click **OK**.
5. Add elements.
6. Click **OK** to save your screen.
7. Toggle preview to test your current screen.
8. Set up a [screen chooser](@crmscript_screen_choosers).

> [!TIP]
> You can set **hidden variables** to be saved when the screen is submitted so the next screen has access to them.

## Settings

| Setting            | Description                                    |
|:-------------------|:-----------------------------------------------|
| Folder             | Optional for organizing screens                |
| Name               | A descriptive name (UI label): mandatory<br/>Keep in mind that it becomes the heading on your screen |
| ID string          | A unique ID for the screen, referenced in URLs<br/>It's considered best practice to set it |
| Authentication key | Required when running a custom screen without being logged in as a user        |
| Warn on navigate   | Whether to give a warning when the user leaves a page with unsaved data (Bool) |
| Use auto-save      | Whether to turn on automatic save (Bool)       |

## Loading scripts

You can use scripts to precalculate variables from for example a form entry or CGI variables that the screen obtains via a URL.

| Script                    | Description                                                       |
|:--------------------------|:------------------------------------------------------------------|
| before setFromCgi         | A script run before the screen elements are assigned their values |
| after setFromCgi          | A script run after the screen elements are assigned their values  |
| run after everything else | A script run at the end, after code and scripts for any buttons have been run|

Read more about [screen events](@crmscript_screen_events_and_hook_scripts).
