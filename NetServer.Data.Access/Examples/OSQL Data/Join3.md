<properties date="2016-05-11"
/>

TestSelectWithRestrictionBetween3Tables has a join between associate\_id in three different tables, associate, selection and contact:

```
SELECT T0.associate_id, T1.category_idx, T2.name 
FROM CRM5.associate T0, CRM5.contact T1, selection T2 
WHERE (T0.associate_id = T1.associate_id) 
AND(T1.associate_id = T2.associate_id)
```

```
        SoConnection _con = null;
        SoCommand _cmd = null;
        
        _con = ConnectionFactory.GetConnection();
        _cmd = _con.CreateCommand();
        _con.Open();

        AssociateTableInfo a = TablesInfo.GetAssociateTableInfo(); 
    
        ContactTableInfo c = TablesInfo.GetContactTableInfo();
        SelectionTableInfo s = TablesInfo.GetSelectionTableInfo();

        Select select = S.NewSelect();

        // The fields to see
        select.ReturnFields.Add( a.AssociateId, c.CategoryIdx,
s.Name );

        // The restriction
        select.Restriction = a.AssociateId.Equal( c.AssociateId
).And( c.AssociateId.Equal( s.AssociateId ) );

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
