---
uid: Authentication
title: Authentication
---

The authentication system in 7 is new.

7 uses:

-   Single, common database user
-   Password no longer stored reversibly in the associate record.
-   Plugin-based, open-ended authentication system. You can add your own providers.
-   Safe, password-free reauthentication tickets for web requests and identity transfer
-   No encrypted information in the associate record anymore
-   No re-encryption during replication
-   Industry-standard algorithms for encryption, hashing and signing
-   Everything is NetServer-based



The motivation
==============

### Security

The old system stored passwords using a reversible encryption. This is inherently insecure (and obsolete); and code reflection makes it impossible to hide the method

### Flexibility

The world used to be simple, each system its own user/password concept.

Now people expect to use integrated login and to update their Facebook status every time they click something.

### Integration

Integration with Active Directory (Windows) is a feature of Seven, and we needed a way to actually implement it

COM
---

Database.Login(username, password)

-   Login( "", "" ) = use integrated login. Use NetServer to verify AD identity.
-   Login( "username", "password" ) = use NetServer to verify username + password.
-   Login( secret, "" ) = use NetServer ticket to verify previously created session.

SOApplication.Username returns current user’s id

-   Works as before.

SOApplication.Password

-   in 6: returns current user’s password.
-   in 7: returns an error. Use the new SafeCredentials instead.

SOApplication.Database.SafeCredentials = new method

-   Return the NetServer secret needed to create your own NetServer session from scratch.
-   Replaces the need for the old password property.
-   This contains proof that you know both username + password, so you use it like this:

   set SoApp = CreateObject("SuperOffice.Application");
   secret = SoApp.Database.SafeCredentials
   set db = CreateObject("SuperOfficeDB.Database");
   db.Login( secret, "" );