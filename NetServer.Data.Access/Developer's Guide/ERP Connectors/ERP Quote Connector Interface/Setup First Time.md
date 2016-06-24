<properties date="2016-05-11"
SortOrder="2"
/>

[Quote Connector Setup – First time]()
----------------------------------------------------------------

The SuperOffice Administration client will start by using the setup functions to set up the connection to the ERP system. 

Admin calls **GetConfigurationFields**, and uses the result to add fields to the configuration dialog.

  <img src="Quote%20Connector%20interface_files/image002.jpg" width="605" height="697" />

For example: if the GetConfigFields call returns a list like this:

\[{ “Web Service Key”, Integer },
  { “User Name”, String },
  { “Password”, Password },
  { “Entity”, integer },
  { “Web Service URL”, String } \]

 

This result results in the following dialog:

<img src="Quote%20Connector%20interface_files/image003.jpg" id="Picture 7186" width="605" height="467" />

Figure 2 : Configure Quote Connection Dialog

 The user clicks the TEST button in the dialog, and the **TestConnection** method is called with the values from the dialog. When the user clicks OK the values are saved to the SuperOffice database as a connection.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><a href=""></a> <a href="" id="OLE_LINK54"></a> <a href="" id="OLE_LINK53"></a> <a href="" id="OLE_LINK8"></a> <a href="" id="OLE_LINK7">Dictionary&lt; string, FieldMetadataInfo</a> &gt; <strong>GetConfigurationFields</strong> ()</p></td>
<td><p>Used by the admin client.<br />
This is a request for metadata needed to populate the Quote connection configuration admin dialog that takes in the information needed to create a connection to an ERP system. The values entered in the dialog are stored in SuperOffice db and used when <strong>InitializeConnection</strong> is called by the client.</p>
<p>The key in the Dictionary is the FieldKey, and must match the key in the FieldMetadataInfo.</p></td>
</tr>
<tr class="even">
<td><p><a href=""></a> <a href="" id="OLE_LINK61"></a> <a href="" id="OLE_LINK60"></a> <a href="" id="OLE_LINK59">PluginResponseInfo</a> <a href="" id="OLE_LINK62"></a>  <strong>TestConnection</strong>  ( Dictionary&lt;string, string&gt; connectionData connectionData )</p></td>
<td><p>Used by the admin client.<br />
Testing if the connection data is sufficient to get a connection with the ERP system. The Connector should try to do some operations to check if the connection has sufficient rights to run. The connection has not been created yet.<br />
<strong>TestConnection</strong> is called without <strong>InitializeConnection</strong> being called first.</p>
<p>The key in the Dictionary is the FieldKey, and must match the key in the FieldMetadataInfo. The value is what the user entered; <strong>see the paragraph “Config Values” below for details.</strong></p></td>
</tr>
</tbody>
</table>

 

**Pitfall:**

Note that you cannot populate lists based on the partially filled out user-interface during first time setup.

Dropdown lists are fetched when the GUI is constructed, so having a configuration GUI like this:

<img src="Quote%20Connector%20interface_files/image004.png" width="427" height="89" />

Won’t work – because the call to fetch the Dataset list will come before the WebServiceURL field is filled in.
