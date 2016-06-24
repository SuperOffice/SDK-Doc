<properties date="2016-05-11"
SortOrder="15"
/>

OSQL, which stands for Objectified SQL, is the SuperOffice Database Interface or the SODBIF. This is similar to SQL syntax with the difference being in the keywords.

[OSQL description and examples](../../../Developer's%20Guide/OSQL/OSQL.md)
SuperOffice.CRM.Data, SuperOffice.Data, SuperOffice.Data.SQL namespaces should be imported in order to make use of OSQL provided by the NetServer. The following example shows how to create a Contact using OSQL.

```
using SuperOffice.CRM.Data;
using SuperOffice.Data;
using SuperOffice.Data.SQL;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("sam", "sam"))
{
      //Creating DataSets with the Tables of the Database
      ContactTableInfo newConTab = TablesInfo.GetContactTableInfo();
                                       
      //Creating an instance of the Insert class
      Insert newInsert = S.NewInsert();
                   
      //Inserting the necessary feilds of the Table
      newInsert.FieldValuePairs.Add(newConTab.ContactId, S.Parameter(Sequence.GetNext(newConTab)));                                   newInsert.FieldValuePairs.Add(newConTab.Name, S.Parameter("EuroCenter"));
      newInsert.FieldValuePairs.Add(newConTab.UpdatedCount,S.
Parameter(0));                                                               newInsert.FieldValuePairs.Add(newConTab.SoundEx,S. Parameter("HUTTETU"));                                                        newInsert.FieldValuePairs.Add(newConTab.UpdatedAssociateId,S. Parameter(0));
      newInsert.FieldValuePairs.Add(newConTab.Updated, S.Parameter(DateTime.Now));
      newInsert.FieldValuePairs.Add(newConTab.BusinessIdx,S. Parameter(0));
      newInsert.FieldValuePairs.Add(newConTab.CategoryIdx,S. Parameter(0));
      newInsert.FieldValuePairs.Add(newConTab.CountryId,  S.Parameter(50));
      newInsert.FieldValuePairs.Add(newConTab.Department,  S.Parameter("Parks dept"));
      newInsert.FieldValuePairs.Add(newConTab.OrgNr,  S.Parameter("2547869"));
      newInsert.FieldValuePairs.Add(newConTab.Registered,  S.Parameter(DateTime.Now));                                                       newInsert.FieldValuePairs.Add(newConTab.RegisteredAssociateId, S.Parameter(103));
                                      
      //Establishing a Database Connection
      SoConnection myConn = ConnectionFactory.GetConnection();
 
      //Creating and SoCommand instance and assigning the earlier created Select statement
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

 

After importing the required namespaces, you need to create a dataset of the required tables. In this, case the Contact Table.

```
      ContactTableInfo newConTab = TablesInfo.GetContactTableInfo();
```

 

Next step is to create an instance of the Insert class that is used to update the Contact table.

```
      Insert newInsert = S.NewInsert();
```

 

After the Insert instance has been created the required field should be added with the Add() method of the FieldValuePairs property exposed in the Insert class. The column name and the value should be passed into the Add() method as shown below.

```
      newInsert.FieldValuePairs.Add(newConTab.ContactId,               S.Parameter(Sequence.GetNext(newConTab)));                       newInsert.FieldValuePairs.Add(newConTab.Name, S.Parameter("EuroCenter"));
```

 

Once all required fields have being added we create an SoConnection instance with the use of the ConnectionFactory, GetConnection() method.

```
      SoConnection myConn = ConnectionFactory.GetConnection();
```

 

Next we create SoCommand and SoTransaction instances as show below and assign the instantiated transaction to the Transaction property of the instantiated SoCommand.

```
      SoCommand myComm = myConn.CreateCommand();
      myConn.Open();
                    
      SoTransaction newTrans = myConn.BeginTransaction();
      myComm.Transaction = newTrans;
```

 

In order to execute the created insert statement we need to assign it to the SqlCommand property of the created SoCommand instance and then Execute the ExecuteNonQuery() method of it.

```
      myComm.SqlCommand = newInsert;
      myComm.ExecuteNonQuery();
```

 

Once the command has being execute with use of the following statements the transaction will be committed and the connection made to the database will be closed.

```
      newTrans.Commit();
      myConn.Close();
```

See Also:

[Entities](../../../Developer's%20Guide/Entities/Entities.md)

[List](../../../Developer's%20Guide/Lists/Lists.md)

[Archives](../../../Developer's%20Guide/Archives/Archives.md)

[Create an Appointment](../Create%20a%20New%20Appointment/Create%20a%20New%20Appointment.md)

[OSQL description and example](../../../Developer's%20Guide/OSQL/OSQL.md)
