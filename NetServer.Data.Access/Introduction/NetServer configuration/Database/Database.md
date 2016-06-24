<properties date="2016-05-11"
SortOrder="74"
/>

 

The Database section defines the location and database-vendor specific settings. The database servers currently supported are:

* Microsoft SQL Server 7 and 2000
* Oracle 8.1.7, 9i and 10g
* Sybase 7, 8 and 9
* DB2 version 8

 

This section will depend heavily on the vendor of the database that your application uses. Given below is an example of how these settings should be defined in the config file. The example contains all key value combinations that should be configured for all the databases supported by NetServer.

```
<Database>
<add key="DatabaseMajor" value="DB2"/>
<add key="DatabaseMinor" value="8"/>
<add key="Server" value="qa-ut-IBMDB28"/>
<add key="Database" value="SZ60DB28"/>
<add key="CommandTimeOut" value="300" />
<add key="TablePrefix" value="CRM5" />
<add key="ConnectionString" value="DATABASE=[@Database];User    
  ID=[@User];Password=[@Password]" />
<add key="DynamicLoadedConnectionType"
value="IBM.Data.DB2.DB2Connection" />
<add key="DynamicLoadedDataBaseDriver" value="C:\Program
Files\IBM\SQLLIB\BIN\netf11\IBM.Data.DB2.dll" />
<add key="DynamicLoadedDataBaseDriverPolicy" value="C:\Program
Files\IBM\SQLLIB\BIN\netf11\policy.8.1.IBM.Data.DB2.dll" />
</Database>
```

 

The keys in the above example will change based on the database used as they are database specific. For example, the value of the ConnectionString key for MS SQL 2000 will be as defined below:

```
<add key="ConnectionString"
value="Server=[@Server];Database=[@Database];User
ID=[@User];Password=[@Password]"/>
```

 

In IBM DB2 V8, the value of the ConnectionString key will be as defined below:

```
<add key="ConnectionString" value="DATABASE=[@Database];User
ID=[@User];Password=[@Password]" />
```

 

It is imperative that these configurations be defined according to the settings of each database. Furthermore, it’s important that some of the keys in this section are specific to the database. For example, the key value combinations given below are only specific to IBM DB2 and Sybase databases.

```
<add key="DynamicLoadedConnectionType"
value="IBM.Data.DB2.DB2Connection" />
<add key="DynamicLoadedDataBaseDriver" value="C:\Program
Files\IBM\SQLLIB\BIN\netf11\IBM.Data.DB2.dll" />
<add key="DynamicLoadedDataBaseDriverPolicy" value="C:\Program
Files\IBM\SQLLIB\BIN\netf11\policy.8.1.IBM.Data.DB2.dll" />
```

1. autolist
