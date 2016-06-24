<properties date="2016-05-11"
SortOrder="41"
/>

Authentication is based on **credentials** – evidence that the user must provide to prove identity

Someone – possibly more than one system – evaluates those credentials

–       Credentials must prove an identity (be verifiable)

–       The identity must be mapped to an associate id

–       In SuperOffice, **an identity is an associate id**

During evaluation of credentials, an identity must result, and no-one must vote against admittance

Evaluation is performed by **NetServer** and **trusted plugins** – only. No other code has the authority to authenticate

”Credentials must be verifiable” – a Windows identity is signed by the system in a way that hardens it against tampering, so we can trust it. And AD forced you to present some convincing evidence before trusting you. A password is hashed, and the hash compared to something that is stored in the database. And so on – there has to be something that the user knows or posesses, that we can evaluate. And since that is often a complicated process, it makes sense to delegate it to a specialist, like AD.

The credentials are processed by plugins in a particular order:

1. Ticket

2. Username/password

3. WindowsPerson

4. Impersonation

5. Anonymous

6. UsernameAsDomain

7. WindowsNonPerson.

The order is decided by the priority attribute value on the plugin, and the loop breaks on the first one to say ”I know who this is!”
