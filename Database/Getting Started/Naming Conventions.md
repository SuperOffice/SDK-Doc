---
uid: startNamingConventions
title: Naming Conventions
---

Database conventions and table descriptions
----------------------------------------------------------------------------------

This section describes all of the available tables and standard conventions used in the SuperOffice database.

The explanations of the naming convention, the data types and the key codes in use throughout the database are covered first.

Next, the available tables are listed. For each table, a short description is then provided against the table's name. Then each field (or column) in that table is explained in turn.

Conventions used throughout the SuperOffice Database
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Naming conventions

All tables have a primary key as their first column, called "tablename"+"\_id". This uniquely identifies each record entered in the table. This value will stay unchanged for the life of the database. There is one exception to this rule, and that is new records created in a Travel database. Their id's will change when updating the parent database.

All fields referring to other records (foreign keys in relations) also have names ending with the extension "\_id".

All fields selecting an entry from any one of the special lists for business, company interest and so on (this used to be the list text table in earlier versions of SuperOffice.) have names ending with the extension "\_idx" rather than "\_id".  

### Inconsistencies

Some other things to note – areas where consistency has suffered due to the way the schema was defined in earlier versions of the product.

-   Email and URL have separate fields that point to contact\_id

While on the other hand:

-   Address and Phone have a general owner\_id and use a type\_idx to indicate table and role. There may be two different type\_idx values that indicate the same table.

Some time in the future this will probably be sorted out by a major upgrade to SuperOffice which creates a completely new database schema. For the time being, we are stuck with these little annoyances and inconsistencies.

 

Standard data types in use
-----------------------------------------------------------------

The following data types are in use:

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>Name</p></td>
<td><p>Size</p></td>
<td><p>Description</p></td>
</tr>
<tr class="even">
<td><p>short</p></td>
<td><p>2</p></td>
<td><p>16-bit signed integer</p></td>
</tr>
<tr class="odd">
<td><p>long</p></td>
<td><p>4</p></td>
<td><p>32-bit signed integer</p></td>
</tr>
<tr class="even">
<td><p>date_d</p></td>
<td><p>4</p></td>
<td><p>32-bit unsigned integer, number of seconds since January 1, 1970.  Time part is = midnight.</p></td>
</tr>
<tr class="odd">
<td><p>date_t</p></td>
<td><p>4</p></td>
<td><p>32-bit unsigned integer, number of seconds since January 1, 1970</p></td>
</tr>
<tr class="even">
<td><p>longid</p></td>
<td><p>4</p></td>
<td><p>32-bit unsigned integer, record id</p></td>
</tr>
<tr class="odd">
<td><p>string</p></td>
<td><p>&lt;256</p></td>
<td><p>Fixed-size array of bytes terminated by zero-byte, length includes zero-byte</p></td>
</tr>
<tr class="even">
<td><p>lvstring</p></td>
<td><p>&lt;4k</p></td>
<td><p>as string, length specifies maximum length.</p></td>
</tr>
<tr class="odd">
<td><p>float</p></td>
<td><p>8</p></td>
<td><p>floating-point, same as double</p></td>
</tr>
<tr class="even">
<td><p>double</p></td>
<td><p>8</p></td>
<td><p>floating-point</p></td>
</tr>
</tbody>
</table>