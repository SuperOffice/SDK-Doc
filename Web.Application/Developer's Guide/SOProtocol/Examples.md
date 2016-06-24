<properties date="2016-06-24"
SortOrder="8"
/>

1. The following example shows how we can retrieve the contact panel with contact\_id = 10 through the URL.

[www.example.com/default.aspx??contact\_id=10](http://localhost/SuperOfficeWeb/default.aspx??contact_id=10)

<img src="../SO%20Protocol_files/image004.jpg" width="605" height="424" />

2. The following example shows how we can open an Appointment dialog based on a given Appointment\_id. “appoinmtnet\_id = 124”. When the \[dialog=stop\] parameter is used it stops the user from going to another page by any means exposed in the page such as buttons and links.

[www.example.com/Default.aspx?appointment\[dialog=stop\]?appointment\_id=124](http://localhost/SuperOfficeWeb/Default.aspx?appointment%5bdialog=stop%5d?appointment_id=124)

<img src="../SO%20Protocol_files/image005.jpg" width="605" height="424" />

3. The example below shows how we can switch to the “edit mode” and edit a specific contact. The example below shows how we can retrieve the Contact with contact\_id = 10 and edit the Contacts details. The other mode available is the “mode=view” which is the view mode for page and restricts any modifications. Another parameter associated with the mode is the new parameter, i.e. \[mode=edit&new=true\]. This opens a new record such a new Contact page which allows us to create a new Contact.

[www.example.com/Default.aspx?contact.main\[mode=edit\]?contact\_id=10](http://localhost/SuperOfficeWeb/Default.aspx?contact.main%5bmode=edit%5d?contact_id=10)

<img src="../SO%20Protocol_files/image006.jpg" width="605" height="424" />

4. The following example shows how we can create a new Contact using the URL. “contact\_id=0” on the end is used to clear the person archive.

[http://localhost/SuperOfficeWeb/default.aspx?main\[mode=edit&new=true\]?contact\_id=0](http://localhost/SuperOfficeWeb/default.aspx?main%5bmode=edit&new=true%5d?contact_id=0)

<img src="../SO%20Protocol_files/image007.jpg" width="605" height="424" />
