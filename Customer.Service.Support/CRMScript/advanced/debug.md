---
title: Debugging CRMScript
uid: crmscript_advanced_debug
SortOrder: 40
---

There are several ways to debug CRMScripts:

* Built-in debugger
* Log messages
* `printDebug()`

## Built-in debugger

SuperOffice CRM has an integrated graphic debugger. Use it to step through scripts.

### What is debug mode?

When a script runs in debug mode, it will wait for status changes from the debugger. If nothing happens for 5 minutes, the script will resume and run to its end.

The script will normally freeze after each statement and poll the database frequently to check for a flag telling it to execute the next statement.

### How to run in debug mode

1. Go to **CRMScripts** in the Admin client.
2. Locate and select your script.
3. Click **Debug script** on the toolbar.

The left side will show the code, and the right side will show variables, info, and the script's status(stored in the database). You can now:

* Click **Step** to go to the next statement.

* Click a line number to set a breakpoint, and then click **Next breakpoint** to advance the script to that point

* Click a code line with a statement to run the script until that line

* Run to the end

* Stop execution of the script

> [!TIP]
> If you have an **onsite** tenant: call `enableDebug(String)` in the script with ID matching value set in */bin/rms.exe?action=debug*, then call `debugWait()`. This opens the **Debug** panel.

## Log messages

You can write to and inspect the system log. The date format is **YYYY-MM-DD**.

### Online - database log

This is the new log, kept in the database.

**Write to log:** Void log(String msg)

```crmscript
log("2020 is a leap year");
```

Use `log()` as you would use `print()`.

> [!TIP]
> You can customize logging by adding the following URL fragment: */CustIDxxxxxCS/scripts/ticket.fcgi?action=debug*

**Read log:**

Beside your profile picture, select the **hamburger menu**, then select **System design**. Under *System design* select **Debug log** to open the Search log screen.

### Onsite - logfile

This is the old log, kept locally on disk.

**Write to log:** Void logMessage(String p0)

```crmscript
log("The next leap year is 2024");
```

**Read log:**
The log files are located in the CS install directory, for example, *E:\SuperOffice\Customer Service\log*

* Directly: */bin/rms.exe?action=newLog*
* In browser with fcgi: *rms.fcgi?action=dumpWarningLog&date=&lt;date&gt;*
* In browser with exe: *rms.exe?action=dumpWarningLog&date=&lt;date&gt;*

## printDebug()

CRMScript has a global function for writing any string to a buffer.

The text will pop up in a separate window when loading a page. This means that `printDebug()` is  only for code resulting in a screen.

Here's how:

1. Enable debug: */bin/rms?action=debug*
2. Call `printDebug()` at appropriate places with suitable strings.
3. Run script.

The pop-up is not visible to regular users, but it will show up in your browser.
