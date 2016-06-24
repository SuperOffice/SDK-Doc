<properties date="2016-05-11"
/>

The fields in an archive provider's restriction are constrained using operators. The restrictions used vary according to the ArchiveColumnInfo.RestrictionType specified by the archive provider in its available columns.

You would use the the RestrictionOperations.GetOperatorsForType to find out these values at run-time, but here are the default values provided by SuperOffice.

* **Name**: the programmatic name you use in the ArchiveRestrictionInfo operator property.
* **ValueHint**: describes how many values the operator needs, and how the UI should treat them.
    R=Read Only, W=Writeable, +=one or more values (multi-select)
* **Display Name**: the english name you would show in the GUI if you converted the resource id to a string.

Name

ValueHint

Display Name

RestrictionType 'bool'

set

W

Is

RestrictionType 'int'

equals

W

(=)

greater

W

(&gt;)

less

W

(&lt;)

unequals

W

(&lt;&gt;)

between

W;W

Between

RestrictionType 'decimal'

equals

W

(=)

greater

W

(&gt;)

less

W

(&lt;)

unequals

W

(&lt;&gt;)

between

W;W

Between

RestrictionType 'string'

begins

W

Starts with

contains

W

Contains

is

W

Equals

notBegins

W

Does not begin with

notContains

W

Does not contain

isNot

W

Is not

RestrictionType 'associate'

currentAssociate

R

Current user

associateIsOneOf

W+

Is one of

associateIsNotOneOf

W+

Is not one of

RestrictionType 'listAny'

oneOf

W+

Is one of

notOneOf

W+

Is not one of

RestrictionType 'date'

before

W

Before

date

W

Equals

after

W

After

dateBetween

W;W

Between

beforeToday

R

Before today

today

R

Today

afterToday

R

After today

lastWeek

R;R

Last week

thisWeek

R;R

This week

nextWeek

R;R

Next week

lastMonth

R;R

Last month

thisMonth

R;R

This month

nextMonth

R;R

Next month

lastQuarter

R;R

Last quarter

thisQuarter

R;R

This quarter

nextQuarter

R;R

Next quarter

thisHalf

R;R

This half

thisYear

R;R

This year

RestrictionType 'datetime'

before

W

Before

date

W

Equals

after

W

After

dateBetween

W;W

Between

beforeToday

R

Before today

today

R

Today

afterToday

R

After today

lastWeek

R;R

Last week

thisWeek

R;R

This week

nextWeek

R;R

Next week

lastMonth

R;R

Last month

thisMonth

R;R

This month

nextMonth

R;R

Next month

lastQuarter

R;R

Last quarter

thisQuarter

R;R

This quarter

nextQuarter

R;R

Next quarter

thisHalf

R;R

This half

thisYear

R;R

This year

RestrictionType 'unlimitedDate'

before

W

Before

date

W

Equals

after

W

After

dateBetween

W;W

Between

beforeToday

R

Before today

today

R

Today

afterToday

R

After today

lastWeek

R;R

Last week

thisWeek

R;R

This week

nextWeek

R;R

Next week

lastMonth

R;R

Last month

thisMonth

R;R

This month

nextMonth

R;R

Next month

lastQuarter

R;R

Last quarter

thisQuarter

R;R

This quarter

nextQuarter

R;R

Next quarter

thisHalf

R;R

This half

thisYear

R;R

This year
