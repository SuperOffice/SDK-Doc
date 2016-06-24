<properties date="2016-05-11"
SortOrder="34"
/>

Remember that in a grouped query, all return fields must either be aggregates or GROUP BY

Your query adheres to this, but once the Sentry system modifies it, it may break

You can avoid this by adding the return fields and join yourself

* Sentry will pick up the fields; it only adds when it has to

* But this may change the meaning of your query

IgnoreSentry turns off Sentry, so your query is generated ”untouched”

```
/* DatePartsIgnoreSentry */ 
SELECT T0."do_by", 
  DATEPART(day, T0."do_by") as "dbd" 
FROM  CRM5."APPOINTMENT" T0  
WHERE DATEPART(year, T0."do_by") = 2010
```

 

Now that the SQL is predictable, GROUP BY can be used

**Conclusion: GROUP BY and Sentry don’t mix**

BTW: Any fields added by Sentry are always at the end

Ordinal numbers of “your” fields are predictable but please use fieldInfo or alias name
