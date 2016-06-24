<properties date="2016-06-24"
SortOrder="8"
/>

Making this table available in Sales & Marketing
================================================

With SuperOffice CRM 7, it is even easier than before to make this table available inside the Sales & Marketing client as a web panel. In order for this to work, you also need to modify the table in Customer Service and make it viewable or editable from Sales & Marketing:

<img src="Creating%20an%20Extra%20Table_files/image015.jpg" id="Picture 16" width="386" height="257" />

After saving the table, the following URL will display this table full screen in the browser, opening the new/edit windows as dialogs:

[.../ticket.exe?action=listTableEntries&table=y\_equipment&field.0=y\_equipment.x\_company&value.0=&lt;cuid&gt;&x\_company=&lt;cuid&gt;&preview\_secret=&lt;usec&gt;](#)

This URL requires some explanation, as it is quite generic:

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>action=listTableEntries</p></td>
<td><p>This is the method in ticket.exe for listing table entries.</p></td>
</tr>
<tr class="even">
<td><p>table=y_equipment</p></td>
<td><p>y_equipment is our table in this case. Any other extra table may be used.</p></td>
</tr>
<tr class="odd">
<td><p>field.0=y_equipment.x_company</p></td>
<td><p>The first field in the &quot;where&quot;-criteria used in our query. Multiple criteria may be used, in which case the fields (the left part of the where) must be supplied as field.0, field.1, etc. The fields are referenced using our dot-syntax, which means you can access any related table by &quot;dotting&quot; along the foreign keys, e.g. &quot;ticket.cust_id.company&quot;.</p></td>
</tr>
<tr class="even">
<td><p>value.0=&lt;cuid&gt;</p></td>
<td><p>This the corresponding value for field.0. &quot;&lt;cuid&gt;&quot; is a substitute value which by the Sales &amp; Marketing client will be substituted with the ID of the current company.</p></td>
</tr>
<tr class="odd">
<td><p>operator.0=OperatorEquals</p></td>
<td><p>This parameter is not included in the above URL, as the equals operator is the default. However, if you need to use another operator, it can be included here.</p></td>
</tr>
<tr class="even">
<td><p>x_company=&lt;cuid&gt;</p></td>
<td><p>This parameter tells the field x_company in the pop-up dialog for editing a single entry to have the initial value &quot;&lt;cuid&gt;&quot; for new entries. This means that when you click &quot;New entry&quot;, the current company will already be filled out.</p></td>
</tr>
<tr class="odd">
<td><p>preview_secret=&lt;usec&gt;</p></td>
<td><p>This is the authentication method. This method allows a user who is logged into Sales &amp; Marketing to view and possibly edit content in Customer Service extra tables. Note that this requires CS v7.0SR1 to function.</p></td>
</tr>
</tbody>
</table>

By using SOAdmin, choose "Lists" -&gt; "Web panel" and add a new item. Name it "Equipment", input the above URL (modified for your local hostname, etc) and specify that it should be visible in "Section tab in Company Screen".

<img src="Creating%20an%20Extra%20Table_files/image016.jpg" id="Picture 61" width="272" height="311" />

After saving the SOAdmin settings, fire up the Sales & Marketing client and hopefully you will see an Equipment tab in the Company view. Clicking on a row will open this row in edit mode in a dialog window, and clicking "New entry" will open up the same dialog for creating a new entry. When closing a dialog by clicking "Ok", the web panel will refresh to show the updated values:

<img src="Creating%20an%20Extra%20Table_files/image017.jpg" id="Picture 13" width="595" height="410" />
