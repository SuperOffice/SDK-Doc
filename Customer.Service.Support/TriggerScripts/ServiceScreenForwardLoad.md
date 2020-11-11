# ServiceScreenForwardLoad (509)

Runs for `HtmlPage.forward` event.

Input values:

* `button` = HtmlSubmitButton element value
* `x.value` = element x value
* `x.displayValue` = element x display value

All html elements in the screen are added to the input values.


## Sample code

```crmscript
#setLanguageLevel 3;
String param1 = getVariable("button");
```
