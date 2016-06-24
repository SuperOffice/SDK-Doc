<properties date="2016-06-24"
SortOrder="8"
/>

An anonymous user is used when you call a service agent without authenticating. We must configure the anonymous user in the database and in the config file. The anonymous user has very limited number of data rights. It is only allowed to view data in the database. The SOAdmin can set more data rights to anonymous users. And we mainly create anonymous users in SoAdmin. These explicit anonymous users authenticate just as internal users do. These things will be further discussed in the latter part of this section.

An important point to remember!

If authentication fails then an exception will be thrown because the services layer behaves different than the database layer.
