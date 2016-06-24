<properties date="2016-06-24"
SortOrder="8"
/>

The preference dialog is a EXE that is started by user action (like a menu item in the mail client).

Your add-in should use the MailArchiveHelper.ShowOptionsDialog to launch the dialog.

The preference dialog takes two parameters:

* Name of the registry key corresponding to the mail client in use
* Path to the help file for the mail client add-in

e.g:

       c:\installpath\PreferenceDlg.exe  SO5OUTL  c:\installpath\help.chm

Usage
-----

Typical usage from your mail client add-in would look like this:

```
   using (MailArchiveHelper mah = new MailArchiveHelper())
   {
      mah.Initialize("Thunderbird", ".eml", "ThunderMailLink.chm");
      mah.ShowOptionsDialog();
   }
```

The **ShowOptionsDialog** call will look in the registry key `HKCU\Software\SuperOffice\Thunderbird` for the `OptionDialogFilename` value. The program at this value is launched, with the parameters "Thunderbird" and "ThunderMailLink.chm".'

This results in the following command-line:

       c:\installpath\PreferenceDlg.exe  Thunderbird ThunderMailLink.chm
