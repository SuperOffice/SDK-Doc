<properties date="2016-06-24"
SortOrder="5"
/>

Data Handlers is the layer between the GUI and the Web Service. The handlers expose the web service results (the carriers) to the GUI, and take care of sending the modified results back to the Save Web services when needed. For example if we require contact details the data handler gets a request from the Page Builder for the Contact Entity – the Data Handler has to call the Web Service to get the answer.

A Datahandler handles the population and storing of data within a card. The controls can bind to this data through the datasource property. It’s the glue between the UI and NetServer

1. autolist
