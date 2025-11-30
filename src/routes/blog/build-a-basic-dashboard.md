---
title: Build a Basic Dashboard with Me in 10 Minutes - Using CSS Grid
date: 'April 25, 2025'
tags:
  - 'css'
  - 'grid'
excerpt: Without using even a single float.
---

## We've come a long way since the days we had to `float` divs on a page to make a workable layout.

CSS Grid makes it incredibly easy not only to build a layout, but also just to read what's happening in the code.
In this tutorial we'll build a super simple dashboard layout that will show you some CSS Grid fundamentals while giving you something practical to build upon.

## The layout

At the end of this post, we'll have a responsive dashboard layout with a:

- Header that spans the full width of the page
- Sidebar with navigation
- Main content area
- Widgets!!!

## The bones

```html
<!-- html -->
<div class="dashboard">
	<header class="header">Dashboard Header</header>
	<nav class="sidebar">Navigation Menu</nav>
	<main class="main-content">Main Content Area</main>
	<div class="widget-section">
		<div class="widget">Analytics</div>
		<div class="widget">Users</div>
		<div class="widget">Revenue</div>
		<div class="widget">Traffic</div>
	</div>
</div>
```

## The magic ✨

```css
/* css */
.dashboard {
	display: grid; /* grid enters the chat */
	grid-template-areas: /* see note 1 below */
		'header header'
		'sidebar main'
		'sidebar widgets';
	grid-template-columns: 200px 1fr;
	grid-template-rows: auto 1fr auto;
	gap: 20px;
	height: 100vh;
	padding: 20px;
}

.header {
	grid-area: header;
	background: #f0f0f0;
	padding: 20px;
}

.sidebar {
	grid-area: sidebar;
	background: #e0e0e0;
	padding: 20px;
}

.main-content {
	grid-area: main;
	background: #f8f8f8;
	padding: 20px;
}

.widget-section {
	grid-area: widgets;
	display: grid; /* grid-ception */
	grid-template-columns: repeat(2, 1fr);
	gap: 20px;
}

.widget {
	background: white;
	padding: 20px;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* media queries for extra responsiveness */
@media (max-width: 768px) {
	.dashboard {
		grid-template-areas:
			'header'
			'main'
			'widgets'
			'sidebar';
		grid-template-columns: 1fr;
	}

	.widget-section {
		grid-template-columns: 1fr;
	}
}
```

**_[View on CodePen](https://codepen.io/tylts/pen/KKOyezz)_**

## Okay but what are we even doing?

1. **Grid Template Areas**: We used named areas so we could visualize the layout with real human words. No robot talk. Also note the grid names in each corresponding child.

2. **Responsive Design**: Let's talk about what the heck `1fr` means. `fr` is a fractional unit. `1fr` takes up 1 part of the available space. So when we remove the other units and only keep `1fr` in the columns in the new media query, this collapses all columns into one when the screen size is below 768px width! PRETTY NIFTY!!!

3. **Nested Grids**: Grids in grids in grids. We can next grids within grids for extra grids!

Try this layout in your next project and experiment with different configurations to better understand how Grid works!
