<properties date="2016-05-11"
SortOrder="58"
/>

At the most basic level, what we want to achieve is to carry a set of credentials (evidence of your identity) from the client into our application.

This involves the client OS, Browser, IIS on the Web Server, our application (incl login page), IIS on the Application server, and our application there

<img src="../../EW%202010%20Authentication_files/image004.gif" width="572" height="156" />

Transfer-of-identity is complicated and dependent on all components.   For instance, IE will automatically send your domain credentials to the Intranet Zone only, while Firefox won’t at all.

The connection between a Web and an App server in a remote configuration introduces a new level of complexity and inter-dependence.

Services vs. the Web application

When you use our Web application, you interact through a Browser that provides authentication and session handling capabilities

But there are also programs that interact directly with Services

* TrayApp, aka "SuperOffice Web Extensions"
* Mail Link for Web
* Pocket Server
* Customer Service

These do not involve a browser, and need to access the Web Services to get their work done

## Single Server Configuration

<img src="../../EW%202010%20Authentication_files/image005.gif" width="572" height="157" />

IIS Authentication can be used together with Services, but not in a Remote setup: the identity cannot be transferred that many times.  This is an MS design parameter, not changeable.

## Two Server (Remote) Configuration 

<img src="../../EW%202010%20Authentication_files/image006.gif" width="572" height="187" />

The AD User’s identity transfers from the Browser to the Web Server, but the web server cannot transfer this identity on to the app server – the web server cannot prove to the app server that it knows the user’s identity. The web server can only prove the that web-browser knows the user’s identity.

This is just part of how AD is designed.
