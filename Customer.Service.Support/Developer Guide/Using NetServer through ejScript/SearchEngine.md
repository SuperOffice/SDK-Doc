<properties date="2016-06-24"
SortOrder="14"
/>

Read from all SuperOffice 7 tables.

–      Governed by Sentry

–      No field functions, grouping or having

–      Possible to bypass NetServer

Write to SuperOffice 7 tables

–      Not governed by Sentry

–      Generally not recommended

 

Example: Bypassing NetServer

Read:

```
#setLanguageLevel 3;
SearchEngine se;
//se.bypassNetServer(true); // reg_id=235 must be set to 1
se.addField("person.firstname");
//se.setGroup(true);
se.execute();
while(!se.eof())
{
  print(se.getField("person.firstname") + "\n");
  se.next();
}
 
Write:
```

Writes directly to the database, no sentry involved.

You should use business objects through Customer Service or NetServer whenever possible.
