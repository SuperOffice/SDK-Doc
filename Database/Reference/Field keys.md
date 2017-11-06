---
uid: Fieldkeys
title: Field keys
---

These are codes used in the database descriptions.  

Field and key definitions
=========================

**Key definitions**
**Size**
**Description**
**Null**

N

means no null values allowed

 

N\*

user forced to enter a value

**Key**

P

Primary key

 

U

Unique

 

S

Secondary key

 

C

Combined (described below table)

 

X

Clustered index on databases that support it

 

F

Foreign key, Relation describes to what table

 

Field extra information (Conceptualfield.checksum)
==================================================

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Category</strong></p></td>
<td><p><strong>Code</strong></p></td>
<td><p><strong>Description</strong></p></td>
</tr>
<tr class="even">
<td><p><strong>Nothing</strong></p></td>
<td><p>0</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><strong>Tablenumber</strong></p></td>
<td><p>A</p></td>
<td><p>Table number in table/record relation</p></td>
</tr>
<tr class="even">
<td><p><strong>Recordnumber</strong></p></td>
<td><p>B</p></td>
<td><p>Record umber in table/record relation</p></td>
</tr>
<tr class="odd">
<td><p><strong>DebugInfo</strong></p></td>
<td><p>D</p></td>
<td><p>Debug information (ToString override in netServer)</p></td>
</tr>
<tr class="even">
<td><p><strong>Encrypted</strong></p></td>
<td><p>E</p></td>
<td><p>Encrypted</p></td>
</tr>
<tr class="odd">
<td><p><strong>DbFullText</strong></p></td>
<td><p>H</p></td>
<td><p>Fulltext search, database-specific functionality from eJournal</p></td>
</tr>
<tr class="even">
<td><p><strong>Freetext</strong></p></td>
<td><p>I</p></td>
<td><p>Freetext index</p></td>
</tr>
<tr class="odd">
<td><strong>Just description</strong></td>
<td>J</td>
<td>Short description</td>
</tr>
<tr class="even">
<td><p><strong>Hash source</strong></p></td>
<td><p>K</p></td>
<td><p>Source field for encrypted hash</p></td>
</tr>
<tr class="odd">
<td><p><strong>Areafilter</strong></p></td>
<td><p>L</p></td>
<td><p>Area filter field</p></td>
</tr>
<tr class="even">
<td><strong>NewSize</strong></td>
<td>N</td>
<td>New size in current version. Triggers special processing, but kept in standard bits (possibly not the best idea around?)</td>
</tr>
<tr class="odd">
<td><p><strong>Required</strong></p></td>
<td><p>M</p></td>
<td><p>GUI enforces value</p></td>
</tr>
<tr class="even">
<td><p><strong>SoundEx</strong></p></td>
<td><p>O</p></td>
<td><p>Soundex transform</p></td>
</tr>
<tr class="odd">
<td><p><strong>Hash</strong></p></td>
<td><p>Q</p></td>
<td><p>Encrypted hash (checksum)</p></td>
</tr>
<tr class="even">
<td><p><strong>Freetext</strong></p></td>
<td><p>R</p></td>
<td><p>Required for freetext index</p></td>
</tr>
<tr class="odd">
<td><p><strong>Trash</strong></p></td>
<td><p>T</p></td>
<td><p>Obsolete</p></td>
</tr>
<tr class="even">
<td><p><strong>System</strong></p></td>
<td><p>Y</p></td>
<td><p>System field, defined by SuperOffice</p></td>
</tr>
<tr class="odd">
<td><strong>ZevenOne</strong></td>
<td>Z</td>
<td>New in 7.1</td>
</tr>
</tbody>
</table>

 

 

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Additional codes for indexes:</strong></p></td>
</tr>
<tr class="even">
<td><p>F = Foreign key</p></td>
</tr>
<tr class="odd">
<td><p>S = Subkey (index)</p></td>
</tr>
<tr class="even">
<td><p>C = Element of Combined index</p></td>
</tr>
<tr class="odd">
<td><p>P = Primary key</p></td>
</tr>
<tr class="even">
<td><p>U = Unique key</p></td>
</tr>
<tr class="odd">
<td><p>X = Clustered index</p></td>
</tr>
</tbody>
</table>