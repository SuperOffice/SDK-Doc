---
title: searchEngine
uid: search_engine
SortOrder: 10
---

## An in-depth guide to the CRMScript searchEngine

The searchEngine is a tool for building SQL queries by adding fields, criteria, and data.

It was initially created for searching and fetching data from the database. Thereby its name. Since then, it has been extended with features for inserting and updating rows.

When you [construct a query](./se-select.md), the searchEngine automatically joins tables using [dot-syntax](./dot-syntax.md) - for example `ticket.title`.

All queries are sent to NetServer instead of directly to the database. This ensures that sentry rules are followed. It is possible to circumvent this behavior, but if you do, you need to handle any security implications yourself.

1. autolist
