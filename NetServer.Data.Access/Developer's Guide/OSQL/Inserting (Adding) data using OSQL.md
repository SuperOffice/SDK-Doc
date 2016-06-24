<properties date="2016-05-11"
SortOrder="14"
/>

 

In order to insert data using OSQL we would need to make use of the Insert class, which is located in the SuperOffice.Data namespace. The INSERT statement is used in a similar manner in which the above SELECT statement has being used. The example below demonstrates how we may insert data using the INSERT statement.

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
 
      //Creating DataSets with the Tables of the Database
      RedLetterDayTableInfo newRedLetDatTab =
TablesInfo.GetRedLetterDayTableInfo();
 
      //Setting the Required Date
      DateTime baseTime = new DateTime(2007, 2, 4);
                  
      //Creating an instance of the Insert class
      Insert newInsert = S.NewInsert();
 
      //Inserting the necessary feilds of the Table
      newInsert.FieldValuePairs.Add(newRedLetDatTab.RedletterdayId,
S.Parameter(Sequence.GetNext(newRedLetDatTab)));
      newInsert.FieldValuePairs.Add(newRedLetDatTab.Reddate,
S.Parameter(baseTime));
      newInsert.FieldValuePairs.Add(newRedLetDatTab.CountryId,
S.Parameter(1));
      newInsert.FieldValuePairs.Add(newRedLetDatTab.Reds,
S.Parameter(0));
      newInsert.FieldValuePairs.Add(newRedLetDatTab.Colored,
S.Parameter(0));
      newInsert.FieldValuePairs.Add(newRedLetDatTab.Color,
S.Parameter(0));
      newInsert.FieldValuePairs.Add(newRedLetDatTab.Text,
S.Parameter("Testers day"));
      newInsert.FieldValuePairs.Add(newRedLetDatTab.UpdatedCount,
S.Parameter(0));
                   
      //Begin Transaction
      SoTransaction newTrans = myConn.BeginTransaction();
      myComm.Transaction = newTrans;
                   
      //Executing the Insert Statement
      myComm.SqlCommand = newInsert;
      myComm.ExecuteNonQuery();
 
      //Committing the transaction and clossing the session
      newTrans.Commit();
      myConn.Close();
}
```

Since the Insert class is located in the SuperOffice.Data namespace we import it is using the “using” statement. The next step is to establish a database connection using the ConnectionFactory. A SoCommand instance has been made with the use of the CreateCommand() method. An alias for the RedLetterDay table is created using the TablesInfo class.

```
 
RedLetterDayTableInfo newRedLetDatTab =
TablesInfo.GetRedLetterDayTableInfo();
```

An instance of the INSERT statement has being created next which will be used through the example in order to insert the data into the table.

Insert newInsert = S.NewInsert();

To insert values the FieldValuePairs property of the Insert class is used as below.

```
 
newInsert.FieldValuePairs.Add(newRedLetDatTab.RedletterdayId,  
                             
S.Parameter(Sequence.GetNext(newRedLetDatTab)));
newInsert.FieldValuePairs.Add(newRedLetDatTab.Reddate,
S.Parameter(baseTime)); 
```

After all the data has being inserted, the next step is to begin a transaction so that the Database table will be updated without any inconsistency. For that an instance of the SoTransaction class is created and the transaction is started with the use of the BeginTransaction() method found in the created instance of the SoConnection. The created SoTransaction instance is then assigned to the Transaction property of the created instance of the SoCommand. The created Insert statement is then assigned to SqlCommand property of the SoCommand instance and the command is executed with the ExecuteNonQuery() method found in the SoCommand instance.

```
 
//Begin Transaction
SoTransaction newTrans = myConn.BeginTransaction();
myComm.Transaction = newTrans;
                   
//Executing the Insert Statement
myComm.SqlCommand = newInsert;
myComm.ExecuteNonQuery();
```

Finally, in order to complete the above transaction the Commit() method is used which is found in the created instance of the SoTransaction. The last statement is to close the close the established SoConnection with the use of the Close() method.
