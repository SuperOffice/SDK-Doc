---
title: EventData
uid: crmscript_eventdata
SortOrder: 10
---

EventData gives you access to contextual information in an event handler. For example, the name of a created company or the amount of a sale.
You can also check EventData properties after the event handler has run, to for example display a message or prevent the an entity from being saved.

```crmscript
EventData ed = getEventData();
```

> [!NOTE]
> EventData works only with Trigger scripts, not manually run scripts!

## Type

### Integer getType()

```crmscript
EventData ed = getEventData();

printLine(ed.getType().toString());
```

## Input values

### String getInputValue(String inputValue)

> [!TIP]
> Use **Trace** to discover the name of the input value you want to fetch.

**Get value of user-defined list item:**

```crmscript
EventData ed = getEventData();

String listId = ed.getInputValue("SaleEntity.UserDefinedFields.SuperOffice:1").after(":").before("]");
if(listId != ""){
  NSMDOAgent agent;
  NSMDOListItem item = agent.GetListItem("udlist99", listId.toInteger());
  String listName = item.GetName();
}
```

### Map getInputValues()

## Output values

update values on before save trigger
get better data quality by forcing the user input values that helps out your day-to-day activities

### Void setOutputValue(String fieldName, String val)

```crmscript
EventData ed = getEventData();
ed.setOutputValue("ContactEntity.OrgNr", newOrgNr);
```

**Summarize all sales connected to a project, then update a user-defined field on the current project:**

```crmscript
EventData ed = getEventData();
String projectId = ed.getInputValue("ProjectEntity.ProjectId");

SearchEngine se;
se.bypassNetServer(true);
se.addField("sale.amount", "sum");
se.addCriteria("sale.project_id", "Equals", projectId);

if(se.select() > 0) {
  ed.setOutputValue("ProjectEntity.UserDefinedFields.SuperOffice:1", "[F:" + se.getField(0) + "]");
}
```

## Custom values

states

### String getStateValue(String stateValue)

### Map getStateValues()

### Void setStateValue(String stateName, String val)

## Messages

### String getMessage()

### Void setMessage(String message)

Service screens are not compatible with the message box

## Validation and blocking action

### Bool getBlockExecution()

### Void setBlockExecution(Bool val)

### Void setValidationMessage(String message)

A shorthand for calling setBlockExecution(true) and setMessage(message)

Checking if a field is empty, and block execution.

```crmscript
EventData ed = getEventData();
if(ed.getInputValue("x_invoice_no.value") == "") {
  getHtmlElement("x_invoice_no").setErrorMessage("Error");
  ed.setBlockExecution(true);

  String orgNr = ed.getInputValue("ContactEntity.OrgNr");
  if(orgNr.isEmpty()) {
    ed.setMessage("Please type in a Org.Nr");
    ed.setBlockExecution(true);
  }
  else if(!orgNr.isDigit() || orgNr.getLength() != 9)
  { ... }
```

### Setting criteria with Map instead of multiple OR conditions in an if statement

```crmscript
Map sourceIds;
sourceIds.insert("11", "");
sourceIds.insert("128", "");
sourceIds.insert("135", "");
if (sourceIds.exists(sourceId.toString()))
```

## Navigation

### String getNavigateTo()

### Void setNavigateTo(String navigateTo)

section
