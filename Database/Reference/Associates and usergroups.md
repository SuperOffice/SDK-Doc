---
uid: infoAssociateUsergroups
title: Associates and usergroups
---

Associates in Sales & Marketing and Customer Service
====================================================

A user of Sales & Marketing has an associate record in the database table associate. If this user is also given login to Customer Service, then this associate row has a pointer to the ejuser row. Associate.ejuserId = ejuser.id

Note that the ids, flags, access\_level, encryptedCheck and string values used here are just examples. The actual values on your database will be different.

Associate record
----------------

|               |          |      |         |         |            |                         |                         |            |                         |      |           |                         |                           |                         |                        |              |            |              |                 |                                             |                                  |
|---------------|----------|------|---------|---------|------------|-------------------------|-------------------------|------------|-------------------------|------|-----------|-------------------------|---------------------------|-------------------------|------------------------|--------------|------------|--------------|-----------------|---------------------------------------------|----------------------------------|
| associate\_id | name     | rank | tooltip | deleted | group\_idx | lastlogin               | lastlogout              | person\_id | checklistlimit          | type | userFlags | registered              | registered\_associate\_id | updated                 | updated\_associate\_id | updatedCount | isLocation | tzLocationId | locationAddress | ejuserId                                    | encryptedCheck                   |
| 11            | UserName | 0    |         | 0       | 3          | 2014-01-13 12:02:47.000 | 2014-01-14 16:19:51.000 | 34         | 2000-05-25 00:00:00.000 | 0    | $!        | 1760-01-01 00:00:00.000 | 0                         | 2014-01-14 15:19:51.000 | 11                     | 0            | 0          | 0            |                 | [12](infoAssociateUsergroups.html#ejuserId) | 7H:iGeugpFHA7hIKa3qHdIpnire3eAc= |

eJuser record
-------------

|                               |           |           |                |          |             |            |                                    |       |               |        |           |              |             |           |          |            |                   |              |       |                |             |                     |                        |                          |                 |                      |            |               |     |          |                |                         |                         |                     |                |              |                     |                  |              |                              |                               |                         |                      |                      |                            |                 |                   |                         |                     |
|-------------------------------|-----------|-----------|----------------|----------|-------------|------------|------------------------------------|-------|---------------|--------|-----------|--------------|-------------|-----------|----------|------------|-------------------|--------------|-------|----------------|-------------|---------------------|------------------------|--------------------------|-----------------|----------------------|------------|---------------|-----|----------|----------------|-------------------------|-------------------------|---------------------|----------------|--------------|---------------------|------------------|--------------|------------------------------|-------------------------------|-------------------------|----------------------|----------------------|----------------------------|-----------------|-------------------|-------------------------|---------------------|
| id                            | loginname | usergroup | username       | password | firstname   | middlename | lastname                           | email | access\_level | status | signature | notify\_mask | email\_mask | sms\_mask | language | dictionary | default\_category | textareasize | flags | last\_category | profile\_id | hidden\_bag\_bitset | notify\_external\_lock | notify\_external\_source | login\_attempts | last\_login\_attempt | idle\_time | default\_user | sms | new\_gui | dbi\_agent\_id | dbi\_key                | dbi\_last\_syncronized  | dbi\_last\_modified | minute\_offset | date\_format | simultaneous\_login | picture\_id      | not\_present | default\_status\_new\_ticket | default\_status\_add\_message | num\_expanded\_messages | date\_format\_string | time\_format\_string | date\_format\_long\_string | x\_on\_vacation | x\_postpone\_days | x\_standard\_editticket | x\_edit\_horizontal |
| 12 | UserName  | 0         | CS/Displayname | NULL     | SuperOffice | User       | <SuperOffice.User@Superoffice.com> | 123   | 1             |        | 1759      | 1040         | 1552        | en        | en       | 27         | 80x50             | 123          | 3     | -1             | NULL        | NULL                | NULL                   | 0                        | NULL            | 0                    | 3          |               | 1   | -1       |                | 1970-01-01 01:00:00.000 | 2014-01-16 07:32:08.000 | 60                  | 4              | 0            | NULL                | (Ikke til stede) | 8            | 8                            | 5                             | DD2.MM2.YY4             | HH24:MI2             | DD2.MONTH.YY4        | 0                          | 14              | 0                 | 0                       |                     |

Primary usergroup
-----------------

This is the same usergroup with usergroup\_id = associate.group\_idx. A usergroup may have access to none or several categories in Customer Service.

Other usergroups
----------------

A user may belong to several usergroups, and to find all usergroup this associate belongs to you look into the usergrouplink table. Select usergroup\_id from crm7.usergrouplink where assoc\_id = &lt;associate\_id&gt;

Customer Service category group link
------------------------------------

A usergroup may have access to none or more categories. This way it is easy to give a user access to different Customer Service categories based on his usergroup membership. A Customer Service user may both have access to categories in Customer service based on his usergroups, and as individual user. You will see the difference on usergroup based category membership and ejuser membership when you are looking at the Customer Service user - Edit Users - Category memberships. Categories which are gived based on group membership will show without the red delete mark and also have **(from usergroup)** after category name.

Roles
-----

Earlier Customer Service used their own role table, called ej\_role. This table is obsolete from version 7.5, and during upgrade we convert the current roles in to Sales & Marketing roles with functional rights. You find the users role by looking at databasetable userrolelink where associate\_id = associate.associate\_id. An associate may only have 1 role.