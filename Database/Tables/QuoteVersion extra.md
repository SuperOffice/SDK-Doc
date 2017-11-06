---
uid: QuoteVersiontable
title: QuoteVersion table
---

State of a Quote Version

used in: QuoteVersion.State; QuoteVersion.ArchivedState

|                            |                                                                                                                         |
|----------------------------|-------------------------------------------------------------------------------------------------------------------------|
| **State or ArchivedState** | **Comment**                                                                                                             |
| 0                          | State unknown                                                                                                           |
| 1                          | Draft that has been calculated, and ERP has verified it as OK                                                           |
| 2                          | This is a draft that has not been calculated, prices and other attributes may be 'invalid' relative to ERP system rules |
| 3                          | Draft has been checked, and there was a problem that needs (human) approval                                             |
| 4                          | Draft with potential problems has been human-approved                                                                   |
| 5                          | Draft has been checked, there was a problem, and (human) approval was NOT granted                                       |
| 6                          | Sent to customer, and is now a legally binding document                                                                 |
| 7                          | Archived - previous state saved in ArchivedState, newer versions exist                                                  |
| 8                          | Version was rejected be the customer - we lost the sale                                                                 |
| 9                          | Quote was accepted and the sale is 'Sold'                                                                               |

Enumeration used in several tables
==================================

used in: QuoteVersion.Status; QuoteAlternative.Status; QuoteLine.Status

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Status</strong></p></td>
<td><strong>Comment</strong></td>
</tr>
<tr class="even">
<td>0</td>
<td>OK, all is good</td>
</tr>
<tr class="odd">
<td>1</td>
<td>All is good, but there is some additional information that the user should be made aware of.</td>
</tr>
<tr class="even">
<td>2</td>
<td>There is a problem that the user must be made aware of.</td>
</tr>
<tr class="odd">
<td>3</td>
<td>There is a problem that the system will not be able to get around. The user needs to do something. Example: The user has registered a quoteline that is discountinued and the amount the user has registered is not in stock.</td>
</tr>
</tbody>
</table>