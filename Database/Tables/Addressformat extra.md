---
uid: infoAddressformat
title: Addressformat
---

LabelLayout/LabelLayout2
------------------------

From SIX we replaced the ExtraFlags formatting of labellayout with the two fields LabelLayout and LabelLayout2. We use some special characters to separate the template variables

\[ \] is to add a space between the template variables

\[\\n\] - is to add a new line

|x| - Sometimes only the address part is needed, so a special delimiter will be used in the template string to tell where the name/title/… ends and the
address begins.

Automagic copy street address to postal address
-----------------------------------------------------------------------------------------------

You would in some cases like that the Street address is automatically copied to the postal address, and this is done by adding the following bitmask to the different \*\_zip fields:
This example will automatically copy of street address for The Netherlands, who use a German address format (check this in the admin client – lists – country).

This is the queries that change this:
Open ISQL, HakonClient or another tool like it.

```SQL
Select \* from addressformat where name like ‘Ger%’
```

![](../Images/AddressFormat.JPG) 

To copy street address to postal address, and reverse is done by updating the following in table addressformat.

```SQL
update addressformat set address1\_zip =1024 where addressformat\_id=9
update addressformat set address1\_zip =2048 where addressformat\_id=10

update addressformat set city\_zip =1025 where addressformat\_id=9
update addressformat set city\_zip =2049 where addressformat\_id=10

update addressformat set zip\_zip =1026 where addressformat\_id=9
update addressformat set zip\_zip =2050 where addressformat\_id=10
```

To get it to look up the City or Zipcode information from the table ZipToCity:

```SQL
update addressformat set address1\_zip = 0 where addressformat\_id=9
update addressformat set address1\_zip = 0 where addressformat\_id=10

update addressformat set zip\_zip = 257 where addressformat\_id=9
update addressformat set city\_zip = 514 where addressformat\_id=9

update addressformat set zip\_zip = 258 where addressformat\_id=10
update addressformat set city\_zip = 513 where addressformat\_id=10
```

Note that addressformat\_id = 9  have the Street address information (atype\_idx = 2), and addressformat\_id=10 have the postal address information (atype\_idx=1). To make them copy between the text entered (only when adding a new customer) you update the xxx\_zip value. If you take the number 1024 as HEX, it’s 400, 2048 in HEX is 800, and this tells the CRM client to copy between these lines.

The database manual give a description on each field in Addressformat, but you need to know some of our internal resources (lead text to the address lines)

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>Resource id</p></td>
<td><p>English name</p></td>
</tr>
<tr class="even">
<td><p>14000</p></td>
<td><p>Street Address:</p></td>
</tr>
<tr class="odd">
<td><p>14001</p></td>
<td><p>Postal Address:</p></td>
</tr>
<tr class="even">
<td><p>14002</p></td>
<td><p>Postcode/City</p></td>
</tr>
<tr class="odd">
<td><p>14003</p></td>
<td><p>Country:</p></td>
</tr>
<tr class="even">
<td><p>14004</p></td>
<td><p>Address:</p></td>
</tr>
<tr class="odd">
<td><p>14005</p></td>
<td><p>Address 1:</p></td>
</tr>
<tr class="even">
<td><p>14006</p></td>
<td><p>Address 2:</p></td>
</tr>
<tr class="odd">
<td><p>14007</p></td>
<td><p>Address 3:</p></td>
</tr>
<tr class="even">
<td><p>14008</p></td>
<td><p>State/Zipcode:</p></td>
</tr>
<tr class="odd">
<td><p>14009</p></td>
<td><p>City:</p></td>
</tr>
<tr class="even">
<td><p>14010</p></td>
<td><p>County/Pcode:</p></td>
</tr>
<tr class="odd">
<td><p>14011</p></td>
<td><p>P.O. Box:</p></td>
</tr>
<tr class="even">
<td><p>14012</p></td>
<td><p>Province/Pcode:</p></td>
</tr>
<tr class="odd">
<td><p>14013</p></td>
<td><p>City/Pcode:</p></td>
</tr>
<tr class="even">
<td><p>14014</p></td>
<td><p>Postcode:</p></td>
</tr>
</tbody>
</table>
