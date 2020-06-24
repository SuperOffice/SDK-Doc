---
title: Screen events
path: /EJScript event model/Screen events
sortOrder: 104
---

These are events which will be executed when screens in the system are built and displayed to a user. Each screen has a unique id, which may easily be identified by looking at the source (View Source) of the page. For instance, the page for listing the ticket log has the id "HtmlPage.32". Numbers have been chosen because they are very unlikely to change over time (they are numbers originating from our resource database). For each screen, we currently support the following events: "beforePrint" and "afterSetFromCgi". These strings are appended to basename of the screen. I.e. to hook a script to be executed before the ticket log is shown (for instance to block the ticket log for certain users), the script should be created with include-id "HtmlPage.32.beforePrint".

An event script for a screen can perform tests and also do small modifications of the screen by calling `getHtmlElement()` to get the various elements. The name of the elements may be returned by using `getHtmlElementName(index)`. By getting the element, set/getFieldValue() may be used to check for allowed values, set error message, etc. The page is also available as the element named "HtmlPage", and one may set global error messages by calling `setErrorMessage()` on this object:


    thePage = getHtmlElement("HtmlPage");
    thePage.setErrorMessage("This page contains an error");
    

Also, a simple way of denying access to any screen (using the "beforePrint" event):


    if (getVariable("activeUser") != "42")
      exitWithMessage("This page is only available to the oracle");


