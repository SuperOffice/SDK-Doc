---
uid: refPluginMailSender
title: Mail Sender Plugin
---

<span class="SpellE"><span lang="EN-GB" lang="EN-GB">MailSender</span></span> <span lang="EN-GB" lang="EN-GB">Plugin</span>
===========================================================================================================================

<span lang="EN-GB" lang="EN-GB">Overview</span>
-----------------------------------------------

<span lang="EN-GB" style="FONT-SIZE: 9pt; COLOR: black" lang="EN-GB">Making a <span class="SpellE">mailsender</span> plugin is a way to customize SuperOffice to use a third party application to send mail. When you for example click on the e-mail button in SuperOffice, or click an e-mail address in the person list, the active <span class="SpellE">mailsender</span> plugin receives a notification to send a new mail.</span>

<span lang="EN-GB" lang="EN-GB">Installing</span>
-------------------------------------------------

<span lang="EN-GB" style="FONT-SIZE: 9pt; COLOR: black" lang="EN-GB">First of all you need to register the plugin on the client machine (*"RegSvr32.exe myPlugin.dll"*). SOLOADER.INI can help you deploying.
Then you need to change some preferences in CRM 5. In the category E-mail you have three different settings that need to be altered:</span>

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>Send new mail using</p></td>
<td><p><span lang="EN-GB" lang="EN-GB">will use the selected plugin to send new mails</span></p></td>
</tr>
<tr class="even">
<td><p>Send fax using</p></td>
<td><p><span lang="EN-GB" lang="EN-GB">will use the selected plugin to send faxes</span></p></td>
</tr>
<tr class="odd">
<td><p>Send documents using</p></td>
<td><p><span lang="EN-GB" lang="EN-GB">will use the selected plugin to send documents by mail</span></p></td>
</tr>
</tbody>
</table>

<span lang="EN-GB" style="FONT-SIZE: 9pt; COLOR: black" lang="EN-GB"> </span>

Implementing <span lang="EN-GB" lang="EN-GB">your own</span>
------------------------------------------------------------

<span lang="EN-GB" style="FONT-SIZE: 9pt; COLOR: black" lang="EN-GB">A <span class="SpellE">mailsender</span> plugin is a COM component that implements a specific interface. By accessing this interface, CRM 5 may "talk" to the plugin.
This description will explain how to make a <span class="SpellE">mailsender</span> plugin in Visual Basic (VB). The approach will be somewhat different for other programming languages, but the concepts are the same.
Start VB and create a new ActiveX DLL project. Open the 'Project' tab in the menu. Choose 'References'. Click 'Browse'. Locate the file *['<span class="SpellE">sender.tlb</span>' (zip file)](http://autobuilder/sdk/PlugIn/MailPlugin/MailFiles.zip)*.Open it. Your project should now have knowledge about the <span class="SpellE">mailsenderinterface</span> CRM 5 provides.
In top of Class1 (the default name for the first Class Module) write the following statement: *'Implements <span class="SpellE">SOMailSender</span>'*. This is the interface CRM 5 expects to find, and use in your plugin.
By selecting the *'<span class="SpellE">SOMailSender</span>'* object in the top left dropdown, you will get a list of all the methods in the top right dropdown.</span>

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>Capabilities</p></td>
<td><p><span lang="EN-GB" lang="EN-GB">should return what your plugin can and can not do</span></p></td>
</tr>
<tr class="even">
<td><p>DoFullNewMail</p></td>
<td><p><span lang="EN-GB" lang="EN-GB">should implement a way to send a new mail</span></p></td>
</tr>
<tr class="odd">
<td><p>DoFullForward</p></td>
<td><p><span lang="EN-GB" lang="EN-GB">should forward an existing mail</span></p></td>
</tr>
<tr class="even">
<td><p>DoFullFaxDoc</p></td>
<td><p><span lang="EN-GB" lang="EN-GB">should send the given document by fax</span></p></td>
</tr>
<tr class="odd">
<td><p>DoFullReply</p></td>
<td><p><span lang="EN-GB" lang="EN-GB">should reply to an existing mail</span></p></td>
</tr>
<tr class="even">
<td><p>DoFullSendDoc</p></td>
<td><p><span lang="EN-GB" lang="EN-GB">should send the given document by mail</span></p></td>
</tr>
<tr class="odd">
<td><p>DoSendModel</p></td>
<td><p><span lang="EN-GB" lang="EN-GB">should generate an e-mail from the given <span class="SpellE">mailmodel</span> and display it</span></p></td>
</tr>
<tr class="even">
<td><p>DoSendModelNoGui</p></td>
<td><p><span lang="EN-GB" lang="EN-GB">should generate an e-mail from the given <span class="SpellE">mailmodel</span> and send it</span></p></td>
</tr>
<tr class="odd">
<td><p>FormatMailAddress</p></td>
<td><p><span lang="EN-GB" lang="EN-GB">format the <span class="SpellE">mailaddress</span> to a format your application can use</span></p></td>
</tr>
</tbody>
</table>

<span lang="EN-GB" style="FONT-SIZE: 9pt; COLOR: black" lang="EN-GB">
When the passed variable to the function is of type long, it is a <span class="SpellE">document\_id</span> from CRM 5. You may use the CRM 5 SDK to get more information about the document if needed. Find more information about this in the CRM 5 SDK documentation.</span>

One method that differs from the others is *'Capabilities'*. This method will be executed during <span class="SpellE">startup</span>, and is used to determine what kind of "services" your plugin can offer.

To implement it, create a new Class <span class="GramE">Module(</span>Class2). Write the following at the top: *'Implements <span class="SpellE">SOMailCapabilities</span>'.* This is the interface CRM 5 uses to determine what your plugin can, and can not do. Implement the methods by returning true or false, based on what you want your plugin to handle. Back in Class1's 'Capabilities' method, return a reference to a new instance of Class2.
Voila, you have just made a new <span class="SpellE">mailsenderplugin</span> for SuperOffice SIX. All that's left is to add a few keys to the windows registry, so that SuperOffice can find it. To do this you need to add an entry to the <span class="SpellE">the</span> following area:
<span class="SpellE">HKEY\_CURRENT\_USER</span>-&gt;Software-&gt;SuperOffice-&gt;Mail-&gt;Senders
Create a new key with an appropriate name. Add a string entry with the <span class="SpellE">CLSID</span> of the COM object, and an entry with the default file extension the plugin handles. For Outlook this will be .<span class="SpellE">msg</span> files.
<span class="Heading2Char">Example of key</span>

<span lang="EN-GB" style="COLOR: black" lang="EN-GB">HKEY\_CURRENT\_USER-&gt;Software-&gt;SuperOffice-&gt;Mail-&gt;Senders-&gt;OutlookAddin</span>

<span class="SpellE"><span lang="EN-GB" style="COLOR: black" lang="EN-GB">CLSID</span></span><span lang="EN-GB" style="COLOR: black" lang="EN-GB"><span>          </span> <span class="SpellE">REG\_SZ</span><span>   </span> {DAAD094C-8096-4829-9DF7-95461754EECD}</span>

<span class="SpellE"><span lang="EN-GB" style="COLOR: black" lang="EN-GB">FileExtension</span></span><span lang="EN-GB" style="COLOR: black" lang="EN-GB"><span>  </span> <span class="SpellE">REG\_SZ</span><span>   </span> <span class="SpellE">msg</span></span>

<span lang="EN-GB" style="COLOR: black" lang="EN-GB"> </span>

<span lang="EN-GB" lang="EN-GB">Example of use</span>
-----------------------------------------------------

<span lang="EN-GB" style="COLOR: black" lang="EN-GB">Please check the following [example (zip file)](Files/MailSenderExample.zip)[.](http://autobuilder/sdk/PlugIn/MailPlugin/MailSenderExample.zip)</span>