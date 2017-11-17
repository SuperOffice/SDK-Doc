---
uid: startReferenceTheDatabaseComponent
title: Reference The Database Component
---

Most of the examples you see here are written in VBScript.

The advantage of VBScript is that it requires no configuration.

The dis-advantage is that it has no intellisense or compile-time type-checking.

 

If you prefer Visual Basic, C\# or .net and intellisense, then you need to do a bit more work when programming.

### Visual Basic

In VB6 you need to add a reference to the SuperOfficeDB component.

Go to the Project | References menu in VB6. The following dialog will appear:

![](../images/vb-reference-dlg.gif)

Find the SuperOfficeDB 1.0 Type Library and check it off.

Save the project.

You will now discover that you get intellisense to help you program, especially if you DIM your variables with types before using them:

```
Dim db as Database
Set db = New Database
isOk = db.Login( "user", "pass" )
```

When you type "db." the editor will pop up a list of functions you can call on the Database class.

 

### C\# and VB.net

There is a similar dialog in Visual Studio 2005.

You can either add a reference to the COM DLL and have Visual Studio generate a type library for you:

![](../images/vbnet-com-reference-dlg.gif)

 

or you can use the InterOp DLL we have provided:

![](../images/vbnet-interop-dlg.gif) 

 

The Database object is called a DatabaseClass in .net -- apart from this minor difference, it is just like programming in VBScript or VB6.

```
Dim db as DatabaseClass
Set db = New DatabaseClass
isOk = db.Login( "user", "pass" )
```
