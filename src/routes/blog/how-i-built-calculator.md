---
title: How I Built a Calculator Using JavaScript
date: 'August 12, 2024'
tags:
  - 'projects'
  - 'javascript'
excerpt: 'I know what you''re thinking - "Another calculator!?! How is this one any different than the other thousand I''ve seen?"'
---

<script>
    import Calculator from '$lib/components/Calculator.svelte';
</script>

## I know what you're thinking - "Another calculator!?! How is this one any different than the other thousand I've seen?"

Well for starters, [this one looks kinda dope](https://tylts.github.io/calculator/). The logic and DOM magic is all coded in vanilla JavaScript and it's styled using basic CSS. I based the functionality on my iPhone's calculator because that's what I had on hand to test it all out.

[**_Jump to the calculator demo_**](#try-it-out)

I built this over the course of a few days as a challenge to start and finish something completely from a blank slate. All in all it took me around 7 hours to get to its current point. I'll probably look back on this fondly as the project that taught me most about JavaScript scoping and how some of the logic works. The code is a mess but I'll eventually come back and clean it up. The main goal here was to make something that works.

## What does it do?

1. It supports mouse and keyboard input.
2. It handles chained operations correctly (like 2+3+16).
3. Special handling for percentages depending on the context of the operation.
4. Error handling!
5. Maintains state for repeating operations with the equals key.
6. Most importantly... basic MATH!

## Let's dive in!

### Variables and state management

These are listed up at the top. One day I'll shove these in an object.

```js
let firstNum = 0; // Stores the first operand
let secondNum; // Stores the second operand
let operator; // Stores the current operation (+, -, ×, ÷)
let displayValue; // Uses the calculator's display element

// State stuff
let clearDisplayNextInput = true; // Whether to clear display on next input
let operationChain = false; // Tracks chained operations (e.g., 2+3+16 etc)
let equalsChain = false; // Tracks repeated equals operations
let secondNumIsNext = false; // Whether next input will be second number
```

### Core operations

The basic brain of the calculator is the `operate()` function that takes in a few parameters (`a, b, operator`). It also handles input validation and routes to the appropriate math function.

```js
function operate(a, b, operator) {
	// This checks if the user divded by 0
	if (b === 0 && operator === '÷') {
		clearCalc();
		displayValue.textContent = 'divide by 0? lol';
		return 0;
	}

	// Alerts the user if they entered anything non numerical
	if (isNaN(a) || isNaN(b) || !operator) {
		clearCalc();
		displayValue.textContent = 'You messed up.';
		console.log('triggered in operate()');
		return;
	}

	// This switch statement takes in the operator and
	// passes a & b through to the relevant operations
	switch (operator) {
		case '+':
			return addition(a, b);
		case '-':
			return subtraction(a, b);
		case '×':
			return multiplication(a, b);
		case '÷':
			return division(a, b);
	}
}

// Here are the operation functions
function addition(a, b) {
	return a + b;
}

function subtraction(a, b) {
	return a - b;
}

function multiplication(a, b) {
	return a * b;
}

function division(a, b) {
	return a / b;
}
```

### State Management Flow<br><br>

1. Initial input:<br>- Clears display if needed.<br>- Updates display with the clicked/typed number.<br><br>
2. Operator selection:<br>- Stores first number.<br>- Sets operator.<br>- Prepares for second number.<br><br>
3. Second number input:<br>- Updates display.<br>- Stores second number.<br><br>
4. Equals operation:<br>- Performs calculation<br>- Updates display<br>- Handles chained equals operations.<br><br>
5. Clear operation:<br>- Resets all variables<br>- Return display to `0`<br><br>

### Bonus features

- Chained operations.<br>- Allows for continuous calculations.<br>- Updates display after each operation.

- Decimal handling<br>- Prevents multiple decimal points.<br>- Properly formats decimal numbers.

- Percentage calculations<br>- Behavior depends on operator:<br>--- For `+ / -`: calculates percentage of first number.<br>--- For `× / ÷`: converts to decimal form.

- Sign toggle<br>- Switches between positive and negative numbers.<br>- Updates display and internal state.

## The Design

I based the functionality on my iPhone's calculator because that's what I had on hand to test it all out. Keep hitting equal after an equation and the calculator will continue evaluating based on the previous calculation.

The calculator uses keyboard inputs that I accomplished by using the `keydown` event listener.

```js
addEventListener('keydown', (e) => {
	e.preventDefault();
	keyboardInput(e.key, e.code);
});
```

    From here, the keys get passed into this absurdly enormous `keyboardInput()` function that I should probably break down into smaller chunks... for another day. Feel free to read through this if you want, but the import thing to note is that the function uses `if` statements to determine which function to use based on whether or not the key matches. The helper functions manipulate the state variables I declared at the very top.

```js
function keyboardInput(key, code) {
	// Percent Input
	if (key === '%') {
		percentFunction();
	}

	// Clear Keyboard Input (Esc key)
	if (key === 'Escape') {
		clearCalc();
	}

	// Sign Toggle Input
	if (code === 'Minus') {
		if (displayValue.textContent === '0') return;

		if (Number(displayValue.textContent) > 0) {
			displayValue.textContent = `-${displayValue.textContent}`;
		} else {
			displayValue.textContent = displayValue.textContent.slice(1);
		}

		if (secondNum) {
			secondNum = Number(displayValue.textContent);
		}
		return;
	}

	// Number Inputs
	if (/^[0-9]+$/.test(key)) {
		if (displayValue.textContent === '0') displayValue.textContent = '';
		if (clearDisplayNextInput === true) {
			displayValue.textContent = '';
			clearDisplayNextInput = false;
		}
		if (firstNum || secondNum === 0) {
			displayValue.textContent += key;
			secondNum = Number(displayValue.textContent);
			return;
		}
		displayValue.textContent += key;
		return;
	}

	// Operator Input
	if (/[+*\/-]/g.test(key)) {
		if (key === '/') key = '÷';
		if (key === '*') key = '×';
		if (operationChain === true) {
			secondNum = Number(displayValue.textContent);
			displayValue.textContent = Number(operate(firstNum, secondNum, operator).toFixed(7));
			console.log(firstNum, operator, secondNum);
			operator = key;
		}

		if (operator != null) {
			operator = key;
			firstNum = Number(displayValue.textContent);
			if (displayValue.textContent === 'divide by 0? lol') firstNum = 0;
			operationChain = true;
			clearDisplayNextInput = true;
			equalsChain = false;
			return;
		}
		firstNum = Number(displayValue.textContent);
		secondNumIsNext = true;
		operator = key;
		clearDisplayNextInput = true;
		operationChain = true;
		equalsChain = false;
	}

	// Enter Key Input
	if (key === 'Enter') {
		if (isNaN(firstNum) || isNaN(secondNum) || !operator) {
			console.log(firstNum, operator, secondNum);
			clearCalc();
			displayValue.textContent = 'You messed up.';
			console.log('triggered in equals');
			return;
		}
		if (equalsChain) {
			let constantNum = secondNum;
			firstNum = Number(displayValue.textContent);
			displayValue.textContent = Number(operate(firstNum, constantNum, operator).toFixed(7));
			return;
		}

		console.log(firstNum, operator, secondNum);
		displayValue.textContent = Number(operate(firstNum, secondNum, operator).toFixed(7));
		operate(firstNum, secondNum, operator);
		clearDisplayNextInput = true;
		operationChain = false;
		equalsChain = true;
		secondNumIsNext = false;
	}

	// Decimal Input
	if (/\./.test(key)) {
		decimalFunction();
	}

	// Delete Input
	if (key == 'Backspace') {
		displayValue.textContent = displayValue.textContent.slice(0, -1);
		if (displayValue.textContent.length === 0) displayValue.textContent = 0;
	}
}
```

The percent button took me the longest to hack out. The iPhone calculator treats the percent button differently whether it's the first number in the equation or the second; also addition/subtraction vs multiplication/division. I wanted my calculator to reflect that, so for example you'll see that if you type `3` and then `%` the display will show `0.03` which is 3/100. However if you want to increase 3 by 6%, you can type `3 + 6%` and the display will immediately show 6% of 3 before adding it all together by hitting the `=` key.

```js
function percentFunction() {
	// This checks if the next input should clear the display.
	// If yes, calculator is fresh and can skip this step.
	// If not, the first number in the calculation is 100
	// because it's going to show the percentrage of the input.
	if (!clearDisplayNextInput) {
		if (firstNum === 100) {
			secondNum = Number(((firstNum / 100) * secondNum).toFixed(7));
		}

		if (operator === '+' || operator === '-') {
			secondNum = Number(((secondNum / 100) * firstNum).toFixed(7));
			displayValue.textContent = secondNum;
			clearDisplayNextInput = true;
			console.log(firstNum, operator, secondNum);
			secondNumIsNext = false;
			return;
		}

		if (operator === '×' || operator === '÷') {
			displayValue.textContent = Number(secondNum / 100);
			clearDisplayNextInput = true;
			secondNum = Number(displayValue.textContent);
			console.log(firstNum, operator, secondNum);
			secondNumIsNext = false;
			return;
		}
	}

	if (secondNumIsNext) {
		if (operator === '+' || operator === '-') {
			console.log(`Second Num is ${secondNum}`);
			console.log((secondNum / 100) * firstNum);
			displayValue.textContent = Number(((secondNum / 100) * firstNum).toFixed(7));
			secondNum = Number(displayValue.textContent);
			return;
		}

		if (operator === '×' || operator === '÷') {
			console.log((secondNum / 100) * firstNum);
			displayValue.textContent = Number((secondNum / 100).toFixed(7));
			secondNum = Number(displayValue.textContent);
			return;
		}
	}
	firstNum = Number((displayValue.textContent / 100).toFixed(7));
	displayValue.textContent = firstNum;
}
```

Visually I wanted something that reminded me of an ugly calculator I had growing up. I don't have a picture but I got pretty close I think. Just trust me. I used a simple gradient for the number buttons for a subtle 3D effect. The display and the equals button use the same color `#4d5340` for better cohesion. I added a a simple CSS media query for mobile displays, but the most fun is to be had by using a desktop. Maybe some day I'll add some fun sounds.

### Try it out!

<Calculator />

Full source code can be found here: https://github.com/tylts/calculator
