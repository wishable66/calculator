let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = 0;
const operators = ['+', '-', '/', '*'];
const display = document.querySelector('.display-text');
const btns = document.querySelectorAll('.buttons > *');
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const target = e.target;
        const buttonValue = target.attributes[1].value;
        const isNumber = !isNaN(Number(buttonValue)) || buttonValue === '.';
        if (isNumber && !operator) {
            updateDisplay(buttonValue);
            firstNumber += buttonValue;
        }
        if (isNumber && operator) {
            updateDisplay(buttonValue);
            secondNumber += buttonValue;
        }
        if (operators.includes(buttonValue)) {
            updateDisplay(buttonValue);
            if (secondNumber) {
                firstNumber = parseInt(firstNumber);
                secondNumber = parseInt(secondNumber);
                if (checkForZero(firstNumber, secondNumber, operator) === 'ERROR') {
                    resetValues();
                    return (display.textContent = 'ERROR');
                }
                result = operate(firstNumber, secondNumber, operator);
                firstNumber = String(result);
                secondNumber = '';
                return (operator = buttonValue);
            }
            operator = buttonValue;
        }
        if (buttonValue === '=') {
            if (firstNumber === '' || secondNumber === '' || operator === '')
                return;
            firstNumber = parseInt(firstNumber);
            secondNumber = parseInt(secondNumber);
            if (checkForZero(firstNumber, secondNumber, operator) === 'ERROR') {
                resetValues();
                return (display.textContent = 'ERROR');
            }
            result = operate(firstNumber, secondNumber, operator);
            updateDisplay(String(result), true);
            firstNumber = String(result);
            secondNumber = '';
            operator = '';
        }
        if (buttonValue === 'reset') {
            return resetValues();
        }
        if (buttonValue === 'backspace') {
            if (firstNumber === '' && secondNumber === '' && operator === '')
                return;
            if (firstNumber !== '' && secondNumber === '' && operator === '') {
                if (firstNumber.length === 1) {
                    resetValues();
                }
                else {
                    const numberRemoved = display.textContent.slice(0, -1);
                    updateDisplay(numberRemoved, true);
                    firstNumber = numberRemoved;
                }
            }
            if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
                if (secondNumber.length === 1) {
                    const textRemoved = display.textContent.slice(0, -1);
                    const numberRemoved = secondNumber.slice(0, -1);
                    console.log(textRemoved);
                    updateDisplay(textRemoved, true);
                    console.log(numberRemoved);
                    secondNumber = numberRemoved;
                }
                else {
                    const textRemoved = display.textContent.slice(0, -1);
                    const numberRemoved = secondNumber.slice(0, -1);
                    console.log(numberRemoved);
                    updateDisplay(textRemoved, true);
                    secondNumber = numberRemoved;
                }
            }
            console.log({
                firstNumber,
                secondNumber,
                operator,
            });
        }
    });
});
function resetValues() {
    return ((firstNumber = ''),
        (secondNumber = ''),
        (operator = ''),
        (result = 0),
        (display.textContent = ''));
}
function checkForZero(firstNumber, secondNumber, operator) {
    if (operator === '/' && secondNumber === 0)
        return 'ERROR';
    else
        return 'good';
}
function updateDisplay(text, set) {
    return set ? (display.textContent = text) : (display.textContent += text);
}
const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
const multiply = (array) => {
    return array.length
        ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
        : 0;
};
const divide = (array) => {
    return array.length
        ? array.reduce((accumulator, nextItem) => accumulator / nextItem)
        : 0;
};
function operate(firstNumber, secondNumber, operator) {
    if (isNaN(firstNumber) || isNaN(secondNumber))
        return;
    if (operator === '+')
        return add(firstNumber, secondNumber);
    if (operator === '-')
        return subtract(firstNumber, secondNumber);
    if (operator === '*')
        return multiply([firstNumber, secondNumber]);
    if (operator === '/')
        return divide([firstNumber, secondNumber]);
}
