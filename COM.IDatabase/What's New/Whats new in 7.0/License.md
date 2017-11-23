---
uid: License
title: License
---

The license system in 6 was based on a shared secret encryption - which meant that the secret could not be shared with anyone, or they could make their own licenses at will.

The license system in 7 is based on public-key encryption - which means that we can share the public key without making it possible for others to make licenses.

![](../../images/new-license-system.gif)

The new license system is also extensible, allowing partners to make their own licenses using the same system.

![](../../images/admin-licenses.gif)

You can find more information about license servers in the SDK License sample folder that was installed to your Documents folder.

 

You can use the <see cref="SOSettings.HasLicense">Settings.HasLicense</see>(name) function to check if a user has been assigned usage rights to a given license.
