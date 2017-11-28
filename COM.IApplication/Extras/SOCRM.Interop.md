
##PROJECT_TITLE

SOCRM.EXE Application Component Reference


##SUMMARY


The Application object is linked to the running SOCRM.EXE application. 


Creating the object will start the application if it is not already running. Creating the object after the application is started will link the object to the running application.


Manipulating the object will change the user interface in the object. You can edit the objects without the application being in edit mode.



##INTRODUCTION


The Application object is linked to the running SOCRM.EXE application. 


Creating the object will start the application if it is not already running. Creating the object after the application is started will link the object to the running application.


 


Manipulating the object will change the user interface in the object. You can edit the objects without the application being in edit mode.


 


See: %SOApplication Object:SOCRM.Interop~SuperOffice.COM.Application.IApplication%


 



##GETTINGSTARTED

<p>You start by creating an application object, then changing it.</p>
<p> </p>
<p>If you run this script without having SOCRM.EXE running, then a login dialog will appear. Once you have logged in the script will continue executing.</p>
<p>The application is stared automatically as part of the CreateObject call.</p>
<p>The other thing to note is that the user logs in to the application -- if the login succeeds, then the CreateObject call succeeds. So the program does not have to log in to the application, unlike the database object.</p>
<p> </p>
<p>This script switches the user interface to the main company panel, and then displays the name of the current company in a dialog box.</p>
<div class=LanguageSpecific id=Example_VBscript>
<table class=syntaxtable cellSpacing=0 cellPadding=0 width="100%">
<tbody>
<tr>
<th>VBScript</th>
<th><span class=copyCode onkeypress=CopyCode_CheckKey(this) onmouseover=changeCopyCodeIcon(this,true) onfocusout=changeCopyCodeIcon(this,false) onclick=copyCode(this) onfocusin=changeCopyCodeIcon(this,true) tabIndex=0 onmouseout=changeCopyCodeIcon(this,false)><img class=copyCodeImage src="aximages/copycode.gif" align=absMiddle name=ccImage>$$copyCode$$</span></th></tr>
<tr>
<td colSpan=2>
<div class=LanguageSpecific Name="Code_VB">
<table class=CodeContainerTable cellSpacing=0 cellPadding=0 border=0>
<tbody>
<tr>
<td noWrap><code class=Vb><font class=keyword>Set</font> socrm = CreateObject(<font class=string>"SuperOffice.Application"</font>)
socrm.Context.<font class=keyword>Set</font> <font class=string>"contact.main"</font>
msgbox socrm.CurrentContact.Name,,<font class=string>"Current company name"</font></code></td></tr></tbody></table></div></td></tr></tbody></table></div>
<p> </p>
<p>If we wanted to change the name of the current company we would do something like this:</p>
<div class=LanguageSpecific id=Example_VBscript>
<table class=syntaxtable cellSpacing=0 cellPadding=0 width="100%">
<tbody>
<tr>
<th>VBScript</th>
<th><span class=copyCode onkeypress=CopyCode_CheckKey(this) onmouseover=changeCopyCodeIcon(this,true) onfocusout=changeCopyCodeIcon(this,false) onclick=copyCode(this) onfocusin=changeCopyCodeIcon(this,true) tabIndex=0 onmouseout=changeCopyCodeIcon(this,false)><img class=copyCodeImage src="aximages/copycode.gif" align=absMiddle name=ccImage>$$copyCode$$</span></th></tr>
<tr>
<td colSpan=2>
<div class=LanguageSpecific Name="Code_VB">
<table class=CodeContainerTable cellSpacing=0 cellPadding=0 border=0>
<tbody>
<tr>
<td noWrap>
<p><code class=Vb><font class=keyword>Set</font> socrm = CreateObject(<font class=string>"SuperOffice.Application"</font>)
socrm.Context.<font class=keyword>Set</font> <font class=string>"contact.main"</font>
socrm.CurrentContact.Name = <font class=string>"The new name"
<font color=#000000>socrm.CurrentContact.Save</font></font></code></p></td></tr></tbody></table></div></td></tr></tbody></table></div>
<p class=sourcecode>
 </p>

