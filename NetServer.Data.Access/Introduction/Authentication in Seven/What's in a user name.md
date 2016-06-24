<properties date="2016-05-11"
SortOrder="46"
/>

The username/password string pair can actually be one of a number of things

* SuperOffice associate name + password

* AD Domain user name + domain password

* SuperOffice ticket string + &lt;don’t care&gt;

* SuperOffice email address + password

Iff exactly one associate has this email address, and no (other) associate has this name

Your code should never assume that the user typed a user name

Go ask NetServer for the current user name

And  - just to drive the point home – the plugin architecture means that this is an open-ended system and the “username” could be anything **else** that some plugin understands (fingerprint hash? Blood type signature?). It’s just a convenient way to carry a pair of strings!
