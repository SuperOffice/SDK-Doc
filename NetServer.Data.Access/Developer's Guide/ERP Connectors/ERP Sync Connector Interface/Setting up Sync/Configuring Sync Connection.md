<properties date="2016-05-11"
SortOrder="3"
/>

[Configuring Sync Connection]()
--------------------------------------------

When creating a new Sync Connection, SO Admin calls the Sync Connector an requests an array of FieldMetaDataInfo objects detailing what data the connector will need to identify which ERP instance/client to connect to (e.g. database server, database name, username and password).

![](../Erp%20Sync%20Connector%20Interface_files/image003.png)

The user is presented with a GUI where these connection fields can be entered (or selected, if the field type is a list). Before this is sent back to the connector, SO Admin generates a new GUID (globally unique identifier) which the connector will use to identify this particular connection in the future. This GUID will accompany every connection specific call made to the connector.

SO Admin sends the completed connection details to the connector and asks that it be saved in some form of persistent storage along with the Connection ID GUID, so that Erp Sync will not have to resend the complete connection info with every call in the future. SuperOffice provides useful helper methods for saving this configuration data; see “Helper methods and classes”.

Once the connector reports back that the connection details have been saved, SO Admin calls the **TestConnection** method to verify that the connection info is working as intended. The connector will then need to perform some kind of operation on the ERP system to verify this and report back.

SO Admin will also store a copy of the connection details, in case the connector requests it to be resent at some point in the future.

 

<img src="../Erp%20Sync%20Connector%20Interface_files/image004.png" id="Bilde 1" width="602" height="584" />

Sequence diagram detailing the process of defining and saving a new Sync Connection.

 

 
