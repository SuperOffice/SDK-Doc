<properties date="2016-06-24"
SortOrder="8"
/>

The SoButton control is a standard ASP.NET button control inherited from System.Web.UI.WebControls.Button, it exposes all properties that a button control has. The only property that is set is the CSS class property: The SoButton will have the look defined in the INPUT.sobutton CSS definition.

The following example shows how we can add a button to the Navigator panel by making modifications to the SONavigatorPanel.config file.

```
<panel id="Navigator" type="SoPanel" soprotocol="" paneltype="Navigator" top="20px" left="0px" height="800px" overflow="auto" width="160px" position="absolute" zindex="99">
  <cards>
    <card id="NavigatorCard" type="SoCard" placeholderid="" cardtype="NavigatorCard">
      <views>
        <view id="NavigatorView" type="SoPlainView" overflow="auto" soprotocol="Navigator" >
          <controlgroups>
            <!--Some other Control groups-->           
            <controlgroup id="ButtonGroup" type="SoControlGroup" position="relative" left="16px" top="10px">
              <controls>
                <!--Some other buttons-->
                <!--Our Button code begins here-->
                <control id="myPageButton" type="SoToolButton">
                  <caption>My Page</caption>
                  <config>                    
                    <onclick>javascript:PageUpdate('soprotocol:test','');</onclick>
                    <ontextclick>javascript:dummy();</ontextclick>
                    <passiveimage>images/Myimages/myButton1.jpg</passiveimage>
                    <disabledimage>images/Myimages/myButton2.jpg</disabledimage>
                    <selectedimage>images/Myimages/myButton3.jpg</selectedimage>
                    <hoverimage>images/Myimages/myButton4.jpg</hoverimage>
                    <width>70</width>
                    <textalign>right</textalign>
                  </config>
                  <function-rights>
                    <function-right type="hide">hide-company</function-right>
                  </function-rights>
                </control>
                <!--Our Button code Ends here-->
              </controls>
            </controlgroup>
            <!--Some other Control groups-->          
          </controlgroups>        
        </view>
        <!--Some other Views groups-->        
      </views>
    </card>
  </cards>
</panel>
```

 

What we have done is added a code segment to the SoNavigatorPanel.config file so that a new button would be visible in the navigator panel. The most important tag is the &lt;onclick&gt; tag which provides the navigation for the button. The tag defines the javascript to be used to call the page\_id. In the case of the example the javascript used is the PageUpdate and the page\_id is test. Test is the SoProtocol of the Panel created by us.

An important point to remember!

IIS should be restarted in order to make all changes take effect before refreshing CRM.web.

Alternatively you can enable the CacheConfigurations parameter in the web.config file’s &lt;ClientConfigurationProvider&gt; section to force the PageBuilder to load the config files from disk every time. Turning on this option will cause CRM.web to run more slowly.

The new button should now be visible in the Navigator Panel on the left side of the screen. By clicking on the button we would be able to our Test page (Custom Page).

<img src="../Config%20Add%20a%20new%20Panel_files/image001.jpg" width="192" height="326" />

------------------------------------------------------------------------

**See Also:** System.Web.UI.WebControls.Button
