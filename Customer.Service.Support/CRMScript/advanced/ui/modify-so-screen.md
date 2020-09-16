---
title: Modify existing screen
uid: crmscript_modify_so_screen
sortOrder: 70
---

The standard SuperOffice screens are locked and can't be edited. These defaults will be overwritten each time the application is upgraded.

To modify one of the built-in screens, you need to:

1. Create a copy of a screen.
2. Edit the copy.
3. Use a screen chooser to pick your copy instead of the default.

> [!CAUTION]
> You need to keep your copy up-to-date with new versions of the screen you copied.

## Copy a screen

1. Sign in to SuperOffice Service.

2. From the hamburger menu, select **System Design** and then select **Screens**.

3. Expand **System screens**.

4. Point to the screen you want to copy and then click **Copy screen**.
    * You new screen is added to the list. It's name is the name of the original screen with the word *copy* added to it.

## Edit copy of screen

After you've created a copy of a system screen, you can edit the copy:

* Point to your copy and click **Edit screen**.

Let's say we want to display some text at the top of the **Edit request** screen.

### Add element

For our recipients example, let's add a **view** element of type [`Info fields v2`](@blogic_info_fields_2).

1. While in edit mode, point to the main table and click **+** to add an element directly inside it.

2. Select type and give the element a name so that you can get a reference to it afterwards in your script.

3. Click **Edit screen** and extend the loading script (after setFromCgi) to pull data into your new field.

4. Save the new screen. Then set up a screen chooser.

![Screen capture of add element button](../../images/add-element.png)
