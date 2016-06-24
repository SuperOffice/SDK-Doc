<properties date="2016-05-11"
SortOrder="81"
/>

This key contains a string that instructs the NetServer on communicating with the database. It has a number of parameters and the NetServer replaces these parameters with the correct values. For example, the NetServer will replace the parameter \[@Server\] with the value you configured in the server key.

```
<add key="ConnectionString"        
 value="Server=[@Server];Database=[@Database];User
 ID=[@User];Password=[@Password]"/>
```

 

An Important Point to Remember!

The number of parameters in the ConnectionString key will vary from one database vendor software to another, so will the names of the parameters. Vendor database software difference must be taken into consideration when setting this configuration key. The above example displays the configurations for a MSSQL database.
