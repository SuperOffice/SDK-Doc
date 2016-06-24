<properties date="2016-06-24"
SortOrder="9"
/>

 

Let’s look at how SoProtocol works with the other important components of the Six Web.

The main components that work with the Super State are the SoProtocol module and the PageBuilder module. SoProtocol is the module that interprets what is to be shown in a given page and the PageBuilder is the module that actually builds and renders the page.

The SoProtocol is a protocol that is defined by SuperOffice to define what should be shown on a page. Given below is how the SoProtocol will look like for a normal web site and a web site that is hosted as a virtual directory.  

Web site

[www.webclient.example.com/default.aspx?contact.main.personarchive?contact\_id=2&person\_id=4445](http://www.webclient.example.com/default.aspx?contact.main.personarchive?contact_id=2&person_id=4445)

Virtual directory

[www.example.com/webclient/default.aspx?contact.main.personarchive?contact\_id=2&person\_id=4445](http://www.example.com/webclient/default.aspx?contact.main.personarchive?contact_id=2&person_id=4445)

When the SoProtocol changes it tells the system that it needs to show something different on the page. So now the Super State knows that the SoProtocol has changed and will get the new parts of the page and the data from the cache or the database.

For example we change the above SoProtocol string to look like below;

[www.example.com/webclient/default.aspx?contact.main.personarchive?contact\_id=3&person\_id=105](http://www.example.com/webclient/default.aspx?contact.main.personarchive?contact_id=3&person_id=105)

Notice that the contact\_id and the person\_id in this SoProtocol has changed, this tell the SuperState to check for the availability of the data in the cache. If it is in the cache it will be pulled from the cache if it is not there it will be pulled from the database. [SoProtocol](../SOProtocol/SOProtocol.md)

The Page builder on the other hand works with Super State to render a given page. When the SoProtocol says what it wants to show on a given page the Super State will gather necessary page config data and the data that needs to be shown in the page. It is the PageBuilder’s duty to format the page according to the config data of the page and render the page along with its data. (TODO: link to PageBuilder framework section)
