<properties date="2016-05-11"
SortOrder="15"
/>

When creating an appointment using OSQL we would first have to import the necessary namespaces, which are SuperOffice.CRM.Data, SuperOffice.Data, and SuperOffice.Data.SQL. The syntax of this code is similar to that of SQL with the difference being in the keywords. The following example shows how we could create an appointment using OSQL.

```
using SuperOffice.CRM.Data;
using SuperOffice.Data;
using SuperOffice.Data.SQL;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("sam", "sam"))
{
      //Creating DataSets with the Tables of the Database
      AppointmentTableInfo newAppTab =
TablesInfo.GetAppointmentTableInfo();
 
      //Creating an instance of the Insert class
      Insert newInsert = S.NewInsert();
 
      //Inserting the necessary feilds of the Table
      newInsert.FieldValuePairs.Add(newAppTab.AppointmentId,
S.Parameter(Sequence.GetNext(newAppTab)));
      newInsert.FieldValuePairs.Add(newAppTab.AssociateId,
S.Parameter(103));
      newInsert.FieldValuePairs.Add(newAppTab.ContactId,
S.Parameter(20));
      newInsert.FieldValuePairs.Add(newAppTab.PersonId,
S.Parameter(10));
      newInsert.FieldValuePairs.Add(newAppTab.GroupIdx,
S.Parameter(1));                     
newInsert.FieldValuePairs.Add(newAppTab.DoBy, S.Parameter(new
DateTime(2007, 4, 20)));                   
      newInsert.FieldValuePairs.Add(newAppTab.Status,
S.Parameter(SuperOffice.Data.AppointmentStatus.NotStarted));
      newInsert.FieldValuePairs.Add(newAppTab.Done, S.Parameter(new
DateTime(2007, 4, 20)));
      newInsert.FieldValuePairs.Add(newAppTab.TaskIdx,
S.Parameter(10));
      newInsert.FieldValuePairs.Add(newAppTab.Updated,
S.Parameter(new DateTime(2007, 4, 20)));
      newInsert.FieldValuePairs.Add(newAppTab.UpdatedAssociateId,
S.Parameter(103));
      newInsert.FieldValuePairs.Add(newAppTab.UpdatedCount,
S.Parameter(1));
                    
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

 

Since we are creating an Appointment we would need to create an instance of the AppointmentTableInfo with the use of the TablesInfo classes GetAppointmentTableInfo() as shown below.

```
      AppointmentTableInfo newAppTab =
TablesInfo.GetAppointmentTableInfo();
```

 

Next, we create an instance of the Insert class that can be used to update the Appointment table. After the instance has being created, we would be able to use the instance in order to update the fields of the Appointment table.

```
      Insert newInsert = S.NewInsert();
      newInsert.FieldValuePairs.Add(newAppTab.AppointmentId,
S.Parameter(Sequence.GetNext(newAppTab)));
      newInsert.FieldValuePairs.Add(newAppTab.AssociateId,
S.Parameter(103));
```

 

Once the requires fields have being added a database connection will be made with the use of the ConnectionFactory and the values will be inserted in to the database with the ExecuteNonQuery() method.

An important point to remember!

In OSQL there is no method that provides default values it is necessary to insert values to all mandatory columns. If not a runtime exception will occur.

See Also:

[Entity description and example](../../../Developer's%20Guide/Entities/Entities.md) [OSQL Description and Example](../../../Developer's%20Guide/OSQL/OSQL.md)
 

 

 

 
