<properties date="2016-06-24"
SortOrder="1"
/>

6. web and the Model-View-Controller Pattern
===========================================

 

This article provides and introduction to the SuperOffice web client (6.web), and introduces the different components that make up the underlying architecture.

 

Many enterprise software applications base their application design on solid patterns that have been tried and proven true in high demand environments. SuperOffice is no exception. From inception, the intent for the SuperOffice web client was to incorporate the most sensible patterns needed to build a rock-solid enterprise CRM application, yet remain flexible enough to facilitate a great deal of customizability. As the title states, it has accomplished this by leveraging an architectural design loosely based on the Model-View-Controller pattern. In this article, I walk you through the main aspects of the architecture and demonstrate how the different pieces fit together.

1. autolist

 

<img src="Model-View-Controller%20Pattern_files/image001.jpg" width="500" height="465" />

**Figure One**: How some people may understand MVC architecture prior to actually working with it.

(Image courtesy of Describbles, <http://www.describbles.com/?p=1>)

SuperOffice Web Client
----------------------

I remember my first few months working with the SuperOffice Web Client Expander Edition (SWCEE). In many ways, it was as confusing to me as the cartoon shown in Figure One. It took some time to piece together all of the decoupled components, there were many “ah-ha” moments, but it all slowly began to make sense.

Probably the biggest difference between the SuperOffice Web Client (SWC) and any other ASP.NET web application is that it creates a state-aware application in a stateless environment.

When compared to the windows client, which exposes a rigid “Current” system, the web client is driven mainly by a similar, but much more flexible, mechanism. Where the windows client is rigid and mute, the web client allows an organization to expand the current system and incorporate new “current”-states into the application.

Imagine for a moment that you’ve been tasked to build an integration which adds a new dialog to the application. In that new dialog you are responsible for displaying product group information from an ERP system. As of this writing, there is no “currentproductgroup” current, but if interested in tracking what the current, or last viewed, product group is, then the system allows one to be created. This is a feature not available in the windows client.

The current system is one of the fundamental pieces used by to drive the application. Located in the Controller piece of the design, currents are important because requests to the web server often contain current values in the query string which the SoProtocol module then uses to re-define the current state of the application. The Model piece of this design relies heavily on this mechanism to decide what will finally be rendered to the view.

<img src="Model-View-Controller%20Pattern_files/image002.jpg" width="499" height="345" />

**Figure Two**: A simplified conceptual overview of the SuperOffice web client architecture.

 

Getting Started
---------------

The general idea for this article is to demonstrate the fundamental concepts involved with the SuperOffice web client application design. I’ll do this by building a new dialog, populating some controls in the dialog with data, and then demonstrate how to save the changes back to the database.
I’ll discuss the different components that make up the architecture, seen in **Figure Two,** and attempt to show where and how each is used. I’ll discuss how they apply to the SuperOffice Web Client architecture, and introduce topics such as page configuration, built-in controls, custom controls, datahandlers and data carriers.
