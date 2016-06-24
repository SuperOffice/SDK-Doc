<properties date="2016-05-11"
/>

Testing simple like-clause:

```
SELECT TO.associate_id
FROM CRM5.associate T0
WHERE name LIKE 'ad%';
```

```
        SoConnection _con = ConnectionFactory.GetConnection();
        SoCommand _cmd = _con.CreateCommand();
        _con.Open();

        AssociateTableInfo a = TablesInfo.GetAssociateTableInfo();
        Select select = S.NewSelect();

        select.ReturnFields.Add( a.AssociateId );
        select.Restriction = a.Name.Like( S.Parameter( "ad%" ) );

        _cmd.SqlCommand = select;
        SoDataReader reader = _cmd.ExecuteReader();
        bool hasData = reader.Read();
        // read data to do something useful here...
        
        reader.Close();

        _con.Close();
        _con = null;
        _cmd = null;
```

See Also:

SoConnection SoCommand TablesInfo Select SoDataReader
