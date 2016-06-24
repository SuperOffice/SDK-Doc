<properties date="2016-06-24"
SortOrder="5"
/>

Relating requests to equipment
==============================

An equipment table is interesting, but it really makes sense when we can connect requests to equipment, so that we can easily track our request history for a certain equipment unit. When relating two tables, we must consider which direction we would like our many-to-one relationship. Are we going to have (potentially) multiple requests related to one equipment unit, or multiple equipment units related to one request. (For many-to-many relations, you must create an extra table). In this case, it makes the most sense to have many requests related to one equipment unit, which means we will create the relational field on the request table.

So, to create the field, we choose "System Design" -&gt; "Tables" in the left hand menu, hover over "Requests" and click the "New field". Choose the type "Extra table relation". Name the field "Equipment", set Database field to "x\_equipment", enter "Requests" in "Header for list", and finally choose our Equipment table under "Target table". Click "Ok" to create the field.

<img src="Creating%20an%20Extra%20Table_files/image008.jpg" id="Picture 37" width="337" height="244" />

You can now try to create a new request or edit an existing request. On the tab called "Extra fields", you should find a control allowing you to search for entries in the equipment table, and choose one entry to relate to. Try doing this with a couple of requests (batch editing also works).

When viewing a request, you should now have the new equipment field show up as the last field in the request card. If it does not show up automatically, it is because this element has been profiled. In this case, click the paintbucket to edit the profile, and add the field manually (or reset the profile).

<img src="Creating%20an%20Extra%20Table_files/image009.jpg" id="Picture 40" width="515" height="75" />

Clicking the value in this field (should be the name of the equipment unit), will navigate to the equipment card which we have seen earlier. Now, however, it will also contain a tab listing all related requests for this equipment unit.

<img src="Creating%20an%20Extra%20Table_files/image010.jpg" id="Picture 43" width="516" height="165" />
