<properties date="2016-06-24"
SortOrder="15"
/>

Changed tables and fields

–      Customer -&gt; Person

–      Cust\_company -&gt; Contact

–      Cust\_email -&gt; Email

–      Built-in rewrite rules using language level 2

Tables and fields have changed names as they are now unified. SearchEngine will try to resolve this using language level 2. You should always use the new tables names and fields when creating new ejScripts, thus using language level 3.

```
#setLanguageLevel 2;
SearchEngine se;
se.addField("customer.display_name"); // Also supports non-existing fields.
se.execute();
while(!se.eof())
{
  print(se.getField("customer.display_name") + "\n");
  se.next();
}
```
