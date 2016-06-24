<properties date="2016-05-11"
SortOrder="40"
/>

Authentication is based on a **chain of trust**

–       We trust ourselves

–       We trust Active Directory

–       We trust code that is signed in a certain way

* If Active Directory says **it** knows who the current user is, then **we** trust that statement and believe we are interacting with that user

* **How** AD knows, is unknown to us. For instance, we never, ever, see the users’ password. Or fingerprint. Or smartcard. Or whatever – we do not and cannot care; this is an important principle

 

Chain of trust is another essential concept. Look up Kerberos for a good example – I trust Kerberos to authenticate me, the server trusts Kerberos / the server trusts me.

It’s the same as getting an ID in real life – the bank is not rechecking how you got your driver’s license, it simply trusts it (and maybe that is not so smart, but that is another story). You don’t go through life arguing about your identity at every corner – you invoke a chain of trust (often implicitly), from you, through some middleman, to whoever you want to trust you right now.
