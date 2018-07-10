<properties date="2016-06-24"
SortOrder="49"
/>

There are at least three things you need to do when adding a new page to CRM web;

1. Create a new page configuration file
2. Define the new page in the SoApplicationConfiguration file
3. Add a link to the new page from e.g. the SoNavigatorPanel or SoButtonBarPanel configuration files

In addition, if you are using your own web controls, you need to define these in the SoObjectMapping configuration file.

In the example we will be going through now, we will only be using standard CRM web controls, so we will not be using the SoObjectMapping file now.

The page we will create will be a variant of the Contact card, showing information from the current contact and all connected persons for that contact.

1. autolist
