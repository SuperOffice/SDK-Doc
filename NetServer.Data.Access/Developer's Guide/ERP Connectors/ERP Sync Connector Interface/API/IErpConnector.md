<properties date="2016-05-11"
SortOrder="4"
/>

[IErpConnector]()
------------------------------

A Sync Connector (plugin to the connector web-service host) will need to implement the IErpConnector interface. This interface contains methods needed to both set up and save a Sync Connection, and to retrieve and save ERP actors. The `IErpConnector` interface, along with all related classes and interfaces, are contained in **SuperOffice.Plugins.DLL**.

If you do not want to use the web-service host, you will need to implement the SOAP web-service interface directly. The IERpConnectorWS interface is identical in functionality, but uses SOAP definitions rather than .net definitions.

 

Interface Members:

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><code> FieldMetadataInfoArrayPluginResponse  GetConfigData()</code></td>
<td><p>Asks the connector what fields are needed to set up a new connection (e.g. database, username and password)</p>
<p> </p></td>
</tr>
<tr class="even">
<td><code> PluginResponseInfo   TestConfigData   ( Dictionary &lt; string ,  string &gt; connectionInfo) </code></td>
<td><p>Asks the connector to verify that a given set of connection configuration data is valid, without saving it as a new connection.</p>
<p> </p></td>
</tr>
<tr class="odd">
<td><code> PluginResponseInfo   SaveConnection   (Guid connectionID,  Dictionary &lt; string ,  string &gt; connectionInfo)</code></td>
<td><p>Creates a new connection, or updates an existing one</p>
<p> </p></td>
</tr>
<tr class="even">
<td><code> PluginResponseInfo   TestConnection   (Guid connectionID)</code></td>
<td><p>Checks if the given connection ID is valid (is the connection up, is the configuration data correct, etc.)</p>
<p> </p></td>
</tr>
<tr class="odd">
<td><code> PluginResponseInfo   DeleteConnection  (Guid connectionID) </code></td>
<td><p>Tells the Connector that a connection has been deleted from Erp Sync, in case the Connector needs to know and take some action</p>
<p> </p></td>
</tr>
<tr class="even">
<td><code> StringArrayPluginResponse   GetSupportedActorTypes</code> <code> (Guid connectionID)</code></td>
<td><p>Gets the supported actor types for a given connection</p>
<p> </p></td>
</tr>
<tr class="odd">
<td><code> FieldMetadataInfoArrayPluginResponse   GetSupportedActorTypeFields</code> <code> (Guid connectionID,  string  actorType)</code></td>
<td><p>Gets a list of fields that are available for a given connection and a given actor type</p>
<p> </p></td>
</tr>
<tr class="even">
<td><code> ActorArrayPluginResponse   GetActors   (Guid connectionID,  string  actorType,  string [] erpKeys,  string [] fieldKeys)</code></td>
<td><p>Retrieves actors based on primary key and actor type</p>
<p> </p></td>
</tr>
<tr class="odd">
<td><code> ActorArrayPluginResponse   SearchActors</code> <code> (Guid connectionID,  string  actorType,  string  searchText,  string [] fieldKeys)</code></td>
<td><p>Searches for one or more actors given a simple search string</p>
<p> </p></td>
</tr>
<tr class="even">
<td><code> ActorArrayPluginResponse   SearchActorByParent</code> <code> (Guid connectionID,  string  actorType, string  searchText,  string  parentActorType,  string  parentActorErpKey,  string [] fieldKeys)</code></td>
<td><p>Searches for one or more actors given a simple search string, and only searches for actors with a specified parent actor</p>
<p> </p></td>
</tr>
<tr class="odd">
<td><code> ActorPluginResponse   CreateActor</code> <code> (Guid connectionID,  ErpActor  actorFromSuperOffice)</code></td>
<td><p>Creates a new actor in the ERP system, based on information from SuperOffice entity</p>
<p> </p></td>
</tr>
<tr class="even">
<td><code> ActorArrayPluginResponse   SaveActors</code> <code> (Guid connectionID,  ErpActor [] actors)</code></td>
<td><p>Saves (updates) existing actors in ERP with information from SuperOffice</p>
<p> </p></td>
</tr>
<tr class="odd">
<td><code> ListItemArrayPluginResponse   GetList   (Guid connectionID,  string  listName)</code></td>
<td><p>Retrieves a list from the connector, using the name specified by the connector itself</p>
<p> </p></td>
</tr>
<tr class="even">
<td><code> ListItemArrayPluginResponse   GetListItems   (Guid connectionID,  string  listName,  string [] listItemKeys)</code></td>
<td><p>Retrieves one or more specific list items from the connector, using the list name specified by the connector.</p>
<p> </p></td>
</tr>
<tr class="odd">
<td><code> ActorArrayPluginResponse   GetActorsByTimestamp</code> <code> (Guid connectionID,  string  lastModified ,  string  actorType,  string [] fieldKeys )</code></td>
<td><p>Retrieves all actors of a specified actor type updated on or after a given date and time *</p>
<p> </p></td>
</tr>
<tr class="even">
<td><code> StringArrayPluginResponse   GetSearchableFields (Guid connectionId,  string  actorType)</code></td>
<td><p>Obtain a list of fields (a subset of previously  declared fields from <strong>GetSupportedActorTypeFields</strong>), that should be shown as criteria in the “Advanced Search”</p></td>
</tr>
<tr class="odd">
<td><code> ActorArrayPluginResponse   SearchActorsAdvanced (Guid connectionID,  string  actorType,  SearchRestrictionInfo [] restrictions,  string [] returnFields)</code></td>
<td><p>Performs a criteria-driven search (“Advanced Search”) and returns an array of rows</p></td>
</tr>
</tbody>
</table>

[]() []() [\*see]() [the ErpActor section](ERP%20Actor%20Carrier.md) for details on timestamps.

 

In addition to implementing the methods of IErpConnector, a Sync Connector will need to have a unique name attribute, for example:

```
   [ErpConnector("MyCompany.SuperErpConnector")]
   public class MyErpSystemConnector : IErpConnector
   {
         // Connector code
         // implement all the interface
   }
```

This connector would be compled into a DLL, and then exposed to the web using [the WCF Erp Sync Service host](../Architecture/ERP%20Sync%20Service%20WCF%20Host.md).
