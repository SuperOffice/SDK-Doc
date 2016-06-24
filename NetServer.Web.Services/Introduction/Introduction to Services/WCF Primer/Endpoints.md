<properties date="2016-06-24"
SortOrder="5"
/>

Some typical web-service providers and consumers:
Providers
=========

NetServer Application Server
Classic back-end for web when in remote mode.
Sales & Marketing Web (i.e. CRM.web)
Services exposed as part of the web client.
SoWcfHost
Developer tool for working with NetServer WebServices
Consumers
Sales & Marketing Web (i.e. CRM.web)
The web server talks to the back-end web-services using NetServer proxies.
Customer Service (i.e. eJournal)
The CGI scripts in C++ use the gSOAP library to talk to the back-end web services.
Pocket
Pocket uses Java and Sun Metro to generate proxies.
Third party clients
Use the SDK or PHP/Java/Perl to talk to the web services.
