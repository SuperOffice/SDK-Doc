---
uid: TypicalUseofADO
title: Typical Use of ADO
---


1. Create a connection
2. Open the connection to the database.
3. Execute a command on the connection.
4. Read the result set
5. Close everything

Dim gConn as ADODB.Connection
Set gConn = new Connection
gConn.Open "Provider=SODBP32.SOProvider.1;
            Data Source=CRM5;
            Location=ODBC:mySource",
            "name", "pass"
Dim rs as Recordset
Set rs = gConn.Execute("SELECT \* FROM associate WHERE name = " &
   "'" & username & "'")
Dim msg As String
While not rs.EOF
   msg = msg & rs.Fields("name").Value & vbCrLf
   rs.MoveNext
Wend
Set rs = Nothing
MsgBox  msg, , "Associate names"

The connection is created, but it does not connect until you have opened it.

You must specify the OLE-DB Provider you want to use when opening the connection. ADO will load the necessary drivers for you. The SuperOffice driver is named “SODBP32.SOProvider.1” while the MS-SQL Server 2000 driver is called “SQLOLEDB”

There is a useful list of connection strings for the real database providers at the web site <http://www.connectionstrings.com/>

The SuperOffice provider uses two parameters plus the username and password:

Data Source is set to the Prefix used (this is usually “CRM5”). It is (confusingly) not the ODBC data source name.

Location is set to the data-path setting from the SUPEROF5.INI file. In other words, it is the path to the c-tree database or the ODBC data source name with “ODBC:” written in front of it.

Once the connection has been opened, we can execute a command on it. The Execute method takes a SQL string as a parameter, and returns a record set.

The SuperOffice provider always returns disconnected recordsets, so you will find that code blocks on the Execute statement until the command has finished executing. This makes progress indicators and the like hard to maintain while the database is doing work.

The returned recordset is EOF (End of File) true if there are no records in the result, so we should always use a WHILE loop to read the result.
While reading the result, we must remember to move the current-record pointer to the next record. If we forget to move to the next record, then the loop will keep reading the same data, and it will repeat forever.

We use the Fields collection to get the values of fields.either by offset or by name. Both  rs.Fields("name") and rs.Fields(1) work.