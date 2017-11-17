---
uid: Whatsnewin6.2
title: Whats new in 6.2
---


The central element in this version is Unicode support.
=======================================================

This is a change that also will affect all 3rd party integrated solutions. For more information, see [Techdoc](http://techdoc.superoffice.com/?sixUnicodeAnsi.html).
Note: SuperOffice 6.web v.6.1 is already Unicode compatible and hence the v.6.2 release is not necessary to develop and test a 3rd party migrated product.

An upgrade to 6.2 requires that you add a new keycode within 30 days. Contact [support](http://support.superoffice.com) to get a new key code.

New preference:
---------------

Functions/EnableScriptDeveloperMode will bring up a Script Utils menu where you will be able to reload all scripts without restarting SOCRM
There are also a few debugging items and an EventViewer there.

New template variable
---------------------

For platform (esp for use in URL) &lt;pltf&gt;. In the windows client it says "win".

List item for web panels have got choices for <span id="dxMisspelled" word="urlencoding">urlencoding</span>
-----------------------------------------------------------------------------------------------------------

<span word="urlencoding">Default encoding are none to be backwards compatible. Where it is needed this will be taken as Ansi.
The encoding is done as before for Ansi, each byte of the hexvalues are written preceded with % for special characters and characters &lt; 0x20 and &gt; 0x7f.
For Unicode the url is converted to utf8 and the hex values are written byte for byte preceded with %</span>

Database object
---------------

> <span lang="EN-US" lang="EN-US">Database.IsAnsiDatabase</span>
>
> <span lang="EN-US" lang="EN-US">Database.SubstituteTemplateVarsUrlEncoding</span><span lang="EN-US" lang="EN-US">              </span><span lang="EN-US" lang="EN-US"> </span>

<span lang="EN-US" lang="EN-US">SOAppointment object</span>
-----------------------------------------------------------

> <span lang="EN-US" lang="EN-US">SOAppointment.AutoSaveOnChangeIdentity</span>
>
> <span lang="EN-US" lang="EN-US">SOAppointment.AutoSaveOnFlush</span>
>
> <span lang="EN-US" lang="EN-US">SOAppointment.Document</span>

<span lang="EN-US" lang="EN-US"><span lang="EN-US" lang="EN-US">SOAssociate object</span></span>
------------------------------------------------------------------------------------------------

> <span lang="EN-US" lang="EN-US">SOAssociate.ForeignKey</span>
>
> <span lang="EN-US" lang="EN-US"><span lang="EN-US" lang="EN-US">SOAssociate.Groups</span></span>

<span lang="EN-US" lang="EN-US"><span lang="EN-US" lang="EN-US">SOContact</span></span>
---------------------------------------------------------------------------------------

> <span lang="EN-US" lang="EN-US">SOContact.AutoSaveOnChangeIdentity</span>
>
> <span lang="EN-US" lang="EN-US">SOContact.AutoSaveOnFlush</span>

<span lang="EN-US" lang="EN-US"><span lang="EN-US" lang="EN-US">SODocument</span></span>
----------------------------------------------------------------------------------------

> <span lang="EN-US" lang="EN-US">SODocument.AutoSaveOnChangeIdentity</span>
>
> <span lang="EN-US" lang="EN-US">SODocument.AutoSaveOnFlush</span>

<span lang="EN-US" lang="EN-US"><span lang="EN-US" lang="EN-US">SOPerson</span></span>
--------------------------------------------------------------------------------------

> <span lang="EN-US" lang="EN-US">SOPerson.AutoSaveOnChangeIdentity</span>
>
> <span lang="EN-US" lang="EN-US">SOPerson.AutoSaveOnFlush</span>

<span lang="EN-US" lang="EN-US"><span lang="EN-US" lang="EN-US">SOPreference</span></span>
------------------------------------------------------------------------------------------

> <span lang="EN-US" lang="EN-US">SOPreference.GetMaxKeyLength</span>
>
> <span lang="EN-US" lang="EN-US">SOPreference.GetMaxSectionLength</span>
>
> <span lang="EN-US" lang="EN-US">SOPreference.GetMaxValueLength</span>

<span lang="EN-US" lang="EN-US"><span lang="EN-US" lang="EN-US">SOProject</span></span>
---------------------------------------------------------------------------------------

> <span lang="EN-US" lang="EN-US">SOProject.AutoSaveOnChangeIdentity</span>
>
> <span lang="EN-US" lang="EN-US">SOProject.AutoSaveOnFlush</span>

<span lang="EN-US" lang="EN-US"><span lang="EN-US" lang="EN-US">SOSale</span></span>
------------------------------------------------------------------------------------

> <span lang="EN-US" lang="EN-US">SOSale.AutoSaveOnChangeIdentity</span>
>
> <span lang="EN-US" lang="EN-US">SOSale.AutoSaveOnFlush</span>

<span lang="EN-US" lang="EN-US">SOSelection</span>
--------------------------------------------------

> <span lang="EN-US" lang="EN-US">SOSelection.AutoSaveOnChangeIdentity</span>
>
> <span lang="EN-US" lang="EN-US">SOSelection.AutoSaveOnFlush</span>

<span lang="EN-US" lang="EN-US">SOUdefFields</span>
---------------------------------------------------

> <span lang="EN-US" lang="EN-US">SOUdefFields.ByFieldIdentity</span>
>
> <span lang="EN-US" lang="EN-US">SOUdefFields.ByProgId</span>