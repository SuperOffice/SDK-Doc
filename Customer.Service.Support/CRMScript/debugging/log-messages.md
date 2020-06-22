---
title: Log Messages
uid: crmscript_debug_log_messages
SortOrder: 20
---

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
> You can customize logging by adding the following URL fragment: <br/> */scripts/ticket.fcgi?_sf=0&action=searchTable&table=log_events*

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

In browser with fcgi:

* *scripts/ticket.fcgi?_sf=0&action=searchTable&table=log_events*
* *scripts/rms.fcgi?action=dumpWarningLog&date=&lt;date&gt;*
