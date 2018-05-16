---
uid: netserver-authentication-overview
title: Authentication Overview
date: 2018-05-08
SortOrder: 3
---
# Authentication Overview

Authentication is based on a **chain of trust**

* We trust ourselves
* We trust Active Directory
* We trust code that is signed in a certain way
  * If Active Directory says **it** knows who the current user is, then **we** trust that statement and believe we are interacting with that user
  * **How** AD knows, is unknown to us. For instance, we never, ever, see the users’ password. Or fingerprint. Or smart-card. Or whatever – we do not and cannot care; this is an important principle

Chain of trust is an essential concept. Look up Kerberos for a good example – I trust Kerberos to authenticate me, the server trusts Kerberos / the server trusts me.

It’s the same as getting an ID in real life – the bank is not rechecking how you got your driver’s license, it simply trusts it. You don’t go through life arguing about your identity at every corner – you invoke a chain of trust (often implicitly), from you, through some middleman, to whoever you want to trust you right now.

## Credentials to Identity

Authentication is based on **credentials** – evidence that the user must provide to prove identity.

Something – possibly more than one system – evaluates user credentials:

* Credentials must prove an identity (be verifiable)
* The identity must be mapped to an associate id
* In SuperOffice, **an associate id is an identity marker**

During credential evaluation, an identity must result, and no-one must vote against admittance.

Evaluation is performed by **NetServer** and **trusted plugins** – only. No other code has the authority to authenticate users.

"Credentials must be verifiable" – a Windows identity is signed by the system in a way that hardens it against tampering, so we can trust it. And AD forced you to present some convincing evidence before trusting you. A password is hashed, and the hash compared against something stored in the database. And since that is often a complicated process, it makes sense to delegate it to a specialist, like AD.

The credentials are processed by plugins in a particular order:

1. Ticket
2. Username/password
3. WindowsUser
4. Impersonation
5. Anonymous
6. UsernameAsDomain
7. WindowsNonPerson.

The order is decided by the priority attribute value on the plugin, and the loop breaks on the first one to say "I know who this is!"

## Order of Things

The standard flow of Authentication/identity is:

* Try to authenticate without parameters
  * I.e., rely on _"environment"_, such as your current Windows login, and possible other implicit knowledge
* If unsuccessful, present a login dialog and authenticate using username and password
  * If successful, then we’re in!
  * Otherwise, retry until successful.

SuperOffice can authenticate without ever seeing a password in a SuperOffice dialog.

The flow - first try, then ask for credentials (username/password), then try again – is common to Win & Web; in fact, all SuperOffice application will follow the same pattern.

However, if you specify a username and password on the command line to the _Windows client_, then that is an override of the ordinary logic.

## Authentication Pipeline

NetServer contains several authentication plugins, for as many different ways of authenticating

* SoCredentials (ticket string)
* Username+password (superoffice user, not AD)
* Windows/AD user, who is a person (not System, Guest etc)
* Impersonation identity
* Anonymous identity
* Username+password, matched against Windows/AD
* Windows/AD user, who is not a person

The plugins are called in this order, and each is given all the available evidence (credentials) at the time of invocation.

Authentication plug-ins are useful in many scenarios. For a Web Server, the IP address the request is coming from is a piece of evidence that can be taken into account. If a certain IP range is prohibited, then the check can refuse login right there. Or time of day... or whatever. You can write all sorts of funny rules into your plugins; overdoing it is easy and leads to major frustration if your policies are too draconian.

Each plugin looks for credentials it understands.

* Such credentials are evaluated, for instance, a password is checked against stored information
* Success results in an associate id

"Expensive" plugins, time-wise, should come late in the order!

## Post Validator

Each plugin can have a post-validator. Post-validators are called after a plugin resolves an identity and can block login if specific conditions are not met. This can be used to block based on any available knowledge.

The post-validator is interesting, for instance, where a company decided to have a policy stating that certain users are only allowed to log on during normal working hours. The plugin would then take the resolved identity, look at the clock and then return whether the user is able to login or not.
