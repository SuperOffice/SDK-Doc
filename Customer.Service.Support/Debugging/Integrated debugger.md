---
title: Integrated debugger
path: /Debugging/Integrated debugger
sortOrder: 95
---


There is a very simple integrated debugger which will allow you to step through scripts. Using the debugger requires two browser windows: one which will execute the script in debugging mode, and another which will display the debugger. When a script is executed in debug mode, it will normally freeze for each statement being executed, polling the database frequently, checking for a flag telling it to execute the next statement. Simultaneously, the debugger window will show the status of the script (stored in the database), and allowing you to step further.




###A script will be executed in debug mode in the following cases:###


1. When listing scripts in the system, there is a link for executing the script in debug mode.
2. By calling `enableDebug(String)` in the script with an id-string matching the one set in /bin/rms.exe?action=debug, followed by a `debugWait()` call.


When a script is executed in debug mode, it will wait for status changes from the debugger. A script will wait for a maximum of 5 minutes, upon which it will execute to its end. The scripts which are waiting will be listed under the debugger menu (under system design). Here, you may click the script to view the code, status, variables, and allow the script to step. Clicking a line with a statement will execute until that line.

Sometimes the script will use more time performing a step than the refresh delay of the debugger screen. In this case, you may click the update button of the screen until you can see again that the script has status "Wait for debugger".


