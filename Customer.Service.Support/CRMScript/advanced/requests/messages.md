---
title: Messages
uid: crmscript_messages
SortOrder: 20
---

## Create and update messages

### Void setValue(String colName, String value)

Sets a named field to the given value. Look up names in the reference section down below, or check out the [class reference](https://community.superoffice.com/documentation/SDK/SO.Customer.Service.Support/html/EJScript-Classes-Message-setValue.htm).

> [!NOTE]
> Both parameters are strings! Remember to use quotes even for IDs. <br>
> You must call `save()` after setting all applicable values to actually create or update the message.

```crmscript!
Message m;
m.setValue("emailHeader", "Test");
m.setValue("body", "This is a test");
m.save();
print(m.save().toString());
```

### Void setAttachments(Vector ids)

Connects 1 or more attachments to the message. Attachments are identified by their ID.

> [!NOTE]
> You must call `save()` before calling `setAttachments()`!

```crmscript
Message m;
m.setValue("ticketId","4");
Vector v;
v.parseString("1,4,7",",");
m.setAttachments(v);
m.save();
```

### Integer save()

Saves a new or updated message and returns its ID.

```crmscript
Message m;
m.setValue("type","html");
m.save();
```

### Integer save(String log)

A variant of `save()` that also adds a message to the ticket log.

```crmscript
Message m;
m.setValue("type","html");
m.save("This is a duplicate.");
```

### Integer save(String log, Bool noNewInfo)

A  variant of `save()` with a setting for controlling processing:

* `noNewInfo`: if **false**, set the read status on ticket to yellow (if currently green)

```crmscript
Message m;
m.setValue("createdBy","1");
m.save("Need to follow up",true);
```

## Get message info

### Bool load(Integer id)

Brings up the message with the given ID. This is always the 1st step when you want to do anything with an existing message.

```crmscript
Message m;
m.load(1);
```

### String getValue(String colName)

Fetches the value from a named field. Look up names in the reference section down below.

```crmscript!
Message m;
m.load(2);
print(m.getValue("timeCharge").toString());
```

### Integer\[\] getAttachments()

Fetches the ID of all attachments connected to the message.

```crmscript!
Message m;
m.load(2);
Integer[] attachments = m.getAttachments();
while(attachments.length() > 0) {
  printLine(attachments.popFront());
}
```

## Reference

### Frequently used values

| Parameter    | Db field     | Description                                                 |
|:-------------|:-------------|:------------------------------------------------------------|
| ticketId     | ticket_id    | The ticket this message is a child of                       |
| type         | type         | plaintext or HTML                                           |
| author       | author       | a user's name, or a persons email address                   |
| createdBy    | created_by   | The ID of the user who posted the message (1: system)       |
| slevel       | slevel       | The security level of the ticket (1: internal, 2: external) |
| message_id   | message_id   | The X-Message-Id email header. Used for threading           |
| body         | body         | The text body for the message                               |
| bodyHtml     | html_body    | The html body for the message (if any)                      |
| emailHeader  | email_header | Raw text header                                             |

For a complete list of fields, see the [database reference](https://community.superoffice.com/documentation/SDK/SO.Database/html/Tables-ej_message.htm)

### Timestamp values

| Parameter  | Db field    | Description                             |
|:-----------|:------------|:----------------------------------------|
| createdAt  | created_at  | When the message was posted             |
| timeSpent  | time_spent  | Minutes used on this message            |
| timeCharge | time_charge | Minutes to be invoiced for this message |
