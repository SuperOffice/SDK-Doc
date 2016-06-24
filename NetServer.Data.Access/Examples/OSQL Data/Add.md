<properties date="2016-05-11"
/>

Adding strings
--------------

```
SELECT p.Firstname + " " + p.Lastname
FROM CRM5.person p
WHERE (p.person_id = 16) 
```

```
        SoConnection _con = ConnectionFactory.GetConnection();
        SoCommand _cmd = _con.CreateCommand();
        _con.Open();

        PersonTableInfo person = TablesInfo.GetPersonTableInfo();
        Select select = S.NewSelect();
        Parameter spaceParam = S.Parameter( " " );
        spaceParam.DataType = FieldDataType.dbString;

        select.ReturnFields.Add( S.Math.NewAdd( person.Firstname,
spaceParam, person.Lastname ) );
        select.Restriction = person.PersonId.Equal( S.Parameter( 16
) );

        _cmd.SqlCommand = select;
        SoDataReader reader = _cmd.ExecuteReader();

        reader.Read();
        string result = reader[0].ToString();
        reader.Close();
        Assert.AreEqual( "Geir Grønbeck", result ,
"PersonConcatination failed!" );

        _con.Close();
        _con = null;
        _cmd = null;
```

Adding numbers
--------------

```
SELECT s.Sale_id + s.Associate_id + s.Group_idx + s.contact_id +
s.person_id
FROM CRM5.sale s
WHERE (s.sale_id = 32) 
```

```
        SoConnection _con = ConnectionFactory.GetConnection();
        SoCommand _cmd = _con.CreateCommand();
        _con.Open();

        SaleTableInfo s = TablesInfo.GetSaleTableInfo();
        Select query = S.NewSelect();
        query.ReturnFields.Add( S.Math.NewAdd( s.SaleId,
s.AssociateId, s.GroupIdx, s.ContactId, s.PersonId ) );
        query.Restriction = s.SaleId.Equal( S.Parameter( 32 ) );

        _cmd.SqlCommand = query;
        SoDataReader reader = _cmd.ExecuteReader();

        reader.Read();
        long l = Convert.ToInt32( reader[0] );
        reader.Close();

        _con.Close();
        _con = null;
        _cmd = null;
```

See Also:

SoConnection SoCommand TablesInfo Select SoDataReader
