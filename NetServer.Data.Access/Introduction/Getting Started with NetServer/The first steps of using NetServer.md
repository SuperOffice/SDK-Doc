<properties date="2016-05-11"
SortOrder="7"
/>

The very first step is to open Visual Studio and create a project. Since this example will focus on a windows project, we will begin by creating a new Windows Form Application project.
The second step is to reference the NetServer data link libraries (DLL) that we are going to use in the project.

![](../Getting%20Started%20with%20NetServer%20-%20SuperOffice%20DevNet_files/Article_A.png)

To reference the DLL's, right-click the project in the solution explorer window and click Add Reference.

![](../Getting%20Started%20with%20NetServer%20-%20SuperOffice%20DevNet_files/Article_B.png)

In the Add Reference dialog there will be many tabs to choose from. Click the Browse tab and navigate to the NetServer SDK location, selected during installation. We accepted the default location, C:\\Program Files\\SuperOffice\\NetServer 3.0. In the installation directory, open the bin folder to see a list of all the DLL's that used when coding against NetServer. In this example we are going to write code that only uses the Rows layer of NetServer, therefore we only have to highlight the following DLL's, then click Ok.

* SoCore.dll
* SoDataBase.dll

The two DLL's are now added to the project references, as seen in the screen shot below.

![](../Getting%20Started%20with%20NetServer%20-%20SuperOffice%20DevNet_files/Article_C.png)

 

Before starting to write code, there is one more thing left to do - add an application configuration file to the project. Every NetServer application requires an application configuration file that NetServer relies on for configuration settings. When we install the NetServer SDK, it included many sample configuration files that target specific database servers, i.e. Microsoft SQL Server, Oracle, and Sybase. From the examples, we can select the appropriate configuration file that will matches our database software vendor and add it to our project.

To add an existing item to a project, right click on the project in the solution explorer, like shown in the below screen shot, and select Add, then click Existing Item.

![](../Getting%20Started%20with%20NetServer%20-%20SuperOffice%20DevNet_files/Article_D.png)

When the Add Existing Item dialog appears, navigate to the NetServer SDK installation directory and open the Configurations folder. On my machine that is C:\\Program Files\\SuperOffice\\NetServer 3.0\\Configurations. In this folder is the list of configurations files that correspond to different database vendors. As seen in the screenshot below, we select the configuration file for our database software, MS SQL 2005.config, and click Add.

![](../Getting%20Started%20with%20NetServer%20-%20SuperOffice%20DevNet_files/Article_E.png)

Once the configuration file is added to the project, it will need to be renamed to app.config. If this were a Web Application or Website project, the file name would then need to be renamed to web.config.

The first section in the configuration file to address is the database section. We need this section to match our database settings, such as database vendor, version, location and name.

```
<Database>
  <add key="DatabaseMajor" value="MSSQL"/>
  <add key="DatabaseMinor" value="8"/>
  <add key="Server" value="my-laptop"/>
  <add key="Database" value="superoffice"/>
  <add key="CommandTimeOut" value="300" />
  <add key="TablePrefix" value="CRM5" />
  <add key="ConnectionString"
value="Server=[@Server];Database=[@Database];User
        ID=[@User];Password=[@Password]"/>
</Database>
```

In the above section, the value of the DatabaseMajor key should be name of the database software used. Below are all the possible DatabaseMajor values that NetServer supports. In this case we are using Microsoft SQL Server, so it should be set to MSSQL.

```
All versions of MSSQL
  <add key="DatabaseMajor" value="MSSQL"/>
All versions of Oracle
  <add key="DatabaseMajor" value="Oracle"/>
All versions of Sybase
  <add key="DatabaseMajor" value="Sybase"/>
All versions of DB2
  <add key="DatabaseMajor" value="DB2"/>
```

The DatabaseMinor value should be the version number of the of the database software. In this case it should be 9 since it is the version number for MSSQL 2005.

The value of the Server key should be the name of our database server. The value of the Database key should be the name of our SuperOffice database instance in our database server. Once these settings have been changed, and our configuration file saved, we are ready to begin coding.

As a first example, we will write code that returns a set of contacts that have been registered in the SuperOffice database during the past 30 days.

```
using SuperOffice;
using SuperOffice.CRM.Rows;
using SuperOffice.CRM.Data;
using SuperOffice.Data;
 
//authenticate using a user that is in the SO DB
using (SoSession session = SoSession.Authenticate("SAL0", ""))
{
//create a custom search object.
      ContactRows.CustomSearch query = new
ContactRows.CustomSearch();
 
      //define the date difference we want
      TimeSpan dateDiff = new TimeSpan(30, 0, 0, 0);
      //specify restriction that we want
      query.Restriction =
         
query.TableInfo.Registered.Between(S.Parameter(DateTime.Today.Subtract(dateDiff)),
                                           
S.Parameter(DateTime.Today.AddDays(1)));
      //pass our query to the GetFromCustomSearch method
      ContactRows contactRow =
ContactRows.GetFromCustomSearch(query);
      //we can retrive the values of the properties of the contact
by
      //specifying the index of the array
      DateTime regDate = contactRow[0].Registered;
      string conName = contactRow[0].Name;
}
```

In the above example, the first step is to authenticate using an associate that is registered in SuperOffice database. At this layer in NetServer, the Rows layer, sentry is handled for us. If we did not authenticate, NetServer would throw an SoException - stating that no current user identity exists.

Next, we create a CustomSearch object. A CustomSearch object allows us to specify a restriction - otherwise known as criteria, to get only the data we want returned by the query.

For the restriction, we create a TimeSpan object to assist in defining the criteria. In this case, 30 days. Next we set the restriction to filter the data we are interested in. Always specify the restriction using the TableInfo object accessible from our CustomSearch object.

The TableInfo object contains all the table schema information, like table field names and useful utility methods. In our example, because we created our CustomSearch object through the ContactRows class, the TableInfo property contains the schema information related to the Contact table. So if we have created our CustomSearch object from ProjectRows class, the TableInfo property will then contain the schema information related to the Project table.

For this example, the restriction is all contacts registered in the last 30 days. For the restriction we can use the Between operator. The Between object is accessed through the FieldInfo object, a property of TableInfo that correlates to a column in the table. We use the Registered field object to specify the criteria, and have therefore used the TableInfo.Registered.Between operator to specify the restriction parameters.

All FieldInfo properties accessed through a TableInfo object have all the typical SQL restriction operators, such as: Like, Between, GreaterThan, LessThan, NotIn, etc.  

The Between operator expects two parameters. In our example we have used the S.Parameter class which is used to encapsulate a parameter value. The Parameter class constructor has many overloads so as to accept all intrinsic data types. Once the two parameters are submitted and the restriction is constructed, we use the static ContactRows.GetFromCustomSearch method, which takes a CustomSearch as an parameter, to execute the query and get the results we asked for.

In summary, we used a ContactRows.CustomSearch object for specifying the criteria of a query, and have retrieved the results as a ContactRows object. The reason for using a ContactRows object as the results container is of course because we are requesting many records from the database, and the records requested are those directly from the Contact table. Therefore, the results fit quite nicely into the ContactRows object - a collection of ContactRow objects.

We can then enumerate through the collection and get any of the contact property values from any one of the ContactRow objects in the collection.
