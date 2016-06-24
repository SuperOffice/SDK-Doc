<properties date="2016-05-11"
SortOrder="82"
/>

If your application uses  a Sybase database or a  IBM DB2 database, this setting must be in your configuration file. This key sets the type of connection that should be loaded. The example displays the configurations for IBM DB2 & Sybase databases.

```
IBM DB2
<add key="DynamicLoadedConnectionType"
value="IBM.Data.DB2.DB2Connection" />
 
Sybase
<add key="DynamicLoadedConnectionType"
value="iAnywhere.Data.AsaClient.AsaConnection" />
```
