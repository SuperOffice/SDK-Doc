---
uid: Saletable
title: Sale table
---

Values for the 'done' field in the sale table
=============================================

|          |        |                                     |
|----------|--------|-------------------------------------|
| **done** | **Id** | **Comment**                         |
| Unknown  | 0      | Sale Done/Not done state is unknown |
| NotDone  |  1     | Sale is not done                    |
| Done     | 2      | Sale is done                        |

Value for the 'status' field in the sale table
==============================================

|            |        |                                                                                                                            |
|------------|--------|----------------------------------------------------------------------------------------------------------------------------|
| **status** | **Id** | **Comment**                                                                                                                |
| Unknown    | 0      | Sale status is unknown                                                                                                     |
| Open       | 1      | Sale is open                                                                                                               |
| Sold       | 2      | Sale has been sold (green $ in GUI)                                                                                        |
| Lost       | 3      | Sale has been lost (red $ in GUI)                                                                                          |
| Stalled    | 4      | Sale has been stalled, or "parked", awaiting further developments                                                          |
| SaintAll   | 1000   | 'All' choice for Saint. This is NOT an acceptable value for a sale, but is used by the Saint system for indexing all sales |