<properties date="2016-05-11"
SortOrder="12"
/>

In order to delete data using OSQL we would need to use the Delete Class. The example below shows how we may make use of the Delete command in OSQL.  [OSQL Data](../OSQL%20Data/OSQL%20Data.md) 

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

Similar to the above we would first need to create an instance of the Delete class after we set the primary key of the Delete command as shown below.

```
      newDelete.SetPrimaryKey(newConTable.ContactId);

 
```

The SetPrimaryKey() method will set the primary key for the Delete command. However, this will throw an exception if the value is not of FieldInfo type and is a primary key. Now with the below statement we would set the value for the primary key; i.e. the row we need to delete. The value should be an Int type, if not it would thrown an exception. The ContactId where it is equal to 122 is deleted in the case of the example as it has being passed in to the Delete class with the use of the Parameter’s method of the S class.

```
      newDelete.SetPrimaryKeyValue(S.Parameter(122));

 
```

In order to execute the Delete command we would assign the created Delete class instance to the SQlCommand property of the created instance of the SoCommand after which would use the ExecuteNonQuary() to execute the SQL command against the connection object.

See Also:

[OSQL Data](../OSQL%20Data/OSQL%20Data.md)
