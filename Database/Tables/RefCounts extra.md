---
uid: RefCountstable
title: RefCounts table
---

Value for flag field in refcounts
=================================================================================

|            |        |                                         |
|------------|--------|-----------------------------------------|
| **flags**  | **Id** | **Comment**                             |
| Unknown    | 0      | Unknown - used when initializing        |
| Allocate   |  1     | Perform number allocation automatically |
| Unique     | 2      | Check that entered values are unique    |
| ReadOnly   | 4      | Target field is read-only in GUI        |
| AllowBlank | 8      | Blank is a legal value                  |