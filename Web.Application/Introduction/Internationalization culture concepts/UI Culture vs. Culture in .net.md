<properties date="2016-06-24"
SortOrder="10"
/>

UI culture means purely the language that we see on the application while the .net culture means the format of the numbers and dates. The UI culture is provided by the satellite assemblies that are dedicated to a particular language. The .net culture comes from the .net framework.

In the CRM.web application both the UI culture and the .net culture will be set. The culture will be set to the language that we select when we log into the system. For example if we selected Spanish as our language when we log in the language in the application will be provided from the Spanish .resx files that is compiled into the Spanish language satellite assembly. In the .net culture which is the number and date formatting will take effect based on the language chosen. The culture of the thread will be set to the language that has been chosen. The date and number formatting will be taken care of by the .net framework , i.e. the date will be written with Spanish month names (25 December 2007), and numbers will be formatted according to Spanish style (1.234,56).
