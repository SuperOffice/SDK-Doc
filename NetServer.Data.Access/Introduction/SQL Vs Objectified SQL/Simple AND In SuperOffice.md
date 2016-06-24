<properties date="2016-05-11"
SortOrder="13"
/>

 

When writing queries you might have several conditions joined by simple and-clause. The example below demonstrates how to write the following SQL query in SuperOffice Objectified SQL.

```
SELECT a.Name FROM Associate a WHERE a.AssociateId > 10 AND
a.AssociateId<100
```

 

Let’s see how this SQL statement is written in SuperOffice Objectified SQL

```
using SuperOffice.Data;
using SuperOffice.CRM.Data;
using SuperOffice.Data.SQL;
using SuperOffice;
 
using(SoSession newSession = SoSession.Authenticate ("SAL0", ""))
{
    //Create a new connection
    SoConnection _con = null;
    SoCommand _cmd = null;
 
    _con = ConnectionFactory.GetConnection ();
    _cmd = _con.CreateCommand ();
    _con.Open ();
 
    AssociateTableInfo associateInfo =
TablesInfo.GetAssociateTableInfo ();
    //Create a Select
    Select select = S.NewSelect ();
    //Setting the fields need to be returned
    select.ReturnFields.Add (associateInfo.Name);
    //setting the restrictions.
    select.Restriction = associateInfo.AssociateId.GreaterThan
(S.Parameter (10)).And (associateInfo.AssociateId.LessThan
(S.Parameter (100)));
 
    _cmd.SqlCommand = select;
    //Create a Reader
    SoDataReader reader = _cmd.ExecuteReader ();
 
    //Read Data
    while(reader.Read ())
    {
        listBox1.Items.Add (reader [0].ToString ());
    }
}       
```

 

In the above example we have first created a connection by following the procedure explained earlier. Once the connection is opened you can make the query as done above. You have to create an instance of the Select class which holds the query. By adding the Return fields it is possible to set the fields that need to be returned. The restrictions can be set by using the Restriction property of Select. Once the query is built you can assign it to the SqlCommand property of the SoCommand instance. Once the SoCommand is executed using the ExeucteReader() method it returns an instance of type SoDataReader which can be used to read the retrieved data. 

An Important Point to Remember!

 It is compulsory to add ReturnFields to the query or an exception will be thrown. 
