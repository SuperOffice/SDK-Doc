<properties date="2016-05-11"
/>

```
    using SuperOffice;
    using SuperOffice.CRM.Rows;
    PersonRows personRows =
PersonRows.GetFromIdxFirstname("Donald");
    Assert.IsTrue( personRows.Count > 0, "There are persons with
first name Donald" );

    foreach (PersonRow personRow in personRows)
    {
        Assert.AreEqual( "Donald", personRow.Firstname, "The first
name is Donald" );
    }
```

```
    using SuperOffice;
    using SuperOffice.CRM.Rows;
    PersonRows personRows = new PersonRows.IdxContactId(10);
    Assert.IsTrue( personRows != null, "A collection of persons
where returned" );
    Assert.IsTrue( personRows.Count == 2, "There are persons 2 with
contact #10" );

    foreach (PersonRow personRow in personRows)
    {
        Assert.AreEqual( 10, personRow.ContactId, "Contact ID for
the person is 10" );
    }
```

Custom search allows you to specify a general query and get a row collection back.

```
    using SuperOffice;
    using SuperOffice.Data;
    using SuperOffice.CRM.Rows;
                        PersonRows.CustomSearch queryPersons = new
PersonRows.CustomSearch();
                        queryPersons.Restriction =
queryPersons.TableInfo.Lastname.Like(S.Parameter("a%"));

                        PersonRows somePersons =
PersonRows.GetFromCustomSearch( queryPersons );
                        foreach (PersonRow person in somePersons)
                        {
                            long id = person.ContactId;
                            string firstname = person.Firstname;
                            string lastname = person.Lastname;
                        }
```

See Also:

PersonRows PersonRow
