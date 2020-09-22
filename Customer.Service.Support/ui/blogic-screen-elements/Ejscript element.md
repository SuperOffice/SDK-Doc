---
title: Ejscript element
uid: blogic_ejscript_element
sortOrder: 5
---

This element is a completely scriptable element.

1. Loads a script and executes the global code of the script at instantiation time
2. You create CRMScript functions for all the standard functions in HtmlElement and places those in the **Body** tab.
    * You can call print to create output, or perform other actions on the element.

## Functions

All config variables are available using `getVariable()`.

### Void element_printHeadSection()

Called: after the opening `<head>` tag

> [!TIP]
> This is a good place to print embedded CSS code.

### Void element_printJavaScriptSection()

Called: inside a `<script>` tag in the head section

### Void element_printOnLoadSection()

Called: when the page is loaded (`HtmlPage_onload()`)

### Void element_printBodySection()

Called: when the body HTML part of the element is to be printed

This is where you print your main HTML for the element.

### String[] element_getJsIncludes()

Lets you to add a list of JavaScript include files for the page.

### String[] element_getCssIncludes()

Lets you to add a list of CSS include files for the page.

### String element_getSetSizeStatement()

Returns the opening part of a JavaScript statement which will be executed by the resizing model.

The available width, height, and closing parenthesis will be appended to this statement before it is evaluated (executed).

### String element_toString()

Converts a simple value as a string.

### Void element_setFieldValue(String, Map)

Sets a value or attribute for your element.

### Void element_getFieldValue(String)

Gets a value or attribute from your element.

### Void element_setValue(String)

Set a simple value for your element.

### Void element_clearValue()

Clears the value of the element.

### Void element_setFromCgi()

Called: when the element should find its values from the CGI variables.

## Example

This example creates a simple element with some resizing

```crmscript
String message = "Uninitialized message...";

Void element_printOnLoadSection() {
  print("alert('onload');");
}


Void element_printJavaScriptSection() {
  print("function mySetSizeFunction(p_width, p_height) { document.getElementById('myElement').style.width p_width* 4; document.getElementById('myElement').style.height = p_height* 4; }\r\n");
}

Void element_printHeadSection() {
  print("<style> .myElementStyleClass { border: black solid 2px; } </style>");
}

Void element_printBodySection() {
  print("<div class='myElementClass' id='myElement'>" + message + "</div>");
}

String element_getSetSizeStatement() {
  return "mySetSizeFunction(";
}

Void element_setValue(String p_value) {
  message = p_value;
}

Void element_setFieldValue(String p_field, Map p_map) {
  if (p_field == "setMessage")
    message = p_map.get("message");
}
```
