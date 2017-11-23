---
uid: refPluginMailSender
title: Mail Sender Plugin
---

MailSender Plugin
===========================================================================================================================

Overview
-----------------------------------------------

Making a mailsender plugin is a way to customize SuperOffice to use a third party application to send mail. When you for example click on the e-mail button in SuperOffice, or click an e-mail address in the person list, the active mailsender plugin receives a notification to send a new mail.

Installing
-------------------------------------------------

First of all you need to register the plugin on the client machine (*"RegSvr32.exe myPlugin.dll"*). SOLOADER.INI can help you deploying.
Then you need to change some preferences in CRM 5. In the category E-mail you have three different settings that need to be altered:

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>Send new mail using</p></td>
<td><p>will use the selected plugin to send new mails</p></td>
</tr>
<tr class="even">
<td><p>Send fax using</p></td>
<td><p>will use the selected plugin to send faxes</p></td>
</tr>
<tr class="odd">
<td><p>Send documents using</p></td>
<td><p>will use the selected plugin to send documents by mail</p></td>
</tr>
</tbody>
</table>

 

Implementing your own
------------------------------------------------------------

A mailsender plugin is a COM component that implements a specific interface. By accessing this interface, CRM 5 may "talk" to the plugin.
This description will explain how to make a mailsender plugin in Visual Basic (VB). The approach will be somewhat different for other programming languages, but the concepts are the same.
Start VB and create a new ActiveX DLL project. Open the 'Project' tab in the menu. Choose 'References'. Click 'Browse'. Locate the file *['sender.tlb' (zip file)](http://autobuilder/sdk/PlugIn/MailPlugin/MailFiles.zip)*.Open it. Your project should now have knowledge about the mailsenderinterface CRM 5 provides.
In top of Class1 (the default name for the first Class Module) write the following statement: *'Implements SOMailSender'*. This is the interface CRM 5 expects to find, and use in your plugin.
By selecting the *'SOMailSender'* object in the top left dropdown, you will get a list of all the methods in the top right dropdown.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>Capabilities</p></td>
<td><p>should return what your plugin can and can not do</p></td>
</tr>
<tr class="even">
<td><p>DoFullNewMail</p></td>
<td><p>should implement a way to send a new mail</p></td>
</tr>
<tr class="odd">
<td><p>DoFullForward</p></td>
<td><p>should forward an existing mail</p></td>
</tr>
<tr class="even">
<td><p>DoFullFaxDoc</p></td>
<td><p>should send the given document by fax</p></td>
</tr>
<tr class="odd">
<td><p>DoFullReply</p></td>
<td><p>should reply to an existing mail</p></td>
</tr>
<tr class="even">
<td><p>DoFullSendDoc</p></td>
<td><p>should send the given document by mail</p></td>
</tr>
<tr class="odd">
<td><p>DoSendModel</p></td>
<td><p>should generate an e-mail from the given mailmodel and display it</p></td>
</tr>
<tr class="even">
<td><p>DoSendModelNoGui</p></td>
<td><p>should generate an e-mail from the given mailmodel and send it</p></td>
</tr>
<tr class="odd">
<td><p>FormatMailAddress</p></td>
<td><p>format the mailaddress to a format your application can use</p></td>
</tr>
</tbody>
</table>


When the passed variable to the function is of type long, it is a document\_id from CRM 5. You may use the CRM 5 SDK to get more information about the document if needed. Find more information about this in the CRM 5 SDK documentation.

One method that differs from the others is *'Capabilities'*. This method will be executed during startup, and is used to determine what kind of "services" your plugin can offer.

To implement it, create a new Class Module(Class2). Write the following at the top: *'Implements SOMailCapabilities'.* This is the interface CRM 5 uses to determine what your plugin can, and can not do. Implement the methods by returning true or false, based on what you want your plugin to handle. Back in Class1's 'Capabilities' method, return a reference to a new instance of Class2.
Voila, you have just made a new mailsenderplugin for SuperOffice SIX. All that's left is to add a few keys to the windows registry, so that SuperOffice can find it. To do this you need to add an entry to the the following area:
HKEY\_CURRENT\_USER-&gt;Software-&gt;SuperOffice-&gt;Mail-&gt;Senders
Create a new key with an appropriate name. Add a string entry with the CLSID of the COM object, and an entry with the default file extension the plugin handles. For Outlook this will be .msg files.
Example of key

HKEY\_CURRENT\_USER-&gt;Software-&gt;SuperOffice-&gt;Mail-&gt;Senders-&gt;OutlookAddin

|             |         |                 |
|-------------|--------|-----------------|
|CLSID         | REG\_SZ  |  {DAAD094C-8096-4829-9DF7-95461754EECD}|
|FileExtension | REG\_SZ  |  msg |

 

