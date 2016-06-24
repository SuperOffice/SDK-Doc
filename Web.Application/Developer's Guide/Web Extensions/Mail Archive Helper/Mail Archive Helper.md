<properties date="2016-06-24"
/>

Some details on how to use the MailArchiveHelper library included with the Outlook mail link.

The SuperOffice win and web client use these components to send mail via a local mail client.

The mail clients use these components via plugins to archive the mail into the appropriate SuperOffice client.

The main class is MailArchiveHelper.

Example showing how to archive an e-mail:

```
    MailArchiveHelper mah = new MailArchiveHelper();
    mah.Initialize("MyMailLink", ".somail", "MyMailLinkHelpFile.chm");
    IArchiveInfo archiveInfo = new ArchiveInfo("John Doe", "john.doe@company.com", true, true);
    IDocumentInfo documentInfo = new DocumentInfo();
    documentInfo.Title = "Proposition of meeting regarding big sale";
    documentInfo.Filename = "c:\\temp\\myemail.somail";
    documentInfo.Date = DateTime.Now;
    documentInfo.Direction = DocDirection.kIncoming;
    mah.ArchiveDocument(archiveInfo, documentInfo);
```

The mail-archive helper is also documented in the **SO.IDatabase.CHM** file.
