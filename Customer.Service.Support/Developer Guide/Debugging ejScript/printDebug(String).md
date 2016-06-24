<properties date="2016-06-24"
SortOrder="3"
/>

printDebug(String)
==================

This ejScript method call will add a string to a global debug string. When a screen is created and displayed, the system checks if this string contains anything and if you have enabled printing of these messages, and if so, it will be displayed in a javascript popup window. This means that if you create a custom screen, and call printDebug in any of the scripts executed when creating the screen and its elements, then it will be displayed. To enable printing of these messages, enable "Debug ejScript (show printDebug() output)" in the debug panel.

These messages are only displayed if your action results in a screen. If your action results in a redirect (e.g. the Ok-button of your "Simple new request"-screen which finally redirects you to viewing the request), then you will not get any messages. One way of debugging these scripts is to momentarily disable the redirect. If a button-script does not redirect, then you will be returned to the same screen, and consequently get the popup with any printDebug messages created during the execution of the script.

 ![](Debugging%20ejScript_files/printDebug2.gif)
