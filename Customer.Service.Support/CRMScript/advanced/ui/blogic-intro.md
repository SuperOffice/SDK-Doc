---
title: Introduction to custom screens
uid: crmscript_blogic_intro
SortOrder: 50
---

**Blogic** is a system for designing screens and displaying content in SuperOffice Service.

## Scripts

The defined scripts. Edit, or Add new scripts here.

## Screens

Definition of screens and their layout

## Screen choosers

Here a ejScript can be added to several eJournal display screens. This script can then redirect to a new blogic screen, or perform other actions.

To perform a redirect use the setVariable("url", url-to-redirect-to);

Note that the redirection happens after the screen chooser has finished executing and not instant when the url variable is set.

Remember to resend GET/POST variables if needed.

## Scheduled tasks

Here you can set a ejScript script to execute at specified times. A script may for instance walk through new customers, and create some statistic, and send an email to someone.

In scheduled tasks there are no special variables available (using getVariable)

## Extra menus

Here, functionality in ejScripts can be connected to menu items as specified. Menu items can be connected to the menu of "Status", "View request", "View company", and "View Customer".

"Url" might be "/bin/blogic.exe?action=doScript&id=3&entryId=" if you want to run ejScript number 3 (In scripts), and append the variable entryId.

Target might be "main" - the html frame to which the output goes, or not filled out in a frame-less design.

If you check the option "Append id", the id of the item you are looking at (request, company, etc.)

From version 3.1.8 you can keyboard shortcuts to the items in the extra menus.
This is done by adding & before the character you want to be the access key.

Example: "M&y contacts" will yield the label My contacts with an underscore under y. If you press Alt+y, then this will be like clicking the link.
