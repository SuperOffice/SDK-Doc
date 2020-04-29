---
title: E Using the screen
path: /Examples/Equipment screen Intro/E: Using the screen
sortOrder: 9574
---

We want to use our screen to replace the default screen available under "Requests - tables - Equipment".

To do this we must enable the new screen instead of the default screen.
First navigate to "System design - screens" and edit our newly created screen. Here we need to give the screen a unique ID String, lets call it "ViewEquipment".

Then navigate to "System design - screen choosers" and click on "tables" to find our equipment table. Here we enter the following code to override the default screen:

"

    setVariable("url", "?action=doScreenDefinition&idString=ViewEquipment&entryId="+getCgiVariable("id"));
    "
    

Now we can view our newly created screen when we navigate to "Requests - tables - equipment" and choose one of the posts here. We will then see the history of each equipment.
Our new screen is similar to the default screen but created from scratch and also adding a new field for email.


