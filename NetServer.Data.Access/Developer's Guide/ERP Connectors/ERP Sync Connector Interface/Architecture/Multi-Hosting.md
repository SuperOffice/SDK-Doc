<properties date="2016-05-11"
SortOrder="6"
/>

Multi-Hosting
-------------

![](Slide3.png)
The WCF Host can host more than one implementation of the IErpConnector interface.

The client can specify the implementation it wants by name in the URL, using a query string parameter.

      
    http://server/erpSync/ErpConnectorWS.svc?ConnectorName=Name-of-connector

The name of the connector is not the name of the class, but the name specified in the `[ErpConnector("name-of-connector")]`plugin attribute on the class.

Configuring the WCF Host for Multi-Hosting
------------------------------------------

The WCF Host by itself cannot do any ERP Sync'ing. It needs to be filled with plugins that implement the `IErpConnector` interface. We add these plugins using the WCF host's web.config file:

```
  <applicationSettings>
    <ErpSyncService.Properties.Settings>
      <setting name="ConnectorAssemblies" serializeAs="Xml">
        <value>
          <ArrayOfString
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xmlns:xsd="http://www.w3.org/2001/XMLSchema">
            <string>
              
c:\Samples\ErpSync\SuperOffice.EIS.DummyConnector.dll
            </string>
            <string>
              
c:\Samples\ExcelSync\SuperOffice.EIS.ExcelConnector.dll
            </string>
            <string>
              
c:\Samples\Visma\SuperOffice.EIS.VismaConnector.dll
            </string>
          </ArrayOfString>
        </value>
      </setting>
    </ErpSyncService.Properties.Settings>
  </applicationSettings>
```

 

This configures the WCF Host to load three different DLLs, each with a different implementation of IErpConnector interface.

The client can specify the name of the connector (not the name of the DLL) in the URL, like so:

 `http://server/erpSync/ErpConnectorWS.svc`   
Will use the default - the first connector in the list.

 `http://server/erpSync/ErpConnectorWS.svc?ConnectorName=Test.Excel`   
Will use the connector named "Test.Excel" -- this is the name declared using the `[ErpConnector("Test.Excel")]` attribute on the class implementing the `IErpConnector` interface in the SuperOffice.EIS.ExcelConnector.dll.

 `http://server/erpSync/ErpConnectorWS.svc?ConnectorName=SAP`   
Will look for a connector named "SAP", and failing to find one, will return an error: the connector 'SAP' was not found.
