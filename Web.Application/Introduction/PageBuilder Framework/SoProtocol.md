<properties date="2016-06-24"
SortOrder="12"
/>

The SuperState depends on the SoProtocol. The SoProtocol allows you to control the user interface without using scripts. The protocol gives you the possibility of sending a link to user that will open another specific panel based on the information sent. If no SoProtocol is given, the last valid SuperState will be used.

Lot of views are included in the SoContactPanel.config file. In  the view defenition it defines the type of the view and the soprotocol name for the view. For example soprotocol="udef", soprotocol="interest", soprotocol="personarchive" and many more.

```
<view id="interests" type="SoView" soprotocol="interest" current="contact">
```

 

Example: The URL [www.example.com/sixweb/default.aspx?contact.interest.personarchive](http://www.example.com/sixweb/default.aspx?contact.interest.personarchive) contains the SoProtocol name “interest”, so this page will be shown on the web page.

TODO link to SoProtocol
