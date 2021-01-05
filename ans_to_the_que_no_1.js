
const num1 = parseFloat(prompt('Enter the first number '));
const num2 = parseFloat(prompt('Enter the second number '));

//add two numbers
const sum = num1 + num2;
document.querySelector('.result').innerHTML = sum;
// display the sum
console.log(`The sum of ${num1} and ${num2} is ${sum}`);