<properties date="2016-05-11"
/>

Sentry is automatically applied to rows as well as entities now. Attempting to modify a read-only object will throw an exception. Attempting to read a hidden property will return a blank value - reading will **not** throw exceptions.

```
    using SuperOffice;
    using SuperOffice.CRM.Rows;

    string lastname = "Hansen";
    PersonRows persons = PersonRows.GetFromIdxLastname(lastname);
    
    // modifications will fail. Anon user will not be allowed
    foreach(PersonRow person in persons)
    {
        person.DayOfBirth = 0;      // throws exception!
        person.MonthOfBirth = 0;
        person.YearOfBirth = 0;
        person.Save();       
    }
```

See Also:

PersonRow SuperOffice.Exceptions.SoSentryException
