---
uid: guide_customizing_webpanel_soapplication
title: Web Panels and SOApplication
---

Web pages shown in web-panels can also use SOApplication to manipulate the SuperOffice user interface.To to access the SoApplication object within the web panel web page you need to set:

    soApplication = window.external;

The web panels in 6.1 have been totally re-written (to work on Vista). In SIX we used a wrapper around the entire IE application, in 6.1 we use the Web Browser control as an OLE client object. SuperOffice is now the controlling application of the browser. This makes scripting easier. A shared instance of the SuperOffice application object is now accessible as the "external" property of the window object.

In SIX you had to write:set so = CreateObject("SuperOffice.Application")so.CurrentContact.ChangeIdentity so.Database.OwnerContactId
In 6.1 you can write:set so = window.externalso.CurrentContact.ChangeIdentity so.Database.OwnerContactId- or –window.external.CurrentContact.ChangeIdentity window.external.Database.OwnerContactId
The external object is however only accessible from web pages located in the “intranet zone” and from local urls that are listed in the application table. (This is done to prevent external websites to gain access to the database.)

To make a popup windows (and "open in new window") to be the same session you must set preference to use the internal browser.

Edit -&gt; Preferences -&gt; Functions -&gt; Use SuperOffice SIX browser:  == Yes



Example code:

&lt;html&gt;
&lt;head&gt;
    &lt;meta name="GENERATOR" content="Microsoft Visual Studio 8.0" /&gt;
    &lt;title&gt;BrowserTest&lt;/title&gt;
    &lt;script language="javascript" type="text/javascript"&gt;
// &lt;!CDATA\[
function Open\_onclick()
{
    f = "toolbar=";
    f += ToolBarCb.checked ? "yes" : "no";
    f += ",location=";
    f += AddressBarCb.checked ? "yes" : "no";
    f += ",status=";
    f += StatusBarCb.checked ? "yes" : "no";
    if( HeightCb.checked )
        f += ",height=200"
    if( WidthCb.checked )
        f += ",width=300"
        open(window.location.href,"",f);
}
function Close\_onclick()
{
    window.close();
}
function External\_onclick()
{
    soApplication = window.external;
    if ( soApplication )
    {
        ExternalResult.innerHTML = "&lt;p&gt;GetExternal = OK : CurrentContact = " + soApplication.CurrentContact.Name + "&lt;/p&gt;";

    }
    else
    {
        ExternalResult.innerHTML = "&lt;p&gt;GetExternal = FAIL&lt;/p&gt;";
    }
}
//
&cd;&gt;
    &lt;/script&gt;&lt;/head&gt;
&lt;body&gt;
    &lt;table&gt;
        &lt;tr&gt;
            &lt;td&gt;
                ToolBar&lt;/td&gt;
            &lt;td&gt;
                &lt;input id="ToolBarCb" type="checkbox" /&gt;&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;
                AddressBar&lt;/td&gt;
            &lt;td&gt;
                &lt;input id="AddressBarCb" type="checkbox" /&gt;&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;
                StatusBar&lt;/td&gt;
            &lt;td&gt;
                &lt;input id="StatusBarCb" type="checkbox" /&gt;&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;
                Height&lt;/td&gt;
            &lt;td&gt;
                &lt;input id="HeightCb" type="checkbox" /&gt;&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;
                Width&lt;/td&gt;
            &lt;td&gt;
                &lt;input id="WidthCb" type="checkbox" /&gt;&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/table&gt;
    &lt;input id="Open" type="button" value="Open" onclick="return Open\_onclick()" /&gt;
    &lt;input id="Close" type="button" value="Close" onclick="return Close\_onclick()" /&gt;
    &lt;input id="External" type="button" value="External" onclick="return External\_onclick()" /&gt;
    &lt;input id="Message" type="button" value="MB alert" onclick="JavaScript:alert('This is a message')" /&gt;
    &lt;input id="Button2" type="button" value="MB confirm" onclick="JavaScript:confirm('This is a message')" /&gt;
    &lt;div id="ExternalResult"&gt;
        &lt;p&gt;
            GetExternal = ???&lt;/p&gt;
    &lt;/div&gt;
    &lt;object classid="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6" type="application/x-oleobject"
        id="Player"&gt;
        &lt;param name="url" value="<http://www.microsoft.com/seminar/en/20030425rpcreate/20030425RPCreate_100k.asx>" /&gt;
        &lt;!--&lt;param name="url" value="[file:///C:/Temp/internet\_helpdesk.mp4](C:/Temp/internet_helpdesk.mp4)" /&gt;--&gt;
        &lt;param name="currentPosition" value="0" /&gt;
        &lt;param name="enableContextMenu" value="false" /&gt;
        &lt;param name="enabled" value="true" /&gt;
        &lt;param name="fullScreen" value="false" /&gt;
        &lt;param name="mute" value="true" /&gt;
        &lt;span style="color: red"&gt;ActiveX control failed to load! -- Please check browser security
            settings.&lt;/span&gt;
    &lt;/object&gt;
&lt;/body&gt;
&lt;/html&gt;