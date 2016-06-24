<properties date="2016-05-11"
SortOrder="84"
/>

If your application uses a Sybase database or a  IBM DB2 database this setting must be in your configuration file. This key defines the type of database driver policy that is loaded. The example displays the configurations for IBM DB2 & Sybase databases.

```
IBM DB2
<add key="DynamicLoadedDataBaseDriverPolicy" value="C:\Program
Files\IBM\SQLLIB\BIN\netf11\policy.8.1.IBM.Data.DB2.dll" />
 
Sybase
<add key="DynamicLoadedDataBaseDriverPolicy" value="C:\Program
Files\Sybase\SQL Anywhere
9\win32\policy.9.0.iAnywhere.Data.AsaClient.dll" />
```

 

An Important Point to Remember!

It is important to note that the path you define here is relevant to the location where you have installed your database software.

 
