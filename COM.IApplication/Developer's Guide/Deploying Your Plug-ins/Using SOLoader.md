---
uid: GuideDeploymentSoloader
title: Using SOLoader
---

SOLoader
========

<span><span><span lang="EN-GB" lang="EN-GB">When a user starts the SuperOffice client from a workstation, we recommend the use of SOLOADER.EXE. This checks SOLOADER.INI to see if a newer version of files specified in SOLoader.ini centrally needs to be downloaded to the client from the central server.</span></span></span>

<span><span><span lang="EN-GB" lang="EN-GB">SOLOADER.INI comprises three different types of section: Module, Files and Run, SOLoader.ini has more information on each section.</span></span></span>

<span><span><span lang="EN-GB" lang="EN-GB">Automate deployment to workstations</span></span></span>
----------------------------------------------------------------------------------------------------

<span><span><span lang="EN-GB" lang="EN-GB">Install the Add-on on the server, and have it update SOLoader.ini located in &lt;</span>centralpath</span>&gt;\\Client\\SOLoader.ini.</span>

<span><span><span lang="EN-GB" lang="EN-GB">Define a new module, for example</span>:</span>
\[Files\]
OurAddOn.exe = Our <span>AddOn</span>
OurAddOn.ini = Our <span>AddOn</span>
<span>OurAddCtrl.ocx</span> = Our <span>AddOn</span></span>

<span><span><span lang="EN-GB" lang="EN-GB">Define a module section, for example:
\[</span>Module<span>:Our</span></span> <span>AddOn</span>\]
Source = Modules/<span>OurAddon</span>
Target = Modules/<span>OurAddon</span>
<span>Regsvr</span> = No
<span>NoOverwrite</span> = No
<span>RebootIfInUse</span> = No
<span>UpdateOnly</span> = No
Shared = No</span>

<span><span><span lang="EN-GB" lang="EN-GB">The next time SOLOADER.EXE runs, the files OURADDON.EXE, OURADDON.INI and</span> OURADDCTRL.OCX</span> in the "\\\\&lt;Server&gt;\\SUPEROFFICE\\MODULES\\OurAddon" folder will be copied to the "C:\\PROGRAM FILES\\SUPEROFFICE\\MODULES\\<span>OurAddon"</span> folder. If <span>*UpdateOnly*</span>*=Yes*, files will only be copied if the user already has them. This can be used where not all associates have the module installed. It causes the files to be updated only if the user already has the module installed.</span>

<span><span>**<span lang="EN-GB" lang="EN-GB">Note:</span>**</span></span> <span><span><span lang="EN-GB" lang="EN-GB">SuperOffice updates will overwrite the existing SOLoader.ini file.</span></span></span>

<span><span><span lang="EN-GB" lang="EN-GB">Module sections</span></span></span>
--------------------------------------------------------------------------------

<span><span><span lang="EN-GB" lang="EN-GB">The file contains one section for each module and regulates how the module should be updated; for example:
</span></span></span>

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td>[Module:SuperOffice Sounds]</td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><span><span><span lang="EN-GB" lang="EN-GB">Target =</span></span></span></p></td>
<td><p><span><span><span lang="EN-GB" lang="EN-GB">Defines which folder copying is done to in the current folder.</span></span></span></p></td>
</tr>
<tr class="odd">
<td><p><span><span><span lang="EN-GB" lang="EN-GB">Source =</span></span></span></p></td>
<td><p><span><span><span lang="EN-GB" lang="EN-GB">Defines which folder copying is done from in the current folder.</span></span></span></p></td>
</tr>
<tr class="even">
<td><p><span><span><span><span lang="EN-GB" lang="EN-GB">Regsvr</span></span></span></span> <span><span><span lang="EN-GB" lang="EN-GB">=</span></span></span></p></td>
<td><p><span><span><span lang="EN-GB" lang="EN-GB">Specifies whether the module contains COM components which need to be entered in the Registry, or not. This will enter the COM components in the</span> Registry</span> the first time SOLoader.exe is run.</span></p></td>
</tr>
<tr class="odd">
<td><p><span><span><span><span lang="EN-GB" lang="EN-GB">NoOverwrite</span></span></span></span> <span><span><span lang="EN-GB" lang="EN-GB">=</span></span></span></p></td>
<td><p><span><span><span lang="EN-GB" lang="EN-GB">Specifies whether files may be overwritten or not. (If you enter</span> <em>NoOverwrite</em></span><em>=Yes</em>, no files will be overwritten).</span></p></td>
</tr>
<tr class="even">
<td><p><span><span><span><span lang="EN-GB" lang="EN-GB">RebootIfInUse</span></span></span></span> <span><span><span lang="EN-GB" lang="EN-GB">=</span></span></span></p></td>
<td><p><span><span><span lang="EN-GB" lang="EN-GB">Specifies whether the computer should be restarted if files are in use.</span></span></span></p></td>
</tr>
<tr class="odd">
<td><p><span><span><span><span lang="EN-GB" lang="EN-GB">UpdateOnly</span></span></span></span> <span><span><span lang="EN-GB" lang="EN-GB">=</span></span></span></p></td>
<td><p><span><span><span lang="EN-GB" lang="EN-GB">Specifies whether the module should only be updated, which means that files will not be copied if you donÃ¢â‚¬â„¢t already have them.</span></span></span></p></td>
</tr>
<tr class="even">
<td><p><span><span><span lang="EN-GB" lang="EN-GB">Shared=</span></span></span></p></td>
<td><p><span><span><span lang="EN-GB" lang="EN-GB">Specify whether the module is added to the system folder or not. Common components are used by several programs and should be shared.</span></span></span></p></td>
</tr>
<tr class="odd">
<td><p><span><span><span><span lang="EN-GB" lang="EN-GB">ForceRegsvr</span></span></span></span> <span><span><span lang="EN-GB" lang="EN-GB">=</span></span></span></p></td>
<td><p><span><span><span lang="EN-GB" lang="EN-GB">Specifies whether the module contains COM components which need to be entered in the Registry, or not. This will register these files every time SOLoader.exe is run.</span></span></span></p></td>
</tr>
<tr class="even">
<td><p><span><span><span lang="EN-GB" lang="EN-GB">Operation =</span></span></span></p></td>
<td><p><span><span><span lang="EN-GB" lang="EN-GB">Operations to be performed on a logical group of files.</span></span></span></p>
<p><span><span><span lang="EN-GB" lang="EN-GB"><strong>Copy</strong></span></span></span> <span><span><span lang="EN-GB" lang="EN-GB"><strong>:</strong> Copy the file(s)</span></span></span></p>
<p><span><span><strong><span lang="EN-GB" lang="EN-GB">Delete:</span></strong></span></span> <span><span><span lang="EN-GB" lang="EN-GB">Delete the file(s) from target. Note, if</span> Regsvr</span> or <span>ForceRegsvr</span>=Yes, the files will be unregistered first.</span></p></td>
</tr>
</tbody>
</table>



|                         |                                                                                                                                                                                                                                                    |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![](../../images/hs-note.gif) | **Note:** If no values are specified for target and source, the following default settings apply: target is the folder SOLOADER.EXE was run from, and source is the folder specified as centralpath in the SUPEROF5.INI file in the target folder. |
