<properties date="2016-05-11"
SortOrder="52"
/>

The ticket stub is timestamped and valid for 6 hours (in the database)

Every time a ticket is used, it is renewed to the full 6 hours

We also log a bit about how it was used (client name).

You can have as many tickets as you want

* We cache them and do not issue new ones every time you ask

* This keeps the number of tickets at a manageable level

Expired tickets cannot be renewed. They will be deleted in due course (typically when you use a valid ticket, we fire off a thread to clean up)
