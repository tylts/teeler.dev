---
title: Teel Tip - SQL
date: 'November 30, 2025'
tags:
  - 'teeltip'
  - 'sql'
excerpt: 'Coalesce to return the first non-NULL value!'
---

## COALESCE() returns the first non-NULL value.

Why does this matter? This function will iterate through the expressions provided as arguments and provide the first value that exists. Say you want to display a user's preferred name. Columns `first_name`, `middle_name`, and `last_name` are used and you want to prioritize `middle_name` if available, otherwise use `first_name` and `last_name`.

```sql
SELECT COALESCE(middle_name, first_name) AS display_name
FROM Customers;
```

If `middle_name` is not NULL, `display_name` will be the value of `middle_name`.
Otherwise, `display_name` will be the value of `first_name`.

This is crucial when dealing with potentially incomplete data, as it allows you to provide a default or fallback value when a specific column or expression is `NULL`.
