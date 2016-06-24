<properties date="2016-06-24"
SortOrder="14"
/>

To use the new data handler from the Sale page, we need to define it in the &lt;datahandlers&gt; section of the SoSalePage.config file. We will replace the existing data handler of type SaleDataHandler with our own;

&lt;page id="SaleDialog" &gt;

    &lt;title binding="resources"&gt;\[SR\_SDLG\_CAPTION\]&lt;/title&gt;
    &lt;data&gt;
        &lt;datahandlers&gt;
            &lt;datahandler id="EntityDataHandler" type="DevNetSaleDataHandler"&gt;
                &lt;config&gt;
          &lt;completed-panelid&gt;SalePanel&lt;/completed-panelid&gt;
          &lt;completed-cardid&gt;SaleCard&lt;/completed-cardid&gt;
        &lt;/config&gt;
      &lt;/datahandler&gt;
