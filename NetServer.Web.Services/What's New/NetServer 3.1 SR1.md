<properties date="2016-06-24"
SortOrder="88"
/>

NetServer 3.1 SR1
=================

Released Novemeber 2008
Mainly bug fixes.

Audience support. Sentry logic for external users.

SOAP Namespace
--------------

The namespace for the SOAP messages remains unchanged from 3.1
Serialization fixes
-------------------

Timespan fields on appointment are now serialized properly. The .net framework contains a well known bug that means that TimeSpan properties are not serialized correctly. This is now worked around on the implementation side, so that timespans are serialized as integers.
Archive column data is now serialized according to the WSDL contract. An extra XML element was inserted into the SOAP message, causing Java clients to fail to read the data contained in the SOAP response.
