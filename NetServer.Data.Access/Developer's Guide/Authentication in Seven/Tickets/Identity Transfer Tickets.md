<properties date="2016-05-11"
SortOrder="50"
/>

We **cannot** reproduce the original authentication, because it’s quite possible we never saw those credentials!   And all the code is effectively public, given Reflection tools

Enter the **ticket**, a string that proves that you are currently authenticated, without revealing who you are or how you got there.   Like a paper ticket, it is only valid if it has a ”stub”

The stub is in the database, and is put there when the ticket is issued

A ticket itself does not contain a user ID

If you can see the database, then you still can’t falsify valid tickets. A ticket cannot be deduced from the database.

If you can write to the database ... But if you can do that, then you already have all the access you need.

A ticket does not contain the users’ password, or anything else that is intelligible – it’s just a ticket

It’s base-64 encoded. If you unpack it, you will see something like {3F2504E0-4F89-11D3-9A0C-0305E82C3301};1254895 – and that is all. Essentially we have two random numbers – one is very large (the GUID, <http://en.wikipedia.org/wiki/Globally_Unique_Identifier> ); the other is smaller.

We use the GUID to find the stub in the credentials table, and the other number to match a hash in the same row. You can’t reconstruct the ticket from the hash (one-way street!), but you can get the hash from the ticket. By itself, the ticket doesn’t tell you anything useful, which is by design.

If you want information from a ticket, give it to NetServer for authentication. If you succeed, you know who you are and your request will proceed to execute; otherwise you’re out of luck.
