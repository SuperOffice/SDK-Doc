<properties date="2016-05-11"
SortOrder="9"
/>

 

The final way of updating a person name, position and address is by using OSQL

```
using SuperOffice.CRM.Data;
using SuperOffice.Data.SQL;
using SuperOffice.Data;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
//Establishing a Database Connection
      SoConnection myConn = ConnectionFactory.GetConnection();
 
      //Creating and SoCommand instance
      SoCommand myComm = myConn.CreateCommand();
      myConn.Open();
 
      //Begin Transaction
      SoTransaction newTrans = myConn.BeginTransaction();
      myComm.Transaction = newTrans;
 
      //retrive the person table info
      PersonTableInfo newPerTable =
TablesInfo.GetPersonTableInfo();
      //retrive the address table info
      AddressTableInfo newAddTable =
TablesInfo.GetAddressTableInfo();
 
      //Creating an Instance of the Update Class of the person
table
      Update newPerUpdate = S.NewUpdate();
      //Creating an Instance of the Update Class of the address
table
      Update newAddUpdate = S.NewUpdate();
 
      //Retrive the person with personid "17" to make the updation
      newPerUpdate.SetPrimaryKey(newPerTable.PersonId);
      newPerUpdate.SetPrimaryKeyValue(S.Parameter(17));
      //Retrive the address of the personid "17" to make the
updation.
      //here we assume that we know the address id of the person
      newAddUpdate.SetPrimaryKey(newAddTable.AddressId);
      newAddUpdate.SetPrimaryKeyValue(S.Parameter(9));
 
      //Making the necessary updations in the persons table
      newPerUpdate.FieldValuePairs.Add(newPerTable.Firstname,
S.Parameter("Johan"));
      newPerUpdate.FieldValuePairs.Add(newPerTable.Lastname,
S.Parameter("White"));
      newPerUpdate.FieldValuePairs.Add(newPerTable.PositionIdx,
S.Parameter(1));
      //Making the necessary updations in the address table
      newAddUpdate.FieldValuePairs.Add(newAddTable.Address1,
S.Parameter("No: 73"));
      newAddUpdate.FieldValuePairs.Add(newAddTable.Address2,
S.Parameter("West Gate Street"));
      newAddUpdate.FieldValuePairs.Add(newAddTable.Address3,
S.Parameter("Lexington"));
      newAddUpdate.FieldValuePairs.Add(newAddTable.City,
S.Parameter("Kentucky"));
 
      //create a batch save instance
      BatchSave myBatchSave = new BatchSave();
      myBatchSave.Add(newPerUpdate);
      myBatchSave.Add(newAddUpdate);
 
      //Make the Database Updation
      myComm.SqlCommand = myBatchSave;
      myComm.ExecuteNonQuery();
 
      //Commit the transaction and close the session
      newTrans.Commit();
      myConn.Close();
}
```

 

In the above example we have used OSQL exclusively. If we have to update several tables we need several update instances. If you analyze the above example you can note that we have two update instances for the two tables. We have given the update values separately in the update instances we have created for the two tables. When we have more than one command to be executed against the database we have to use the batch save instance since it can hold many SQL commands.
