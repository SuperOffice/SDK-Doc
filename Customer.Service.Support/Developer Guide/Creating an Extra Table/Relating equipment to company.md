<properties date="2016-06-24"
SortOrder="6"
/>

Relating equipment to company
=============================

Now that we are able to relate requests to equipment, we can do something similar: relate equipment to company. This is a typical use case, where we would like to have registered all equipment owned by a company.

To create this relation (many equipment units for one company), we must create a new field on the equipment table which relates to a company. Choose "System Design" -&gt; "Tables" in the menu, and click "New field" next to our equipment table. Choose "Company relation" as type. Enter "Company" as name, "x\_company" as database field, "Equipment" as header for list, tick "Show in table" and click "Ok". The field is now created.

<img src="Creating%20an%20Extra%20Table_files/image011.jpg" id="Picture 49" width="288" height="203" />

Click "Requests" -&gt; "Tables" in the menu and click on the equipment table to list its content. There should now be a new column in the grid, named "Company", with no values set. By editing an equipment unit, you can now specify the Company. It is also possible to select multiple rows in the Result-grid, click "Batch management" -&gt; "Change", and specify the company for all chosen entries.

<img src="Creating%20an%20Extra%20Table_files/image012.jpg" id="Picture 52" width="258" height="155" />

When viewing the related company, you will now also see another tab (next to "Requests" and "Customer contacts") containing the related equipment entries.

<img src="Creating%20an%20Extra%20Table_files/image013.jpg" id="Picture 55" width="516" height="156" />
