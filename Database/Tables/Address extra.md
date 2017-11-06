---
uid: Addresstable
title: Address table
---

### Values needed to access the address table.

This table must contain special values that would be difficult to guess correctly. These are listed below with a description of how to use them.

 

 

|                  |        |        |
|------------------|--------|--------|
| **Address Type** | **Id** |        |
| Contact          | 1      | 0x0000 |
| Person           | 16384  | 0x4000 |

 

|                     |        |        |
|---------------------|--------|--------|
| **SubAddress Type** | **Id** |        |
| Postal              | 1      | 0x0001 |
| Street              | 2      | 0x0002 |
| Private             | 3      | 0x0003 |

**E.g.**: A person’s private address will have Address type Person 16384 + Subtype private 3 = 16387 as atype\_idx in the address table.
Use a bitwise OR to get the final address type value.

|                   |        |
|-------------------|--------|
| **New for quote** | **Id** |
| Billing address   | 8196   |
| Shipping address  | 8197   |