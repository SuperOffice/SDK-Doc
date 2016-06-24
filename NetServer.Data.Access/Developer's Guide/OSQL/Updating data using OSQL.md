<properties date="2016-05-11"
SortOrder="15"
/>

 

Update class, which is located in SuperOffice.Data namespace, is used when updating using OSQL statements. This is much similar to that of the insert operation and others. The example below demonstrates how we may use the Update class in order to modify existing data.

 

```
using SuperOffice.CRM.Data;
using SuperOffice.Data;
using SuperOffice.Data.SQL;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAM", "sam"))
{
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
 
      //Creating an Instance of the Update Class
      Update newUpdate = S.NewUpdate();
 
      //Retrive the Contact with ContactID "10" to make the
updation
      newUpdate.SetPrimaryKey(newConTable.ContactId);
      newUpdate.SetPrimaryKeyValue(S.Parameter(10));
           
      //Making the necessary updations  
      NewUpdate.FieldValuePairs.Add(newConTable.ActiveInterests,
S.Parameter(3));
      newUpdate.FieldValuePairs.Add(newConTable.AssociateId,
S.Parameter(5));
      newUpdate.FieldValuePairs.Add(newConTable.BusinessIdx,
S.Parameter(7));
      newUpdate.FieldValuePairs.Add(newConTable.CategoryIdx,
S.Parameter(4));
      newUpdate.FieldValuePairs.Add(newConTable.CountryId,
S.Parameter(4));
      newUpdate.FieldValuePairs.Add(newConTable.Department,
S.Parameter("Testing"));
      newUpdate.FieldValuePairs.Add(newConTable.Name,
S.Parameter("Tester"));
      newUpdate.FieldValuePairs.Add(newConTable.Number1,
S.Parameter("01214578"));
      newUpdate.FieldValuePairs.Add(newConTable.OrgNr,
S.Parameter("7845"));
     
      //Make the Database Updation
      myComm.SqlCommand = newUpdate;
      myComm.ExecuteNonQuery();
 
      //Commit the transaction and close the session
      newTrans.Commit();
      myConn.Close();
}
```

The first few statements of the code are similar to the previous code pieces. As shown above the required namespaces have being retrieved with the use of the “using” keyword after which a database connection has being made with the use of the ConnectionFactory. Next SoCommand and SoTransaction instances are made with the use of CreateCommand() and BeginTransaction() methods respectively. An alias of the required table has also being made with use of the TablesInfo factory class.

Since we have now established a connection and a transaction has being begun, we could create an instance of the Update class as shown below which is located in the SuperOffice.Data namespace.

```
Update newUpdate = S.NewUpdate();
```

Now we need to set the primary key for the Update command. For this, we use the statement below.

```
newUpdate.SetPrimaryKey(newConTable.ContactId);
```

The SetPrimaryKey() method will set the primary key for the Update command. However, this will throw an exception if the value is not a primary key FieldInfo . Now with the below statement we would set the value for the primary key; i.e. the row we want to update. The value should be an Int type, if not it will throw an exception.

```
newUpdate.SetPrimaryKeyValue(S.Parameter(10));
```

Next step is to assign the new values for the fields in the Contact table that is being update. The following statements show how we may update different data types that are found in the Contact table.

```
 
 newUpdate.FieldValuePairs.Add(newConTable.ActiveInterests,
S.Parameter(3));
 newUpdate.FieldValuePairs.Add(newConTable.AssociateId,
S.Parameter(5));
 newUpdate.FieldValuePairs.Add(newConTable.BusinessIdx,
S.Parameter(7));
 newUpdate.FieldValuePairs.Add(newConTable.CategoryIdx,
S.Parameter(4));
 newUpdate.FieldValuePairs.Add(newConTable.CountryId,
S.Parameter(4));
 newUpdate.FieldValuePairs.Add(newConTable.Department,
S.Parameter("Testing"));
 newUpdate.FieldValuePairs.Add(newConTable.Name,
S.Parameter("Tester"));
 newUpdate.FieldValuePairs.Add(newConTable.Number1,
S.Parameter("01214578"));
 newUpdate.FieldValuePairs.Add(newConTable.OrgNr,
S.Parameter("7845"));
```

It should be noted that all the values that are retrieved from the FieldValuePairs property is of database data types such as Varchar, Int, Boolean etc.

Finally, we would assign the created Update class instance to the SQlCommand property of the created instance of the SoCommand. Thereafter we would use the ExecuteNonQuery() to execute the SQL command against the connection object.

An important point to remember!

If the user tries to update the primary key of the table with the use of the Update, such as the ContactID in the case of the example shown above, it would produce a exception when the compiler reaches the ExecuteNonQuery() method.
