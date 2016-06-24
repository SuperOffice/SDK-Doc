<properties date="2016-05-11"
SortOrder="54"
/>

There is an implicit «AND» between archive restrictions

New in 7: It doesn’t have to be.

You can say «OR»

You can add parentheses:

(type = notDone AND activeDate before today)
OR (type = done AND activeDate = today)

This is almost universally supported. Some very special «restrictions», like those used to tell the Participants provider which associates to include (instead of the provider looking them up in the database) don’t support this functionality, as it would be pretty meaningless. But most ordinary restrictions work this way.

<img src="EW%202010%20NetServer%20Enhancements_files/image019.jpg" id="Picture 18" width="456" height="165" />
