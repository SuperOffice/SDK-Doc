<properties date="2016-06-24"
SortOrder="10"
/>

These users are configured by internal users (associates) with the functional right to create external users. External users are contact persons registered on contacts in the database that has been given a username and password as an external person. Therefore they are represented in the person table. Since they are given usernames and passwords they also get an associate row in the associate table. We can enable external users in the config file. Like anonymous users external users are also restricted in what they can edit/create. An external user can be authenticated just as we authenticate an internal user, but they can only use NetServer applications. They cannot use SuperOffice client.
