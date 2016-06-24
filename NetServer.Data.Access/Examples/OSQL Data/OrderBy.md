<properties date="2016-05-11"
/>

```
SELECT a.Associate_id, a.Name
FROM CRM5.Associate a
WHERE a.Associate_id <=10 AND a.Associate_id >=20
ORDER BY a.Associate_id DESC
```

```
        SoConnection _con = ConnectionFactory.GetConnection();
        SoCommand _cmd = _con.CreateCommand();
        _con.Open();
        AssociateTableInfo a = TablesInfo.GetAssociateTableInfo();
        Select select = S.NewSelect();
        
        select.ReturnFields.Add( a.AssociateId, a.Name );
        select.Restriction = a.AssociateId.Between( S.Parameter( 10
), S.Parameter( 20 ) );
        select.OrderBy.Add( a.AssociateId, OrderBySortType.DESC );
        _cmd.SqlCommand = select;
        SoDataReader reader = _cmd.ExecuteReader();
        int i = 0;
        while( reader.Read() )
        {
            // do something with the data here...
                ++i;
        }
        
        reader.Close();
        _con.Close();
        _con = null;
        _cmd = null;
```

See Also:

SoConnection SoCommand TablesInfo Select SoDataReader
