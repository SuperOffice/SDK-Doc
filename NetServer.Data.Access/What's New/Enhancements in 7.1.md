<properties date="2016-05-11"
SortOrder="2"
/>

Improvements in 7.1

* The IUserCredentialPlugin authentication plugin API changed for better scalability. Using AD authentication with large trees/forests is much better now. We no longer attempt to enumerate all groups in the tree.
* ArchiveProvider rows now implement IDataRecord for simpler data binding and reading.
* Two new module licenses have been added: SuperOffice.AdAuth and SuperOffice.Solo. AdAuth enables the ActiveDirectory plugin, and the SOLO license enables the eLearning menu.
* ArchiveProviders can now expose event meta-data to the client, allowing the archive provider fine-grain control of what the UI should do in response to clicks.
* The Associate Cache has a new function to look up if a person is an associate.
* Project Guide and Sales Guide are supported using archive providers and helper classes.
* Person entity now has Chat and Voip properties.
* Project Status and Project Type are now linked, much like Sale Type and Sale Status were linked in 7.0.
* Row objects now support INotifyPropertyChanged!
* Row.SetDefaults now allows control over how much defaulting to do.
* Rows collections now support IBindingList and INotifyCollectionChanged and IEnumerable.
* SOPreference cache lifetime is now controllable.
