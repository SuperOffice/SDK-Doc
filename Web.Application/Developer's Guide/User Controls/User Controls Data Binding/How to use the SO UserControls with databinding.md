<properties date="2016-06-24"
SortOrder="10"
/>

UserControls are reusable components which can be reused by many pages. The extension of the UserControls are “.ascx”. ASP web pages have the “.aspx” extension. The basic differences between “.aspx” and “.ascx” pages are that “.ascx” pages may not have `<HTML>`, `<Body>`, or `<Form>` tags but the “.aspx” pages have those tags. I.e. ASCX pages are web controls that can be used in an ASPX page.

The UserControls are the outermost elements in the CRM.web. The control is perhaps the most interesting object in the framework, because the controls are what we actually interact with when we use the panel.

A UserControl is a set of smaller UI controls which also contains all the presentation logic. Embedding this logic into the UserControl simplifies the configuration a lot. The interaction between fields (controls) and other event driven logic must be implemented specific into each control.

The databinding is handled by the DataHandler. The DataHandler databinds all the controls that implements the IDataBound interface in the card.
