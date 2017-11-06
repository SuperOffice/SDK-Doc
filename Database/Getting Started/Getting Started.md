<properties date="2016-05-11"
SortOrder="3"
/>

This section will give you an overview of the SuperOffice Database and explain the basic elements that you need to get started.

 

We are now going to look at how the database is put together, and how the different tables in the database relate to the user interface. This should make it easier to understand what the components are doing for you.

As a general principle, the SuperOffice database is very lax. There are no declared constraints on tables. Referential integrity is not enforced strictly, and the structure would make a computer science professor or system administrator shudder.

However, there is a reason for this lax design.

People are not strict or formal. A CRM system is mainly about people, what they do and when. It is not an accounting system. It is not subject to the rigors of accounts auditing. People delete things and then want them back. People change things around and merge in partial data from external sources.

The SuperOffice database schema is intended to be flexible while being understandable and efficient.

First we will look at some of the core concepts in the SuperOffice universe, then we will map the tables to the user interface, then finally we will look at some of the SuperOffice specific details in the database model. This should explain a bit about how the SuperOffice software uses the database.

1. autolist
