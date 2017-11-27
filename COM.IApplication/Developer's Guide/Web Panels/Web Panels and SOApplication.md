---
uid: guide_customizing_webpanel_soapplication
title: Web Panels and SOApplication
---

Web pages shown in web-panels can also use SOApplication to manipulate the SuperOffice user interface.To to access the SoApplication object within the web panel web page you need to set:

```vb
    soApplication = window.external;
```

The web panels in 6.1 have been totally re-written (to work on Vista). In SIX we used a wrapper around the entire IE application, in 6.1 we use the Web Browser control as an OLE client object. SuperOffice is now the controlling application of the browser. This makes scripting easier. A shared instance of the SuperOffice application object is now accessible as the "external" property of the window object.

In SIX you had to write:

```vb
set so = CreateObject("SuperOffice.Application")
so.CurrentContact.ChangeIdentity so.Database.OwnerContactId
```

In 6.1 you can write:
```vb
set so = window.external
so.CurrentContact.ChangeIdentity 
so.Database.OwnerContactId
```

- or –

```vb
window.external.CurrentContact.ChangeIdentity window.external.Database.OwnerContactId
```

The external object is however only accessible from web pages located in the “intranet zone” and from local urls that are listed in the application table. 
(This is done to prevent external websites to gain access to the database.)

To make a popup windows (and "open in new window") to be the same session you must set preference to use the internal browser.

Edit -&gt; Preferences -&gt; Functions -&gt; Use SuperOffice SIX browser:  == Yes



Example code:

```xml
<html>
<head>
    <meta name="GENERATOR" content="Microsoft Visual Studio 8.0" />
    <title>BrowserTest</title>
    <script language="javascript" type="text/javascript">
function Open_onclick()
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
function Close_onclick()
{
    window.close();
}
function External_onclick()
{
    soApplication = window.external;
    if ( soApplication )
    {
        ExternalResult.innerHTML = "<p>GetExternal = OK : CurrentContact = " + soApplication.CurrentContact.Name + "</p>";

    }
    else
    {
        ExternalResult.innerHTML = "<p>GetExternal = FAIL</p>";
    }
}
    </script></head>
<body>
    <table>
        <tr>
            <td>
                ToolBar</td>
            <td>
                <input id="ToolBarCb" type="checkbox" /></td>
        </tr>
        <tr>
            <td>
                AddressBar</td>
            <td>
                <input id="AddressBarCb" type="checkbox" /></td>
        </tr>
        <tr>
            <td>
                StatusBar</td>
            <td>
                <input id="StatusBarCb" type="checkbox" /></td>
        </tr>
        <tr>
            <td>
                Height</td>
            <td>
                <input id="HeightCb" type="checkbox" /></td>
        </tr>
        <tr>
            <td>
                Width</td>
            <td>
                <input id="WidthCb" type="checkbox" /></td>
        </tr>
    </table>
    <input id="Open" type="button" value="Open" onclick="return Open_onclick()" />
    <input id="Close" type="button" value="Close" onclick="return Close_onclick()" />
    <input id="External" type="button" value="External" onclick="return External_onclick()" />
    <input id="Message" type="button" value="MB alert" onclick="JavaScript:alert('This is a message')" />
    <input id="Button2" type="button" value="MB confirm" onclick="JavaScript:confirm('This is a message')" />
    <div id="ExternalResult">
        <p>
            GetExternal = ???</p>
    </div>
    <object classid="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6" type="application/x-oleobject"
        id="Player">
        <param name="url" value="<http://www.microsoft.com/seminar/en/20030425rpcreate/20030425RPCreate_100k.asx>" />
        <param name="currentPosition" value="0" />
        <param name="enableContextMenu" value="false" />
        <param name="enabled" value="true" />
        <param name="fullScreen" value="false" />
        <param name="mute" value="true" />
        <span style="color: red">ActiveX control failed to load! -- Please check browser security
            settings.</span>
    </object>
</body>
</html>
```
