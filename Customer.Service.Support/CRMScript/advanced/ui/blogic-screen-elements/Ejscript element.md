---
title: Ejscript element
path: /Blogic/Screen Elements/Ejscript element
sortOrder: 27
---

This element is a completely scriptable element. It will load a script, and execute the "global" code of the script at instantiation time. Afterwards, it will allow you to create ejScript functions for all the standard functions in our HtmlElement design, where you can call print to create output, or perform other actions on the element. The script for this element is specified in the "Body" section. These functions are:


- Void `element\_printHeadSection()`: This function is called between "\<head>" and "\</head>". This is a good place to print embedded CSS code.
- Void `element\_printJavascriptSection()`: This function is called inside a \<script> tag in the head section.
- Void `element\_printOnLoadSection()`: This function is called inside the printing of the javascript function which will be called when the page is loaded ("HtmlPage\_onload()").
- Void `element\_printBodySection()`: This function is called when the body HTML part of the element is to be printed. This is where you print your main HTML for the element.
- String[] `element\_getJsIncludes()`: This function allows you to add a list of javascript include files you want to have included in the page.
- String[] `element\_getCssIncludes()`: This function allows you to add a list of css include files you want to have included in the page.
- String `element\_getSetSizeStatement()`: This function allows you to return the opening-part of a javascript statement which will be executed by the resizing model. The available width, height and closing parenthesis will be appended to this statement before it is evaluated (executed).
- String `element\_toString()`: This function allows your element to return a simple value as a string.
- Void element\_setFieldValue(String, Map): This function allows the outer script to set any number of values/attributes for your element.
- Void `element\_getFieldValue(String)`: This function allows the outer script to get any value/attribute from your element.
- Void `element\_setValue(String)`: This function allows the outer script to set a simple value for your element.
- Void `element\_clearValue()`: This function allows the outer script to clear the value of the element.
- Void `element\_setFromCgi()`: This function is called when the element should find its values from the CGI variables.


Also, all config variables are available using `getVariable()`.

This element is available from version 4.11.



###Here is a simple example of a script which will create a simple element with some resizing:###


    String message = "Uninitialized message...";
    
    Void element_printOnLoadSection()
    {
      print("alert('onload');");
    }
    
    
    Void element_printJavascriptSection()
    {
      print("function mySetSizeFunction(p_width, p_height) { document.getElementById('myElement').style.width = p_width - 4; document.getElementById('myElement').style.height = p_height - 4; }\r\n");
    }
    
    Void element_printHeadSection()
    {
      print("<style> .myElementStyleClass { border: black solid 2px; } </style>");
    }
    
    Void element_printBodySection()
    {
      print("<div class='myElementClass' id='myElement'>" + message + "</div>");
    }
    
    String element_getSetSizeStatement()
    {
      return "mySetSizeFunction(";
    }
    
    Void element_setValue(String p_value)
    {
      message = p_value;
    }
    
    Void element_setFieldValue(String p_field, Map p_map)
    {
      if (p_field == "setMessage")
        message = p_map.get("message");
    }


