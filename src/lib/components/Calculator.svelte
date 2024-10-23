<script>
	import { onMount } from 'svelte';

	onMount(() => {
		let firstNum = 0;
		let secondNum;
		let operator;
		let displayValue = document.querySelector('#display');

		let clearDisplayNextInput = true;
		let operationChain = false;
		let equalsChain = false;
		let secondNumIsNext = false;

		const numberBtns = document.querySelectorAll('.number-button');
		const clearBtn = document.querySelector('.clear-button');
		const operatorBtns = document.querySelectorAll('.operator-button');
		const signToggle = document.querySelector('.sign-toggle');
		const equalsBtn = document.querySelector('#equals');
		const decimalBtn = document.querySelector('.decimal-button');
		const percentBtn = document.querySelector('.percent-button');

		console.log(decimalBtn);

		addEventListener('keydown', (e) => {
			// e.preventDefault();
			keyboardInput(e.key, e.code);
		});

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
				if (key === '*') key = 'x';
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

		// Event listeners

		numberBtns.forEach((e) => e.addEventListener('click', numberFunction(e)));
		decimalBtn.addEventListener('click', decimalFunction);
		operatorBtns.forEach((e) => e.addEventListener('click', operatorFunction(e)));
		percentBtn.addEventListener('click', percentFunction);
		clearBtn.addEventListener('click', clearCalc);
		signToggle.addEventListener('click', signToggleFunction);
		equalsBtn.addEventListener('click', equalsFunction);

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

		function operate(a, b, operator) {
			if (b === 0 && operator === '÷') {
				clearCalc();
				displayValue.textContent = 'divide by 0? lol';
				return 0;
			}

			if (isNaN(a) || isNaN(b) || !operator) {
				clearCalc();
				displayValue.textContent = 'You messed up.';
				console.log('triggered in operate()');
				return;
			}
			switch (operator) {
				case '+':
					return addition(a, b);
				case '-':
					return subtraction(a, b);
				case 'x':
					return multiplication(a, b);
				case '÷':
					return division(a, b);
			}
		}

		function clearCalc() {
			displayValue.textContent = '0';
			firstNum = 0;
			secondNum = undefined;
			operator = undefined;
			equalsChain = false;
			clearDisplayNextInput = true;
			operationChain = false;
			secondNumIsNext = false;
		}

		function numberFunction(e) {
			e.addEventListener('click', () => {
				if (displayValue.textContent === '0') displayValue.textContent = '';
				if (clearDisplayNextInput === true) {
					displayValue.textContent = '';
					clearDisplayNextInput = false;
				}
				if (firstNum || secondNum === 0) {
					displayValue.textContent += e.textContent;
					secondNum = Number(displayValue.textContent);
					return;
				}
				displayValue.textContent += e.textContent;
			});
		}

		function decimalFunction() {
			if (displayValue.textContent.includes('.') && clearDisplayNextInput === false) {
				return;
			}

			if (clearDisplayNextInput === true) {
				displayValue.textContent = '0.';
				clearDisplayNextInput = false;
				return;
			}
			displayValue.textContent += decimalBtn.textContent;
		}

		function operatorFunction(e) {
			e.addEventListener('click', () => {
				if (operationChain === true) {
					secondNum = Number(displayValue.textContent);
					displayValue.textContent = Number(operate(firstNum, secondNum, operator).toFixed(7));
					console.log(firstNum, operator, secondNum);
					operator = e.textContent;
				}

				if (operator != null) {
					operator = e.textContent;
					firstNum = Number(displayValue.textContent);
					if (displayValue.textContent === 'divide by 0? lol') firstNum = 0;
					operationChain = true;
					clearDisplayNextInput = true;
					equalsChain = false;
					return;
				}
				firstNum = Number(displayValue.textContent);
				secondNumIsNext = true;
				operator = e.textContent;
				clearDisplayNextInput = true;
				operationChain = true;
				equalsChain = false;
			});
		}

		function percentFunction() {
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

				if (operator === 'x' || operator === '÷') {
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

				if (operator === 'x' || operator === '÷') {
					console.log((secondNum / 100) * firstNum);
					displayValue.textContent = Number((secondNum / 100).toFixed(7));
					secondNum = Number(displayValue.textContent);
					return;
				}
			}
			firstNum = Number((displayValue.textContent / 100).toFixed(7));
			displayValue.textContent = firstNum;
		}

		function signToggleFunction() {
			if (displayValue.textContent === '0') return;

			Number(displayValue.textContent) > 0
				? (displayValue.textContent = `-${displayValue.textContent}`)
				: (displayValue.textContent = displayValue.textContent.slice(1));

			if (secondNum) {
				secondNum = Number(displayValue.textContent);
			}
		}

		function equalsFunction() {
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
	});
</script>

<!-- <!DOCTYPE html> -->
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Calculator</title>
		<link
			rel="stylesheet preload prefetch"
			href="digital-7.ttf"
			as="text/css"
			type="font/ttf"
			crossorigin
		/>

		<link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
	</head>
	<body>
		<div class="calc-container">
			<div class="display-container">
				<div id="display">0</div>
			</div>
			<div class="calculator-buttons">
				<button class="clear-button">C</button>
				<button class="sign-toggle">+/-</button>
				<button class="percent-button">%</button>
				<button class="operator-button">÷</button>
				<button class="number-button">7</button>
				<button class="number-button">8</button>
				<button class="number-button">9</button>
				<button class="operator-button">x</button>
				<button class="number-button">4</button>
				<button class="number-button">5</button>
				<button class="number-button">6</button>
				<button class="operator-button">-</button>
				<button class="number-button">1</button>
				<button class="number-button">2</button>
				<button class="number-button">3</button>
				<button class="operator-button">+</button>
				<button class="number-button">0</button>
				<button class="decimal-button">.</button>
				<button id="equals">=</button>
			</div>
		</div>
	</body>
</html>

<style>
	@font-face {
		font-family: calculator;
		src: url(/fonts/Digital-7/digital-7.ttf);
	}

	@font-face {
		font-family: Roboto;
		src: url(/fonts/Roboto/Roboto-Regular.tff);
	}

	:root {
		--display-equals: #4d5340;
		--main-background: #c6bba3;
		--btns-area-background: #979684;
		--calc-container: #1d1e18;
		--btn-font: #c6bba3;
	}

	.calc-container {
		width: 450px;
		margin: 4rem auto;
		border: 8px outset var(--calc-container);
		border-radius: 4px;
		box-shadow: 6px 8px var(--display-equals);
	}

	.display-container {
		display: flex;
		background-color: var(--calc-container);
	}

	#display {
		background: var(--display-equals);
		padding: 4px 12px;
		margin: 1rem;
		font-size: 3rem;
		flex: auto;
		text-align: end;
		font-family: 'calculator', monospace;
		font-weight: 100;
		pointer-events: none;
		border: 8px inset var(--calc-container);
		border-radius: 4px;
	}

	.calculator-buttons {
		background-color: var(--btns-area-background);
		padding: 1rem;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
	}

	.clear-button {
		background: #934730;
	}

	button {
		color: var(--btn-font);
		background: rgb(80, 80, 80);
		background: linear-gradient(90deg, rgb(66, 66, 66) 0%, var(--calc-container) 100%);
		border: 8px solid var(--calc-container);
		border-radius: 8px;
		padding: 0.8rem;
		font-size: 1.2rem;
		font-weight: 600;
		font-family: Arial, Helvetica, sans-serif;
	}

	#equals {
		background: var(--display-equals);
		grid-column-start: 3;
		grid-column-end: span 2;
		color: var(--btn-font);
	}

	@media only screen and (max-width: 450px) {
		button {
			padding: 0.6rem 0.4rem;
			font-size: 1rem;
			border: 6px solid var(--calc-container);
			border-radius: 6px;
		}

		.calculator-buttons {
			gap: 0.7rem;
		}

		.calc-container {
			width: 350px;
			border: 6px outset var(--calc-container);
			border-radius: 4px;
			box-shadow: 6px 8px var(--display-equals);
		}
	}
</style>
