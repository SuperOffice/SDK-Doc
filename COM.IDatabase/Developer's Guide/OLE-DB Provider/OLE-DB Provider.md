---
uid: refOLEDB
title: OLE-DB Provider
---

The SuperOffice OLE-DB provider has its own simplified SQL variant.

This SQL does not support complex joins or sub-selects or stored procedures or views.

It does support the SuperOffice sequence table, transaction logging.

 

Literals
--------

String literals are enclosed in single quotes: 'this is a text'

Dates are represented either as number or strings:

-   numbers: seconds-since 1.1.1970

-   strings: 'yyyy.mm.dd hh:mm:ss' - the hh:mm:ss part is optional. Midnight is assumed if it is omitted.

1. autolist


[Select syntax](guideOLEDBSyntax.md)

[Update syntax](refOLEDB-Update.md)

[Insert syntax](refOLEDB-Insert.md)

[Delete syntax](refOLEDB-Delete.md)