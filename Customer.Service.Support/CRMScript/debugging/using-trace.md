---
title: Using Trace
uid: crmscript_debug_using_trace
sortOrder: 50
---

SuperOffice CRM Online has a built-in tracing feature. When turned on, all details will be logged when the script is run. You can then investigate the behavior of the script step by step by rewinding and fast-forwarding the log. You can also see all the variables at any given point.

### Starting a trace

1. Bring up you script in the SuperOffice admin client.
2. Click **Trace script**.
3. Make sure the trace has a description is enabled.
4. Optionally set the **User filter** if you want a user-specific trace.
5. Click **OK**.

Now you’ve activated tracing on the script. Keep this tab open for now. In a new tab, do the task that will trigger the script. For example, if your script should run before saving a company, go to a company card, click **Edit** and then click **Save**. Return to the open trace tab.

### Inspecting a trace

1. Click **Refresh** and select the row from the recent run.
    * The left side shows the script. The row you’re tracing is highlighted.
    * The right side shows all available variables. Click the ellipse (…) to expand.

2. Use the slider or the **Step** buttons to "re-run" the script and explore the variables and statements.

3. When you are done, or want to update your script, click **Return**.
