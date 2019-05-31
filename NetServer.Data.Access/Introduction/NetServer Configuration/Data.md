---
uid: netserver_configuration_data
title: NetServer Data Element
date: 2018-06-06
SortOrder: 74
---
The data configuration section contains four subsections for managing the database connection and session handling.

```xml
<Data>
  <Database>
    <add key="DatabaseMajor" value="MSSQL" />
    <add key="DatabaseMinor" value="14" />
    <add key="Server" value="" />
    <add key="Database" value="" />
    <add key="CommandTimeOut" value="300" />
    <add key="TablePrefix" value="crm7" />
    <add key="ConnectionString" value="Server=[@Server];Database=[@Database];User ID=[@User];Password=[@Password]" />

    <!-- Sybase -->
    <add key="DynamicLoadedConnectionType" value="iAnywhere.Data.AsaClient.AsaConnection" />
    <add key="DynamicLoadedDataBaseDriver" value="C:\Program Files\Sybase\SQL Anywhere 9\win32\iAnywhere.Data.AsaClient.dll" />
    <add key="DynamicLoadedDataBaseDriverPolicy" value="C:\Program Files\Sybase\SQL Anywhere 9\win32\policy.9.0.iAnywhere.Data.AsaClient.dll" />

    <!-- **** LEGACY **** IBM DB2 -->
    <add key="DynamicLoadedConnectionType" value="IBM.Data.DB2.DB2Connection" />
    <add key="DynamicLoadedDataBaseDriver" value="C:\Program Files\IBM\SQLLIB\BIN\netf11\IBM.Data.DB2.dll" />
    <add key="DynamicLoadedDataBaseDriverPolicy" value="C:\Program Files\IBM\SQLLIB\BIN\netf11\policy.8.1.IBM.Data.DB2.dll" />
  </Database>
  <Explicit>
    <add key="PartnerAllowed" value="True" />
    <add key="EmployeeAllowed" value="True" />
    <add key="SystemAllowed" value="True" />
    <add key="DBUser" value="" />
    <add key="DBPassword" value="" />
    <add key="CommonDBConnection" value="True" />
  </Explicit>
  <ImplicitAnonymous>
    <add key="Allowed" value="False" />
    <add key="DBUser" value="" />
    <add key="DBPassword" value="" />
    <add key="CommonDBConnection" value="True" />
    <add key="SoUser" value="" />
    <add key="SoPassword" value="" />
  </ImplicitAnonymous>
  <Session>
    <add key="Mode" value="Thread" />
    <add key="ReauthenticateOnDeserialization" value="false" />
  </Session>
</Data>
```


### Database

Configuration values for database connectivity,  defines the location and database-vendor specific settings.

|Name|Description|
|------------|-|
|DatabaseMajor|Major name of database provider. Options are: MSSQL, Oracle, Sybase and DB2 (legacy only).|
|DatabaseMinor|Version number of Database.|
|Server|The server name where the database is located.|
|DatabaseName|Name of the database. Also used for distinct service name.|
|TablePrefix|The prefix of the SuperOffice CRM tables in the database.|
|ConnectionString|The formatted connection string template placeholders. I.e. Server=[@Server];Database=[@Database];User ID=[@User];Password=[@Password]. The number of parameters in the ConnectionString key will vary from one database vendor software to another, so will the names of the parameters. Vendor database software difference must be taken into consideration when setting this configuration key. The above example displays the configurations for a MSSQL database.|
|CommandTimeout|Timeout in seconds for the command to wait for a response from the database.|
|DynamicLoadedDataBaseDriver|Returns the name of the ADO.NET driver to load.|
|DynamicLoadedConnectionType|Returns the type of connection to open.|
|DefaultReadUncommitted|Should SELECTs by default run in "ReadUncommitted" isolation level, lessening locking contention (especially on SQL Server)?  Default value is true.|
|ImpersonateDatabaseUser|Should the DbUser be logged in with windows and impersonated when connecting to the database in order to support database integrated authentication. Default value is false.|
|DisableSqlTrackingComments|If true, then comments that usually precede generated SQL to identify the operation and user will not be generated at all; may help performance on Oracle which thinks it has to re-parse everything if a comment changes. Default value is false.|
|DisableUserInSqlTrackingComments|If true, then comments that usually precede generated SQL to identify the operation will not contain associate information; may help performance on Oracle which thinks it has to re-parse everything if a comment changes. Default value is false.|

### Explicit

Configuration section for authentication behavior when users are explicitly authenticated, typically by calling SoSession.Authenticate or the corresponding WCF service.

|Name|Description|
|------------|-|
|PartnerAllowed|Is partner access allowed.|
|EmployeeAllowed|Is employee access allowed. The default value is true.|
|DBUser|Database user when running on behalf of explicitly authenticated users.|
|DBPassword|Database user password.|
|CommonDBConnection|Use the same connection string for all users, applying the common User and Password from this section, vs. using the one provided elsewhere. The default value is true.|

### ImplicitAnonymous

Configuration section for authentication behavior for users/connections that do not explicitly authenticate themselves. Informs NetServer of the database credentials that are used to login to the database when no user has explicitly authenticated. It also specifies the credentials for which Anonymous user to use to login to the database. To make use of this section, you must have the SuperOffice license key called Expander Key for Collaboration. This key enables the Anonymous user section of the SuperOffice application.

|Name|Description|
|------------|-|
|Allowed|Is anonymous access allowed. Default value is false.|
|DBUser|Database user when running on behalf of anonymous users.|
|DBPass|Database user password when running on behalf of anonymous users.|
|SoUser|SuperOffice user when running on behalf of anonymous users.|
|SoPass|SuperOffice user password when running on behalf of anonymous users.|

### Session

 This section governs session handling - what is the scope/storage of the session state, etc

|Name|Description|
|------------|-|
|Mode|The mode of the session: Thread, Context, HttpContext, Process; maps to a class name that provides session storage.|
|ReauthenticateOnDeserialization|A full re-authentication is carried out each time the session is de-serialized (e.g. from the session server).|

When in Mode **Thread**, every session will require suspend and continue method to be called for each query task. In this configuration, each thread executed in NetServer will have sessions that are stored in the implication of different threads and have different session values stored in them. If you want to suspend a session, you must call the suspend method which returns a string with the session values. Should you wish to continue that session, you must call the continue method and pass the string with session values in it as a parameter.

When in Mode **Context**, your session only requires  authentication and a closure. In this configuration, once you authenticate a session it will be for the lifetime of the session. It is not necessary to call continue and suspend methods. The session values for this configuration will be stored in a context static manner.
