<properties date="2016-06-24"
SortOrder="9"
/>

Bring It All Together
---------------------

It may seem that up until now I have been discussing scattered pieces of a jigsaw puzzle, but while thinking about everything mentioned up to this point and looking at **Figure Six**, everything should be becoming much clearer.

To summarize **Figure Six**, the controller intercepts requests to the web server, which then invokes the pagebuilder framework to construct a view, or page. DataHandlers then become initialized and ready to fetch data. Next, the page, and the controls on that page, becomes initialized, loaded, and databinding occurs. At this point, for each control with a defined datasource, a corresponding datahandler DataCarriers collection is populated and expected to contain the control data source. Lastly, when databinding operations are complete, the page is rendered.

The DataDispatcher class is is useful for bridging the data-access gap between the view and the model. Although used in many circumstances, the most popular use of the DataDispatcher class is when a custom control has a defined data source, but needs additional data tucked away in another data carrier in the DataCarriers collection. For instance, consider the well defined data source for the ContactMainHeaderControl in **Listing Six**. What is the view to do when it needs information not stored in that datasource, but another carrier stored in the same collection? This is where the DataDispatcher is useful. It has the capabilities to get any one of the carriers stored in the collection, as well as other useful methods for checking data-rights.

**Figure Six**: Conceptual overview, emphasizing model and view.

<img src="Bringing%20it%20all%20together_files/image001.jpg" width="493" height="312" />

**Listing Six**: The contact page configuration, extracted from SoMainviewView.config. 

&lt;view id="MainView" type="SoView" soprotocol="main" current="contact"&gt;

  &lt;caption binding="resources"&gt;\[SR\_COMMON\_CONTACT\]&lt;/caption&gt;

  &lt;tooltip&gt;The main one&lt;/tooltip&gt;

  &lt;controlgroups&gt;

 

    &lt;controlgroup id="mainHeadergroup" type="SoControlGroup" position="absolute"
                  top="5px" left="5px" right="20px" &gt;
      &lt;controls&gt;
        &lt;control id="ContactMainHeaderControl" type="ContactHeader"&gt;
          &lt;datasource&gt;ContactEntityDataHandler.ContactEntity&lt;/datasource&gt;
          &lt;config&gt;
          &lt;/config&gt;
        &lt;/control&gt;
      &lt;/controls&gt;
    &lt;/controlgroup&gt;
   ...

  &lt;/controlgroups&gt;

  ...

&lt;/view&gt;
