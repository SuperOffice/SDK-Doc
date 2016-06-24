<properties date="2016-05-11"
SortOrder="75"
/>

This key informs the NetServer of the vendor database that your application is using. Given below are the values that must be defined for each distinctive vendor database:

MSSQL 7 and 2000

```
            <add key="DatabaseMajor" value="MSSQL"/>
      Oracle 8.1.7, 9i and 10g
            <add key="DatabaseMajor" value="Oracle"/>
      Sybase 7,8 and 9
            <add key="DatabaseMajor" value="Sybase"/>
      DB2 version 8
            <add key="DatabaseMajor" value="DB2"/>
```
