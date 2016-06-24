<properties date="2016-05-11"
SortOrder="85"
/>

 

This section is where you configure the user settings of the NetServer user. If the anonymous settings have not been configured, NetServer will obtain the authentication details to login to the database from this location. In this section, you can also specify the type of users allowed login to the system.

 

```
<Explicit>
        <add key="ExternalPersonAllowed" value="True"/>
        <add key="EmployeeAllowed" value="True"/>
        <add key="SystemAllowed" value = "True"/>
        <add key="DBUser" value="crm5"/>
        <add key="DBPassword" value="crm5myd"/>
        <add key="CommonDBConnection" value="True"/>
      </Explicit>

 
```

1. autolist
