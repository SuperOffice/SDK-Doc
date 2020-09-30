---
title: Show recipients
uid: blogic_show_recipients
sortOrder: 19
---

This is a control that lists all recipients.

## Functions

### setFieldValue(String action, Map values)

| Action | Map keys                   | Description |
|:-------|:---------------------------|:------------|
| set    | to<br />cc<br/>bcc<br/>sms |             |
| add    | to<br />cc<br/>bcc<br/>sms |             |

## Example

```crmscript
Map m;
m.insert("to", "Tor");
m.insert("sms", "Tove");
m.insert("cc", "Trond")
e.setFieldValue("add", m);
```
