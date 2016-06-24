<properties date="2016-05-11"
SortOrder="16"
/>

 

You may need to use Joins in database queries very often. The example below shows how the following SQL query is converted in to SuperOffice Objectified SQL.

SELECT     COUNT(d.appointment\_id)

FROM         CRM5.document d

RIGHT OUTER JOIN CRM5.appointment a ON a.appointment\_id = d.appointment\_id RIGHT OUTER JOIN CRM5.text t ON d.text\_id = t.text\_id

 

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
       
    AppointmentTableInfo a = TablesInfo.GetAppointmentTableInfo ();
    TextTableInfo t = TablesInfo.GetTextTableInfo ();
    DocumentTableInfo d = TablesInfo.GetDocumentTableInfo ();
 
    Select select = S.NewSelect ();
 
    select.ReturnFields.Add
(S.FieldExpression.Count(d.AppointmentId));
 
    //a Right Outer Join d where a.AppointmentId = d.AppointmentId
    select.JoinRestriction.RightOuterJoin (a.AppointmentId.Equal
(d.AppointmentId));
 
    //d Right Outer Join t where d.TextId = t.TextId
    select.JoinRestriction.RightOuterJoin (d.TextId.Equal
(t.TextId));
 
    command.SqlCommand = select;
    SoDataReader reader = command.ExecuteReader ();
 
    while(reader.Read ())
        listBox1.Items.Add (reader [0].ToString ());
 
    reader.Close ();
    connection.Close ();
 
}
```

 

You can add joins to the JoinRestriction property of the query. In the above example we have used the RightOuterJoin. Similarly all the other types of Joins can be added to the query.  
