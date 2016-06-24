<properties date="2016-06-24"
/>

The fields in an archive provider's restriction are constrained using operators. The restrictions used vary according to the ArchiveColumnInfo.RestrictionType specified by the archive provider in its available columns.

You need to call the MDO agent to return the list shown here at run-time, but here are the default values provided by SuperOffice.

* MDO list name = “restrictionOperators”
* Extra info = restriction type name (e.g. "bool")

Returns the list of valid operator names for the given type name.

The programming name (that you want to use in the restriction) is stored in the SoListItem.Type field. The value hint about how many values is returned in the SoListItem.ExtraInfo field.

* **Name**: the programmatic name you use in the ArchiveRestrictionInfo operator property.
* **ValueHint**: describes how many values the operator needs, and how the UI should treat them.
    R=Read Only, W=Writeable, +=one or more values (multi-select)
* **Display Name**: the english name you would show in the GUI if you converted the resource id to a string.

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Name
ValueHint
Display Name</td>
</tr>
<tr class="even">
<td>RestrictionType 'bool'</td>
</tr>
<tr class="odd">
<td>set
W
Is</td>
</tr>
<tr class="even">
<td>RestrictionType 'int'</td>
</tr>
<tr class="odd">
<td>equals
W
(=)</td>
</tr>
<tr class="even">
<td>greater
W
(&gt;)</td>
</tr>
<tr class="odd">
<td>less
W
(&lt;)</td>
</tr>
<tr class="even">
<td>unequals
W
(&lt;&gt;)</td>
</tr>
<tr class="odd">
<td>between
W;W
Between</td>
</tr>
<tr class="even">
<td>RestrictionType 'decimal'</td>
</tr>
<tr class="odd">
<td>equals
W
(=)</td>
</tr>
<tr class="even">
<td>greater
W
(&gt;)</td>
</tr>
<tr class="odd">
<td>less
W
(&lt;)</td>
</tr>
<tr class="even">
<td>unequals
W
(&lt;&gt;)</td>
</tr>
<tr class="odd">
<td>between
W;W
Between</td>
</tr>
<tr class="even">
<td>RestrictionType 'string'</td>
</tr>
<tr class="odd">
<td>begins
W
Starts with</td>
</tr>
<tr class="even">
<td>contains
W
Contains</td>
</tr>
<tr class="odd">
<td>is
W
Equals</td>
</tr>
<tr class="even">
<td>notBegins
W
Does not begin with</td>
</tr>
<tr class="odd">
<td>notContains
W
Does not contain</td>
</tr>
<tr class="even">
<td>isNot
W
Is not</td>
</tr>
<tr class="odd">
<td>RestrictionType 'associate'</td>
</tr>
<tr class="even">
<td>currentAssociate
R
Current user</td>
</tr>
<tr class="odd">
<td>associateIsOneOf
W+
Is one of</td>
</tr>
<tr class="even">
<td>associateIsNotOneOf
W+
Is not one of</td>
</tr>
<tr class="odd">
<td>RestrictionType 'listAny'</td>
</tr>
<tr class="even">
<td>oneOf
W+
Is one of</td>
</tr>
<tr class="odd">
<td>notOneOf
W+
Is not one of</td>
</tr>
<tr class="even">
<td>RestrictionType 'date'</td>
</tr>
<tr class="odd">
<td>before
W
Before</td>
</tr>
<tr class="even">
<td>date
W
Equals</td>
</tr>
<tr class="odd">
<td>after
W
After</td>
</tr>
<tr class="even">
<td>dateBetween
W;W
Between</td>
</tr>
<tr class="odd">
<td>beforeToday
R
Before today</td>
</tr>
<tr class="even">
<td>today
R
Today</td>
</tr>
<tr class="odd">
<td>afterToday
R
After today</td>
</tr>
<tr class="even">
<td>lastWeek
R;R
Last week</td>
</tr>
<tr class="odd">
<td>thisWeek
R;R
This week</td>
</tr>
<tr class="even">
<td>nextWeek
R;R
Next week</td>
</tr>
<tr class="odd">
<td>lastMonth
R;R
Last month</td>
</tr>
<tr class="even">
<td>thisMonth
R;R
This month</td>
</tr>
<tr class="odd">
<td>nextMonth
R;R
Next month</td>
</tr>
<tr class="even">
<td>lastQuarter
R;R
Last quarter</td>
</tr>
<tr class="odd">
<td>thisQuarter
R;R
This quarter</td>
</tr>
<tr class="even">
<td>nextQuarter
R;R
Next quarter</td>
</tr>
<tr class="odd">
<td>thisHalf
R;R
This half</td>
</tr>
<tr class="even">
<td>thisYear
R;R
This year</td>
</tr>
<tr class="odd">
<td>RestrictionType 'datetime'</td>
</tr>
<tr class="even">
<td>before
W
Before</td>
</tr>
<tr class="odd">
<td>date
W
Equals</td>
</tr>
<tr class="even">
<td>after
W
After</td>
</tr>
<tr class="odd">
<td>dateBetween
W;W
Between</td>
</tr>
<tr class="even">
<td>beforeToday
R
Before today</td>
</tr>
<tr class="odd">
<td>today
R
Today</td>
</tr>
<tr class="even">
<td>afterToday
R
After today</td>
</tr>
<tr class="odd">
<td>lastWeek
R;R
Last week</td>
</tr>
<tr class="even">
<td>thisWeek
R;R
This week</td>
</tr>
<tr class="odd">
<td>nextWeek
R;R
Next week</td>
</tr>
<tr class="even">
<td>lastMonth
R;R
Last month</td>
</tr>
<tr class="odd">
<td>thisMonth
R;R
This month</td>
</tr>
<tr class="even">
<td>nextMonth
R;R
Next month</td>
</tr>
<tr class="odd">
<td>lastQuarter
R;R
Last quarter</td>
</tr>
<tr class="even">
<td>thisQuarter
R;R
This quarter</td>
</tr>
<tr class="odd">
<td>nextQuarter
R;R
Next quarter</td>
</tr>
<tr class="even">
<td>thisHalf
R;R
This half</td>
</tr>
<tr class="odd">
<td>thisYear
R;R
This year</td>
</tr>
<tr class="even">
<td>RestrictionType 'unlimitedDate'</td>
</tr>
<tr class="odd">
<td>before
W
Before</td>
</tr>
<tr class="even">
<td>date
W
Equals</td>
</tr>
<tr class="odd">
<td>after
W
After</td>
</tr>
<tr class="even">
<td>dateBetween
W;W
Between</td>
</tr>
<tr class="odd">
<td>beforeToday
R
Before today</td>
</tr>
<tr class="even">
<td>today
R
Today</td>
</tr>
<tr class="odd">
<td>afterToday
R
After today</td>
</tr>
<tr class="even">
<td>lastWeek
R;R
Last week</td>
</tr>
<tr class="odd">
<td>thisWeek
R;R
This week</td>
</tr>
<tr class="even">
<td>nextWeek
R;R
Next week</td>
</tr>
<tr class="odd">
<td>lastMonth
R;R
Last month</td>
</tr>
<tr class="even">
<td>thisMonth
R;R
This month</td>
</tr>
<tr class="odd">
<td>nextMonth
R;R
Next month</td>
</tr>
<tr class="even">
<td>lastQuarter
R;R
Last quarter</td>
</tr>
<tr class="odd">
<td>thisQuarter
R;R
This quarter</td>
</tr>
<tr class="even">
<td>nextQuarter
R;R
Next quarter</td>
</tr>
<tr class="odd">
<td>thisHalf
R;R
This half</td>
</tr>
<tr class="even">
<td>thisYear
R;R
This year</td>
</tr>
</tbody>
</table>
