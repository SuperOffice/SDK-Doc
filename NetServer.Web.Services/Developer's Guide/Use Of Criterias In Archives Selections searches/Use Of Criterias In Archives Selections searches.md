<properties date="2016-06-24"
SortOrder="7"
/>

Archives consist of lists of Persons, Activities, Projects and many more. The Archives contains a vast collection of data that are either Contact specific or Project specific.

A selection is composed of many columns related to Contact and its Persons. A Selection can be updated either on the fly which are called “dynamic” where as the rests are called “static”.

A typical archive would be all the persons for a given contact. That can be expressed as a request to the person archive for all persons where “contact\_id = 123”.

Searches are a different use of archives. The basic principles and technology are the same. Searches use more general restrictions such as “person/firstname = John”.

The search and the person archive would just be two different search requests to the same person archive.

Lets us now look at a few examples in order to understand how we may get a better understanding of this.

1. autolist
