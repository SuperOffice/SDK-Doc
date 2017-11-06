---
uid: UserPreferences
title: User Preferences
---

Preferences are stored in the UserPreference table in the database.

Preferences can be defined at six different levels:

-   1 = global defaults
-   2 = system wide
-   3 = database wide (e.g. specific to a satellite)
-   4 = user-group wide (all users in a particular group)
-   5 = user specific
-   6 = machine specific (stored in registry under HKLM)

User preferences are stored at multiple levels.

We always use the most specific preference for the logged in user.

**UserPreference sample table**

| **id** | **deflevel** | **maxlevel** | **owner\_id** | **prefsection** | **prefkey** | **prefvalue** |
|--------|--------------|--------------|---------------|-----------------|-------------|---------------|
| 1      | 2            | 5            | 0             | MyThing         | Volume      | quiet         |
| 2      | 4            | 5            | 123           | MyThing         | Volume      | off           |
| 3      | 5            | 5            | 456           | MyThing         | Volume      | loud          |
| 4      | 5            | 5            | 789           | MyThing         | Volume      | quiet         |
| 5      | 2            | 3            | 0             | MyThing         | Color       | purple        |
| 6      | 3            | 3            | 999           | MyThing         | Color       | green         |

The deflevel value defines which level this preference value is defined at. The values here correspond to the list above.

The MaxLevel value defines the max level at which a preference should be shown in the GUI. Some preferences are not controlled by the user, and can only be edited in the admin tool.

The meaning of the owner\_id depends on the deflevel value.

-   deflevel = 1 --&gt; owner\_id = 0
-   deflevel = 2 --&gt; owner\_id = 0
-   deflevel = 3 --&gt; owner\_id = satellite id (travelcurrent\_id)
-   deflevel = 4 --&gt; owner\_id = usergroup\_id
-   deflevel = 5 --&gt; owner\_id = associate\_id
-   deflevel = 6 --&gt; not stored in database; stored in registry

Given the sample data above, a typical user would have the default value for the preference

\[MyThing\] Volume = "quiet"

since this is the system-wide default.

 

A user who is in primary usergroup 123 would get the value "off" for the same preference, since row id 2 overrides the more general preference in row id 1.

The user with associate\_id 456 (even if he was in usergroup 123) would get his user-specific preference, which is "loud".

The user with assoicate\_id 789 would get the value "quiet" because of the preference with id 4. The user-specific preference has a higher priority than any of the others, so it is the one which applies.

 

Note that you can define whatever section and keynames you want. You do not need to register your section with SuperOffice. Just start using the section and key names directly.

Note that if there is no value defined, you won't find a userpreference value in the table. Your code should take care to handle empty preferences in a sensible way.

With no default defined, we get the empty string back.

## See Also
[User Preferences list](../User Preferences/User Preferences.md)
