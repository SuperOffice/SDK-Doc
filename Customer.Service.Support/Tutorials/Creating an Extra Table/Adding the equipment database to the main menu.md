<properties date="2016-06-24"
SortOrder="7"
/>

Adding the equipment database to the main menu
==============================================

We can add direct access to our table in the left menu. To do so, click "System Design" -&gt; "System script", and edit the one called "Main menu". Add the following code to it:

MainMenu mm = getMainMenu();
mm.addGroup("Equipment", "/graphics/Fresco/hd\_24x24.gif", 1);
mm.addItem("List equipment", getProgram(1) + "&action=listExtraTable&extraTable=y\_equipment", 1, 0);
mm.addItem("New unit", getProgram(1) + "&action=editExtraTableEntry&extraTable=y\_equipment", 1, 1);

This code will first get the main menu object, then add a group to it with the label "Equipment", and then add two items to it. (Feel free to use a better icon).

<img src="Creating%20an%20Extra%20Table_files/image014.jpg" id="Picture 58" width="94" height="114" />
