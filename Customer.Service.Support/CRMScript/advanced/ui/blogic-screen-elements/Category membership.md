---
title: Category membership
uid: blogic_category_membership
sortOrder: 3
---

This element is used to visualize (and change) which category a user belongs to.

## Configuration

| Setting    | Description                                      |
|:-----------|:-------------------------------------------------|
| categoryId | Loads the membership for the specified category  |
| noWeights  | Whether to show the weights for each user (Bool) |

## Functions

### getFieldValue(String field)

| Field      | Description    |
|:-----------|:---------------|
| members    | A comma-separated string with the user ID of each member       |
| user id    | The weight of a user ID, or **-1** if the user is not a member |

### setFieldValue(String action, Map values)

| Field           | Description    |
|:----------------|:---------------|
| saveMemberships | Saves the members to the specified category<br/>The map should contain a key = "categoryId" with value = the category ID |
