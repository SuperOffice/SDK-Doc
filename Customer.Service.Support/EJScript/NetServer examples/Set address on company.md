---
title: Set address on company
path: /EJScript/NetServer examples/Set address on company
sortOrder: 9544
---

```crmscript!
    NSContactAgent newNSContactAgent;
    NSContactEntity getNSContactEntity = newNSContactAgent.GetContactEntity(companyId); // Load the contact you want to edit
    NSAddress getNSAddress = getNSContactEntity.GetAddress();
    NSLocalizedField[][] getNSLocalizedField = getNSAddress.GetLocalizedAddress();
    getNSLocalizedField[1][0].SetValue("Götabergsgatan 22");
    getNSLocalizedField[2][0].SetValue("Götabergsgatan 22");
    //add more fields here
    getNSAddress.SetLocalizedAddress(getNSLocalizedField);
    getNSContactEntity.SetAddress(getNSAddress);
    newNSContactAgent.SaveContactEntity(getNSContactEntity);

```
