---
uid: OLEDBProviderViews
title: OLE-DB Provider Views
---

---
uid: guideOLEDBViews
title: OLE-DB Provider Views
---

Views are automated joins over the database. Instead of having specify that person.contact\_id = contact.contact\_id and contact.category\_idx = category.category\_id – the view has specified all this for you. You just have specify which fields you want, and for what criteria.

The views are used in the report generator. The views are not specified in the database. They are computed inside the SuperOffice OLE-DB provider.

The join-calculator is very smart (unfortunately) so some queries take a long time to finish.

But: All the join logic is hidden from you, and you get access to the formatting logic for address labels and names.

SELECT \* FROM vwperson WHERE person\_id &lt; 10

This query displays the personName, birthDate, phone, email and userdef1 etc fields, which are all computed based on the raw data in the database. The personname field respects the firstname/lastname preference, and adds the Mr/Mrs if one has been set. The birthdate combined the birth\_day, birth\_month and birth\_year fields into one date for easy presentation.

SELECT completeAddress FROM vwpersonlabel WHERE person\_id &lt; 10

This query will display the address formatted over multiple lines (Linebreak = □ symbol). This combines the company and personal address with country specific formatting (international addresses automatically get the country’s initial prefix added to the zip-code, for example).