---
uid: guideOLEDBProvider
title: guideOLE DB Provider
---

### OLE DB Provider

**Library**:        SODBP32 1.0 (Provider)

**Defined in**:    sodbp32.dll

ViewComponents.dll – implements database access through SODBIF

SOSmallParser.dll – SQL parser component

SuperOffice supports different databases and as a result of this, we have our own database interface called SODBIF, defined in SODBIF32.dll. The OLE DB Provider will work as the main data link between SODBIF and a consumer, delivering data based on the tables and views in SODBIF. The OLE DB Provider is also able to add, update and delete records. All data is delivered from the OLE DB Provider as a recordset, and write-protected records are delivered as read-only.

To connect to a data source programmatically: 

C-tree database (see under Reference guide; C-tree is rather stringent with regard to SQL queries):

```
Set objConn = WScript.CreateObject("ADODB.Connection")
objConn.Open "Provider=SODBP32.SOProvider.1;Data Source=CRM5;Location=c:\\so\_arc\\Data\\SuperOf5.dat", "&lt;USERNAME&gt;", "&lt;PASSWORD&gt;"*
```

Or simply use the SuperOfficeDB.Database.GetADOConnection

SQL database:

```
Set objConn = WScript.CreateObject("ADODB.Connection")
objConn.Open "Provider=SODBP32.SOProvider.1;Data Source=CRM5;Location=&lt;DATASOURCE&gt;", "&lt;USERNAME&gt;", "&lt;PASSWORD&gt;"*
```

Or simply use the SuperOfficeDB.Database.GetADOConnection

**Selecting data**

In order to deliver data, the following information must be sent to the OLE DB Provider in the connection string: username, password, prefix (Oracle table owner), database name (filename).

DBSearch will be used to create SODBIF recordsets. Data will be fetched as DBFirstRow/DBNextRow. If the query is not accepted by the customer database, an error message will be captured by the OLE DB Provider and forwarded to the consumer. All error messages will be in English.

**Altering data**

The OLE DB Provider supports SQL syntax for insert/update/delete. Record locking during these operations will be analogous to SODBIF locking. Altering data through recordsets is not supported.

**Threading**

Since SODBIF does not work with multiple threads, the OLE DB Provider is single-threaded.

**Data security
**The OLE DB Provider only supports SuperOffice sentry in views.