---
title: Category membership
uid: blogic_category_membership
sortOrder: 3
---

This element is used to visualize and possibly change the category membership of users.

## Configuration values

| Value      | Description    |
|:-----------|:---------------|
| categoryId | will load the membership for the specified category |
| noWeights  | whether to show the weights for each user (Bool)    |

## Functions

### getFieldValue(String field)

| Field      | Description    |
|:-----------|:---------------|
| members    | a comma-separated string with the user ID of each member       |
| user id    | the weight of a user ID, or **-1** if the user is not a member |

### setFieldValue(String action, Map values)

| Field      | Description    |
|:-----------|:---------------|
| saveMemberships | saves the members to the specified category<br/>the map should contain a key = "categoryId" with value = the category ID |
