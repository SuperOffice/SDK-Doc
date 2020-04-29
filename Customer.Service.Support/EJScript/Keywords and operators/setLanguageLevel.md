---
title: setLanguageLevel
path: /EJScript/Other language constructs and operators/setLanguageLevel
intellisense: 1
langref: 1
sortOrder: 9561
---

ejScript is a script language under continuos improvements. Sometimes the improvements changes the behaviour of the ejScript.
setLanguageLevel is the setting that set which compability level the script should run as.



###The different language levels:###

    #setLanguageLevel 1;
    Obsolete
    
    #setLanguageLevel 2;
     Pre-7 language level.

Use this for installations to 4.x. For 7 installations a compability layer is added. This will affect performance for seven installations. Tables such as cust\_company and customer will be transformed to contact and person automatically.


    #setLanguageLevel 3;

7 language level - This level does not contain the compability layer.  The developer/consultant need to specify the correct table.


