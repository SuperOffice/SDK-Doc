<properties date="2016-05-11"
SortOrder="42"
/>

The standard flow of Authentication/identity is like this:

* Try to authenticate without parameters

–       I.e., rely on ”environment”, such as your current Windows login, and possible other implicit knowledge

* If this does not work, present a login dialog; then try to authenticate using this username and password

–       If success, then we’re in J

–       Otherwise, retry a few times and then give up

Note how we can authenticate without ever seeing a password in a SuperOffice dialog

This flow – first try, then ask for more info (username/password), then try again – is common to Win & Web; in fact, all SuperOffice application will follow that pattern.

Note that if you specify a username and password on the command line to the Windows client, then that is an override of the ordinary logic.
