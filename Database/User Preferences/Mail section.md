---
uid: prefMail
title: Mail section
---

Preference section 'Mail'
=========================

In order to view all preferences in this section, use the following SQL:

```SQL
```SQL
    SELECT \* FROM UserPreference WHERE prefsection='Mail'
```
```

E-mail synchronization and mail sending and receiving. These preferences control all sorts of sending and receiving of e-mail and faxes.

* **AddressSeparator**
  Use this character to delimit e-mail addresses. (Default: ';').
  Control type: Text, access: Admin, Crm, Admin users, Wizard
* **ArchiveAppointments**
  Always proposes archiving appointments you send from SuperOffice SIX by e-mail. This means that, by default, you will be asked if you want to archive all appointments sent by e-mail from SIX.web.
  Control type: Bool, access: Admin, Admin users, Wizard
* **ArchiveDocuments**
  Always proposes archiving documents you send from SuperOffice SIX by e-mail. This means that, by default, you will be asked if you want to archive all documents sent by e-mail from SIX.web.
  Control type: Bool, access: Admin, Admin users, Wizard
* **ArchiveForwards**
  Always proposes archiving e-mail forwarded from SuperOffice SIX. This means that, by default, you will be asked if you want to archive all e-mail you forward from SIX.web.
  Control type: Bool, access: Admin, Admin users, Wizard
* **ArchiveReplies**
  Always proposes archiving replies to e-mails that are archived in SuperOffice SIX. This means that, by default, you will be asked if you want to archive all e-mail you reply to from SIX.web.
  Control type: Bool, access: Admin, Admin users, Wizard
* **ArchiveSentMsg**
  Always proposes archiving e-mail created in SuperOffice SIX. This means that, by default, you will be asked if you want to archive all e-mail you create in SIX.web.
  Control type: Bool, access: Admin, Admin users, Wizard
* **ArchiveToAssocs**
  Always proposes archiving e-mail written internally to your associates using SuperOffice SIX. This means that, by default, you will be asked if you want to archive all e-mail sent to associates from SIX.web.
  Control type: Bool, access: Admin, Admin users, Wizard
* **AttachiCal**
  Attach an iCalendar file to e-mail invitations. iCalendar is a standard format for exchanging calendar and schedule information. Default = Yes.
  Control type: Bool, access: Admin, Admin users, Wizard
* **BookingAssociatesSubList**
  Preference used to remember the setup/status of the list
  Control type: Number, access: Wizard
* **CloseAfterArchive**
  Close the e-mail after it has been archived from SuperOffice.web (Default = YES)
  Control type: Bool, access: Admin, Admin users, Wizard
* **CreateExtUserSubject**
Header used in e-mail sent when generating external users.
*Control type: Text, access: Admin, Admin users, Wizard*
* **DefaultDocSender**
E-mail client used to send documents in SuperOffice SIX.
*Control type: List, access: Admin, Admin users, Wizard*
* **DefaultFaxSender**
Fax plug-in used to send faxes from SuperOffice SIX
*Control type: List, access: Admin, Admin users, Wizard*
* **DefaultMailSender**
E-mail client used to send e-mail in SuperOffice SIX
*Control type: List, access: Admin, Admin users, Wizard*
* **EnableMailSync**
Enables synchronisation between the SuperOffice SIX inbox and your external e-mail program
*Control type: Bool, access: Admin, Crm, Admin users, Wizard*
* **FirstMailSync**
Number of seconds until first synchronisation on startup
*Control type: Number, access: Admin, Crm, Admin users, Wizard*
* **ForceConfirmationEmailInvit**
Displays a confirmation dialog before invitations are sent by e-mail. (Default: No).
*Control type: Bool, access: Admin, Admin users, Wizard*
* **ImapServerName**
Name of the IMAP4 Mail server used by SIX.web. Enter the DNS name or the IP address (e.g. mail.server.com or 10.0.0.100)
*Control type: Text, access: Admin, Admin users, Wizard*
* **ImapServerPort**
The port number your mail server uses to access e-mail using the IMAP protocol. Default = 143
*Control type: Number, access: Admin, Admin users, Wizard*
* **Inbox**
E-mail client used for your in SuperOffice SIX inbox. Inboxes other than the default SuperOffice one require a separate plugin..
*Control type: List, access: Admin, Crm, Admin users, Wizard*
* **IsEmailInstalled**
Is there currently an e-mail client available on this computer? This option enables certain aspects of e-mail functionality. (Default = YES)
*Control type: Bool, access: Admin, Crm, Admin users, Wizard*
* **IsFaxInstalled**
Is there a fax plugin installed in the e-mail client that allows faxes to be sent by e-mail? This option enables certain aspects of fax functionality. (Default = YES)
*Control type: Bool, access: Admin, Crm, Admin users, Wizard*
* **MailGatewayDisplayName**
The display name of the SuperOffice Mail Gateway's e-mail address
*Control type: Text, access: Admin, Admin users, Wizard*
* **MailGatewayMailAddress**
The SuperOffice Mail Gateway's e-mail address
*Control type: Text, access: Admin, Admin users, Wizard*
* **MailSmtpAuthorize**
The SMTP server requires authentication before you can send e-mail. (Default = NO)
*Control type: Bool, access: Admin, Admin users, Wizard*
* **MailSyncTimer**
Number of seconds between each synchronisation
*Control type: Number, access: Admin, Crm, Admin users, Wizard*
* **MarkAsReadInPreview**
Marks the e-mail as read once it has been displayed in the preview pane. If you set this to No, you need to open the e-mail before it is marked as read. (Default = NO)
*Control type: Bool, access: Admin, Admin users, Wizard*
* **NameDeleted**
Specifies the name if the IMAP folder that contains your deleted email. (Default = Deleted items)
*Control type: Text, access: Admin, Admin users, Wizard*
* **NameDrafts**
Specifies the name of the IMAP folder that is used to store e-mail drafts. (Default = Drafts)
*Control type: Text, access: Admin, Admin users, Wizard*
* **NameInbox**
Specifies the name of the IMAP folder used as your e-mail inbox. (Default = Inbox)
*Control type: Text, access: Admin, Admin users, Wizard*
* **NameSent**
Specifies the name of the IMAP folder that is used to store sent e-mail. (Default = Sent Items)
*Control type: Text, access: Admin, Admin users, Wizard*
* **NotifyAssociateByMail**
Notifies an associate by e-mail when invited to an appointment
*Control type: Bool, access: Admin, Crm, Admin users, Wizard*
* **NotifyExtPersonByMail**
Notifies a contact by e-mail when invited to an appointment
*Control type: Bool, access: Admin, Admin users, Wizard*
* **NotifyOnlineUsers**
Users who are logged on will be notified about changes to invitations
*Control type: Bool, access: Wizard*
* **RemoveAfterArchive**
Deletes the e-mail from your inbox after you have archived it in SuperOffice.web (Default = NO)
*Control type: Bool, access: Admin, Admin users, Wizard*
* **SaveLogonInfo**
Saves an encrypted version of your user name and password for the e-mail server in the SIX database. This saves you having to enter your user name and password each time you want to access your inbox. (Default = NO)
*Control type: Bool, access: Admin, Admin users, Wizard*
* **SendFaxPrefix**
Format for fax numbers to be sent by e-mail. &lt;faxs&gt; is the fax number and &lt;name&gt; is the company name, e.g. FAX:&lt;name&gt;@&lt;faxs&gt; produces FAX:SuperOffice ASA@22517001
*Control type: Text, access: Admin, Admin users, Wizard*
* **SendFaxProtocol**
Protocol used by your e-mail server to send a fax. (Default = FAX)
*Control type: Text, access: Admin, Crm, Admin users, Wizard*
* **SmtpServerName**
Name of the SMTP Mail server used by SIX.web. Enter the DNS name or the IP address (e.g. mail.server.com or 10.0.0.100)
*Control type: Text, access: Admin, Admin users, Wizard*
* **SmtpServerPass**
If you want to use a different password from the one you use to log in to your IMAP server, you can enter it here.
*Control type: Text, access: Admin, Admin users, Wizard*
* **SmtpServerPort**
The port number your mail server uses to send e-mail using the SMTP protocol. Default = 25
*Control type: Number, access: Admin, Admin users, Wizard*
* **SmtpServerUser**
If you want to use a different user name from the one you use to log in to your IMAP server, you can enter it here.
*Control type: Text, access: Admin, Admin users, Wizard*
* **Timeout**
Number of seconds that SIX.web will wait for the mail server to finish processing a request. If you experience problems with slow response times from your mail server, you should increase this value to 30 seconds or more. Default: 15 seconds.
*Control type: Number, access: Admin, Admin users, Wizard*
* **UseMapiReaderAnyway**
Use the SIX inbox even if SIX has other e-mail integration installed (Default = NO)
*Control type: Bool, access: Wizard*
* **UseSoMailBody**
Use "mail.htm" as body of new e-mails. The file is looked for in "so\_arc\\username\\mail.htm" and if not found in "so\_arc\\template\\mail.htm"
* **MoveDeletedToDeletedItems**
If enabled e-mails that get deleted are moved to the deleted items folder
* **SaveSentInSentItems**
If enabled sent e-mails are saved in the sent items folder
