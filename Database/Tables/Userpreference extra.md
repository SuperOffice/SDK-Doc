---
uid: Userpreferencetable
title: Userpreference table
---

Values needed to access the UserPreference tables
=================================================

This table must have special values that are not easy to guess correctly. They are listed below with a description of how to use them.

The User preference override level is the level at which a particular preference is defined.

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Levels</strong></td>
<td><strong>Id</strong></td>
<td><p><strong>Comment</strong></p></td>
</tr>
<tr class="even">
<td>Undefined</td>
<td>0</td>
<td>Undefined value (error)</td>
</tr>
<tr class="odd">
<td>Hard default</td>
<td>1</td>
<td>Default value used if no other value has been specified. Hard-coded default, owner_id == 0</td>
</tr>
<tr class="even">
<td>System wide</td>
<td>2</td>
<td>Value valid for all databases under this licence, owner_id == 0</td>
</tr>
<tr class="odd">
<td>Database</td>
<td>3</td>
<td>Valid for all users of this database, owner_id = travelcurrent.current_id</td>
</tr>
<tr class="even">
<td>Group</td>
<td>4</td>
<td>Valid for all users that are members of this group, owner_id = UserGroup.Id</td>
</tr>
<tr class="odd">
<td>Individual</td>
<td>5</td>
<td>Valid for this associate only, owner_id = associate.id</td>
</tr>
<tr class="even">
<td>PC</td>
<td>6</td>
<td>Valid for this PC only, not connected to user. (Note: stored in the Registry, not in the database)</td>
</tr>
</tbody>
</table>