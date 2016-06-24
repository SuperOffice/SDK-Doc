<properties date="2016-06-24"
/>

### Script-based Selections

Scriptbased selections give you the possibilities above the standard selection functionality. You may for instance use a SearchEngine to populate your search results.
The structure of a scriptbased selection:

When you create a new selection you need to choose a Source Table. The ids returned from the method getIds are assumed to be of this table. When you have chosen the Source Table and pressed Continue, the next screen displays the barebone of the selection.

```
#setLanguageLevel 2;

Integer execute()
{
  Integer count = 0;
  return count;
}

Integer[] getIds()
{
  Integer[] ids;
  return ids;
}
```

The script consists of two functions; `execute` and `getIds`. Place your search engine code in the `execute` function, and the code to retrieve the ids in the `getIds` function.
**Example:**

```
#setLanguageLevel 2;
// Retrieve all Companies which begins with SuperOffice.

Integer[] ids;
Integer execute()
{
  Integer count = 0;
  SearchEngine se;
  se.addField("contact.contact_id");
  se.addCriteria("contact.name", "OperatorBeginsWith", "SuperOffice", "OperatorAnd", 0);
  for (se.select(); !se.eof(); se.next())
  {
     ids.pushBack(se.getField(0).toInteger());
  }


  return ids.length();
}

Integer[] getIds()
{
  return ids;
}
```

A selection may be accessed using an URL. This url will be in the form of: `domain/scripts/ticket.exe?action=searchTable&table=<person>&selectionIncludeId=<incId>`.
&lt;person&gt; and &lt;incId&gt; are to be replaced with the table in question and the includeId of the selection.
