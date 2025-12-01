---
title: Common SQL Mistakes Front-End Devs Make (and How to Fix Them)
date: 'December 1, 2025'
tags:
  - 'sql'
  - 'frontend'
excerpt: "Has a query you've written returned 14,000 more rows than you'd expected? You might be entitled to compensation."
---

## Has a query you've written returned 14,000 more rows than you'd expected? You might be entitled to compensation.

That's a lame joke to start a blog post. I'll admit that. I'll also admit that I've made a lot of SQL mistakes in my time that caused things like weird UI behavior, bugs, and slow pages. Learn from my mistakes!

Here is a breakdown of some of the most common SQL mistakes front-end devs can make, why they happen, and how to fix them.

## Let's dive in!

### 1. Selecting _everything_

I know it's tempting to write:

```sql
SELECT *
FROM customers;
```

and maybe it's not a huge deal when your database is small. But the moment your table grows or somebody adds columns you don't need in the query, your API quickly becomes overloaded with unused data. This could result in slower fetches, longer parsing time, and harder debugging.

### The fix:

Specificity! You will rarely need _everything_.

```sql
SELECT id, email, date_created
FROM customers;
```

Even dropping 4 or 5 unused columns can shave off valuable milliseconds.

### 2. Don't forget the WHERE clause!

It's crazy how often of a UI bug I experienced was due to a missing WHERE clause.

```sql
SELECT id, order_status
FROM orders;
```

Hope you're ready to render 300,000 rows with this query that returned 20 years of order history. Let's tighten it up a little.

### The fix:

```sql
SELECT id, order_status
FROM orders
WHERE user_id = $1;
```

> > _The `$` is a positional parameter for a function or a stored procedure in PostgreSQL databases. [Click here to learn more!](https://www.postgresql.org/docs/8.1/sql-expressions.html#AEN1626)_

If the front end shows data for a specific order, product, or customer, your query should too.

### 3. LIMIT your results!

Your UI might only need 10 rows but your API is returning 10,000 with this query:

```sql
SELECT id, title, views
FROM articles
ORDER BY views DESC;
```

### The fix:

```sql
SELECT id, title, views
FROM articles
ORDER BY views DESC
LIMIT 10;
```

This is an easy one and fairly self explanatory once you see it in action, but once you learn to limit, your server will be very happy.

## The wrap up

Front-end bugs are often not from the front-end code itself. Small SQL mistakes can easily become UI weirdness. Learning how to spot these SQL flubs can really pay off. SQL can be fun when you stop fighting it. _Maybe_
