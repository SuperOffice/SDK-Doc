<properties date="2016-05-11"
SortOrder="92"
/>

 

This section of the configuration file will inform NetServer of the database credentials that it has to use to login to the database if you have not performed any explicit authentication. It will also inform NetServer of the credentials of the Anonymous user. To make use of this section, you must have the SuperOffice license key called Expander Key for Collaboration. This key enables the Anonymous user section of the SuperOffice application.

 

```
<ImplicitAnonymous>
        <add key="Allowed" value="True"/>
        <add key="DBUser" value="crm5"/>
        <add key="DBPassword" value="crm5myd"/>
        <add key="CommonDBConnection" value="True"/>
        <add key="SoUser" value="Anonymous1" />
        <add key="SoPassword" value="" />
      </ImplicitAnonymous>

 
```

1. autolist
