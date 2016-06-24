<properties date="2016-05-11"
SortOrder="53"
/>

This table is already used for storing **outgoing** credentials – such as mail server logins for CRM.Web, in 6.x.  In 7 we introduce **incoming** credentials (password, SID) and tickets as types. Custom plugins can add their own information.

<img src="../../EW%202010%20Authentication_files/image001.gif" id="Picture 14" width="605" height="300" />

 

Examples:

<table>
<colgroup>
<col width="12%" />
<col width="12%" />
<col width="12%" />
<col width="12%" />
<col width="12%" />
<col width="12%" />
<col width="12%" />
<col width="12%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>Id</p></td>
<td><p>Assoc</p></td>
<td><p>Type</p></td>
<td><p>SearchName</p></td>
<td><p>Secret</p></td>
<td><p>ValidFrom</p></td>
<td><p>ValidTo</p></td>
<td><p>LastUsed</p></td>
</tr>
<tr class="even">
<td><p>92</p></td>
<td><p>104</p></td>
<td><p>CRM5/PASSWORD</p></td>
<td><p>ADM0</p></td>
<td><p>7P:DnYq1bcQ9eys2z9WkgpxYBpP63M=</p></td>
<td><p>2010-05-11 00:00:00</p></td>
<td><p>9999-12-31 23:59:59</p></td>
<td><p>SUPEROFFICE_ASA\marekv on DEV-MAREK-2: SOCRM.exe (Logging in to SuperOffice CRM)</p></td>
</tr>
<tr class="odd">
<td><p>93</p></td>
<td><p>17</p></td>
<td><p>Ticket</p></td>
<td><p>d3989fc9-4d3a-44da-8f5b-85b0456103ef</p></td>
<td><p>7S:IA087dxXBlSDMkRPqbigesOiIQA=</p></td>
<td><p>2010-05-13 07:09:20</p></td>
<td><p>2010-05-14 13:09:20</p></td>
<td></td>
</tr>
<tr class="even">
<td><p>96</p></td>
<td><p>105</p></td>
<td><p>ActiveDirectory</p></td>
<td><p>S-1-5-21-2132039509-1139229262-60295696-6555</p></td>
<td></td>
<td><p>2010-05-14 00:00:00</p></td>
<td><p>9999-12-31 23:59:59</p></td>
<td></td>
</tr>
</tbody>
</table>

There are checksums to prevent tampering (not shown here) – simply put: change anything important, and the row becomes invalid

Rows are bound to database; copying to another db will not work

For the time being, a user can have **either** password **or** AD authentication; the db model is not limited, but the software is. Allowing multiple credentials could potentially be quite confusing?

”LastUsed” is quite interesting, in that it provides a peek at what is going on, from where. Depending on the application you can get more or less information, and it is updated on every (re)authentication. It’s easy to imagine some ”who is on” tool leveraging this info J - but remember that the same ticket can be passed to multiple places/apps/processes, so it’s not as detailed as you might want.
