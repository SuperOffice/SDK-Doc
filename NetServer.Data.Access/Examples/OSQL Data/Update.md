<properties date="2016-05-11"
/>

You can update fields directly instead of using the Row objects. This is the simplest form of an update-statement.

```
UPDATE associate SET updatedcount=100 WHERE associate_id = 10;
```

```
        SoConnection _con = ConnectionFactory.GetConnection();
        SoCommand _cmd = _con.CreateCommand();
        _con.Open();

        int result = 0;
        SoTransaction trans = _con.BeginTransaction();
        _cmd.Transaction = trans;

        AssociateTableInfo a = TablesInfo.GetAssociateTableInfo();
        Update update = S.NewUpdate();
                
        update.SetPrimaryKey( a.AssociateId );
        update.SetPrimaryKeyValue( S.Parameter( 10 ) );

        update.FieldValuePairs.Add( a.UpdatedCount, S.Parameter(
100 ) );
        
        _cmd.SqlCommand = update;
        result = _cmd.ExecuteNonQuery();
        trans.Commit();
        
        _con.Close();
        _con = null;
        _cmd = null;
```

See Also:

Update SoTransaction TablesInfo
