<properties date="2016-05-11"
SortOrder="36"
/>

NetServer has its own OSQL interception system

Used by Sentry, travel transaction logging, freetext index, …

You can have one too!
– on insert/update/delete

SoftTrigger defines a way to set a pre- or post-execution callback, for a specific table

<img src="EW%202010%20NetServer%20Enhancements_files/image002.jpg" id="Picture 2" width="467" height="165" />

<img src="EW%202010%20NetServer%20Enhancements_files/image003.jpg" id="Picture 3" width="471" height="65" />

Your delegate is called before or after execution

”Before” is after TravelTransactionLogger, SoundexUpdater, Sentry, Registered/LastUpdated and TimeZone have been there

You can change the OSQL (very carefully)

”After” is, well, after; that would probably be just to log it.
