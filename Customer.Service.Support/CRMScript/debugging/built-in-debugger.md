---
title: Built-in debugger
uid: crmscript_debug_built_in_debugger
SortOrder: 10
---

SuperOffice CRM has an integrated graphic debugger. Use it to step through scripts.

## What is debug mode?

When a script runs in debug mode, it will wait for status changes from the debugger. If nothing happens for 5 minutes, the script will resume and run to its end.

The script will normally freeze after each statement and poll the database frequently to check for a flag telling it to execute the next statement.

## How to run in debug mode

1. Go to **CRMScripts** in the Admin client.
2. Locate and select your script.
3. Click **Debug script** on the toolbar.

The left side will show the code, and the right side will show variables, info, and the script's status (stored in the database). You can now:

* Click **Step** to go to the next statement.

* Click a line number to set a breakpoint, and then click **Next breakpoint** to advance the script to that point

* Click a code line with a statement to run the script until that line

* Run to the end

* Stop execution of the script

> [!TIP]
> If you have an **onsite** tenant: call `enableDebug(String)` in the script with ID matching value set in */bin/rms.exe?action=debug*, then call `debugWait()`. This opens the **Debug** panel.
