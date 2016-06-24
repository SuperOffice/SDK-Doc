<properties date="2016-06-24"
SortOrder="12"
/>

Building the Page
-----------------

The SOML in **Listing Nine** defines the PersonalInformation page. This content is found in the SoPersonalInformation.config file.

Beyond the page id and title, you will see the datahandlers element. This is where all models are made available as datahandlers, and contain the functionality necessary to host the data source for each control on the page. As mentioned in the Data Sources and Configuration Settings section, the config child element contains elements that will be passed into the datahandlers’ Initialize method. In **Listing Nine** I am are declaring three elements; a string path to a datacarrier that will contain a PersonEntity instance, the progid for the user-defined field list – Favorite Color, and the list id for the Favorite Color list. Soon, I’ll show you how these elements are used in the datahandler.

**Listing Nine**: Partial contents of the SoPersonalInformation.config file.

&lt;page id="PersonalInformationDialog" &gt;

  &lt;title&gt;Personal Information Dialog&lt;/title&gt;

  &lt;data&gt;

    &lt;datahandlers&gt;
      &lt;datahandler id="PersonalColorDataHandler" type="PersonalColorDataHandler"&gt;
        &lt;config&gt;
          &lt;PersonDataSourceName&gt;PersonalColorDataHandler.PersonCarrier&lt;/PersonDataSourceName&gt;
          &lt;UDFieldProgId&gt;SuperOffice:2&lt;/UDFieldProgId&gt;
          &lt;UDListId&gt;31&lt;/UDListId&gt;
        &lt;/config&gt;
      &lt;/datahandler&gt;
    &lt;/datahandlers&gt;

  &lt;/data&gt; 

  &lt;panels&gt;

    &lt;panel id="MainPanel" type="SoDialogPanel" soprotocol="personalcolor"
      paneltype="Main" placeholderid="MainPlaceHolder" &gt;
      &lt;cards&gt;
        &lt;card id="PersonColorDialogCard" type="SoTabbedCard"
          placeholderid="DialogCardPlaceHolder" cardtype="MainCard" &gt;
          &lt;views&gt;
            &lt;view id="PersonalColorExampleControl" type="SoDialogView"
             soprotocol="main"&gt;
              &lt;caption&gt;Personal Information&lt;/caption&gt;
              &lt;controlgroups&gt;
                &lt;controlgroup id="DateControlsControlGroup" type="SoControlGroup"
                 top="10px" height="100%" width="100%" left="10px" right="0px"
                  position="absolute"&gt;
                  &lt;controls&gt;
                    &lt;control id="PersonalColorControl"
                     type="PersonalInfoUserControl" width="100%" top="0px"
                      left="0px" height="100%" position="absolute" &gt;
                    &lt;datasource&gt;PersonalColorDataHandler.PersonalColorCarrier&lt;/datasource&gt;
                      &lt;config&gt;
   &lt;PersonDataSourceName&gt;PersonalColorDataHandler.PersonCarrier&lt;/PersonDataSourceName&gt;
                        &lt;UDFieldProgId&gt;SuperOffice:2&lt;/UDFieldProgId&gt;
                        &lt;UDListId&gt;31&lt;/UDListId&gt;
                      &lt;/config&gt;
                    &lt;/control&gt;
                  &lt;/controls&gt;
                &lt;/controlgroup&gt;
                &lt;!--Button Bar Excluded for Brevity--&gt;
              &lt;/controlgroups&gt;
            &lt;/view&gt;
          &lt;/views&gt;
          &lt;config&gt;
            &lt;tabbedviews&gt;
              &lt;viewref&gt;PersonalColorExampleControl&lt;/viewref&gt;
            &lt;/tabbedviews&gt;
            &lt;only-visible-views&gt;true&lt;/only-visible-views&gt;
            &lt;datahandlers-to-save&gt;
              &lt;datahandler-reference&gt;PersonalColorDataHandler&lt;/datahandler-reference&gt;
            &lt;/datahandlers-to-save&gt;
          &lt;/config&gt;
        &lt;/card&gt;
      &lt;/cards&gt;
      &lt;config&gt;
      &lt;/config&gt;
    &lt;/panel&gt;

  &lt;/panels&gt;

&lt;/page&gt;

Drilling into the SOML, focus on the only control declared in page. The control id is PersonalColorControl and the type is PersonalInfoUserControl. The control id must be unique, different from any other control id declared on the page. The type value must match a MappingName attribute declared for an object element of type UserControl in SoObjectMapping.config. There was an example of this earlier in the Defining Controls section.

In order for a view element to be rendered in a card of type SoTabbedCard, it must be referenced in the tabbedviews element of the card config section.

When a save request gets posted from a particular card, how does the card know which datahandlers’ Save method to invoke? The framework again uses the cards config section and looks at the datahandlers-to-save element. Although the element name is plural, there can only be one datahandler-reference child element defined. There is also a datahandlers-to-delete element to manage delete operations, but this example does not make use of that.
