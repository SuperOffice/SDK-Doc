<properties date="2016-06-24"
SortOrder="11"
/>

PageBuilder uses the ControlBase in order to define support for sentry rights as well as data binding rights. The ControlBase class is contained in SuperOfice.Web.UI.Controls namespace and is the base class for all controls used by the PageBuilder. This concept allows controls to be disabled automatically when a field is read only. Sentry rights are calculated at the lowest level of NetServer and transported all the way up through the web service to the GUI layer.

An important point to remember!

Sentry acts as the watch dog that keeps an eye on all the access to data in the SuperOffice database.

All sub-classes of the ControlBase have support for AJAX callbacks and declarative configuration and layout via the PageBuilder.

The following example shows how a sentry right can be used.

```
<panel id="Contact" type="SplitterPanel" soprotocol="Contact" paneltype="Main" placeholderid="MainPlaceHolder">
  <!--Some other code-->
  <sentry-rights>
    <sentry-right tableright="HasInsert" type="disable">appointment</sentry-right>
  </sentry-rights>
</panel>
```

 

What the above tag means is that if the logged in user doesn’t have the required rights in order to insert data, then the field, button or any other relevant item is disabled. Also, if a menu item such as a button, drop down list etc has been blocked by several sentry rights it is enough that one of them hits.

The following example shows how a function right can be used.

```
<panel id="Contact" type="SplitterPanel" soprotocol="Contact" paneltype="Main" placeholderid="MainPlaceHolder">
  <!--Some other code-->
  <function-rights>
    <function-right type="hide">hide-sale</function-right>
  </function-rights>
</panel>
```

 

The function rights are applied to user roles. In the example above which says “hide-sale” means that if the users belonging to a role which has the functional right “Hidesale” enabled will not be able to see the Sale dialog from the GUI.
