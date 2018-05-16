---
uid: netserver-authentication-tickets
title: Ticket Overview
date: 2018-05-08
SortOrder: 4
---
# Tickets

SuperOffice is a platform that consists of several applications and modules. These include:

* Win Client / Portal / Web Panel / Partner app
* Web Sales Client / Batch / Reporter / OLE DB Provider
* Web Service Client / request / next request / next request ...

SuperOffice must successfully allow an authenticated users’ identity to transit in such a way that does not reveal too much, and that is hard to falsify, steal and misuse.

Identity transfer is **essential** in any non-trivial system, because the world is much larger than one program (technically, one process or AppDomain is _"one program"_). It must be reasonably secure, scalable and fast.

## Identity Transfer Tickets

SuperOffice **cannot** reproduce a users authentication, because it’s quite possible the credentials were never seen!

Enter the **ticket**, a string that proves that you are currently authenticated, without revealing who you are or how you got there. Like a paper train ticket, it is only valid if it has a _"stub"_.

A ticket is created upon successful authentication, and the stub is persisted along with the credential record in the database.

A ticket itself does not contain a user ID, the users’ password, or anything else that is intelligible. When viewed in the database, it's unrecognizable to prevent falsify valid tickets.

A ticket is base-64 encoded, and when unpacked it is appears as {3F2504E0-4F89-11D3-9A0C-0305E82C3301};1254895 – and that is all. Essentially we have two random numbers – one is very large (the [GUID](http://en.wikipedia.org/wiki/Globally_Unique_Identifier)); the other is smaller.

We use the GUID to find the stub in the credentials table, and the other number to match a hash in the same row. You can’t reconstruct the ticket from the hash, it's a one-way street, but you can get the hash from the ticket. By itself, the ticket by design doesn’t tell you anything useful.

To get information from a ticket, it must be given to NetServer for authentication. When authenticated, you know who you are and your request will proceed to execute; otherwise you’re out of luck.

## Issuing Tickets

When authenticated with NetServer, you can get a ticket:

```csharp
SoContext.CurrentPrincipal.GetSafeCredentials()
```

A ticket is also part of the result upon a successful Authenticate against WebService, as well as available as template variable called `<usec>`.

Later on, you can pass in the ticket in a WebRequest header

You can also send it in, as the username

* This means that **anyplace** that takes username/password, ticket/blank will work
* This applies to Win and Web equally – main clients, OLE DB, URL authentication, etc.

Multiple GetSafeCredentials() calls within the same process and validity period will return the same ticket. A ticket represents an identity, **NOT** a particular session.

It is quite OK for multiple sessions to share one ticket. Tickets have a sliding expiration, meaning each time they are used, the valid time is reset.

Supplying a ticket string wherever a user name is requested is a way to minimize the impact on other software. Instead of having to write special calls to authenticate using tickets, you simply use it in place of the user name, even as a command-line parameter to _SOCRM.exe_!

## Ticket Renewal

The ticket stub is timestamped in the database and valid for 6 hours. Every time a ticket is used, NetServer logs how it was used (client name), and then it is renewed for another 6 hours.

Tickets are cached, thereby eliminating the need to re-issued new ones each time one is requested. This keeps the number of tickets at a manageable level.

Expired tickets are not renewed. They are deleted on a background thread the next time a valid ticket is created.

## Credentials Table

The Credentials table stores **outgoing** credentials – such as mail server logins for CRM web. Version 7 introduced **incoming** credentials (password, SID) and tickets as types. Custom plugins can add their own information.

![Credentials Table](../../EW%202010%20Authentication_files/image001.gif)

Examples:

|Id |Assoc  |Type   |SearchName |Secret |ValidFrom  |ValidTo    |LastUsed|
|---|-------|-------|------------|-------|----------|-----------|--------|
|92|104|CRM5/PASSWORD|ADM0|7P:DnYq1bcQ9eys2z9WkgpxYBpP63M=|2010-05-11 00:00:00|9999-12-31 23:59:59|SUPEROFFICE_ASA\marekv on DEV-MAREK-2: SOCRM.exe (Logging in to SuperOffice CRM)|
|93|17|Ticket|d3989fc9-4d3a-44da-8f5b-85b0456103ef|7S:IA087dxXBlSDMkRPqbigesOiIQA=|2010-05-13 07:09:20|2010-05-14 13:09:20||
|96|105|ActiveDirectory|S-1-5-21-2132039509-1139229262-60295696-6555||2010-05-14 00:00:00|9999-12-31 23:59:59||

A checksum column prevents tampering (not shown here) – simply put: change anything important, and the row becomes invalid.

Rows are bound to database; copying to another db will not work

For the time being, a user can have either password or AD authentication; the db model is not limited, but the software is. Allowing multiple credentials could potentially be quite confusing.

"LastUsed" provides a peek at what is going on and from where. Depending on the application you can get more or less information, and it is updated on every (re)authentication. It’s easy to imagine a "who is on" tool leveraging this info - but remember that the same ticket can be passed to multiple places/apps/processes, so it’s not as detailed as you might want.