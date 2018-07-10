<properties date="2016-06-24"
SortOrder="52"
/>

We are using the SoArchiveControl for showing a specified set of columns from data defined by an ArchiveProvider. The previous section covered the definition of the datahandler and the control using the archive architecture, and now we’ll be looking at how to define what columns to show/ use.

The file containing the definition of all archive column sets is SoArchiveColumnList.config.

The file has an &lt;archives&gt; section with many &lt;archive&gt; object elements. The Archive object has three different sets of columns;

1. Mandatory
2. Default
3. Ignore

We will only be defining Default columns, which are the ones shown in e.g. a person list when using the PersonArchiveProvider.

To define your own set of columns, simply add a new &lt;archive&gt; element (preferably at the end), and specify the name of the provider in addition to a unique guiname.

Here’s the one used from our demo page:

```xml
<archive providername="person" guiname="devnetcontactpersonarchive">
    <columns type="mandatory">
    </columns>
    <columns type="default">
        <column name="mrMrs" />
        <column name="firstName" />
        <column name="lastName" />
        <column name="title"/>
        <column name="personDirectPhone/formattedNumber" />
        <column name="email/emailAddress"/>
    </columns>
    <columns type="ignore">
    </columns>
</archive>
```

As you can see, we are using the standard Person provider, and we have defined a set of default columns.

The only thing left for us to open our new dialog from CRM web is to add a link to it.
