<properties date="2016-06-24"
SortOrder="127"
/>

*Description*:

Retrieves all available customer languages in the system. If the customer language module is not installed an error is returned.

*Out Parameters*:

* languageEntries           - A list of all languages containing the following info:

  * languageCode (en/no/dk/se etc)

  * languageName (English/Norsk etc)

  * virtualDomain – The domain associated with this language’s customer pages

 

*Example*:
```
string sessionKey;

customer.customerService custService = new customer.customerService();

customer.LanguagesStruct tmpLangStruct[];

custService.getLanguages(tmpLangStruct);

foreach(customer.LanguagesStruct i in tmpLangStruct)
{
       textBox1.text i.languageName;
}
```