---
uid: guideWebPanelsAndSOProtocol
title: Web Panels And SOProtocol
---

Web pages shown in web-panels can use SOProtocol links to manipulate the SuperOffice user interface.



For example, this link will display the Appointment dialog:

&lt;a href="superoffice:contact.appointment"&gt;show appointment dialog&lt;/a&gt;



The problem is that the link also re-loads the page, showing a blank page as well as showing the appointment dialog.



To avoid getting the blank page in our face, we use the TARGET attribute on the link to place the result of the click somewhere that the user can't see it.

To hide the result, we use a hidden IFRAME to receive the blank page.



&lt;a href="superoffice:contact.appointment" target="hiddenframe"&gt;show appointment dialog&lt;/a&gt;
&lt;iframe name="hiddenframe" style="display:none"&gt;&lt;/iframe&gt;



You can now click the link, and the appointment dialog appears, and the web page remains unchanged.