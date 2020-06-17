---
title: Tickets
uid: crmscript_tickets
SortOrder: 10
---

## Create and update requests

### Void setValue(String colName, String value)

Sets a named field to the given value. Look up names in the reference section down below, or check out the [class reference](https://community.superoffice.com/documentation/SDK/SO.Customer.Service.Support/html/EJScript-Classes-Ticket-setValue.htm).

> [!NOTE]
> Both parameters are strings! Remember to use quotes even for IDs. <br>
> You must call `save()` after setting all applicable values to actually create or update the ticket.

```crmscript!
Ticket t;
t.setValue("title", "No audio");
t.setValue("category", "2");
t.setValue("status", "1");
t.setValue("priority", "2");
print(t.save().toString());
```

This snippet creates a new ticket and prints its ID.

> [!TIP]
> To check the available options for category, status, and priority: Go to the SuerOffice Admin client and select **Requests** from the main menu. You can now inspect the options in each tab.

### Integer save()

Saves a new or updated ticket and returns its ID.

```crmscript
Ticket t;
t.setValue("title", "No audio");
t.save();
```

### Integer save(String log)

A variant of `save()` that also adds a message to the ticket log.

```crmscript
Ticket t;
t.setValue("title", "No audio");
t.save("This is the 5th audio complaint in 1 hour!");
```

### Integer save(Bool setReadStatus, Bool doNotCheckEscalating)

A variant of `save()` with 2 settings for controlling processing:

* `setReadStatus`: if **true**, update the read status
* `doNotCheckEscalating`: if **true**, do NOT let the update trigger a possible escalation

```crmscript
Ticket t;
t.setValue("title", "No audio");
t.save(true, false);
```

### Integer save(String log, Bool setReadStatus, Bool doNotCheckEscalating)

A variant of `save()` that combines the processing settings and a log message.

```crmscript
Ticket t;
t.setValue("title", "No audio");
t.save("audio",true, true);
```

### Void addSecondaryCustomers(Vector ids)

Adds 1 or more customer IDs to the list of secondary customers.

> [!TIP]
> A [vector](https://community.superoffice.com/documentation/SDK/SO.Customer.Service.Support/html/EJScript-Classes-Vector-Vector.htm) is a 1-dimensional list of String objects.

```crmscript
Ticket t;
t.setValue("title", "Bad audio");
Vector v;
v.parseString("1,4,5",",");
t.addSecondaryCustomers(v);
t.save();
```

## Get ticket info

### Bool load(Integer id)

Brings up the ticket with the given ID. This is always the 1st step when you want to do anything with an existing ticket.

```crmscript
Ticket t;
t.load(1);
```

### String getValue(String colName)

Fetches the value from a named field. Look up names in the reference section down below, or check out the [class reference](https://community.superoffice.com/documentation/SDK/SO.Customer.Service.Support/html/EJScript-Classes-Ticket-getValue.htm).

```crmscript!
Ticket t;
t.load(2);
print(t.getValue("ticketStatus"));
```

## Accept ticket

Accepting or assigning a ticket means to update `ownedBy`. You might also want to update the status and the last modified timestamps.

```crmscript
Ticket t;
t.load(1);

if (t.getValue("ownedBy") == "1") {
  t.setValue("ownedBy", "7");
  t.setValue("ticketStatus", "1");
  String now = getCurrentDateTime().toString();
  t.setValue("lastChanged", now);
  t.setValue("dbiLastModified", now);
  t.save();
}
```

### Bool notifyEmail(Integer replyTemplateId)

Sends a notification email to the owner of the ticket.

Call `notifyEmail()` when you create a new ticket, add a new message to a ticket, and similar events.

Pass the ID of a suitable [reply template](../text/reply_template.md).

```crmscript
Ticket t;
t.setValue("title", "No audio");
t.setValue("ownedBy", "3");
t.save();
t.notifyEmail(8);
```

## Add a message to ticket

```crmscript
Ticket t;
t.load(1);

String owner = t.getValue("ownedBy");

if (owner == "1") {
  t.setValue("ticketStatus", "1");
  Message m;
  m.setValue("ticketId", t.getValue("id"));
  m.setValue("createdAt", getCurrentDateTime().toString());
  m.setValue("createdBy", getActiveUser().getValue("id"));
  m.setValue("type", "1");
  m.setValue("author", "System");
  m.setValue("slevel", "1");
  m.setValue("body", "Remember to set owner");
  m.setValue("important", "true");
  m.save();
  t.save();
}
```

## Delegate

If a request handler is unable to resolve the issue, they can:

* pass the ticket to a colleague
* forward the ticket to an external party
* delegate and let the system pick the next owner

### Ask a colleague for help

1. Reassign the ticket.
2. Add an internal message with your question.
3. Update the last modified timestamps.
4. Optionally add the ticket to the previous owner's favorites list, as a reminder to follow up.

### Forward to an external party

A common scenario when you need to get advice from a sub-supplier.

> [!TIP]
> Use the contact's (customer's) email address as the sender so that any answer from the recipient will be sent directly to the contact and not back to SuperOffice Service.

#### Bool sendMessages(String subject, StringMatrix recipients, Bool fromCust, String messages, Integer msgId, String comment)

Forwards the listed messages. In the generated email, the comment is inserted at the top and followed by the messages, each separated by a line.

| Parameter  | Description                             |
|------------|-----------------------------------------|
| subject    | ticket.title or similar                 |
| recipients | Format: to / pipesign / name / email    |
| fromCust   | The sender's email address              |
| messages   | A comma-separated list of message IDs   |
| msgId      | ID of added "forward" message or -1     |
| comment    | A note preceding the forwarded messages |

**Recipients example:**
To \| John Doe \<john.doe@john.doe> Cc \| Jane Doe \<jane.doe@jane.doe>

### Void delegate()

Delegates a ticket to a user according to the rules of the ticket's category.

> [!NOTE]
> You must call `save()` to do the action.

```crmscript
Ticket t;
t.load(2);
t.delegate();
t.save();
```

### Void delegate(Integer notUser)

A variant of `delegate()` that lets you exclude a user from the pool of possible assignees.
For example if the 2nd owner also passes on the ticket and you want to avoid re-assigning to the original owner.

```crmscript
Ticket t;
t.load(2);
t.delegate(4);
t.save();
```

## Postpone tickets

Sometimes you need to put tickets on the back-burner.

```crmscript
Ticket t;
t.load(3);
t.setValue("status", "3");
DateTime now = getCurrentDateTime();
t.setValue("lastChanged", now.toString());
t.setValue("dbiLastModified", now.toString());

Message m;
m.setValue("ticketId", t.getValue("id"));
m.setValue("createdAt", t.getValue("lastChanged"));
m.setValue("createdBy", t.getValue("ownedBy"));
m.setValue("slevel", "1");
m.setValue("body", "Expecting fix in next patch");
m.save();
t.setValue("activate", now.moveToMonthEnd().toString());
t.save();
t.notifyEmail(5);
```

## Close tickets

After responding to a request, you can set its status to **Closed**.

Typical scenarios:

* the case is resolved
* you have forwarded the ticket to an external party, who will handle and complete the request

```crmscript
Ticket t;
t.load(1);
t.setValue("status", "2");
t.save();
```

## Delete tickets

> [!WARN]
> In general, we don't recommended deleting requests. It is usually preferable to add a comment and/or tag and mark it as closed.

Deleting a ticket will also delete all messages and attachments linked to it!

However, you may be required to delete a request to comply with your company's privacy policy. Proceed with caution! Use the same statements as for closing a ticket, just change the status code from 2 to 4.

## Reference

### Frequently used ticket values

| Parameter    | Db field         | Description                                                 |
|:-------------|:-----------------|:------------------------------------------------------------|
| title        | title            | A descriptive name, String                                  |
| category     | category         | The ID of the category the ticket belongs to                |
| ownedBy      | owned_by         | The ID of the user who owns the ticket                      |
| slevel       | slevel           | The security level of the ticket (1: internal, 2: external) |
| priority     | priority         | The ID                                                      |
| status       | status           | The main ticket status \[0-5\], see list                    |
| custId       | cust_id          | The ID of the primary customer                              |
| customers    | ticket_customers | A comma-separated list of customer IDs                      |
| createdBy    | created_by       | The ID of the user who posted the ticket (1: system)        |

For a complete list of fields, see the [database reference](https://community.superoffice.com/documentation/SDK/SO.Database/html/Tables-ticket.htm).

### Timestamp values

| Parameter      | Db field        | Description                                             |
|:---------------|:----------------|:--------------------------------------------------------|
| activate       | activate        | When to activated a postponed ticket                    |
| createdAt      | created_at      | When the ticket was created                             |
| repliedAt      | replied_at      | When the 1st external message was added                 |
| stopEscalation | stop_escalation |                       |
| readStatus     | read_status     | Has the owner has read the ticket? (red, yellow, green) |
| deadline       | deadline        | The deadline of the ticket                              |
| timeToClose    | time_to_close   | Minutes between create and close                        |

For a complete list of fields, see the [database reference](https://community.superoffice.com/documentation/SDK/SO.Database/html/Tables-ticket.htm).

### Status

| Status | Description           |
|:------:|-----------------------|
| 0      | Unknown/uninitialized |
| 1      | Active                |
| 2      | Closed                |
| 3      | Postponed             |
| 4      | Deleted               |
| 5      | Merged/Linked         |
