<properties date="2016-05-11"
SortOrder="5"
/>

Plugins are created using a Factory class. When creating a Document Plugin we make use of the DocumentPluginBase class, which is located in the SuperOffice.CRM.Documents namespace.

Document plugins are responsible for two things: putting documents into something, and getting documents out of something.

These plugins are simpler than the windows client’s document plugins, since they have no user interface or extra features (like versioning, custom commands, custom document dialog). These features will be added in a later release.

This document plugin is a low-level API aimed at getting documents in and out of a document store.

 

1. autolist
