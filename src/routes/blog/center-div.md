---
title: Two Divverent Ways to Center a Div Using CSS
date: 'July 9, 2025'
tags:
  - 'css'
  - 'flexbox'
  - 'grid'
excerpt: 'margin: 0 auto is so 2009.'
---

## Here are two quick and easy ways to center a div without reaching for margin auto!

## Flexbox

Flexbox is a super powerful layout tool that also gives us an easy way to center a div. Chris Coyier's [comprehensive guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) is where I always go to brush up.

```css
.parent {
	display: flex; /* sets the parent div as a flex container */
	justify-content: center; /* centers the child horizontally */
	align-items: center; /* centers the child vertically */
	height: 100vh; /* 100 viewport height units = full viewport height */
}

.child {
	width: 200px;
	height: 200px;
}
```

## Grid

If you're using a grid layout, you can reach for the `place-items` property. This example will center both horizontally and vertically, so check [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/place-items) for more options!

```css
.parent {
	display: grid;
	place-items: center;
	height: 100vh;
}

.child {
	width: 22rem;
	height: 22rem;
}
```
