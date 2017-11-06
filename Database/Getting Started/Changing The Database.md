---
uid: ChangingTheDatabase
title: Changing The Database
---

Triggers
========

Adding your own triggers is safe, as long as they do not change the behavior of the SQL.

They will not be copied into the travel databases or satellite databases when these are generated.

You should not cause unexpected errors, since SuperOffice is naive about such things.

For example: if you use a trigger to do extra validation, then you should not signal failure by raising an error. SuperOffice will react poorly to being told its insert of a contact record failed because of a StupidValidationFailed error. SuperOffice treats this error in the same way as a DatabaseIsOnFire error. It tries to shut down as quickly as possible.

 

Stored Procedures
-----------------

SuperOffice does not care about your stored procedures, and does not know anything about them. They will not be copied into the travel databases or satellite databases when these are generated.