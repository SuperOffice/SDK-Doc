---
uid: refPluginSentry2
title: ISentryPlugin2 API
---

ISentryPlugin2 API
==================

 

 

### HRESULT [Initialize](SOPLUGINSENTRY2Lib~ISentryPlugin2~Initialize.md)( \[in\] BSTR adoConnectionString, \[in\] BSTR prefix );

Called at startup of the CRM5 or SIX application.

When called from the Windows client, the ADO connection string refers to the SuperOffice OLE-DB provider, and the prefix is blank.

When called from the Web client, the ADO connection string refers to the native OLE-DB provider, and the prefix is usually "CRM5."

You can use this info to read extra data from the database that you might need to compute your security results.

 

### HRESULT [GetTableRights](SOPLUGINSENTRY2Lib~ISentryPlugin2~GetTableRights.md)( long AssocId, long GroupId, 
              long RecordId, BSTR Tablename, 
              SAFEARRAY(VARIANT)\* RecordData, 
              VARIANT\_BOOL\* o\_CanInsertRow, VARIANT\_BOOL\* o\_CanReadRow, VARIANT\_BOOL\* o\_CanUpdateRow, VARIANT\_BOOL\* o\_CanDeleteRow,
              BSTR\* o\_Tooltip);

This function is called after GetRowSecurity, and it does a similar job. However, this function gives you a simpler API with control over Insert and Delete rights as well as Read+Update.

The default rights are all TRUE.

The plugin system reads the values from the parameters after calling your plugin and combines these with the rights defined in the Admin client.

 

**Example**

if recordid &gt; 0 and tablename = "contact" then
          o\_CanUpdateRow = false
          o\_CanDeleteRow = false
end if

 

### HRESULT [GetFieldRights](SOPLUGINSENTRY2Lib~ISentryPlugin2~GetFieldRights.md)( long AssocId, long GroupId, 
              long RecordId, BSTR TableName, 
              SAFEARRAY(VARIANT)\* RecordData, 
              SAFEARRAY(VARIANT)\* o\_FieldRights);

Called once for each table covered by sentry. Only called if you support field-level security.

This function is called after GetFieldSecurity, but is much easier to use. It mimics the sentry-preference system.

You redefine the o\_FieldRights and write your new field rights into it. Use the dictionary names of fields.
The field-rights are formatted as "table.field=right, tooltip"

Rights are defined using bit-flags: 1 = read, 2 = write ---&gt; 3 = read+write

The tooltip is optional.

 

**Example**

if recordid &gt; 0 and tablename = "contact" then
        redim o\_FieldRights(3)
        o\_FieldRights(0) = "contact.name=1,The name is read-only"
        o\_FieldRights(1) = "contact.department=0,The department is hidden"
        o\_FieldRights(2) = "address.city=1"
end if