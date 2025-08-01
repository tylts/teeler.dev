---
title: Basic Overview of JavaScript Closures
date: 'February 18, 2025'
tags:
  - 'javascript'
excerpt: Closures are like backpacks.
---

## JavaScript closures

Ever wondered how some functions can remember variables after they should have been garbage collected? Closures provide a way for functions to "remember" variables from its outer scope, even after the function has finished running. Sort of like a backpack that has variables in different pockets.

## Super simple example

```javascript
function createMonster(name) {
	// outer function
	function greet() {
		// inner function
		return `You find a monster named ${name}!`;
	}
	return greet;
}

const createOogieBoogie = createMonster('Oogie Boogie');
console.log(createOogieBoogie()); // outputs "You find a monster named Oogie Boogie!"
```

If you notice, the variable is only accessible through the outer function, not in the global scope. This helps with data privacy and fewer bugs with state management.

Taking it a step deeper, here is another example that uses closures to create a simple counter.

```javascript
function createCounter() {
	let count = 0;
	return {
		increment: () => ++count,
		getCount: () => count
	};
}

const counter = createCounter();
console.log(counter.increment()); // 1;
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
```

Here we return an object, giving the `createCounter()` function some methods that we can use to manipulate the variables without exposing the rest of the function. Understanding closures is crucial for writing clean, maintainable JavaScript code. They're used extensively in modern JavaScript patterns, including React hooks and module patterns.
