<properties date="2016-05-11"
SortOrder="39"
/>

For each unique index, we generate a .GetFromIdx( … ) method on the Row

For each non-unique index, we generate a .GetFromIdx( … ) on the Rows collection

Use them if you can, the indexes guarantee a quick lookup

<img src="../EW%202010%20NetServer%20Enhancements_files/image005.jpg" id="Picture 5" width="324" height="17" />

Reflecting indexes from the database schema into code is done to encourage people to use them. However, if you only need one or two fields, then consider doing a custom SQL instead of fetching complete rows.
