<properties date="2016-06-24"
SortOrder="126"
/>

*Description*:

Finds the extra fields that are connected to customer, company or ticket. The structure returned contains information about the extra field, such as data type, name and ID. The method will only return extra field marked as external.

 

*In Parameters*:

* sessionKey            - A valid session key

* domain      - The domain to list. Can be “customer”, “company” or “ticket”. Only the extra fields connected to the domain specified will be returned.

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* extraFields            - The available extra fields. Contained in the structure are the following fields:

  * fieldName                   - Internal name of the field. i.e.: ”customer.x\_1”

  * displayField                - The external name of the extra field.

  * fieldId                         - The internal ID. Same as the number in *fieldName*

  * fieldType                     - Data type of the field. See appendix for legal types.

 

*Example*:
```
string sessionKey;

customer.customerService custService = new customer.customerService();

if(custService.login("test","test",out sessionKey)=="0")
{
       customer.ExtraFieldsStruct[] extraFields;
       custService.getExtraFields(sessionKey, "customer", out extraFields);
}
```