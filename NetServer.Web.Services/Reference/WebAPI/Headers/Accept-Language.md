
## Multiple Languages

The API supports internationalization.

A request without an **Accept-Language** header returns the string
identifiers unchanged. Multi-language names are unchanged.

```http
 GET /api/v1/List/Category/Items/2
```

returns a multi-language string `NO:"Leverandør";US:"Supplier"` - which is not so useful when we want to show something to the user.

If we add the `Accept-Language: en` header, then we get back a parsed result:

```http
 GET /api/v1/List/Category/Items/2
 Accept-Language: en
```

returns just `Supplier`.

Similarly, string resource ids are replaced when a language is specified.
This applies to some archive headings and entity properties.

Field properties contain reasons why fields are required.
Without an Accept-Language header, you get back FieldProperties like this:

```javascript
      "FieldRight": {
        "Mask": "Update, UIHintMandatory",
        "Reason": "[SR_MANDATORY_FIELD_1281]" },
```

With an **Accept-Language: fr** header, we get back

```javascript
      "FieldRight": {
        "Mask": "Update, UIHintMandatory",
        "Reason": "Nom de société" }
```



## SO-Language

Sometimes the browser client does not want to change the `Accept-Language` it is using.

We can override the `Accept-Language` header with the custom `SO-Language` header.

```http
 GET /api/v1/List/Category/Items/2
 Accept-Language: en-us; en-gb
 SO-Language: nb-no
```

will result in Norwegian language strings being returned, rather than english values.

You can pass a `*` or `x` to signal you want to cancel language translation.

```http
 GET /api/v1/List/Category/Items/2
 Accept-Language: en-us; en-gb
 SO-Language: x
```

will return un-translated values again.



## SO-Culture

There are some cultures which have variations in number formatting and so on - these can be handled using the `SO-Culture` header.

For the most part dates and numbers are passed in neutral culture form. 

i.e. the JSON date is always going to be in ISO format `2019-09-23T12:34:45Z` and a decimal number is always going to be with a period decimal point `3.14159`.

But if an API returns a string containing a value `"3.14159"` rather than the value itself, then `SO-Culture` header will handle these for you.

SO-Culture defaults to the language, so you only need to specify it when it is different.

```http
 GET /api/v1/List/Category/Items/2
 Accept-Language: en-us; en-gb
 SO-Language: nb-no
 SO-Culture: sv
```

Means use the norwegian strings and labels, but format numbers and dates as swedish.
