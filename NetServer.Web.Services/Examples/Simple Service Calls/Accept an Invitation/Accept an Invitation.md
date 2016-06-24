<properties date="2016-06-24"
SortOrder="5"
/>

Accept an Invitation
====================

In the following section, we will discuss how to accept an Invitation through the NetServer services layer.

Accepting an Invitation can be made through the Services layer with a few code statements. In order to help us understand this section we have made use of Providers provided by NetServer to retrieve information on Invitations for a specific Associate. We will use the Services layer to accept such an Invitation and then show the modified results.

An important point to remember!

In terms of NetServer terminology, Providers are plugins created with the use of a Factory class.

IArchiveProvider is the external standard interface of Archive Providers exposed to the Service layer and the world in general. The interface aggregates the extensible and provider properties of Archive provider classes such as ActivityArchiveProvider, ProjectMemberProvider, InvitationProvider and many more. This acts as an intermediate stage between the pure property interface and the actual provider class that have queries.

1. autolist
