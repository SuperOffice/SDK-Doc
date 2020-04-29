---
title: AcyclicGraph
path: /Blogic/Screen Elements/AcyclicGraph
sortOrder: 10
---

This element displays the dependency in a project graphically.



###The following configuration values are available:###


 - <b>"createRelationUrl"</b>
 - <b>"editRelationUrl"</b>



 - setFieldValue(string, Map):  adds either a node or a dependency
    - <b>"addNode"</b>
        - <b>"dependentOf"</b>: a comma-separated list of integers corresponding to other nodes.
        - <b>"id"</b>: integer identifying this node
        - <b>"htmlContent"</b>: content of this node in HTML
        - <b>"color"</b>: color of this node in HTML
    - <b>"addDependency"</b>
        - <b>"dependentOf"</b>: integer of a node
        - <b>"relationId"</b>: integer of a node
    - <b>"createRelationUrl"</b>
        - <b>"url"</b>
    - <b>"editRelationUrl"</b>
        - <b>"url"</b>


