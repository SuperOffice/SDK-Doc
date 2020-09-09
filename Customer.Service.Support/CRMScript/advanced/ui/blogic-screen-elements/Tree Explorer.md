---
title: Tree Explorer
path: /Blogic/Screen Elements/Tree Explorer
sortOrder: 90
---


This element lists information in a tree view, the tree is capable of expanding or collapsing.




###The following configuration function is available:###


 - setFieldValue(string, Map):
     - "add2Entry" an entry is added into the tree with the following values:
            - <b>"id"</b>
            - "parent.id"
            - <b>"onclick"</b>
            - <b>"href"</b>
            - <b>"name"</b>
            - <b>"tooltip"</b>
            - <b>"target"</b>
            - <b>"order"</b>
            - <b>"leaf"</b>
            - <b>"icon"</b>
            - "icon.contentType"
            - "icon.filename"
    - <b>"addLink"</b>: a new link is added with the following values:
            - <b>"href"</b>
            - <b>"target"</b>
            - <b>"tooltip"</b>
            - <b>"icon"</b>
            - "icon.contentType"
            - "icon.filename"
    - <b>"set"</b>: the following configurations are possible:
            - setSortByName(map["sortbyName"])
            - setPruneEmptyFolders(map["pruneEmptyFolders"].toInteger() == 1)
            - setExpandId(map["expandId"])


