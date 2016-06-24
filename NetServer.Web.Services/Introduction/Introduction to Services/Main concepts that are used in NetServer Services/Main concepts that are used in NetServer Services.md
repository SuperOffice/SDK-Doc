<properties date="2016-06-24"
SortOrder="17"
/>

* Agent – Based on the Agent pattern SuperOffice has created a set of objects that will perform work for you. A typical Agent in the NetServer consists of service methods that are capable of creating, retrieving, updating and deleting. NetServer provides Agents such as ContactAgent, PersonAgent and many more, which are located in the SuperOffice.CRM.Services namespace.

* Carriers – These objects will carry data between the Agent and the NetServer Services. There are two kinds of carriers exposed namely,

* Simple Read-Only Carriers

* Complex Entity Carriers

The main difference between these two types of carriers is that Complex Entity Carriers can be updated and sent back for saving to the database, while Simple Read-Only Carriers cannot be saved back to the database.

* SoSession - A session retrieves data regarding the currently logged in user and keep them in the cache. Session Cache holds authentication information about the logged in user, associate of the user, business Id of the company that the user belongs to, reference data and many more. Each time a new user logs in a session is created.

1. autolist
