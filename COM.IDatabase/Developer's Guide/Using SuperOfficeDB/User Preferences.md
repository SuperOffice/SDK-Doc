---
uid: UserPreferences
title: User Preferences
---


Preferences are stored in the UserPreference table in the database.

Preferences can be defined at six different levels:

> 1 = global defaults
> 2 = system wide
> 3 = database wide (e.g. specific to a satellite)
> 4 = user-group wide (all users in a particular usergroup)
> 5 = user specific
> 6 = machine specific (stored in registry under HKCU)

We always use the most specific preference for the logged in user.

 

db.Preferences.Set "MyThing", "Volume", "off", 4 

sets value for all users in our user-group

volume = db.Preferences.Get("MyThing", "Volume") → "off"

 

db.Preferences.Set "MyThing", "Volume", "quiet", 2 

sets value for all users

volume = db.Preferences.Get("MyThing", "Volume") → "off"

We get “off” instead of “quiet” because the “off” value is defined at a more specific level than the “quiet” value (the group vs the whole system).

 

db.Preferences.Set "MyThing", "Volume", "loud" 

set value for the current user

volume = db.Preferences.Get("MyThing", "Volume") → "loud"

The default is to get and set the current user’s preferences (level 5).

 

### Custom Preferences

Note that you can define whatever section and keynames you want. You do not need to register your section with SuperOffice. Just start using the section and key names directly.

Note that if there is no value defined, you can provide the Get function with a default value to use instead.

balance = db.Preferences.Get("MyThing","Balance") → ""

With no default defined, we get the empty string back. Now let’s try it with a default

balance = db.Preferences.Get("MyThing","Balance","R") → "R"

Now we’ll define a value – once the value is defined, the default is ignored.

db.Preferences.Set "MyThing", "Balance", "L", 2 

sets value for all users

balance = db.Preferences.Get("MyThing","Balance","R") → "L"