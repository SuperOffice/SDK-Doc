---
uid: ModuleLicensetable
title: ModuleLicense table
---

Types of module licenses
========================

| **licenceType**   | **Id** | **Comment**                                                                                |
|-------------------|--------|--------------------------------------------------------------------------------------------|
| Unknown           | 0      | Not a legal value                                                                          |
| SiteLicense       |  1     | License is valid for a site (complete installation included all satellites and travellers) |
| SatelliteLicense  | 2      | License is valid for a database (central, satellite, travel?)                              |
| UserLicense       | 4      | License is valid for a particular user                                                     |