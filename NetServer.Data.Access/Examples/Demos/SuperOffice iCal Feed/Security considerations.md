<properties date="2016-05-11"
SortOrder="11"
/>

To avoid sending the username + password around the web, we will instead use good old “security by obscurity”. A better name for this is a “nonce” or a “cookie”. If you know the secret word, you are allowed in. If you don’t know the right word, you don’t get anything.

We can’t rely on user input because other systems on the internet will be accessing the calendar on our behalf. We are not going to be around to type in the username + password every time Google wants to check our calendar.

Instead we will use a system user to read the appointments – this avoids relying on a username + password coded into the URL.

To avoid giving everyone access to your calendar, we use a unique random identifier (a GUID) to identify you. This id can be used to check that the request came from someone who knows the GUID – i.e. someone who is allowed to read the calendar. So the GUID is a proxy for the username + password, with the added benefit of not expiring (like a session ticket tends to do) and not changing even if the user’s password changes.

So protect the iCal GUID like it was your password, and you’ll be ok.

As an added precaution we set up the GUID system so that only one GUID is valid at a time. If you log in again, we generate a new GUID and overwrite the old one, so that old logins no longer work.

So if someone steals your iCal link, just make a new one and the old one will stop working.

------------------------------------------------------------------------

**See Also:** [Logging in](../SuperOffice%20iCal%20Feed/Logging%20in.md)
