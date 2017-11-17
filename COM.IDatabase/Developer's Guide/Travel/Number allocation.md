---
uid: Numberallocation
title: Number allocation
---

<span>Travel Number Allocation</span>
=====================================

<span class="introduction">This article explains how number allocations increment when a user goes on travel.</span>

Lets assume we are using a new database where no one has been on travel.
When the first person goes on travel, that person will be assigned the base travel number allocation series, 250000.

The second person that goes on travel, assuming the first person is still on travel, will be assigned the base number allocation series plus the increment amount set in the number allocation tab in admin (default 50000). For those who are keeping track, that would be 300000.

The third person that goes on travel, again assuming that both the first and second person are still on travel, will be assigned the base number, plus the previously allocated number slot, plus the increment amount defined in the number allocation tab in admin.  For those who are keeping track, that would be 350000.

This cycle of allocation continues until one person on travel returns.
For example, lets’ say just prior to the fourth person going on travel the first person returns and completes a central update. In that case, the 250000 allocation series is available again and assigned to the fourth person.
To summarize: when someone goes on travel, the number allocation series assigned to that person depends on if there was a previously assigned, but now available, number allocation series or not. If there was a previously assigned series, but has since become available due to a central update, then the next person going on travel will get that previously assigned but now available series.
Now, lets’ look at it more closely.
When a user on travel has been assigned the 250000 number allocation series and uses it to create a contact, where does SuperOffice store the value? How does SuperOffice know what the next number for that number allocation series will be when a new user takes over that range? Oh yes, in the Userpreference table!
Among others, the UserPreference table contains the prefsection, prefkey, and prefvalue columns.

The prefsection column is used to store related information, like groups. The prefkey column points to a specific place, or item, and the prefvalue column is used to actually store the next value.

In the UserPreference table, number allocation looks like:

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Prefsection</strong></p></td>
<td><p><strong>Prefkey</strong></p></td>
<td><p><strong>Prefvalue</strong></p></td>
</tr>
<tr class="even">
<td><p>System</p></td>
<td><p>Counter-XXXXX-X-XXXXXXX</p></td>
<td><p>XXXXXXX</p></td>
</tr>
</tbody>
</table>

The most interesting column is prefkey. It can be split up and defined in four field parts.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><span><strong>Counter</strong> <strong>-</strong> XXXXX-X-XXXXXXX</span></p></td>
<td><p>The first field part is appropriately named, it keeps count.</p></td>
</tr>
<tr class="even">
<td><p><span style="FONT-SIZE: 10pt; COLOR: #333333">Counter-<strong>XXXXX</strong>-X-XXXXXXX</span></p></td>
<td><p>The second field part defines what table number column the counter is used. E.g. the contact number1 or number2 column. Each entity number column has a unique number that correlates to the column field ID. Mathematically, that is: ((table number * 256) + column index).</p></td>
</tr>
<tr class="odd">
<td><p><span style="FONT-SIZE: 10pt; COLOR: #333333">Counter-XXXXX-<strong>X</strong>-XXXXXXX</span></p></td>
<td><p><span style="FONT-SIZE: 10pt; COLOR: #333333">The third field part is only used for documents, and defines the template ID. Documents can have the same number allocation for all document templates, or can have a different number allocation for each document template.<br />
<br />
The number in this field part represents the doctmpl_id (document tempate table ID), otherwise it is 0, for all document templates.<br />
<br />
</span></p></td>
</tr>
<tr class="even">
<td><p><span style="FONT-SIZE: 10pt; COLOR: #333333">Counter-XXXXX -X-<strong>XXXXXXX</strong></span></p></td>
<td><p>Here is where the fun part begins. The forth and final field part is the travel number allocation series this entry belongs to. The lowest number you'll find here is 250000.</p></td>
</tr>
</tbody>
</table>

**
**
So now you’re probably wondering where the next number for the number allocation series used on travel is, right?
 
Scroll back and look at this line:
"The prefsection column is used to store related information, like groups. The prefkey column point to a specific place, or item, and the prefvalue column is actually used to store the next value."**
PREFVALUE
**OK, so there you have it! Here’s an actual value example.

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><span style="FONT-SIZE: 12pt; COLOR: #333333"><strong>Prefsection</strong></span></p></td>
<td><p><span style="FONT-SIZE: 12pt; COLOR: #333333"><strong>PrefKey</strong></span></p></td>
<td><p><span style="FONT-SIZE: 12pt; COLOR: #333333"><strong>Prefvalue</strong></span></p></td>
</tr>
<tr class="even">
<td><p>System</p></td>
<td><p>Counter-1285-0-250000</p></td>
<td><p>250025</p></td>
</tr>
</tbody>
</table>

The table above shows the counter for a contact with the number allocation series 250000. The next contact ID assigned from this number allocation series, by a person on travel, will be 250025.