---
SortOrder: 1
---

## REST API - Entities

The REST API has the major entities (Company, Person, Project, Sale, etc) exposed.

    /api/v1/Contact
    /api/v1/Person
    /api/v1/Project
    /api/v1/Sale
    ...

The entities all have similar structures

    /api/v1/Contact

returns an ODATA feed of contact records. You can select fields,
order, filter the result using ODATA operations.

    /api/v1/Contact?$select=name,category&$filter=registeredDate before '2009-1-1'

This returns the contact id, name and category for contacts created before 2009.

    /api/v1/Contact/default

Returns a new blank entity.

    /api/v1/Contact/123

Returns the Contact with id 123.
This object can be PUT or DELETE - subject to the usual sentry restrictions. 
If your role does not allow you to update, then the web api won't give
you more access.

    /api/v1/Contact/123/Simple

Returns a simplified version of the entity. This cannot be updated or deleted, 
but it can be easier to work with - it does not have deeply nested structures, 
and does not support things like user defined fields.

Most of the entities have user defined fields, and expose information about the
layout here:

    /api/v1/Contact/UdefLayout

The actual user-defined field values are returned in the entity's **UserDefinedFields** property.

Many have related lists of other entities as well:
    
    /api/v1/Contact/123/Projects
    /api/v1/Contact/123/Sales

These lists are archives that you can filter and sort using OData operations.


## REST API - Lists

SuperOffice has a number of built-in lists (Category, Business, Position, etc).
You can add your own custom lists.

    /api/v1/List

Returns a list of lists.

    /api/v1/List/Category
    /api/v1/List/Business
    /api/v1/List/YourOwnList

These return meta-data about the list, including the list id.

    /api/v1/List/Category/Items
    /api/v1/List/Business/Items
    /api/v1/List/YourOwnList/Items

These return the list items in the given list. 

    /api/v1/MDOList

Gives you read access to hierarchical lists, and other list providers
in the system.


## REST API - Archives etc

**Archives**

    /api/v1/Archive/OwnerContacts?$select=contactId,name,orgnr
    /api/v1/Archive/EmailAddress?$select=fullName,emailAddress&$filter=contactId=12

The archive provider system is exposed as an OData endpoint. 

**User Preferences**

    /api/v1/Preference/section/keyname
    /api/v1/PreferenceDescription/section/keyname

User preferences and pref.descriptions can be read and updated.

**Foreign Keys**

    /api/v1/ForeignApp/Glops/Foobar/Key/Lookup/Contact/123

Returns the key called 'Lookup' from the foreign app 'Glops' for the 
Contact record 123.



**Strings**

    /api/v1/String/SR_YES?isoLangCode=sv

Built-in string resources can be read in supported languages.


## REST API - System

     /api/v1/User/Tony
     /api/v1/Role/12
     /api/v1/License/SuperOffice

Users, Roles, License stuff is exposed via simple endpoints.
If you have admin rights in your role, you can POST or PUT to update
system information.



## Errors

Errors are returned using HTTP error codes, and as a JSON object:

    /api/v1/Contact/99999

Returns HTTP 404 Contact Not Found, and the following JSON result

```javascript
    {
      "Error": true,
      "ErrorType": "SoNotFoundException",
      "ErrorMessage": "Contact id 99999 not found",
      "ErrorSource": "SuperOffice.Services.Implementation"
    }
```

