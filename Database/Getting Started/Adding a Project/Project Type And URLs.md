---
uid: startTypeAndURL
title: Project Type And URLs
---
<properties 
SortOrder="3"
/>

Let’s find these records in the database.

```SQL
SELECT \* FROM project WHERE name = 'client sdk work'
```

We need to make a note of the values in the field: type\_idx and project\_id.

 

Project Type record
-------------------

To find the project type:

```SQL
SELECT \* FROM projtype WHERE projtype\_id = 1234
```

Replace the 1234 with the type\_idx you made a note of earlier.

Here you will note that we get one record with a text and a tooltip description. The tooltip is displayed when you hover the mouse over the text, and when you are editing the record.

Later we will look at components which do all this hard work of joining different tables for us.

 

URL records
-----------

If you want to put together a list of the URLs that belong to this project, the SQL is this:

```SQL
SELECT \* FROM url WHERE project\_id = 1234 ORDER BY rank
```

There may be several urls all referencing the same project\_id. This is ok. The URLs will be presented in rank order. The first rank will always be 1.