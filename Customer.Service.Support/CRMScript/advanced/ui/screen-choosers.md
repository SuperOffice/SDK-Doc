---
title: Screen choosers
uid: crmscript_screen_choosers
sortOrder: 70
---

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
