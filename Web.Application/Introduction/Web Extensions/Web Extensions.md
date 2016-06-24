<properties date="2016-06-24"
SortOrder="90"
/>

The web-extensions are a local client that can be installed on the users machine (without admin rights).

The web extensions registers a couple of protocol handlers:

* superoffice: - used to display a particular soprotocol in the windows or web client.
* somail: - used to display mail messages with the local viewer
* superoffice-extensions: - for communicating with the local client (trayapp). Used when downloading and uploading documents, displaying alarm popups.

The SuperOffice 7 Web Extensions, also referred to as TrayApp, is a is the tool that is responsible for downloading documents and showing off alarms to users. Several people have requested more information about how it works.

The problem at hand starts off by web applications living inside a sand-box (i.e. Browser). Yet; we still need to support downloading of documents, allowing the user to make some modifications and make sure the document is sent back to the user. We spent a lot of time looking into WebDav and other technologies to try to streamline this process, but found that there where significant issues with all of the technologies. This resulted in the Windows System Tray application often referred to as TrayApp.

The TrayApp receives events in a similar way as the famous SO Protocol. All URL’s starting with superoffiece-extensions: are routed directly to the TrayApp. The TrayAppManager of SuperOffice.CRMWeb.dll is responsible for compiling superoffice-extensions protocols to TrayApp.

A request looks like this:

`superoffice-extensions:http://[WebInstallDir]/Services/TrayApp2.svc?Module=[ModuleName]&Version=2.0&UserId=[Associate]&Ticket=[Ticket]&Culture=en-US&SerialNumber=[…]&CompanyName=[…]`

The \[ModuleName\] can be either ‘sodwa’ for documents or ‘alarm’ for alarms.
Documents require an additional DocumentId like `&DocumentId=[DocumentId]`

 

1. autolist

SeeAlso: [Developer's Guide](../../Developer's%20Guide/Web%20Extensions/Web%20Extensions.md)
