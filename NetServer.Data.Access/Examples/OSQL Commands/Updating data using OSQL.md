<properties date="2016-05-11"
SortOrder="11"
/>

Update class is used to update data stored at the database. This is much similar to that of the insert operation and others, which have being discussed throughout the section. The example below demonstrates how we may use the Update class in order to modify existing data. [OSQL Data](../OSQL%20Data/OSQL%20Data.md)

 

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
 
      //Creating an Instance of the Update Class
      Update newUpdate = S.NewUpdate();
 
      //Retrive the Contact with ContactID "10" to make the update
      newUpdate.SetPrimaryKey(newConTable.ContactId);
      newUpdate.SetPrimaryKeyValue(S.Parameter(10));
           
      //Making the necessary update                                
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
     
      //Make the Database Update
      myComm.SqlCommand = newUpdate;
      myComm.ExecuteNonQuery();
 
      //Commit the transaction and close the session
      newTrans.Commit();
      myConn.Close();
}

 

Once a connection has being established and objects of the
required tables have being created with the use of the Tables info
class we may begin to construct the update statement. Once an
instance of the Update class is created with the S class we are
required to set the primary key for the update statement.

 
      newUpdate.SetPrimaryKey(newConTable.ContactId);

 
```

The SetPrimaryKey() method will set the primary key for the Update command. However, this will throw an exception if the value is not of FieldInfo type and is a primary key. Now with the below statement we would set the value for the primary key; i.e. the row we needs to updated. The value should be an Int type, if not it would thrown an exception. In the example, we have chosen to update the row where the ContactId is 10, which has being passed with the use of the parameter method available in the S class.

```
      newUpdate.SetPrimaryKeyValue(S.Parameter(10));

 

Next step is to assign the new values for the fields in the
Contact table that is being update. For this we make use of the
FieldValuePairs property exposed in the update class.

 
      NewUpdate.FieldValuePairs.Add(newConTable.ActiveInterests,
S.Parameter(3));      

 

It should be noted that all the values that are retrieved
from the FieldValuePairs property is of database data types such as
Varchar, Int, Boolean etc.

 
```

Finally, we would assign the created Update class instance to the SqlCommand property of the created instance of the SoCommand. Thereafter we would use the ExecuteNonQuary() to execute the SQL command against the connection object.

An important point to remember!

If you try to update the primary key of the table it would produce a exception when the complier reaches the ExecuteNonQuary() method.
