---
title: Extra menus
path: /Blogic/Extra menus
sortOrder: 5
---

Here, functionality in ejScripts can be connected to menu items as specified. Menu items
can be connected to the menu of "Status", "View request", "View company", and "View
Customer".

"Url" might be "/bin/blogic.exe?action=doScript&id=3&entryId=" if you want to run
ejScript number 3 (In scripts), and append the variable entryId.

Target might be "main" - the html frame to which the output goes, or not filled out in a
frameless design.

If you check the option "Append id", the id of the item you are looking at (request,
company, etc.)

From version 3.1.8 you can keyboard shortcuts to the items in the extra menus.
This is done by adding & before the character you want to be the access key.


Example: "M&y contacts" will yield the label My contacts with an underscore under y. If you press Alt+y, then this will be like clicking the link.


