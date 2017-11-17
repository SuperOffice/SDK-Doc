---
uid: refPluginSentryAPI
title: ISentryPlugin API
---

ISentryPlugin
=============

Your plug-in must implement this interface. This is what the sentry system inside CRM5 is expecting to find. You can find this interface defined in the SentryPluginInterface.tlb file. 

The IDL definition looks like this.

### VB: [GetTableList](SOPLUGINSENTRY2Lib~ISentryPlugin~GetTableList.md)(theTableNames() as Variant)
C++: HRESULT GetTableList (SAFEARRAY\*\* TableNames);

This function is called at the start to figure out what tables you are interested in filtering.
You should redimension the input parameter, or assign a new array to the theTableNames parameter.
Table names are as you find them in the dictionary.

You must return a list of tables your plug-in wants to filter. Table names should be all-lower-case.

Example: contact, project, person, sale

 

### VB: [GetProviderDetails](SOPLUGINSENTRY2Lib~ISentryPlugin~GetProviderDetails.md)(ByVal TableName As String, SupportFieldLevelSecurity As Boolean, NeedFullDataToWork As Boolean)
C++: HRESULT GetProviderDetails(BSTR TableName, BOOL\* SupportFieldLevelSecurity, BOOL\* NeedFullDataToWork)

Here you can inform CRM5 of the amount of data your plug-in needs to work, and whether you filter fields in the table or just a whole row at a time.

SupportFieldLevelSecurity: setting this to True will cause your plug-in's GetFieldSecurity and GetFieldRights to be called, allowing you to alter individual field permissions.

NeedFullDataToWork: setting this to True causes the sentry system to load the entire record before calling the GetRowSecurity function. This may trigger a separate database read, and can have a big performance cost.

This function is called once for each table you specify in GetTableList().

You set the SupportFieldLevelSecurity and NeedFullDataToWork parameters to suit your needs.

 

### VB: GetRowSecurity(ByVal AssocId As Long, ByVal GroupId As Long, ByVal RecordId As Long, ByVal TableName As String,
RecordData() As Variant, o\_IsReadOk As Boolean, o\_IsWriteOk As Boolean, o\_ToolTip As String)

### C++: HRESULT GetRowSecurity(long AssocId, long GroupId, long RecordId, BSTR TableName,
VARIANTARRAY\*\* RecordData, BOOL\* o\_IsReadOk, BOOL\* o\_IsWriteOk, BSTR\* o\_ToolTip)

This function is called by CRM5 when it needs you to filter a record. AssocId and GroupId are set to the currently logged in user's associate id and usergroup id. They are NOT set to the associate and group id that owns the record. You have to find that out yourself.

For example, for a contact record, the associate id is in the seventh field in the record, so

dim owner\_id as long
owner\_id = RecordData(6)     ' Our Contact

The function ISentryPlugin2.GetTableRights gives you better control over the rights than this function, so you can safely leave this function empty if you implement ISentryPlugin2.

Don't implement anything here.

 

### VB: GetFieldSecurity(ByVal AssocId As Long, ByVal GroupId As Long, ByVal RecordId As Long, ByVal TableName As String,
RecordData() As Variant, o\_CanReadFields() As Long, o\_CanWriteFields() As Long, o\_ToolTip As String)

### C++: HRESULT GetFieldSecurity(long  AssocId, long GroupId, long RecordId, BSTR TableName,
VARIANTARRAY\*\* RecordData, long\*\* o\_CanReadFields, long\*\* o\_CanWriteFields, BSTR\* o\_ToolTip)

The function ISentryPlugin2.GetFieldRights gives you better control over the rights than this function, so you can safely leave this function empty if you implement ISentryPlugin2.

This function is too hard to use without getting something wrong.

Don't implement anything here.