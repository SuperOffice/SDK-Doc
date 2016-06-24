<properties date="2016-06-24"
SortOrder="10"
/>

A Panel consists of several different kinds of objects:

##### Panel

In CRM.web a single page may consist of several panels. The panel object is the top level UI frame for the interface. The panel can consist of any number of cards. The Card can be treated as canvases on which we can place views using different layout rules. The panel implementation will interpret what these cards are going to be used for and how they are shown. The card can contain any number of views which are laid out according to the definition on the card and the properties of the control.

TODO link to PageBuilder Config files document

##### Cards

The card section contains one or more views. The views can be displayed one by one or all at once, which is decided by the implementation of the card. In CRM.web the card will display a tab control or a dropdown control telling the user which view is active and what other views are available.

TODO link to PageBuilder Config files document

##### Views

The view section contains one or more controls. The controls can be displayed one by one or all at once, this is decided by the implementation of the view.

TODO link to PageBuilder Config files document

##### Control

The control is the most interesting object in the framework, because the controls are what we are actually interacting with when we use the panel.

A control is a set of smaller UI controls which also contains all the presentation logic. Embedding this logic into the control simplifies the configuration a lot. The interaction between fields (controls) and other event driven logic must be implemented specific into each control.

1. autolist
