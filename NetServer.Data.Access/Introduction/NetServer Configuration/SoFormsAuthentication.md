---
uid: netserver_configuration_soformsauthentication
title: NetServer SoFormsAuthentication Element
date: 2018-06-06
SortOrder: 89
---
The SoFormsAuthentication group contains configuration settings used to control access and used by the web client FormsAuthentication.

```xml
<SoFormsAuthentication>
  <Pages>
    <add key="LoginUrl" value="~/Security/Login.aspx" />
    <add key="DefaultUrl" value="~/Default.aspx" />
  </Pages>
  <IgnoreList>
    <add key="errorpages" value="~/ErrorPages" />
    <add key="erroraspx" value="error.aspx" />
    <add key="filedownload" value="filedownload.aspx" />
    <add key="jsincludeashx" value="jsinclude.ashx" />
    <add key="cssincludeashx" value="cssinclude.ashx" />
    <add key="federated_loginaspx" value="~/Security/Federated_login.aspx" />
    <add key="api" value="~/api" />
    <add key="swagger" value="~/swagger" />
    <add key="mlapi" value="~/maillink_api" />
  </IgnoreList>
</SoFormsAuthentication>
```

|Name|Description|
|------------|----|
|IgnoreList|List of pages and folders the SoFormsAuthentication should ignore.|
|Pages|List of pages. Should contain a dictionary with the following keys; LoginUrl and DefaultUrl, and optional LogoutUrl and PocketCrmLoginPage.|
