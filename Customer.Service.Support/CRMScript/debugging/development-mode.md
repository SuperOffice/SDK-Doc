---
title: Debugging CRMScript modules
uid: crmscript_debug_development_mode
SortOrder: 40
---

CRMScript modules are scripts imported into other scripts files by using the #included directive.

Historically it wasn't possible to execute CRMScript modules. Now there exists two environment variables script writers use to invoke and debug module scripts.

* developmentMode
* includeId

## Debugging modules

These two environment variables are only set when the script is executed inside the code editor. They are accessed using getVariable("*variableName*")) method.

When the **Execute script** button is clicked, the engine sets **developmentMode** to true and the **includeId** to the includeId of the current script.

This allows you to include some global code in your CRMScript like this:

```crmscript
// my global script

String foo() {
    return "Foo";
}

String bar() {
    return "Bar";
}

if (getVariable("developmentMode") == "true" && getVariable("includeId") == "foobar")
{
  printLine(foo() + bar());
}
```

Now when editing your module library, only the part inside the if statement is executed by the **Execute script** click event.

When this library is included in some other production code and executed, the code above will not be executed.
