---
uid: Travelcurrenttable
title: Travelcurrent table
---

Value for the encryptedComm field in travelcurrent
===================================================

|                   |        |                                                                       |
|-------------------|--------|-----------------------------------------------------------------------|
| **encryptedComm** | **Id** | **Comment**                                                           |
| None              | 0      | Received travel data are not encrypted (only ZIPed)                   |
| Serial            |  1     | Received travel data are encrypted using licence serial number as key |
| BF128             | 2      | Received travel data are ancrypted unsing a 128-bit key               |

 

**Database type**

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Databasetype</strong></td>
<td><strong>Id</strong></td>
<td><strong>Comment</strong></td>
</tr>
<tr class="even">
<td>Sybase Anywhere</td>
<td>1</td>
<td>requires owned license from Sybase Anywhere.</td>
</tr>
<tr class="odd">
<td>C-tree</td>
<td><p>2</p></td>
<td>OBSOLETE!</td>
</tr>
<tr class="even">
<td>MSDE</td>
<td>3</td>
<td>Microsoft MSDE (Microsoft Desktop Engine)</td>
</tr>
<tr class="odd">
<td>BuildIn</td>
<td><p>4</p></td>
<td>Replaced c-tree from SIX, actually Sybase which is locked to the SuperOffice application.</td>
</tr>
<tr class="even">
<td>SQL Express</td>
<td>5</td>
<td>Microsoft SQL Express 2005-&gt;</td>
</tr>
</tbody>
</table>