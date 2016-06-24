<properties date="2016-05-11"
SortOrder="9"
/>

The namespace SuperOffice.CRM.Security exposes the following classes, which can be used in caching which is related to security issue of the NetServer and its Data.

* DataRightsCache – The Cache holds different data rights on different tables used by the user.

* FunctionRightsCache – The cache stores information about summary of the Function rights that the user posses.

* OwnerContactCache – As the name implies the cache consists of information about the owner of the contact. The cache holds information on Company cards defined in SOAdmin to be the Contact owner i.e. it holds information on Contacts who may own Associates.

* RefCountsPermissionCache – This numbered allocation system holds information on all tables that generate numbers such as company number, project number and contact number and so on.

* SentryPreferanceCache – The cache holds information about the user’s sentry preferences.

* UserGroupCahce – The cache holds information about the user groups (Associates).

In order for us to use the cache, we would need to call the following two namespaces using the “using” keyword.

```
      using SuperOffice.CRM.Cache;
      using SuperOffice.CRM.Security;
```

An Important Point to remember!

In some cases, it is necessary in to indicate entire path of the cache even though we have used the “using” statement to call the namespace. For example when using the namespace, SuperOffice.CRM.Rows it would point to an ambiguous error since the ProbCache located in both the above namespaces.

SuperOffice.CRM.Cache.ProbCache newProCache = SuperOffice.CRM.Cache.ProbCache.GetCurrent();
