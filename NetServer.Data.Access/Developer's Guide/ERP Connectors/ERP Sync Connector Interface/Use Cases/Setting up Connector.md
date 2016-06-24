<properties date="2016-05-11"
SortOrder="1"
/>

Setting up ERP Sync Connection
------------------------------

![](../Erp%20Sync%20Connector%20Interface_files/image003.png)

Once the user has selected the Sync Connector (the URL) to use, the Admin client will call the connector GetConfigData via SOAP to find out what configuration fields to use.

```
  FieldMetadataInfoArrayPluginResponse GetConfigData();

  returns:
      IsOk = true
      FieldMetaDataObjects
        [0] = { Access = Normal, Rank = 1,
                FieldKey = "VID", FieldType = Text,
                DisplayName = "Visma Client ID",
                DisplayDescription = "This is the tooltip",
                DefaultValue = "<name>" }

        [1] = { Access = Mandatory, Rank = 2,
                FieldKey = "U", FieldType = Text,
                DisplayName = "User",
                DefaultValue = "" }

        [2] = { Access = Normal, Rank = 3,
                FieldKey = "P", FieldType = Password,
                DisplayName = "Password",
                DisplayDescription = "ERP password" }
```

The configuration fields describe the defaults. Any default values that contain template tags will be replaced with company name/current user values. You can use this to get the serial number &lt;ser\#&gt; for example.

The user then fills in the config fields in the dialog and clicks the TEST button to verify that the settings are correct.

Admin.web calls the `TestConfigData( Dictionary<string,string> )` method with the values from the dialog, and using the FieldKeys as keys to the dictionary.

```
  PluginResponseInfo TestConfigData(Dictionary connectionInfo)

     connectionInfo:
         ["VID"] = "NO SME"
         ["U"]   = "nosmexxx"
         ["P"]   = "glops123"
  
  returns
      IsOk = true
      UserExplanation = ""
      TechExplanation = ""
      ErrorCode = ""
```

If the `TestConfigData` returns `IsOk = false`, then the UserExplanation message is displayed as an error message, and the SAVE button in the configuration dialog is not enabled.

The user clicks the SAVE button in the config dialog. The SuperOffice Admin client generates a GUID for the connection, and calls the `SaveConnection` method.

```
  PluginResponseInfo 
SaveConnection(Guid connectionId, Dictionary connectionInfo)

     connectionId = {3aef3af6-8642-4fc1-8dc9-4e08bd76a6bf}
     connectionInfo:
         ["VID"] = "NO SME"
         ["U"]   = "nosmexxx"
         ["P"]   = "glops123"
  
  returns
      IsOk = true
      UserExplanation = ""
      TechExplanation = ""
      ErrorCode = ""
```

The connector neds to save the connection parameters mapped to the connectionId, so that later invocations (which are only passed the connectionId) can retrieve the parameters needed to communicate with the ERP system.

Supported Actor Types
---------------------

Admin.web then calls `GetSupportedActorTypes` to find out what things the connector supports sync'ing. This response is cached in the SuperOffice database until the next time the connection is configured and saved.

```
  StringArrayPluginResponse 
GetSupportedActorTypes(Guid connectionId)

     connectionId = {3aef3af6-8642-4fc1-8dc9-4e08bd76a6bf}
  
  returns
      IsOk = true
      Items 
         [0] = "Customer" 
         [1] = "Supplier"
         [2] = "Project"
```

The Actor type names are defined by the ErpActorType enum. The "Customer", "Supplier" and "Partner" all correspond to SuperOffice companies. The different actor types can have different field mappings. Note that the actor type names are not translated -- they are constants.

Lists
-----

If one of the fields is a list field, then the name of the list is passed to the Erp Connector when the dropdown list is opened. The `GetList` method should return a mapping of list-item-id -&gt; list-item-text.
```
  ListItemArrayPluginResponse 
GetList(Guid connectionId, string listName)

     connectionId = {3aef3af6-8642-4fc1-8dc9-4e08bd76a6bf}
     listName = "the List"
  
  returns
      IsOk = true
      ListItems:
         ["a"] = "item A"
         ["x"] = "item X"
         ["9"] = "number nine"
```

Note that the connection id is 0000-000-000 when you are seting up the connection for the first time. The connection hasn't been saved yet, so no connection GUID has been created yet.
