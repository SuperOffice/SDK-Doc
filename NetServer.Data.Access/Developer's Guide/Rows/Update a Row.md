<properties date="2016-05-11"
SortOrder="21"
/>

Before updating a Row first it must be retrieved by using the Idx class. Just as in Entities, the retrieved data is kept in a cache and all the changes are made to this data in the cache. Only when the Save() method is executed the data will be updated in the database. In this section we will be dealing with updating a row in the database.
