<properties date="2016-05-11"
SortOrder="10"
/>

This section describes how we may add a new Contact to the Contact table. In order to insert data using OSQL we would need to make use of the Insert class, which is located in the SuperOffice.Data namespace. The INSERT statement is used in a similar manner in which the above SELECT statement has being used. [OSQL Data](../OSQL%20Data/OSQL%20Data.md)

An important point to remember!

When inserting data in to any table (adding a new row) all the mandatory columns in the database should be filled if not a runtime exception would be thrown.

```
using SuperOffice.CRM.Data;
using SuperOffice.Data;
using SuperOffice.Data.SQL;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("sam", "sam"))
{
      //Creating DataSets with the Tables of the Database
      ContactTableInfo newConTab =
TablesInfo.GetContactTableInfo();
                                      
      //Creating an instance of the Insert class
      Insert newInsert = S.NewInsert();
                   
      //Inserting the necessary feilds of the Table
      newInsert.FieldValuePairs.Add(newConTab.ContactId,
S.Parameter(Sequence.GetNext(newConTab)));
      newInsert.FieldValuePairs.Add(newConTab.Name,
S.Parameter("Will Hammond"));
      newInsert.FieldValuePairs.Add(newConTab.UpdatedCount,S.
Parameter(0));
      newInsert.FieldValuePairs.Add(newConTab.UpdatedAssociateId,
S.Parameter(0));
      newInsert.FieldValuePairs.Add(newConTab.Updated, S.
Parameter(DateTime.Now));
      newInsert.FieldValuePairs.Add(newConTab.BusinessIdx,S.
Parameter(0));
      newInsert.FieldValuePairs.Add(newConTab.CategoryIdx,S.
Parameter(0));
      newInsert.FieldValuePairs.Add(newConTab.CountryId, S.
Parameter(50));
      newInsert.FieldValuePairs.Add(newConTab.Department, S.
Parameter("Parks dept"));
      newInsert.FieldValuePairs.Add(newConTab.OrgNr, S.
Parameter("2547869"));
      newInsert.FieldValuePairs.Add(newConTab.Registered, S.
Parameter(DateTime.Now));
     
newInsert.FieldValuePairs.Add(newConTab.RegisteredAssociateId,
S.Parameter(103));
                                      
      //Establishing a Database Connection
      SoConnection myConn = ConnectionFactory.GetConnection();
 
      //Creating and SoCommand instance and assigning the earlier
created Select statement
      SoCommand myComm = myConn.CreateCommand();
      myConn.Open();
                   
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

In order to insert data we are required to create an instance of the Insert class and then use the fieldValuePairs property of it. It should be noted that it is necessary to insert data in all the mandatory columns of the database. The data has being added using the Add() method exposed in the FieldValuePairs property as shown below.

```
      newInsert.FieldValuePairs.Add(newConTab.ContactId,
S.Parameter(Sequence.GetNext(newConTab)));
      newInsert.FieldValuePairs.Add(newConTab.Name,
S.Parameter("Will Hammond"));
```

 

Special attention should be given when inserting the ContactId. In the above code segment with the use of the Sequence class’s GetNext() method the next ContactId is retrieved and assigned to the ContactId of the inserting record.

Once all the required fields are filled, add a Connection to the database. Then the created insert statement will be assigned to a created instance of the SoCommands’s SqlCommand property. With the ExecuteNonQuery() method of the SoCommand the insert statement will be executed and the data will be added to the tables.

```
      SoCommand myComm = myConn.CreateCommand();
      myConn.Open();                   
      SoTransaction newTrans = myConn.BeginTransaction();
      myComm.Transaction = newTrans;
      myComm.SqlCommand = newInsert;
      myComm.ExecuteNonQuery();
```

 
