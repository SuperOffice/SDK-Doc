<properties date="2016-06-24"
SortOrder="6"
/>

Activity Archive is unique compared to the other archives provided by NetServer, since it merges Appointments, Documents and Sales into one Archive. The filter applies only to ContactActivityArchiveProvider and to ProjectActivityArchiveProvider. These providers make use of the filter setting when building the query that is used when retrieving the data from the database.

It should be noted that specific archive providers such as Sales do not make use of the filter settings since they assume that the outer archive class either the ContactActivityArchiveProvider or ProjectActivityArchiveProvider takes care of it.

1. autolist
