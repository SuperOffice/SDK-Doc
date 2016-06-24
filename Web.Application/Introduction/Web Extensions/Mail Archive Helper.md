<properties date="2016-06-24"
SortOrder="2"
/>

The MailArchiveHelper supports both web and win versions of SuperOffice.

When the windows client is installed it marks the registry - the SuperOffice.Application and SuperOfficeDB.Database COM objects are registered. The MailLinkHelper looks for the presence of these keys as a hint that it should use the local installation.

The registry value "SuperOfficeTarget" in the appropriate key is used to figure out which client to talk to. This value is set during the MSI install using an MSI custom action. This custom action checks the registry for the `HKCR\SuperOffice.Application` key. If this key is present, we default to "win".

* "win": use COM to talk to the local SOCRM client.
* "web": use web services to talk to the 6.web client

The URL for the web site is stored in the registry value "WebUrl"

The preference dialog also allows the user to choose which client to use: win or web.

![diagram](diagram.jpg)

There is a mail client that you want to write an add-in for. You use the mail-client's API to write your plugin. You use the SuperOffice helper to deal with archiving mails into SuperOffice web and win.

Your add-in is the green box on this diagram.

SuperOffice supplies the red boxes: the mail archive helper hides the difference between the web and win APIs from you.

The mail-archive helper is also documented in the **SO.IDatabase.CHM** file.

SeeAlso: [Developer's Guide](../../Developer's%20Guide/Web%20Extensions/Mail%20Archive%20Helper/Mail%20Archive%20Helper.md)
