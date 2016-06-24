<properties date="2016-05-11"
SortOrder="12"
/>

 

One of the main advantages compared to the HDB layer is that when using the HDB layer you would have to use several different HDB row for most of the results where as when using OSQL you may create your own customized rows.

A better way of getting the required information with least amount of calls to the database is to construct a SELECT statement using OSQL.

In order for us to use OSQL, the following three namespaces are necessary. However, additional namespaces may be required based on your requirements.

* SuperOffice.CRM.Data

* SuperOffice.Data

* SuperOffice.Data.SQL

The following examples show how you can perform CRUD operations using OSQL.
