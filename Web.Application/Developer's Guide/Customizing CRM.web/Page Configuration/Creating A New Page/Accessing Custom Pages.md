<properties date="2016-06-24"
SortOrder="53"
/>

To access your own pages, you will need to add links to them from somewhere. You can place links anywhere, really, but the most obvious places would be either the menu on the left hand side or the one in the bottom of the main page. The approach for doing so is exactly the same whichever one you choose.



 

The menu configuration files are SoNavigatorPanel.config and SoButtonBarPanel.config for the left and bottom menus respectively.



 

To add a new button on the left menu, we add a new &lt;control&gt; element in the “ButtonGroup” controlGroup inside the “NavigatorView” view;



 

&lt;control id="DevNetContact" type="SoToolButton"&gt;

    &lt;caption&gt;DevNet Custom Contact&lt;/caption&gt;
    &lt;tooltip&gt;Our own contact dialog&lt;/tooltip&gt;







       &lt;menu&gt;
             &lt;context&gt;navigator&lt;/context&gt;
             &lt;id binding="none"&gt;0&lt;/id&gt;
             &lt;position&gt;below&lt;/position&gt;
             &lt;click&gt;left&lt;/click&gt;
       &lt;/menu&gt;
    &lt;config&gt;
        &lt;onclick&gt;javascript:Dialog.open("devnetcontact","devnetcontact\[dialog=stop\]");&lt;/onclick&gt;
        &lt;passiveimage&gt;images/toolicons/btn-sale-passive.png&lt;/passiveimage&gt;
        &lt;disabledimage&gt;images/toolicons/btn-sale-disabled.png&lt;/disabledimage&gt;
        &lt;activeimage&gt;images/toolicons/btn-sale-active.png&lt;/activeimage&gt;
        &lt;hoverimage&gt;images/toolicons/btn-sale-hover.png&lt;/hoverimage&gt;
        &lt;width&gt;70&lt;/width&gt;
        &lt;textalign&gt;right&lt;/textalign&gt;
    &lt;/config&gt;
    &lt;function-rights&gt;
        &lt;function-right type="hide"&gt;hide-inbox&lt;/function-right&gt;
    &lt;/function-rights&gt;

&lt;/control&gt;



 

All the properties above should be pretty self-explanatory. The most important setting is the &lt;onclick&gt; element, which defines the javascript call to open the dialog using the page id, in our case “devnetcontact”.



 

You should restart IIS to have all your changes take effect before you refresh CRM.web. The new link icon should now be visible in the left side menu, and by clicking it our new page should open, showing the name of the current contact, in addition to the list of all persons for that contact.
