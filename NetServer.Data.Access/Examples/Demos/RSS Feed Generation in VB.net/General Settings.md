<properties date="2016-05-11"
SortOrder="16"
/>

For the application to run, some modifications are required in the web configuration file. The following section illustrates the modifications required in the authentication section and the database section of the configuration file.

 

```
<authentication mode="Forms">
      <forms name="RSSFeedFinalVB" loginUrl="~/Default.aspx"
protection="All" timeout="30" path="/">
      </forms>
 
</Authentication>
 
<sessionState mode="InProc"
stateConnectionString="tcpip=127.0.0.1:42424"
sqlConnectionString="data source=127.0.0.1; &#xA; 
Trusted_Connection=yes" cookieless="false" timeout="40"/>
 
<authorization>
      <!--  <deny users="?"/>
      <allow     users="[comma separated list of users]"
       roles="[comma separated list of roles]"/>
      <deny  users="[comma separated list of users]"
       roles="[comma separated list of roles]"/>-->
</authorization> 
 
 
 
<Database>
      <add key="DatabaseMajor" value="MSSQL"/>
      <add key="DatabaseMinor" value="8"/>
      <add key="Server" value="ECCOLVISPHE"/>
      <add key="Database" value="SuperOffice"/>
      <add key="CommandTimeOut" value="300"/>
      <add key="TablePrefix" value="CRM5"/>
<add key="ConnectionString"
value="Server=[@Server];Database=[@Database];User
ID=[@User];Password=[@Password]"/>
</Database>

 

The authentication mode is set to ‘Forms’, to
enable custom user authentication. Here, the ‘loginUrl’
points to the application's custom login page. Further, the
Database information too has to be modified.
```
