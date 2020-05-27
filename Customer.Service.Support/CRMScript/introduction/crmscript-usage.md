---
title: What can I do with CRMScript?
---

## Customize your own workflows and automation

## Validate input

## Dynamically update content

## Run code in response to certain events on a website

## Tailor the Customer Center

## Explore the database without access to the SQL Server

SearchEngine provides some excellent ways of deep-diving into the database without having to have some sort of remote session to the SQL Server.

## Limitations

Because of security restrictions and performance considerations there are some things you can't do with CRMScripts.

* You can't put files on our online webserver (no upload or import of scripts).
* You can't read from or write to physical files on our online webserver.
* It is not allowed to run a script for more than 60 seconds.
* Memory-intensive scripts are not allowed. Each script may not consume more than 8 MB of memory.
* BulkUpdate API is unavailable because updates can take a long time.

* ODBC endpoints are unavailable, which makes it technically impossible to access an Access-database from CRMScript. You can use Zapier instead.
