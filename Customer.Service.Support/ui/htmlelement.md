---
title: HtmlElement
uid: crmscript_htmlelement
SortOrder: 80
---

The CRMScript **HtmlElement** class represents HTML elements in the SuperOffice UI.

## Types and values

### String getTypeName()

### String getFieldValue(String field)

### Void setFieldValue(String name, Map map)

### Void setValue(String value)

**Mark a checkbox:**

```crmscript
t.setValue("x_boolean", "1")
```

### Void clearValue()

This will clear any selected values from elements that support this property.

### Void setFromCgi()

## Type conversion

* Bool toBool()
* Integer toInteger()
* String toString()

## Messages

### Void setErrorMessage(String errormessage)

### Void setInfoMessage(String infoMessage)

## Element properties

### Void setDisabled(Bool disable)

whether the element should be invisible or not.

### Void setNotEditable(Bool onOff)

cause the element to be disabled/not editable for those elements that support this property

### Bool isEmpty()

What this actually means varies from element type to element type. A list element should be empty if it has no rows, but a code element should be empty if it contains no text

## Positioning

### String getTabIndexString()

The tab index determines the sequence of entering fields with the tab/shift-tab keys.

### Integer getNextTabIndex()

### String getTabIndexString(Bool noId)
