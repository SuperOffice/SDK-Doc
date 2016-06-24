<properties date="2016-06-24"
SortOrder="1"
/>

A service is primarily a method exposed by the NetServer to manipulate the data or enhance the presentation of the data in the SuperOffice database. In the NetServer the services infrastructure has been built using the Agent and Carrier software patterns. The agent object presents the services and the Carrier object represents the data passed back and forth to the server by the agent, depending on the configuration.

 All the services are called through an Agent that is designed to handle a specific business area, for example there will be a dedicated Agent to handle the services intended for the sales area. All the agents live in the SuperOffice.CRM.Services namespace.

The objective of the NetServer services is to provide a simple yet powerful API to access SuperOffice CRM functionality. The service API lets you work with the database without having to know the details of how data is stored inside the database. It presents a high-level API where all the hard work of language decoding, security checks, database selects and joining tables are handled for you. A single service call will represent many database queries, and contain business logic, user-preference checking, and default handling.

1. autolist
