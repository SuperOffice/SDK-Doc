<properties date="2016-06-24"
SortOrder="1"
/>

Functional Overview
-------------------

Scripting in the SuperOffice web application is accomplished by loading either text files or compiled assemblies. With regards to loading text files, SuperOffice web supports VB.NET (.vb) and C\# (.cs) files. That is to say that anyone can write a file that contains Visual Basic .NET or C\# code and have that execute during the execution of data tasks within the web client. They can also compile code into assemblies and have those used at runtime as well.

SuperOffice .web does not support VBScript or Javascript code through the COM script control use in the windows client. Nor is the .NET VSA scripting system (JScript.net) , Visual Studio Tools for Applications – the .NET replacement for VBA, Boo and any other exotic languages supported.

Unlike scripting in the Windows client, which uses a current system to access what has just been created or saved, scripting in .web is presented in such a way that provides the type being saved/loaded as an argument in the event handler. This provides an easy way to get and store more information about the entity using NetServer, such as built-in caches and the static constructors we know and love, in the context of the call.

The available scripting functions appear as Before and After web service calls. There is also support for conducting Asynchronous calls after an event has occured. The latter provides the ability for a script to execute long running tasks without affecting the user experience.

State is passed between the Before and After methods using a state parameter. This allows the script to persist data between method calls.

There is support for loading multiple scripts simultaneously. For example, two or more script files are able to subscribe to the same BeforeContactSave event, and they will not interfere with each other.

The first version of the scripting does not support user interaction in the web client. It really only caters to intercepting database queries for the retrieval and modifications of data through the service layer.
