---
uid: guideScriptingEngineWorkflow
title: Workflow
---

## On application start

```txt
ScriptControlManager is initialized
If Scripting is enabled
    ScriptControlManager searches SO\_Arc\\
    If personal scripts are enabled 
        ScriptControlManager also searches all SO\_ARC\\Personal folders
    ScriptControlManager compares each script file to the value in the preferences
    For each script file that is enabled
    ScriptControlManager initiates one instance of SScriptControlWrapper
        SScriptControlWrapper reads the file
        Subs are stored in SScriptControlWrapper
        After reading of file, ScriptControlManager will execute ScriptControlWrapper-&gt;GetFuncList(), 
        to get names of all the functions stored in the ScriptcontrolWrapper object, and 
        store the name of the function and a pointer to the ScriptControlWrapper object in a multimap.
```

## On event fired

```txt
ComCurrentChangeListener notifies ScriptControlManager about event.
    ScriptControlManager searches its multimap for matching function name.
    If a matching function name is found, a pointer to the ScriptControlWrapper object which contains this
          function is returned, and ScriptControlManager will use this pointer to execute the appropriate script
```

## Changing scripting preferences in SOAdmin:

```txt
SOadmin is started
The SOAdminScriptingPanel is activated
     ScriptControlManager is initialized
     For each file in So\_arc\\ (Not personal files)
         Insert name into SuperList
A script file is selected in the SuperList
     ScriptControlManager asks the ScriptControlWrapper in charge of this file to read the contents
     ScriptControlManager returns the contents of the file to the SOAdminScriptingPanel
         The text is inserted into the FileContent textbox
Preferences is changed and OK is clicked
    For each script file in the SuperList
         The name of the file + the value (enabled/disabled)  is saved into the preference table
    The setting for ‘Enable scripting’ is saved into the preference table
    The setting for ‘Enable personal scripts’ is saved into the preference table
```