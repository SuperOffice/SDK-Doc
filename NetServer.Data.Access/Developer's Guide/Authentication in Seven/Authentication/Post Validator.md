<properties date="2016-05-11"
SortOrder="44"
/>

Each plugin can have a post-validator

Post-validators are called after a plugin resolves an identity

Post-validators can block login if specific conditions are not met

* This can be used to block based on any available knowledge.

The full potential of this system is not yet leveraged

Possible use-case: block certain authentication methods based on IP ranges (can’t use method X if you’re on an outside network).
