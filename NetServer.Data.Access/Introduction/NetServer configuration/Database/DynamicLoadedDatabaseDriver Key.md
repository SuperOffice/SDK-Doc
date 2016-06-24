<properties date="2016-05-11"
SortOrder="83"
/>

If your application uses a Sybase database or a  IBM DB2 database this setting must be in your configuration file. This key defines the type of database driver that should be loaded. The example displays the configurations for IBM DB2 & Sybase databases.

```
IBM DB2
<add key="DynamicLoadedDataBaseDriver" value="C:\Program
Files\IBM\SQLLIB\BIN\netf11\IBM.Data.DB2.dll" />
 
Sybase
<add key="DynamicLoadedDataBaseDriver" value="C:\Program
Files\Sybase\SQL Anywhere 9\win32\iAnywhere.Data.AsaClient.dll"
/>
```

 

An I mportant Point to Remember!

It is important to note that the path you define here is relevant to the location where you have installed your database software.
