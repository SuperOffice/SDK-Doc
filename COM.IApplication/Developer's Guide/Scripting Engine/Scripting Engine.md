---
uid: guideScriptingEngine
title: Scripting Engine
---

We want simple scripting functionality, with a simple interface to edit and select script files.

1. Scripting in the windows client only – a feature useful for consultants and partners.
2. A Scripting panel in the Admin client, so the administrator can select which script files to be used.
3. Support for VBScript and JavaScript.

### Using a Scripting Engine in SOCRM.exe

The scripting engine allows us/partners to build more complex rules than the wizard can manage, without us having to define yet-another plugin api. The scripting engine gives us full programming language support for free.

The Scripting Engine would be given access to the SOCRM Application object and all its sub objects. The current objects should also be added to the scripting engine’s context.

The Scripting Engine would be called for events that are today fired through the external event mechanism.

i.e. we would call a function in the script called “OnCurrentContactIdentityChanged” when the current company changed. We would call “OnCurrentContactSaved” when the company was created or edited.

e.g. a script could look like this:

```vb
 Sub OnCurrentContactSaved()
      If CurrentContact.Category = Database.GetListItem(enTableCategory, 123) Then
         CurrentContact.Business = Database.GetListItem(enTableBusiness, 99)
    End If
 End Sub
```

The script file `myrule.vbs` is loaded at startup and the functions in the file are called when events (message-broker messages) happen in the client.

The COM object we need to use is called “ScriptControl” – it makes it very easy to load and run scripts written in JScript and VBScript.

### Script-created User Interface

The scripts may want to control the application’s user interface. Scripts can use the <see cref="IApplication.Context">SOApplication.Context</see> object.

Scripts will also need to ask the user or inform the user about what they are doing. We need to add methods to let the scripts show status windows and alert boxes.

This first level  will not include any user-interface support in the scripts beyond information messageboxes (Ok button only) and Yes/No messageboxes.

In a future release we can add support for more complex user interface popups triggered by script, but in the first release the scripts get to say Ok and ask Yes/No. These dialogs will have the SOCRM branding on them, rather than the standard grey.

This function (“SOApplication.SOMessageBox”) needs to be added to the SOApplication object. 
This means the function will be generally useful to all our partners, not just the scripting engine users.

### Script storage

Propose that it is easier to admin and edit files in SO\_ARC than in the database. This is good for developers, but bad for security and users (who have to copy the files when they go on travel, etc).

### Storing script files in SO\_ARC

* + easy to edit
* + easy to create
* - lack of security (can’t MDO control the scripts) (anyone can read and edit the script files)
* - replication problems

We store the scripts in a Scripts folder - in `SO_ARC\SCRIPTS` - this folder needs to be copied when going on travel, but can be left alone on home-coming.
Scripts always replicate from the center outwards.

All script files (vbscript/jscript at least) in this folder are loaded at CRM client startup.
There is no support for non-standard script engines (Perl, Python etc).

### Personal script files

Scripts can also be loaded from `SO_ARC\username\SCRIPTS` folder – this will allow each user to have their own custom scripts. This folder would also need to be replicated on travel.

i.e. User JGL logs in. Scripts are loaded from `SO_ARC\SCRIPTS` and `SO_ARC\JGL\SCRIPTS`.

### Multiple script files

Assuming we can have multiple script files in SO\_ARC we will need to be able to run these in parallel, without having problems with multiple scripts conflicting with each other (i.e. both defining the OnCurrentContactSaved function).

The easy way to deal with this is to load each script file into its own scripting engine – i.e. we have a collection of scripting engines, one for each script file. When an event fires, we call the corresponding function in each engine. Changes made in one script file do not affect the others. This is usually what we want. If consultants want to share state between scripts then they have to do it through the database (i.e. a user preference setting for example).

### VBScript vs. JavaScript

We will support both VBScript and JavaScript, though we default to VBScript, since this most probably will be the most favorable to use. 
This means that the user must define Language=JavaScript if this is to be used. One script file is locked to one script language, so the same file cannot contain both JavaScript and VBScript.

To define a file as Javascript, the tag //Language=JavaScript must be inserted into the top of the file. If it is not, the Script Engine will assume that the file is a VBScript file. 

Note: The Language tag must be placed inside a comment (// in JavaScript, ‘ in VBScript), or else the Script Engine will assume that the Language tag is a part of the code, and it will fail.

Also note that JavaScript in Script Engine does not support alert() or confirm() (window.alert(text); window.confirm(text) ), but have to use the SOApplication.SOMessagebox(text, flag);

### Encrypted scripts

Support for simple script encrypting using SCRENC.EXE

### Workflow – Entry and Exit points

Admin client

* Simple GUI which allows the Admin to edit and validate script files, enabling and disabling of the Script Engine, and enabling/disabling of personal scripts

CRM client

* Loads scripts from SO\_ARC
* Creates a script engine for each script and calls functions in response to message broker messages.
* The ComCurrentChangeListener is a natural hook-up point for this system.
