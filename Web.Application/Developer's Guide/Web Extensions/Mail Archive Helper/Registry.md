<properties date="2016-06-24"
SortOrder="7"
/>

The registry is used for storing the Mail Link preferences. Each mail link sets up its own section in the registry.

Each plugin has its own registry key:

Outlook  
HKCU\\Software\\SuperOffice\\SO5OUTL

Notes  
HKCU\\Software\\SuperOffice\\SO5NL

You need to provide your own registry key for your mail application add-in.

The name of the registry key is passed as a parameter to MailArchiveHelper.Initialize.

OML Default Preferences: stored in the SO5OUTL registry key.

HKCU\\Software\\SuperOffice\\SO5OUTL   
AlwaysShowDialog = 1
AddUnknownOnContact = 1
AddUnknownProject = 1
AddUnknownAsTask = 1
AddUnknownLookup = 1
AttachmentSize = 500
AutoArchiveAcceptedMeeting = 0
AutoArchiveFromCRM = 1
AutoarchiveFromMailClient = 0
CheckForDuplicates = 1
CloseMailAfterStore = 1
EnableDebugInfo = 0
ForceDelivery = 1
ForceDeliveryCount = 50
OptionDialogFilename = installpath\\PreferenceDlg.exe
RemoveAfterStore = 0
ShowConfirmationDialog = 0
StoreAppointments = 0
StoreDocuments = 0
StoreEmailToAssociates = 1
StoreForwards = 0
StoreReplies = 0
SuperOfficeTarget = win-or-web
SwitchToActivityArchive = 0
SwitchToActivityArchiveOnLookup = 0
UseSoMailBody = 1
WarningLargeAttachments = 1
WaitForSentMailTimout = 10000
WebUrl = (blank)

The names of these settings are defined in the SuperOffice.Mail.Preference class.

These settings are read and updated by the preference dialog (PreferenceDlg.exe)

```
        Using helper As MailArchiveHelper = new MailArchiveHelper()
            helper.Initialize("SO5OUTL", ".msg", "SO5OUTL.chm")
            helper.ShowOptionsDialog()
       End Using
    
```
