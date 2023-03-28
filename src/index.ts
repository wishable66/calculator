const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

const multiply = (array: number[]) => {
  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};

const divide = (array: number[]): number => {
  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator / nextItem)
    : 0;
};

let firstNumber: number;
let secondNumber: number;
let operator: string;

function operate(firstNumber: number, secondNumber: number, operator: string) {
  if (isNaN(firstNumber) || isNaN(secondNumber)) return;

  if (operator === '+') return add(firstNumber, secondNumber);
  if (operator === '-') return subtract(firstNumber, secondNumber);
  if (operator === '*') return multiply([firstNumber, secondNumber]);
  if (operator === '/') return divide([firstNumber, secondNumber]);
}
