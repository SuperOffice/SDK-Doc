<properties date="2016-06-24"
SortOrder="3"
/>

In the CRM.web application a place where a list of persons is shown using the PersonArchive is the Company page’s Contact tab in the Archive Card. For us to retrieve this information using the SoProtocol we should use a URL which is similar to the one shown below.

<http://localhost/SuperOfficeWeb/Default.aspx?contact.main.minimonth.personarchive?contact_id=2&person_id=10><a href="" id="OLE_LINK1"></a><a href="" id="OLE_LINK2"></a>

In order for us to understand what each part of the URL means we can break it down as follows.

* **http://localhost/SuperOfficeWeb/Default.aspx** - This is the default URL for all CRM.web pages.

* **contact.main.minimoth.personarchive** – This indicates that the page consists of 4 panels. Since the Contact Card consists of four views we have identified the main view to be shown. “udef”, “interest” and “www” can be used to replace main since these are the other views available in the Contact page. Similarly minimonth indicates the card to the right of the Contact card and there also we can call the page using the different views available under this card. “personarchive” refers to the card below the Contact card and the minimonth card. Here also we could replace the personarchive with the names of the other views available under this card.

* **contact\_id=2&person\_id=10** – “contact\_id=10” indicates which Contact’s details should be shown on the page. person\_id that the person whose person\_id is 10 of the Contact whose Id is 10 will be highlighted.  

Following is a screenshot of the web page that will be shown when the above URL is passed on the address bar.

<img src="Get%20a%20list%20of%20people_files/image001.jpg" width="605" height="424" />

 
