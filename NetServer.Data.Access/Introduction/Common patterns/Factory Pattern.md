<properties date="2016-05-11"
SortOrder="9"
/>

Factory is the location in the code at which objects are constructed. The intent of employing this pattern is to isolate the creation of objects from their usage. This allows the new derived types to be introduced into the code with no change to the code that uses the base objects. Use of these patterns makes it possible to interchange the classes without changing the code that uses them even at runtime. However, employment of this pattern incurs the risk of unnecessary complexity and extra work in the initial writing of code.

The NetServer implementation of the Factory patterns consists of an Interface name IPrivateFactory that is located in the SuperOffice.Factory namespace. The Factory hides the details about the settings from the user. Some of the factory patterns exposed through the NetServer include ConnectionFactory that is mostly seen by the user compared to the AddressFactory, which is used mostly within the NetServer code.

Since the user mostly views the ConnectionFactory during the course of the next few sections, Factory patterns will be explained in terms of the ConnectionFactory. Depending on the service mode setup, the ConnectionFactory will give back different objects.

For example, ConnectionFactory.GetConnection returns a SoConnection; this could be configured in a way such that it would return another sub-class of SoConnection.

The Factory pattern requires that you replace our standard class with your own class which means you have to make all are functions plus your own functions, – this means extra bit of work. This makes the Plugin pattern simpler than the Factory pattern because you only have to provide the functionality I your own plugin. Once the sub-class is ready, the user needs to set it up in the config file. When it has been setup the Factory would automatically return the user defined class instead of the standard class, since the Factory looks in the config file to check whether the standard class has being replaces with the user’s own implementation. The config file points to the assembly, which contains the user’s custom class or plugin. For Example:

```
<Factory>
  <DynamicLoad>
    <add key="MyFactory" value="C:\NetServer\Server\Feature
SIX\bin\Debug\ MyFactory.dll" />
  </DynamicLoad>
</Factory>
```

 

Below is an example of the use of the get ConnectionFactory.

```
using SuperOffice.Data;
using SuperOffice.Data.SQL;
 
//Create a DataSet of the Contact table           
ContactTableInfo conTableInfo = TablesInfo.GetContactTableInfo();
 
//SQL Statement
Select newSelect = S.NewSelect();
newSelect.ReturnFields.Add(conTableInfo.Name,
conTableInfo.Department);
newSelect.Restriction = conTableInfo.ContactId.In(S.Parameter(10));
 
using(SuperOffice.SoSession mySession =
SuperOffice.SoSession.Authenticate("SAM", "sam"))
{
      if (mySession == null) return;
     
      //Establish a Connection with the Database
      SoConnection newConn = ConnectionFactory.GetConnection();
      SoCommand newComm = newConn.CreateCommand();
      newComm.SqlCommand = newSelect;
      newConn.Open();
      SoDataReader newReader = newComm.ExecuteReader();
 
      //Retrieve the Date
      while (newReader.Read())
      {
            string conName = newReader.GetString(0);
      }
 
      //Close Reader and Dispose of the Session
      newReader.Close();
      mySession.Dispose();
}
```

 

In order for us to use the ConnectionFactory the SuperOffice.Data, namespace has being called. After a DataSet of the Contact Table have been created using OSQL statements. This will be explained in later stages of the document.

[OSQL description & example](../../Developer's%20Guide/OSQL/OSQL.md)
In order to use the connection we create an instance of the SoConnection using the ConnectionFactory, GetConnection() method.

The “newConn” variable may contain a SoConnection object, or it may contain a sub-class of SoConnection. The factory controls what sort of object is returned. The factory is configured using the app.config file.

 

 
