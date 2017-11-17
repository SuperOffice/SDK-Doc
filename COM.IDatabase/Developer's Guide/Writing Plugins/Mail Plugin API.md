---
uid: refPluginMail
title: Mail Plugin API
---

There are two parts to the mail plugin system:

[Reading the inbox](%7B3CC885F8-0B69-4384-860A-E2D290AB0D7C%7D) - you can either replace the built in inbox with your own program, or you can provide the SuperOffice inbox with your own list of messages and message details. This API is also used when archiving messages from the inbox to the file system. A message is saved to a file, then the file is sent to the document plugin for storage.

[Sending messages](refPluginMailSender.md) - this is triggered when you click the e-mail button or an e-mail address in the SuperOffice user interface. The plug-in should trigger an e-mail editor window and archive the results.

 

Additionally a helper DLL exists to help implementors archive messages: [MailArchiveHelper](refPluginMailArchiveHelper.md).