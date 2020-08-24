---
title: Address localization
uid: crmscript_addresses
SortOrder: 50
---

Addresses are commonly formatted according to local conventions.

## NSLocalizedField[][] getFormattedAddress()

Fetches the formatted address of the company.

```crmscript!
Company c;
c.load(2);
NSLocalizedField[][] address;
address = c.getFormattedAddress();

for (Integer i = 0; i < address.length(); i++) {
  for (Integer j = 0; j < address[i].length(); j++) {
    print(address[i][j].GetLabel() + ":" + address[i][j].GetName() + ":" + address[i][j].GetValue() + ":" + address[i][j].GetTooltip() + ":" + address[i][j].GetValueLength().toString() + ":" + address[i][j].GetAddressType() + " ");
  }
  print("\n");
}
```

## Void setFormattedAddress(NSLocalizedField[][] addr)

Sets the formatted address of the company.

```crmscript
Company c;
c.load(2);
NSLocalizedField[][] address;
address[0][0].SetValue("NO-" + address[0][0].GetValue());
c.setFormattedAddress(address);
c.save();
```

Adds "NO-" to the 1st address field.

## Set address using the contact agent

```crmscript
NSContactAgent contactAgent;
NSContactEntity contact = contactAgent.GetContactEntity(2);

NSAddress address = contact.GetAddress();

NSLocalizedField[][] localAdr = address.GetLocalizedAddress();
localAdr[1][0].SetValue("Götabergsgatan 22");
localAdr[2][0].SetValue("Götabergsgatan 22");

address.SetLocalizedAddress(localAdr);
contact.SetAddress(address);
contactAgent.SaveContactEntity(contact);
```
