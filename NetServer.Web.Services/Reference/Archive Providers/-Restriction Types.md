<properties date="2016-05-11"
/>

# Archive Provider Restriction Types
The fields in an archive provider's restriction are constrained using operators. 
The restrictions used vary according to the ArchiveColumnInfo.RestrictionType specified by the archive provider in its available columns.

You would use the the RestrictionOperations.GetOperatorsForType to find out these values at run-time, but here are the default values 
provided by SuperOffice.

* **Name**: the programmatic name you use in the ArchiveRestrictionInfo operator property.
* **ValueHint**: describes how many values the operator needs, and how the UI should treat them.
    R=Read Only, W=Writeable, +=one or more values (multi-select)
* **Display Name**: the english name you would show in the GUI if you converted the resource id to a string.

## RestrictionType 'bool' 
| Name | ValueHint | Display Name |
| ---- | ------ | ------ |
| set | W |  Is |

## RestrictionType 'int' 
| Name | ValueHint | Display Name |
| ---- | ------ | ------ |
| equals | W | (=)|
| greater| W | (&gt;)|
| less | W | (&lt;)|
| unequals| W | (&lt;&gt;)|
| between | W;W| Between|

## RestrictionType 'decimal'
| Name | ValueHint | Display Name |
| ---- | ------ | ------ |
|equals|W|(=)|
|greater|W|(&gt;)|
|less|W|(&lt;)|
|unequals|W|(&lt;&gt;)|
|between|W;W|Between|

## RestrictionType 'string'
| Name | ValueHint | Display Name |
| ---- | ------ | ------ |
|begins|W|Starts with|
|contains|W|Contains|
|is|W|Equals|
|notBegins|W|Does not begin with|
|notContains|W|Does not contain|
|isNot|W|Is not|

## RestrictionType 'associate'
| Name | ValueHint | Display Name |
| ---- | ------ | ------ |
|currentAssociate|R|Current user|
|associateIsOneOf|W+|Is one of|
|associateIsNotOneOf|W+|Is not one of|

## RestrictionType 'listAny'
| Name | ValueHint | Display Name |
| ---- | ------ | ------ |
|oneOf |W+|Is one of|
|notOneOf|W+|Is not one of|

## RestrictionType 'datetime' – both the date and time are used.
| Name | ValueHint | Display Name |
| ---- | ------ | ------ |
|afterTime|W|After or equal to Datetime|
|beforeTime|W|Before Datetime|
|dateTime|W|Exact Datetime|

## RestrictionType 'date' – only the date part is used. 
| Name | ValueHint | Display Name |
| ---- | ------ | ------ |
|before|W|Before|
|date|W|Equals|
|after|W|After|
|dateBetween|W;W|Between|
|beforeToday|R|Before today|
|today|R|Today|
|afterToday|R|After today|
|thisPeriod|Period|This 1=day/2=week/3=month/4=quarter/5=year|
|thisAndNext|W:int;Period|This and the next N day/week/month/quarter/year|
|nextPeriod|W:int;Period|The next N day/week/month/quarter/year|
|thisAndPrevious|W:int;Period|This and the previous N day/week/month/quarter/year|
|previousPeriod|W:int;Period|This and the previous N day/week/month/quarter/year|
|thisPreviousAndNext|Period|The current and the previous and next 1=day/2=week/3=month/4=quarter/5=year|


## RestrictionType 'unlimitedDate'
| Name | ValueHint | Display Name |
| ---- | ------ | ------ |
|before|W|Before|
|date|W|Equals|
|after|W|After|
|dateBetween|W;W|Between|
|beforeToday|R|Before today|
|today|R|Today|
|afterToday|R|After today|
|thisPeriod|Period|This 1=day/2=week/3=month/4=quarter/5=year|
|thisAndNext|W:int;Period|This and the next N day/week/month/quarter/year|
|nextPeriod|W:int;Period|The next N day/week/month/quarter/year|
|thisAndPrevious|W:int;Period|This and the previous N day/week/month/quarter/year|
|previousPeriod|W:int;Period|This and the previous N day/week/month/quarter/year|
|thisPreviousAndNext|Period|The current and the previous and next 1=day/2=week/3=month/4=quarter/5=year|

## Old date restrictons / 8.x and earlier

| Name | ValueHint | Display Name |
| ---- | ------ | ------ |
|lastWeek|R;R|Last week|
|thisWeek|R;R|This week|
|nextWeek|R;R|Next week|
|lastMonth|R;R|Last month|
|thisMonth|R;R|This month|
|nextMonth|R;R|Next month|
|lastQuarter|R;R|Last quarter|
|thisQuarter|R;R|This quarter|
|nextQuarter|R;R|Next quarter|
|thisHalf|R;R|This half|
|thisYear|R;R|This year|

