<properties date="2016-06-24"
SortOrder="17"
/>

When you do a refresh of CRM.web after having added the object in SoObjectMapping, the class is ready to be used from the AjaxMethodDispatcher from anywhere in CRM.web.

Please make sure the ClientConfigurationProvider/ CacheConfigurations key in web.config is set to false for your config file changes to take effect immediately. If you have that set to true, you will have to restart IIS (do an iisreset) for your changes to take effect.

Since we wanted to create a follow-up appointment for a sale, weâ€™ll add a new button to the Sale page that calls our new server-side method from javascript.

Here is the declaration of the button in SoSalePage.config;

&lt;control id="DevNetDemoButton" type="SoButton"&gt;

    &lt;caption&gt;Create Follow-Up&lt;/caption&gt;
    &lt;config&gt;
        &lt;onclick&gt;javascript:var appId = AjaxMethodDispatcher.CallSync('CustomizingSIXwebPart6.AjaxDemo.CreateFollowUp'); if (appId &gt; 0) { Dialog.open('appointment','appointment\[dialog=stop\]?appointment\_id='+ appId,''); } else { Dialog.Information('Error', 'Failed to create new appointment', 'error'); }&lt;/onclick&gt;
        &lt;width&gt;100&lt;/width&gt;
    &lt;/config&gt;

&lt;/control&gt;

The button is of type SoButton, the caption can be set to whatever you want, and you can set a whole range of properties in the config section. We are only using the onclick and width properties in this example.

Here you can see the new button added to the Sale page;

<img src="../Custom%20Ajax%20Methods_files/image001.jpg" class="c18" />
