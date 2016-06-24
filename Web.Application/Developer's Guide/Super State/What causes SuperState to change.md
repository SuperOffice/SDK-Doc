<properties date="2016-06-24"
SortOrder="8"
/>

As we talked about earlier all the users Get Request and the Call Backs will lead to a change in the Super State. A Get Request is a request for a whole page in the Six Web application. For example: if the user is in the Company view and he changes his current view to the Selection view it will result in getting a whole page from the system. In a scenario like this the SuperState will use the Configuration manager to get the page config data which describes the selection page and use the SuperState manager to get the selection data that is shown in the page either from the cache or the database. The user’s Get Request resulted in a change in the Super State and the Super State will hold all the data that got changed in the cache for future reference.

A Call Back is a request that is triggered within a page, for example when you click on the dog ears that appear in the main card of a Six Web Page.

<img src="../Super%20State_files/image004.jpg" width="604" height="515" />

When you click on the dog ears, it would just refresh the card since Six Web uses Ajax to render out parts of a web page. If the card is marked in the config as been triggered, they will also get updated.

For example if the archive card contains the contacts of the company the archive will also get refreshed since the Contact archive is declared in the company panel config as being triggered by the current company. This means that Super State will do the necessary calculation which parts of the page needs to be refreshed and it will get all the config data of the parts of the page that needs to be updated. If the data is in the cache it will fetch them from the cache or if it is not there it will fetch them from the database and hand them over to the page builder to build the page and render. As in all cases the data that got changed will be stored in the cache. 

The config file for the contact person archive looks like this:

```
        <view id="ContactPersonArchiveView" type="SoView" soprotocol="personarchive" >
          <caption>[SR_PL_PERSONS]</caption>
          <controlgroups>
            <controlgroup id="mainactivitygroup2" type="SoControlGroup">
              .....
            </controlgroup>
          </controlgroups>
          <triggers>
            <trigger type="current">contact</trigger>
            <trigger type="current">person</trigger>
          </triggers>
        </view>
```

 

Note that the view tag declares the soprotocol name for this part of the page. When SuperState sees the soprotocol name “personarchive”, it can ask the PageBuilder to build the view with that soprotocol name.
