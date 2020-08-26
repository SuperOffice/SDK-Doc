---
title: Extra tables and user-defined fields
uid: crmscript_extra_tables_and_udef
SortOrder: 40
---

## Continuous Database

*Continuous Database* (CD) is the SuperOffice process for instrumenting incremental changes toward the SuperOffice database. It's based on principles set forth by evolutionary database design and **enables changes in a continuous way**.

Both SuperOffice and 3rd-parties can continuously update a database schema that reflects ever-changing business requirements without ever having to depend on a hardcoded fixed-system again.

[Read more](https://community.superoffice.com/en/content/content/database/continuous-database/)

## Requirements

* SuperOffice Expander Services license (which you already have for CRMScripts)
* SuperOffice 8.1 or newer
* NetServer must be restarted every time you add new fields and tables
  * If Travel is activated, a new Travel database must also be generated

## Limitations

### API support

You can't create extra tables or fields via the APIs. It's on the road-map, but for now, you must do this in the SuperOffice Service UI. After setting it up, you can manage the data in them via the APIs.

## In this section

1. autolist
