<properties date="2016-05-11"
SortOrder="16"
/>

 

In order to delete data using OSQL we would need to use the Delete Class which is located in the SuperOffice.SQL.Data namespace. The example below shows how we may make use of the Delete command in OSQL.

```
using SuperOffice.CRM.Data;
using SuperOffice.Data;
using SuperOffice.Data.SQL;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAM", "sam"))
{
      if (mySession == null) return;
 
      //Using the Insert Statement in order to Add new Data
      //Establishing a Database Connection
      SoConnection myConn = ConnectionFactory.GetConnection();
 
      //Creating and SoCommand instance and assigning the earlier
created Select statement
      SoCommand myComm = myConn.CreateCommand();
      myConn.Open();
 
      //Begin Transaction
      SoTransaction newTrans = myConn.BeginTransaction();
      myComm.Transaction = newTrans;
 
      //Creating DataSets with the Tables of the Database
      ContactTableInfo newConTable =
TablesInfo.GetContactTableInfo();
 
      //Creating an Instance of the Delete Class
      Delete newDelete = S.NewDelete();
 
      newDelete.SetPrimaryKey(newConTable.ContactId);
      newDelete.SetPrimaryKeyValue(S.Parameter(122));
                 
      myComm.SqlCommand = newDelete;
      myComm.ExecuteNonQuery();
      newTrans.Commit();
                 
      myConn.Close();
}
```

In order for us to use OSQL, we need to import the namespaces SuperOffice.CRM.Data, SuperOffice.Data and SuperOffice.Data.SQL. This has been done with the use of the “using” keyword. Next a session has being created and authenticated after which a connection is establish with database using the GetConnection() method available in the ConnectionFactory class. Then an instance of the SoCommand and SoTransaction is created respectively with the use of methods as CreateCommand() and BeginTransaction(). Next is to assign the transaction to the created command instance.

Then we create a liases of the tables, which we need to delete the data. In the example above, we have created an alias of the Contacts table using the TablesInfo factory class.

Next, we create an instance of the Delete class, which is contained in the SuperOffice.Data namespace. This is similar to that of when creating a Select class.

```
Delete newDelete = S.NewDelete();
```

Now we need to set the primary key for the Delete command. For this we use the statement below.

```
newDelete.SetPrimaryKey(newConTable.ContactId);
```

The SetPrimaryKey() method will set the primary key for the Delete command. However, this will throw an exception if the value is not of FieldInfo type and is a primary key. Now with the below statement we would set the value for the primary key; i.e. the row we need to delete. The value should be an Int type, if not it would thrown an exception.

```
newDelete.SetPrimaryKeyValue(S.Parameter(122));
```

Finally we would assign the created Delete class instance to the SQlCommand property of the created instance of the SoCommand after which would use the ExecuteNonQuary() to execute the SQL command against the connection object.
