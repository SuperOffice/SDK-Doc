<properties date="2016-06-24"
SortOrder="18"
/>

The javascript inside the onclick property is what performs the magic here; it uses the CallSync javascript function of the AjaxMethodDispatcher object to call the CreateFollowUp method of our server-side class. Note that you actually need to supply the fully qualified name. You can not use the MappingName as supplied in SoObjectMapping directly.

The javascript stores the value returned from the CallSync method in a local variable. Depending on that value, either the appointment dialog will be opened with the new appointment, or it the method fails for some reason, an error message will be displayed in a CRM.web message box.

Here are both results as displayed by the Display javascript object;

<img src="image005.jpg" class="c19" />

<img src="image003.jpg" class="c20" />

And finally, here's the appointment shown in the activity archive of the contact card;

<img src="image004.jpg" class="c21" />
