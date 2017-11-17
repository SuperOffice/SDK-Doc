---
uid: guideMailSender
title: Mail Sender Plugin
---

The mail-sender has a simple job - it needs to trigger a NEW MESSAGE window in the mail client, while filling in the recipient e-mail address and possibly the subject.

 

If the **\[Mail\] IsEmailInstalled** user-preference is TRUE, then clicking on e-mail addresses will trigger the mail sender.

The default mail sender is determined by the **\[Mail\] Inbox** user-preference.

The e-mail address will be set as a recipient, and the default mail sender capabilities are checked.

If the mail sender can send using an object model, then a mail object is set up with the mail sender filled in, and the mail sender plugins [DoSendModel](SOMailSenderLib~IMailSender~DoSendModel.md) method is called.

If the mail sender capabilities do not support models, then the document template "Mail" with the mail plugin extension's file extension in the registry is used. The document dialog opens, and when the user clicks CREATE, a copy of the template is made and tag substitution is used to make a new message file, and the file is opened in the hope that this will let the user send a message.