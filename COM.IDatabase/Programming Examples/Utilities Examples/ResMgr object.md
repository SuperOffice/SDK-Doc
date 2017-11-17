---
uid: examUtilResMgrobject
title: examUtilResMgr object
---

The resource manager loads strings from the resource DLLs in the specified folder. It can then be used to return the string value for a particular string id in any installed language.

The resource manager can also be queried for a list of the installed languages.

There is no master list of resource ids - you will have to discover the most useful numbers for yourself.

Note that the language codes used by SuperOffice do not match the ISO codes used by the .net framework.
e.g. German is GE not DE. English is US not EN, and so on.

 

<span class="hs-onlineonly"><span class="copyCode" onclick="copyCode(this)" tabindex="0" onkeypress="CopyCode_CheckKey(this)" onmouseover="changeCopyCodeIcon(this,true)" onfocusin="changeCopyCodeIcon(this,true)" onmouseout="changeCopyCodeIcon(this,false)" onfocusout="changeCopyCodeIcon(this,false)"><img src="images/copycode.gif" class="copyCodeImage" />Copy Code</span></span>
    set resmgr = CreateObject("SuperOffice.ResMgr")
    resmgr.Initialize "C:\Program files\SuperOffice"

    lcid = resmgr.GetLCIDForLanguageCode( "IT" )

    msg = "Names:" & chr(10)
    thelist = resmgr.GetLanguageNameList()
    for i= 0 to ubound(thelist)
     msg = msg & thelist(i) & chr(10)
    next
    msg = msg & chr(10) & "Codes:" & chr(10)

    thelist = resmgr.GetLanguageCodeList()
    for i= 0 to ubound(thelist)
     msg = msg & thelist(i) & chr(10)
    next
    msgbox msg,,"Resources"

    txt = resmgr.get("no",11911)
    msgbox txt,,"NO 11911"

 

![](../images/ResMgr.png)  ![](../images/ResMgr2.png)
