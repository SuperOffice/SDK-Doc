<properties date="2016-06-24"
SortOrder="29"
/>

You can specify the merge action by adding an attribute called mergeaction. There are three actions available:

* Insert (default), inserts the section

* Replace, replaces the section with same id-value

* Remove, removes the section.

 

The example below will replace the controlgroup ‘maingroup\_2’ in the page named Contact

[]() 

```
<pages>
  <page id="ContactPage">
    <panels>
    <panel id="Contact">
      <cards>
      <card id="ContactMainCard">
        <views>
          <view id="MainView">
            <controlgroups>
              <controlgroup id="maingroup_2" mergeaction="replace" 
               type="SoControlGroup" position="absolute" 
           top="58px" width="42%" right="20px" overflow="hidden">
                <controls>
                  <control id="miniImage" type="SoImage">
                    <config>
                      <imagetype>url</imagetype>
                      <src>Myimages/WebClient/Web/image/owl.jpg</src>
                    </config>
                  </control>
                </controls>
              </controlgroup>
            </controlgroups>
          </view>         
        </views>       
      </card>
      </cards>
    </panel>
    </panels>
  </page>
</pages>
 
```

This is the basics of customizing the web-client, the content of the customization I will leave entirely up to you... 

Happy customizing!

 

 

*Jørund Myhre, 14 Feb 2011*

 

 
