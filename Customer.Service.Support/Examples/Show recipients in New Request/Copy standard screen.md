<properties date="2016-06-24"
SortOrder="2"
/>

Copy standard screen
====================

It is quite simple to create a new version of our standard screen, with a small modification, which will display the recipients on top of the screen (above the tabs) so that it is always visible.

First of all, you cannot modify our default screen, as it is locked by us, and may be upgraded/overwritten next time you upgrade eJournal. So, you have to create a copy of the default screen, and modify that instead. Just navigate to System design -&gt; Screens -&gt; System screens and clone the screen named "Edit request":

![](Show%20recpients%20in%20New%20Request_files/Copy%20screen.png)

Edit copy of screen
-------------------

Then you can edit your screen. We need to add an element where we can display the recipients. The element type "Html text with parser and database" will work for our purpose. Just add it inside the outermost table, so that resizing of the screen will not be corrupted:

![](Show%20recpients%20in%20New%20Request_files/Add%20element.png)

Pay attention to giving the element a name ("recipientsHeader"), so that we can get a reference to it afterwards in our script. Then we modify the screen, and add a script which reads the recipients from the recipient-control, and writes them to our element:

![](Show%20recpients%20in%20New%20Request_files/Script.png)

The script you want to insert is the top-section here, before `/* Standard stuff */`.
