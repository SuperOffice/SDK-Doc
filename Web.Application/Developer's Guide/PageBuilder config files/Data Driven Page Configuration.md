<properties date="2016-06-24"
SortOrder="19"
/>

Data Driven Page Configuration
==============================

Some parts of the configuration file are filled in according to data in the database. The pagebuilder framework replaces part of the config file with new data generated from information in the database.

For example, the layout of the user-defined fields on the more tab is stored in the database in the UDefField table. The actual values in the user-defined fields are stored in a different table.

The config for the More tab on the company card looks like this:

```
        <view id="more" type="SoView" soprotocol="udef" current="contact">
          <caption>[SR_MORE_CONTACT]</caption>
          <controlgroups>
            <controlgroup id="contactmainmoreudefgroup" type="SoControlGroup" left="16px" right="20px” top="85px" bottom="54px" overflow="auto" position="absolute">
              <controls>
              </controls>
              <config>
                <grouptype>absolute</grouptype>
              </config>
            </controlgroup>
```

 

The control group is empty – but the pagebuilder framework knows that it needs to place the controls defined in the UdefField table in the database inside this tag. It knows this because the SoUdefConfiguration.config file defines the id of the control group.

The pagebuilder framework generates the controls needed to show the user-defined fields using the data in the UdefField table in the database.
