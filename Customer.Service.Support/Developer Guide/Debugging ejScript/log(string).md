<properties date="2016-06-24"
SortOrder="4"
/>

log(String)
===========

This ejScript method call will write a string to the system log (a table in the database). The benefit of this method is that it writes immediately (if your script should crash, the message has already been written), and also it will work for scripts which redirect you or scripts which are running in the background (e.g. DBI scripts). To view the system log, navigate to rms.exe?action=newLog.

![](Debugging%20ejScript_files/newLog.gif)
