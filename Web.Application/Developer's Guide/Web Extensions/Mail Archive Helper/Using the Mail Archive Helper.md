<properties date="2016-06-24"
SortOrder="3"
/>

Initializing
------------

Before you start using the helper, you need to tell it who you are by using the Initialize method:

```
  SuperOffice.Mail.MailArchiveHelper helper = 
      new SuperOffice.Mail.MailArchiveHelper();
  helper.Initialize("Thunderbird", ".eml", "ThunderMailLink.chm");
```

The first parameter corresponds to the registry section where settings are stored on the client. In this case in the `HKCU\Software\SuperOffice\Thunderbird` key.

Helper function
---------------

We often wrap this initializing code in a helper function, so that we can use it like this:

```
   MailArchiveHelper GetMailArchiveHelper()
   {
      MailArchiveHelper tmp = new MailArchiveHelper();
      tmp.Initialize("Thunderbird", ".eml", "ThunderMailLink.chm");
      return tmp;
   }

   using (MailArchiveHelper mah = GetMailArchiveHelper())
   {
     string path = mah.GetPreference("Path", Registry.LocalMachine.Name, "", string.Empty).Trim();
     if (!File.Exists(path))
           mah.LogError("oh dear - file '" + path + "' does not exist");
   }
```

The helper is designed to be used and then disposed of, so that your connection with the web or the win client only lasts as long as the action the user requested. This is to avoid keeping COM objects alive unneccesarily.
