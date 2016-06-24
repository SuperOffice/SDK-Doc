<properties date="2016-06-24"
SortOrder="11"
/>

Taking a look at how to call server-side methods both asynchronously and synchronously from client-side javascript inside CRM.web

When doing development in a â€œweb 2.0â€ environment, the whole point is doing operations on the webserver without having to post the whole page and then get that whole page from the webserver again. The key is to use javascript for calling business logic on server-side objects asynchronously using remote XML (which is what AJAX really is/ does).

CRM.web uses both asynchronous and synchronous server-side method calls from the client using javascript. Like with all other objects and controls, you are also able to create your own objects that are to be called using the AJAX methodology. Exactly that will be the topic for this article.

1. autolist
