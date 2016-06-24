<properties date="2016-05-11"
/>

A simple join on the associate\_field in the tables associate and contact:

```
SELECT T0.associate_id, T1.category_idx, T0.lastlogin,
T0.lastlogout 
FROM CRM5.associate T0, CRM5.contact T1 
WHERE (T0.associate_id = T1.associate_id) 
AND(T0.associate_id = 5)
```

```
        SoConnection _con = null;
        SoCommand _cmd = null;
        
        _con = ConnectionFactory.GetConnection();
        _cmd = _con.CreateCommand();
        _con.Open();

        AssociateTableInfo a = TablesInfo.GetAssociateTableInfo(); 
    
        ContactTableInfo c = TablesInfo.GetContactTableInfo();

        Select select = S.NewSelect();

        // The fields to see
        select.ReturnFields.Add( a.AssociateId, c.CategoryIdx,
a.Lastlogin, a.Lastlogout );
        select.Restriction = a.AssociateId.Equal( c.AssociateId
).And( a.AssociateId.Equal( S.Parameter( 5 ) ) );

        _cmd.SqlCommand = select;
        SoDataReader reader = _cmd.ExecuteReader();
        bool hasData = reader.Read();
        reader.Close();

        Assert.IsTrue( hasData, "There are data in the associate
table" );

        _con.Close();
        _con = null;
        _cmd = null;
```

See Also:

SoConnection SoCommand TablesInfo Select SoDataReader
