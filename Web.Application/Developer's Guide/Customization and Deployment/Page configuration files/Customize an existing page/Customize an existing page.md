<properties date="2016-06-24"
SortOrder="28"
/>

When customizing a page in the web client you have to change or add sections of the configuration. To ease the trouble of upgrading and other partners operating in the same pages the use of merge files is essential.

You can remove, replace and add sections of configuration xml with merge files. The merge is id-based making it durable between minor version upgrades and even major upgrades if the page only has small changes.

NB! Fragments and references cannot be used in the merge files since the merge filter is executed after the fragment resolving.

 

Page merge is id-based. It uses id attribute to pinpoint location of merge.

 

1. autolist
