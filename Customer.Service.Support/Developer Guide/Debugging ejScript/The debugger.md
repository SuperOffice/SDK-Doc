<properties date="2016-06-24"
SortOrder="6"
/>

The debugger
============

Ok, so it's not Visual Studio, but we have attempted to make a small debugger (tracer). This functionality allows you to pause an ejScript during execution and then trace it, one line at a time, and see the values of local variables.

How does it work
----------------

This is how it works. Since SuperOffice eJournal is a web application, there is of course no way for you to directly attach to the running process. However, when the proper debugging flags are set, the ejScript executing environment will pause between each executed statement, and then wait for an updated flag in the database to continue (by polling every 10th of a second, maximum for 5 minutes). This allows us to open a new browser window and navigate to a view of the debugged session, where we can interact with the database (update the stepping flag). This will be detected by the other running process which then will do another step and store its next status back to the database.

Making a script execute in debug mode
-------------------------------------

There are two ways to tell a script that it should execute in debug mode. Be careful with this, otherwise the server will soon be swamped with processes executing scripts in debug mode. The first mode is available directly in the GUI. Under "System Design" -&gt; "Scripts", next to each script there is an Icon named "Execute in debug mode". If you click this icon, then the chosen script will start executing in debug mode, meaning it will start and then wait for you to tell it to move on. In your browser you will experience this as the page simply "hanging". Clearly, this method is limited to scripts stored in the Scripts folders, but it is a good way to start experimenting with the debugger.

The second way to tell a script to execute in debug mode is to call the method enableDebug(String) followed by debugWait(Stirng). The parameter to enableDebug is a non-empty string, which needs to be the same as the string specified in the bottom field in the debug panel. The reason for this is again to make sure that it is only the scripts executed from your browser that enters debugging mode, and not for everyone else using the system. After calling enableDebug(), you also have to call debugWait() with an optional message as parameter. This second call is where the execution will pause (consider it a breakpoint). If the script is being executed from another browser (where the debugID string from the debug panel is different or not set), then all calls to enableDebug() and debugWait() will be ignored, and the script will execute as normal. This allows you to debug in a "hot" environment.

The debug view
--------------

To view all the debug sessions, click "System Design" -&gt; "Debugger" in the menu. You will get a list of debugging sessions, where normally yours will be at the top. If your script was paused with a call to debugWait() with a message, then the message will be shown in the "Info" column.

![](Debugging%20ejScript_files/debugSessions.gif)

Click the desired session to get into the debug view. Here you will see the local context of your script, which the line to be executed highlighted. By clicking "Step", you should be able to view the execution of your script. On the right hand side you will se various local messages, showing values of variables and return values of function calls.

Note that this screen will refresh each time you step, however this is a calculated timeout. If the script did not have time to execute to the next waiting point by the time our screen refreshed, then the status will not be "Wait for debugger". In this case, try clicking "Refresh".

Click "Step out" to execute until one higher level in the stack (i.e. execute until current block is finished). Click "Next breakpoint" to execute until the next debugWait() statement. You can also click a line number to execute until this line number is reached. Finally, you should click "Run to end" or step to the end to make sure the script is not left hanging on the server (it will eventually be killed by IIS anyway).

![](Debugging%20ejScript_files/tracing2.gif)
