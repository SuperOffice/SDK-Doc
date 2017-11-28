
##SUMMARY


Returns true if CRM is displaying a modal dialog, and can't be interrupted. 

Modal dialogs require user interaction before dismissal. We don't have many modal dialogs, so we usually have a good reason for interrupting the normal flow of the application when one does appear. Modal dialogs lock the user-interface while they are active, and prevent the user from interacting with other parts of the user-interface.



##EXAMPLE

**Displaying a modal dialog**



![](..\..\Examples\vbs\Application.IsBusyWithModal.vbs.txt)


##VALUE

Boolean – True if application is busy with a modal dialog.

