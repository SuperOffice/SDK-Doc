<properties date="2016-05-11"
SortOrder="13"
/>

 

Here we will show how we may use the SELECT statement of OSQL in order to retrieve a selected amount of rows and columns. The SELECT statement is similar to one that is used in SQL with the main difference is being that the differentiation of keywords.

 

```

using SuperOffice.CRM.Data;
using SuperOffice.Data;
using SuperOffice.Data.SQL;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//Using the Select Statement in order to retrieve Data
      //Creating DataSets with the Tables of the Database
      ContactTableInfo newConTable =
TablesInfo.GetContactTableInfo();
 
      //Retrieving Data from a the tables in to a Instance of the
Select Class
      Select newSelect = S.NewSelect();
      //Choosing the columns that should be retrieved
      newSelect.ReturnFields.Add(newConTable.ContactId,
newConTable.Department, newConTable.Name);
 
      //Restricting the rows that should be returned
      newSelect.Restriction =
newConTable.ContactId.In(S.Parameter(5), S.Parameter(6));
 
      //Ordering the retrieved Data
      newSelect.OrderBy.SortOrder.Add(newConTable.Name,
SuperOffice.Util.OrderBySortType.ASC);
 
      //Establishing a Database Connection
      SoConnection myConn = ConnectionFactory.GetConnection();
 
      //Creating and SoCommand instance and assigning the earlier
created Select statement
      SoCommand myComm = myConn.CreateCommand();
      myComm.SqlCommand = newSelect;
      myConn.Open();
 
      //Loading the Data into the DataReader
      SoDataReader myReader = myComm.ExecuteReader();
 
      //Retrieving the Data from the Reader
      while (myReader.Read())
      {
            int conID = myReader.GetInt32(0);
            string conDept = myReader.GetString(1);
            string conName = myReader.GetString(2);
      }
 
      //Closing the Reader and Disposing the session
      myReader.Close();
}

 
```

In order to write any OSQL statement we have to know about the tables that we are going to pull data from, so for us to get the information on a data table NetServer has provided us the TablesInfo class. Through this class we can pull out information on any table in the SO database to an appropriate table object. In the example the following line will retrieve the contact table information.

```
      ContactTableInfo newConTable =
TablesInfo.GetContactTableInfo();

 
```

Next it is worth m entioning the functionality of the static S class. This class is used to create the objects for SQL types (Select, Insert, Delete), the parameter object and different math objects. In the example we are developing a select statement so in the below line we will create a select object through the S class.

```
      Select newSelect = S.NewSelect();

 
```

Now that you have all the table information you need and you have a select object you can start building your select query. Add the return fields as shown in the example and you can add a restriction and give the restriction parameters through the select class. You can sort your results by using the functionality of SuperOffice.Util.OrderBySortType class. When you have created your query all that is left is to execute this query on the data base.

In order to execute this query you have to have a connection, a command and a reader to hold the data like any other normal SQL statement. The only difference is that all these should be NetServer provided objects like in the above example. Finally when you have executed the query the data will be held in the reader and you can retrieve the data from the reader as shown in the example. The NetServer data reader will be explained in detail later.  [NetServer reader section of this doc and auto generated content](So%20Data%20Reader.md) 

The above example of the select statement is a very simple, so now let us look at a more complex select example.

```
using SuperOffice.CRM.Data;
using SuperOffice.Data;
using SuperOffice.Data.SQL;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//Using the Select Statement in order to retrieve Data
      //Creating DataSets with the Tables of the Database
      ContactTableInfo newConTable =
TablesInfo.GetContactTableInfo();
      PersonTableInfo newPerTable =
TablesInfo.GetPersonTableInfo();
      EmailTableInfo newEMLTable = TablesInfo.GetEmailTableInfo();
      CountryTableInfo newCouTable =
TablesInfo.GetCountryTableInfo();
 
      //Retrieving Data from a the tables in to a Instance of the
Select Class
      Select newSelect = S.NewSelect();
      //Choosing the columns that should be retrieved
      newSelect.ReturnFields.Add(newConTable.ContactId,
newConTable.Department, newConTable.Name, newPerTable.Firstname,
newPerTable.Lastname, newPerTable.PhonePresent,
newEMLTable.EmailAddress, newEMLTable.Description,
newCouTable.EnglishName);
 
      //Restricting the rows that should be returned
      newSelect.Restriction =
newConTable.ContactId.In(S.Parameter(5),
S.Parameter(6)).And(newPerTable.ContactId.LessThan(S.Parameter(9)));
 
       //Joining the multiple tables                            
     
newSelect.JoinRestriction.InnerJoin(newConTable.ContactId.Equal(newPerTable.ContactId));
newSelect.JoinRestriction.LeftOuterJoin(newConTable.ContactId.Equal(newEMLTable.ContactId));
 
newSelect.JoinRestriction.LeftOuterJoin(newConTable.CountryId.Equal(newCouTable.CountryId));
 
      //Ordering the retrieved Data
      newSelect.OrderBy.SortOrder.Add(newConTable.Name,
SuperOffice.Util.OrderBySortType.ASC);
 
      //Establishing a Database Connection
      SoConnection myConn = ConnectionFactory.GetConnection();
 
      //Creating and SoCommand instance and assigning the earlier
created Select statement
      SoCommand myComm = myConn.CreateCommand();
      myComm.SqlCommand = newSelect;
      myConn.Open();
 
      //Loading the Data into the DataReader
      SoDataReader myReader = myComm.ExecuteReader();
 
      //Retrieving the Data from the Reader
      while (myReader.Read())
      {
            string conDept = myReader.GetString(1);
            string conName = myReader.GetString(2);
            string perName = myReader.GetString(3) + " " +
myReader.GetString(4);
            string perPhone = myReader.GetInt16(5).ToString();
            string conEmail = myReader.GetString(6);
            string conEmlDesc = myReader.GetString(7);
            string conCou = myReader.GetString(8);
      }
 
      //Closing the Reader and Disposing the session
      myReader.Close();
}
```

 

The example has been extended to retrieve data from more than one table to show how we can incorporate a Join to the select statement. The select object has all the methods to create all the join statements that exist in SQL. So it is matter of creating the right kind join you want and joining the tables in a logical manner just as in a normal SQL statement. If you have more than one table you can use those tables in the restriction statement as well. When it comes to adding the restrictions you can use any field from any table and you can include a AND statement or you can include an OR statement or you can include both again just as a normal SQL statement. So though you use the NetServer OSQL statements the power of normal SQL is not restricted.

An important point to remember!

It should be stated that OSQL also provides Aggregate functions as well as Mathematical function though we have not looked at them in the above example. These are also available through the Math and FieldExpression properties of the static class, which holds methods like Count(), Distinct(), Max(), Min() and many more. The only thing that restricts what data you can get out of the SuperOffice Database using OSQL is really your knowledge of the database structure, which is a field of study on its own.
