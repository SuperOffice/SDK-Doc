<properties date="2016-05-11"
SortOrder="43"
/>

NetServer contains seven (7) different plugins, for as many different ways of authenticating

–       SoCredentials (ticket string)

–       Username+password (superoffice user, not AD)

–       Windows/AD user, who is a person (not System, Guest etc)

–       Impersonation identity

–       Anonymous identity

–       Username+password, matched against Windows/AD

–       Windows/AD user, who is not a person

The plugins are called in this order. Each plugin is given all the available evidence (credentials)

In the future, they can be useful in many possible scenarios. For a Web Server, the IP address the request is coming from is a piece of evidence that can be taken into account. If a certain IP range is prohibited, then the check can refuse login right there. Or time of day... or whatever. You can write all sorts of funny rules into your plugins; overdoing it is easy and leads to major frustration if your policies are too draconian.

The post-vote is also interesting – for instance, one could have a policy saying that certain users are only allowed to log on during normal working hours. A plugin would then take the resolved identity, look at the clock and then vote.

Each plugin looks for credentials it understands

* Such credentials are evaluated, for instance, a password is checked against stored information

* Success results in an associate id

The first one to resolve the identity breaks the loop.
”Expensive” plugins should come late in the order!   Expensive = any kind of Internet lookup

You may be used to having the Internet a few milliseconds away. But – especially on a laptop in some odd place – it may look like you have connectivity, but not have it; or you may have connectivity, but it’s slow or blocked. Unless you aboslutely need to look up something, don’t; and do put such plugins at the end of the queue.
