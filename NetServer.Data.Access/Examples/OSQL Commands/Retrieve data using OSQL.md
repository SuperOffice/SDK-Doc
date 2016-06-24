<properties date="2016-05-11"
SortOrder="9"
/>

The following example shows how we may use the SELECT statement of OSQL in order to retrieve a selected amount of rows and columns. The example shows how we may retrieve Contacts information. [OSQL Data](../OSQL%20Data/OSQL%20Data.md)

```
using SuperOffice.CRM.Data;
using SuperOffice.Data;
using SuperOffice.Data.SQL;
using SuperOffice;
 
//Using the Select Statement in order to retrieve Data
//Creating DataSets with the Tables of the Database
ContactTableInfo newConTable = TablesInfo.GetContactTableInfo();
PersonTableInfo newPerTable = TablesInfo.GetPersonTableInfo();
EmailTableInfo newEMLTable = TablesInfo.GetEmailTableInfo();
CountryTableInfo newCouTable = TablesInfo.GetCountryTableInfo();
               
//Retrieving Data from a the tables in to a Instance of the Select
Class
Select newSelect = S.NewSelect();
//Choosing the columns that should be retrieved
newSelect.ReturnFields.Add(newConTable.ContactId,
newConTable.Department, newConTable.Name,                          
                 newPerTable.Firstname, newPerTable.Lastname,
newPerTable.PhonePresent,                                          
  newEMLTable.EmailAddress, newEMLTable.Description,
newCouTable.EnglishName);
 
//Restricting the rows that should be returned
newSelect.Restriction =
newConTable.ContactId.In(S.Parameter(5),S.Parameter(6)).And        
                                  
(newPerTable.ContactId.LessThan(S.Parameter(9)));
               
//Joining the multiple tables
newSelect.JoinRestriction.InnerJoin(newConTable.ContactId.Equal(newPerTable.ContactId));
newSelect.JoinRestriction.LeftOuterJoin(newConTable.ContactId.Equal(newEMLTable.ContactId));
newSelect.JoinRestriction.LeftOuterJoin(newConTable.CountryId.Equal(newCouTable.CountryId));
              
//Ordering the retrieved Data
newSelect.OrderBy.SortOrder.Add(newConTable.Name,
SuperOffice.Util.OrderBySortType.ASC);
 
using(SoSession mySession = SoSession.Authenticate("SAM", "sam"))
{
      if (mySession == null) return;
 
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
      mySession.Dispose(); 
}

 

With the execution of the above code, the SoReader will
return the Columns that were retrieved with use of the Select
statement.

 
      ContactTableInfo newConTable =
TablesInfo.GetContactTableInfo();
      PersonTableInfo newPerTable =
TablesInfo.GetPersonTableInfo();
      EmailTableInfo newEMLTable = TablesInfo.GetEmailTableInfo();
      CountryTableInfo newCouTable =
TablesInfo.GetCountryTableInfo();

 

Contact, Person, Email and Country tables of the database
have being used by the Select statement in order to retrieve the
data required. With the use of the above statement, objects of
these tables have being created.

 

In order to retrieve that data we make use of the Select
class.

 
      Select newSelect = S.NewSelect();

 
```

With the use of the ReturnFields property of the Select class, we specify the columns that we intend to retrieve from the Select statement.

```
      newSelect.ReturnFields.Add(newConTable.ContactId,
newConTable.Department, newConTable.Name,                          
                 newPerTable.Firstname, newPerTable.Lastname,
newPerTable.PhonePresent,                                          
  newEMLTable.EmailAddress, newEMLTable.Description,
newCouTable.EnglishName);

 
```

In order to restrict the number of rows returned by the query we make use of the Restriction property exposed by the Select class. This statement is similar to that of a “where” class in SQL.

```
      newSelect.Restriction =
newConTable.ContactId.In(S.Parameter(5),S.Parameter(6)).And        
                                  
(newPerTable.ContactId.LessThan(S.Parameter(9)));

 

Since we have used multiple tables to retrieve the data we
are now required to join these tables. This can be with the use of
the Join restriction property as shown below.

 
     
newSelect.JoinRestriction.InnerJoin(newConTable.ContactId.Equal(newPerTable.ContactId));
     
newSelect.JoinRestriction.LeftOuterJoin(newConTable.ContactId.Equal(newEMLTable.ContactId));
     
newSelect.JoinRestriction.LeftOuterJoin(newConTable.CountryId.Equal(newCouTable.CountryId));
```

 

The JoinRestriction property consist of methods that are capable of acting as inner join, left outer join etc in SQL term. For this, we need to have knowledge about the database structure since we would require the knowledge of how the tables are connected. Here we have used the ContactId of the Contact table to join I to the Person, email and Country tables as shown below.

The OrderBy statement at the end is used Sort the returned rows in the ascending order of the Contact’s Name.

Once the select statement is complete, we may use the SoDataReader in order to retrieve the data returned from the Select statement.
