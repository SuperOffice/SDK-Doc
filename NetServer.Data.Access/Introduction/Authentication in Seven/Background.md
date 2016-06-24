<properties date="2016-05-11"
SortOrder="37"
/>

Security

The old system stored passwords using a reversible encryption. This is inherently insecure (and obsolete); and code reflection makes it impossible to hide the method

Storing passwords in a reversible way is a no-no, but as long as you’re using username+password to reauthenticate (think of the old NetServer Secret), you have no choice. That is one reason why the changes are so pervasive and breaking – it all hangs together.

Flexibility

The world used to be simple, each system its own user/password concept. No more – people expect and require integrations, policies, control, ...

Integration

Integration with Active Directory (Windows) is a feature of Seven, and we needed a way to actually implement it, in a first-class manner and not as a by-product of some ODBC setting

Federated security is not quite a reality, yet. The ”Geneva” framework project at Microsoft, also known as Windows Identity Foundation, is not yet released. We have been tracking it closely and the concepts we use are in line with it.
