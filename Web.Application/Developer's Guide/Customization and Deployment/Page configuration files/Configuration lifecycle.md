<properties date="2016-06-24"
SortOrder="25"
/>

When a callback request is made to the server the request is in the form of the soprotocol.  The SoProtocolModule parses the soprotocol and updates the SuperState and Current reflecting the changes made from the last request.  These changes are used by the ContextFilter to modify the configuration. Parts of the configuration that isn’t affected by the changes in SuperState/Current are removed.  When the PageBuilder receives the configuration it has no knowledge of what to render and what to not render. The PageBuilder only builds what the configuration tells it to build.

But before the stripping of unchanged parts of the page happened we need to build the entire page configuration, this has several step:

The page configuration is parsed multiple times

* Fragments are resolved and put together.

* Data driven config for WWW panels and external applications are generated

* The merge-filter does the merge of custom merge files

* Caching

o   First cached in the database to reduce startup time after an application recycle

o   Then cached in the application session for optimal access to the fully parsed configuration

o   Use the magic Flush command to clear the cache both on client and server

* Last but not least the context filter and many other filters

o   Main purpose is to reduce client output, enforce rules(rights) based on client state/user

 

Below is an illustration of the growth and shrinking of a page configuration

 

<img src="../Customization%20and%20Deployment%20article_files/image001.png" alt="Machine generated alternative text: Raw _fr Fragments DataDriven Filtered" id="Picture 1" width="610" height="380" />
