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
| stopEscalation | stop_escalation | The headline of the ticket, String                      |
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
