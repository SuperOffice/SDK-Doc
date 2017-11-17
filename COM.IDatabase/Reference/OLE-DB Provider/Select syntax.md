---
uid: Selectsyntax
title: Select syntax
---


SELECT
------

**Field selection:**

select \[table.\]&lt;field&gt;\[,\[table.\]&lt;field&gt;\]\[,…\]/count(\[field\])

 

**Tables with no aliasing:**

from &lt;tablename&gt;\[,&lt;tablename&gt;\]\[,…\]

 

**Where-clause:**

&lt;field&gt; &lt;operator&gt;&lt;field/value&gt; \[logic operator\]

where &lt;operator&gt; <span lang="EN-US" style="FONT-FAMILY: Verdana; COLOR: windowtext" lang="EN-US">can be:</span> *&lt;, &gt;, =,<span> </span>* !=, \*=,<span> </span> &lt;=,<span> </span> &gt;=,<span> </span> in, like,  ( ),

and \[logic operator\]: AND, OR, &&, ||.

 

**Order by:**

\[asc/des\]\[table\]&lt;field&gt;\[,\[asc/des\]\[table\]&lt;field&gt;\]\[,…\]

 

  

For example:
------------

SELECT category\_id, name, registered
FROM category
WHERE updated &gt;= '2007.06.01'

Returns a list of categories which have been modified since 1st of June 2007.