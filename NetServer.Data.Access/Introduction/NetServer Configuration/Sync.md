---
uid: netserver_configuration_sync
title: NetServer Sync Element
date: 2018-06-06
SortOrder: 93
---
## (Legacy SuperOffice Only)

Configuration values related to SuperOffice Sync (i.e. SoSync).

|Name|Description|
|------------|-|
|SettingsSlidingExpiration|Settings related to synchronization are configured using the SoSyncAdmin client, stored in the SuperOffice database and internally in SoSync held in a cache.  This cache has two time-out values.  One of the values are related to the absolute expiry time after the value is inserted in the cache and the second relates to the expiry time since the value was last used.  This configuration value address the latter and refers to time since last used. Default value is 300 seconds.|
|SettingsAbsoluteExpiration|Settings related to synchronization are configured using the SoSyncAdmin client, stored in the SuperOffice database and internally in SoSync held in a cache.  This cache has two time-out values.  One of the values are related to the absolute expiry time after the value is inserted in the cache and the second relates to the expiry time since the value was last used.  This configuration value address the first related to time since read from the database.  Default value is 900 seconds.|
