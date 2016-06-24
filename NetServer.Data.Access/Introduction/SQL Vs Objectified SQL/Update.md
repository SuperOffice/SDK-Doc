<properties date="2016-05-11"
SortOrder="18"
/>

 

So far we have been expressing how data is retrieved from the database. In this section we will explain how data is updated. The example below demonstrates how to write the following SQL query in SuperOffice Objectified SQL.

UPDATE    CRM5.associate

SET              name = 'Test Update'

WHERE     (associate\_id = 103)

 

```
using SuperOffice.Data;
using SuperOffice.CRM.Data;
using SuperOffice.Data.SQL;
using SuperOffice;
 
using(SoSession newSession = SoSession.Authenticate ("SAL0", ""))
{
 
    //Create a new connection
    SoConnection connection = ConnectionFactory.GetConnection ();
    SoCommand command = connection.CreateCommand ();
 
    connection.Open ();
    //Create a transaction
    SoTransaction Trans = connection.BeginTransaction ();
    command.Transaction = Trans;
 
    AssociateTableInfo a = TablesInfo.GetAssociateTableInfo ();
    Update update = S.NewUpdate ();
 
    //Set the row that needs to be updated
    update.SetPrimaryKey (a.AssociateId);
    update.SetPrimaryKeyValue (S.Parameter (103));
 
    update.FieldValuePairs.Add (a.Name, S.Parameter ("Test
Update"));
 
    command.SqlCommand = update;
    command.ExecuteNonQuery ();
    //Commit the transaction. The database will not be updated till
then.
    Trans.Commit ();
                       
}
```

 

After opening the connection we have to create an instance of SoTransaction. Instead of Select here we create an Update object. You have to specify the table and the primary key that will be updated by using the SetPrimaryKey() method. By providing the value of that primary key we can select the exact row. Once the field and the value that is being updated are entered you can set the SqlCommand property of the SoCommand instance to the newly created Update instance. Unless you commit the Transaction the database will not be updated.
