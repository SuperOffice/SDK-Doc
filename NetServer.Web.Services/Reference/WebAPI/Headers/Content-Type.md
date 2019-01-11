The API supports both JSON and XML responses.

Use the **Accept** header to specify which you would like to receive.

## XML

```http
 GET /api/v1/Contact/123
 Accept: application/xml
```

Returns an XML representation of the contact:

```xml
<ContactEntity>
      <ContactId>123</ContactId>
      <Name>Elan Hoppski</Name>
      <Department>EAvdeling</Department>
      <OrgNr></OrgNr>
      <Number1>123</Number1>
</ContactEntity>
```

## JSON

A request for JSON

```http
 GET /api/v1/Contact/123
 Accept: application/json
```

returns a JSON representation of the same:

```javascript
 { "ContactId": 123,
   "Name": "Elan Hoppski",
   "Department": "EAvdeling",
   "OrgNr": "",
   "Number1": "123"
 }
```
