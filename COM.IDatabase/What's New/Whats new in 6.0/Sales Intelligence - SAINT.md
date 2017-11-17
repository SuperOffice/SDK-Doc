---
uid: whatsnewSaints
title: Sales Intelligence - SAINT
---

Sales Intelligence (SAINT) is an aggregation system - a bit like a data-mart. A tiny data-warehouse. More like a data-shed.

For each company and project, SAINT stores the total number of activity records that match various combinations of queries. When a new activity is registered, the counters are updated accordingly. This makes it easy to do queries like:

-   "find all companies where date-of-last-sale &gt; 10.oct.2004"
-   "make a selection of all companies where number of outgoing activities in the last 90 day period = 0"
-   "find all projects where number of completed activities &gt; 5 and where number of completed activities in the last 90 day period = 0"

The SAINT system allows these queries to be stored and matches can be flagged with a bitmap. These stored queries are called status monitors.

 

See the [Database.Admin.StatusMonitor](SUPEROFFICEDBLib~IStatusMonitor.md) object for reference information.

[Read more about SAINT](Saint%20Counters%20And%20Values.md)