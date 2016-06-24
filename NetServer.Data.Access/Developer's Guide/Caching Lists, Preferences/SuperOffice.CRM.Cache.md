<properties date="2016-05-11"
SortOrder="8"
/>

This is one of the namespaces that is related to the caching which provided by the NetServer. The namespace exposes the following classes to the user.

* AssociateCache – This cache holds information about the users. Users are the people who log into the application. These users can be either Associates with login rights, windows or web client users or even external system and anonymous users. The cache is a window, which shows data that is actually stored in the Associate table.
* CategoryCache – This cache holds information about the category, which is a mandatory on a Company in the SuperOffice client. The cache is a window, which shows data that is actually stored in the Category table.
* MDOListTableCache – This is the cache for the items, which are in the MDO tables. These MDO tables can be identified as containers for cached results that represent a Row in a MDO table.
* PriorityCache – This cache holds information about the activities priority. The cache is a window, which shows data that is actually stored in the Priority table.
* ProbCache – This cache holds information about the sale probability. The cache is a window, which shows data that is actually stored in the Prob table.
* RedLetterDayCache – This cache holds information about red letters days of the calendar. RedletterDays may include national holidays and other important days which may be days important to the SuperOffice user. It is possible to store red letter days for more than one country in the database and these may or may not be colored in red in the diary.
* RowCacheBase – This base class for all caches, which is built over the HDB rows.
