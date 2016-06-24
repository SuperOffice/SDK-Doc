<properties date="2016-06-24"
SortOrder="7"
/>

<img src="../Super%20State_files/image001.gif" width="576" height="536" />

The above diagram shows us all the main components that make up the Six Web. The part we will focus on this section is the yellow box that is shown in the diagram. Super State is “The mechanism that holds the current state of the different elements of the Six Web and the mechanism that tells other components of Six Web what to render, how to render and when to render”.

The main task of the Super State is to maintain the current cache of the logged in user, update the cache as the session goes on and save the preference of the user when he/she logs out of the system.

In CRM.web the cache will initially be empty when user logs on to the system for the first time. When the user moves about in the session the cache will be updated from either the config files that make up a page or from the database. Once the user logs out of the system the data in the cache will be stored back into the database. Therefore when the user logs into the system for the second time there will be a considerable amount of data in the cache since it will be updated from the data that was saved in the database.

When the user moves from a page to another page that consist of different information for example if the user moves from the Company page to the Project page the super state will first check whether the data requested by the user exists in the cache and fetch it from there. If not it will fetch the data from the database. If it is in the cache the super state will hand over the data as well as the page config data (data from page config XML files) to the page builder to create the page and render.  [Page Builder](../PageBuilder%20config%20files/PageBuilder%20config%20files.md)

If it is not in the cache the Super State will get the data from the database and hand over the data and the page config data to the page builder to render the page. Then store the new data in the cache for future reference. This is why the last box is named CRM.web Client Bridge. The Super State acts as a bridge for the database and the rest of the Six Web components. 

Below you find the class diagram for the Super State data structure, its helper classes and the actual class that builds the Super State and the class that manages the configuration of the pages.

<img src="../Super%20State_files/image002.jpg" width="847" height="662" />

                            *Super* *State* *data structure and the helper class*

 

Here we can see how the Super State holds data for the different panels, cards, views in the Six Web application as well as how it holds data on history items and the window positioning. The helper class is the class that holds different methods to deal with data structure. [Page Builder](../PageBuilder%20config%20files/Page%20config%20files.md)

<img src="../Super%20State_files/image003.jpg" width="680" height="293" />

                            *The classes that actually manages the Super State structure*

From the above diagram we can see that all the functionality that we talked about earlier in the section are actually provided from two different classes.

* The ConfigurationManager’s main role is to load, parse and filter xml files, and to temporarily store them in session cache.

 

* The SuperStateManager reads SuperState data from the database and stores any changes back to the database on session end. The SuperStateManage uses the ConfigurationManager to retrieve config data used to build up the SuperState data structure.
