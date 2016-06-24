<properties date="2016-05-11"
SortOrder="51"
/>

Starting and stopping threads is not free.  You should expect significant savings before resorting to multithreading.

Synchronization is hard. If your problem is in any way dependent on who finishes first, or there are shared data structures… then you are in the sync world

Do you have multiple cores; or are you waiting for external data?   If not, then there is no point in multithreading.

Again, it all depends on your problem. Multithreading is a poerful tool and you should know about it, and about what NetServer can do to help you. Beyond that it’s your call.
