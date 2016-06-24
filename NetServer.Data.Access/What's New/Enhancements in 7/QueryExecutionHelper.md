<properties date="2016-05-11"
SortOrder="32"
/>

A utility class that handles connections and commands

Exception-safe cleanup through using clause

Nice clean code (saves a two nesting levels and some try-catch noise)

Many overloads allow customized behaviour

Can also be used for executing non-query commands

```
QueryExecutionHelper.ExecuteNonQuery(myInsert)
```

…and for fetching scalar values

```
int i = .ExecuteTypedScalar<int>(mySql)
```
