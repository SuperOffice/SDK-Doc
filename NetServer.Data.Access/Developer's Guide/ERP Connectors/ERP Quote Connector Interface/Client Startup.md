<properties date="2016-05-11"
SortOrder="4"
/>

[SuperOffice Client Startup]()
--------------------------------------------------------

The SuperOffice windows client calls **InitializeConnection** during startup using the values saved from the Create connection dialog in the Admin client, and then checks return value to see if the ERP system is available.

If the connection initialized OK, then SuperOffice will mark the connection as available for use.

If the InitializeConnection returned NOT OK then the connection is marked as unavailable – and the connection will not be used for the remainder of the session. This means that any quotes created using this connection cannot be edited, and the OPEN button will be disabled.

<img src="Quote%20Connector%20interface_files/image006.jpg" width="575" height="478" />

 

Connections are initialized on demand.

If a connection fails to initialize then the result is cached, so that the client can get the initialize result later (for tooltips and the like).

 

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>Int CRMConnectionId</p></td>
<td><p>The id of this connection in the CRM system.</p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>PluginResponseInfo <strong>InitializeConnection</strong>( QuoteConnectionInfo connectionData, Dictionary&lt;string, string&gt; configurationFields, IProductRegisterCache productRegister)</p></td>
<td><p>Set up the connection to the ERP system.</p>
<p>Will be called as part of SuperOffice client startup for each installed connection.</p>
<p> </p>
<p>Configuration data comes from the config dialog shown in the Admin client (see <strong>IQuoteConnectorSetup.GetConfigurationFields</strong>)<br />
<br />
</p>
<p>The key in the Dictionary is the FieldKey, and must match the key in the FieldMetadataInfo. The value is the user entry, as described in <strong>Config Values</strong>.</p>
<p><br />
Return value: <strong>IsOk</strong> set to false if connector can’t provide service (no network); text will explain to user.  IsOk = False means the connection is not available, and quotes based on this connection cannot be edited.</p></td>
</tr>
<tr class="even">
<td><p>Dictionary&lt;string, PluginResponseInfo&gt; <strong>GetCapabilities</strong>()</p></td>
<td><p>Return a set of capability name status pairs that tell the system what capabilities this connector provides.</p>
<p>Using the PluginResponseInfo gives the connector the possibility to disable a capability, with a reason string that might be shown to the user.</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>QuoteVersionResponseInfo</p>
<p><strong>OnBeforeCreateQuote</strong> ( QuoteContextInfo context )</p></td>
<td><p>Called when a user is creating a quote.<br />
The Quote does not exist in database at this time; any changes in the returned QuoteContextInfo will be saved and the GUI updated.<br />
<br />
The following parts of the QuoteContextInfo can be updated by this method: Quote; QuoteVersion; QuoteAlternative. Changes to other parts of the QuoteContextInfo will be ignored.</p>
<p> </p>
<p>Returns an updated context.</p></td>
</tr>
<tr class="odd">
<td><p>void <strong>OnAfterSaveQuote</strong>( QuoteContextInfo context )</p></td>
<td><p>Called after a sale containing a quote is saved: after quote is created, and after quote dialog is closed. (Notice that new items have now gotten their ids in the CRM system.)<br />
Changes to the QuoteContextInfo are ignored.</p></td>
</tr>
<tr class="even">
<td><p>void <strong>OnBeforeDeleteQuote</strong>( QuoteInfo quote, ISaleInfo sale )</p></td>
<td><p>Called before a sale containing a quote is deleted. Clean up in the ERP system, if needed.</p></td>
</tr>
</tbody>
</table>

 
