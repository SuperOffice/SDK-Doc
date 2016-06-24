<properties date="2016-05-11"
SortOrder="57"
/>

The logic is the same as for Windows: first we try to log on, using what we know; only if that doesn’t work is the login dialog shown.

You must **turn off anonymous access** and **turn on ASP.NET impersonation** on IIS.

* The first forces the browser to authenticate using Windows identity. IE may transfer your current identity automatically, Firefox will show a domain login box. This establishes your Windows identity in IIS, for this request.

* The second option transfers that identity from IIS into the actual SuperOffice Web client application, so it can do its usual authentication.

* Remote setups have an additional hop from the web client to the NetServer back-end.

Chain-of-trust yet again – you present evidence to your Browser, which sends it to IIS; IIS resolves it and knows who you are; then that is transported to NetServer, who trusts its environment; and hey presto, we know who you are.

 

Summary

If your user is a domain user...

... and your web server is in the domain

... and you have set up IIS authentication

... and your client computer is in the domain

... and you’re running IE

... and your 7.Web site is in the Intranet Zone

... and it’s not a Remote installation

Then you will log on directly and never see a login dialog

 

Otherwise, type your domain username+password into whatever login dialogs you get on the way

The long list of if’s is not dictated by us, but mostly by MS and other browser vendors.
It’s not our fault.

 

Using AD username + password

The login dialog will accept Windows username and password, for AD users

* i.e., if you get a SuperOffice login dialog, then you can type in your Windows credentials

* NetServer will then turn around and ask Windows if it recognizes them

* If yes, then the resulting Windows Identity is used as input for the authentication process

This is a ”safety valve” for users that are AD authenticated, but for any reason can’t succeed in an integrated login

The idea is that **if** users see a login dialog, then their «usual» user should work, whether that is a Superoffice or AD user; which is why NetServer will accept both types of credentials in the username+password strings. The superoffice user is checked first, since that happens with a known speed (database lookup). AD user lookup **can** take a long time, if your server has a difficult relationship with the domain controller (think DMZ+firewalls+complicated setups).
