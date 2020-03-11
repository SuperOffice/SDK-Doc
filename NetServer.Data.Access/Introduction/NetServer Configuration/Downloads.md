---
uid: netserver_configuration_Downloads
title: NetServer Downloads Element
date: 2018-06-06
SortOrder: 77
---
## (SuperOffice Only)

Configuration values related to Downloads.

```xml
<Downloads>
  <add key="WebToolVersion" value="8.3.0.0" />
</Downloads>
```

|Name|Description|
|------------|----|
|WebSiteEndPoint|Public address of the web server, including protocol and port. Empty value will calculate a default value.|
|NewTrayAppUrl|Public address of the url for showing download-page of new TrayApp. Empty value will calculate a default value.|
|DownloadFolder|Folder of files to be downloaded to the client. Default value is ~/Download.|
|WebToolVersion|The version number to use for upgrade check.|
|DownloadFolderImpersonate|Impersonate as the document archive user when accessing the Download folder. Default value is false.|
|ReportingInterval|The interval (in seconds) which the web-installation will require activity updates from WebTools-clients in order for the clients to be considered active. Default value is 60.|
