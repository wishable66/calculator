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
let firstNumber;
let secondNumber;
let operator;
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
