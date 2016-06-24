<properties date="2016-05-11"
/>

A simple outer-join:

```
SELECT p.Firstname, p.Lastname, a.Associate_Id, a.Name
FROM CRM5.associate a RIGHT OUTER JOIN CRM5.person p 
ON (p.Person_Id = a.Person_Id) 
WHERE (p.Firstname LIKE 'F%' OR p.Lastname LIKE 'E%')
```

```
        SoConnection _con = ConnectionFactory.GetConnection();
        SoCommand _cmd = _con.CreateCommand();
        _con.Open();

        PersonTableInfo p = TablesInfo.GetPersonTableInfo();
        AssociateTableInfo a = TablesInfo.GetAssociateTableInfo();

        Select select = S.NewSelect();

        select.ReturnFields.Add( p.Firstname );
        select.ReturnFields.Add( p.Lastname );
        select.ReturnFields.Add( a.AssociateId );
        select.ReturnFields.Add( a.Name );

        select.JoinRestriction.RightOuterJoin( p.PersonId.Equal(
a.PersonId ), p.Firstname.Like("F%").Or(p.Lastname.Like("E%")) );
        
        _cmd.SqlCommand = select;
        SoDataReader reader = _cmd.ExecuteReader();
        reader.Close();

        _con.Close();
        _con = null;
        _cmd = null;
```

See Also:

SoConnection SoCommand TablesInfo Select SoDataReader
