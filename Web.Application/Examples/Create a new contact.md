<properties date="2016-06-24"
SortOrder="3"
/>

Users create new contacts by clicking the NEW button in the GUI.

Programs can’t click buttons for the user. Instead they use SOProtocol to tell CRM.web to act as if the NEW button was clicked.

The SO Protocol for activating EDIT  is like this:

```
      contact.main[mode=edit]
```

 

The SO Protocol for activating NEW is like this:

```
      contact.main[mode=edit&new=true]
```

 

NEW mode is just editing a blank contact, so this is equivalent to

```
      contact.main[mode=edit]?contact_id=0
```

 

There are two direct ways to open a new contact by using the URLs containing SOProtocol shown below.

```
http://localhost/SuperOfficeWeb/default.aspx?contact.main[mode=edit&new=true]?contact_id=0
```

or

```
http://localhost/SuperOfficeWeb/default.aspx?contact.main[mode=edit&new=true]
```

 

User needs to fill required data fields such as company name, department, street address, postal address, country, before clicking the OK  button to save the data to the database.

 

<img src="Create%20a%20new%20contact_files/image001.jpg" width="605" height="440" />
