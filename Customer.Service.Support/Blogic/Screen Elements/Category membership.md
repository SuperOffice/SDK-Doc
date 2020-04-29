---
title: Category membership
path: /Blogic/Screen Elements/Category membership
sortOrder: 17
---

This element is used to visualize and possible change the category membership for the users.



###The configuration will accept the following values:###


 - "categoryId": will load the membership for the specified category
 - <b>"noWeights"</b>: if set to True, the control will not show the weights for each user




###Functions:###


 - `getFieldValue(field)`:
    - <b>"members"</b>: will return a comma separated string with the user id for each member
    - "user id": will return the weight of the specified user id, -1 if the user is not a member



 - setFieldValue(field, Map):
    - <b>"saveMemberships"</b>: Will save the members to the specified category.
        - Use a map with field "categoryId" and the category id as the value.


