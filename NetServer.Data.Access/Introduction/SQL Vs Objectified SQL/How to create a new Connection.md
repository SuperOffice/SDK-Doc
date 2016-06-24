<properties date="2016-05-11"
SortOrder="12"
/>

 

Before you write queries, first you must create a new connection. Following example demonstrates how this is done.  This is the basic of SuperOffice Objectified SQL. This is used in the rest of the examples.

```
using SuperOffice.Data;
using SuperOffice.CRM.Data;
using SuperOffice.Data.SQL;
using SuperOffice;
 
 
using(SoSession newSession = SoSession.Authenticate ("SAL0", ""))
{
                              
    //Create a new connection
    SoConnection con = ConnectionFactory.GetConnection ();
    if(con.Equals (null))
    {
        MessageBox.Show ("Connection is not created");
    }
    else
    {
        MessageBox.Show ("Connection is successfully created");
    }
 
    con.Open ();
    //Here you can have all your database queries
    //Once all the queries are made you can close the connection
    con.Close ();
}
```

 

Initially we create a connection through the GetConnection() method of the ConnectionFactory. If the connection is successfully created the new SoConnection instance will be returned. Once a new connection is created you must first open the connection before writing any queries. When you finish with querying you must close the connection just as you do when writing SQL queries. 
