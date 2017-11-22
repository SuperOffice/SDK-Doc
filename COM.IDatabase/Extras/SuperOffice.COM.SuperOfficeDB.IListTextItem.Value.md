
##SUMMARY


Retrieve extra fields' value by their database name, depends on table. The property is read-only. 



##VALUE

Value


##EXAMPLE

**Get currency name and rating value**

This text may be copied to the notepad, and saved as a *.vbs file. You need a running CRM win client to make it work. (This example uses the SuperOffice COM application library and not the SuperOffice db library interface).

![](..\..\Examples\vbs\IListTextItem.Value.vbs.txt)


##REMARKS


List of permitted values: 

String - fieldname as one of the following. 


Task: 

    colorindex - color id defined for task items. 

    recordtype - type of task item. 1 = appointment, 5= phone, 6 = todo 

    direction - direction of task item. 0 = unknown, 1 = in, 2 = out 

DocTemplate:

    filename - name of the file in the template dir to use 

    direction - 1 = incoming, 2 = outgoing 

    recordtype = 2 = document, 3 = email, 4=fax, 7,8=merge docs, 9 = report 

    defaultoref = string with default our-ref 

    regkeyedit = path to program to use when editing document 

    regkeyopen = path to program to use for viewing 

    regkeyprint = path to program to use for printing 

    saveindb = whether documents should be saved in so_arc 

Probability table: 

    probability = percentage associated with this item (0-100) 

Currency table:

    rate - exchange rate with base currency (double) 

    unit - denomination of the exchange rate (10000 lira to 1 dollar) 

Country table: 

    domainname - country code for internet addresses. 

    currencyid - default currency used in the country. 

    addresslayoutid - address formatting to use 

    englishname - string 

    phoneprefix - 47 for norway, 44 for uk. 

    timezonename - CET for norway, GMT for uk. 

    timezoneoffset - (short) +1 for norway, 0 for uk. 

    zipprefix - postal zipcode prefix ("N" for norway, blank for uk) 

ExtApp table: 

    fullpath - path to program after local machine decoding 

    path - path as specified in admin client 

    filename - as specified in admin client 

    workdir - as specified in admin client 

    parameters - as specified in admin client 

    url - contains complete URL if application is web based. 

    type - type of application. 256 = normal app. 512 = integrated web 

    location - where application is displayed. 0 = invisible, 1 = toolbox, 2 = navigator, 

              3 = view menu, 5 = contact card, 6 = contact archive. 

    isavailable - whether the application appears to be installed on the local machine 

RelDef table: 

    passivetext - the text used on the reverse of the relationship. 



##PARAM: fieldname

Fieldname as fields shown in the database manual

