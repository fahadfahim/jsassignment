const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));
const num3 = parseInt(prompt('Enter the third number '));
const num4 = parseInt(prompt('Enter the fourth number '));
const num5 = parseInt(prompt('Enter the fifth number '));

const allNumber = [num1,num2,num3,num3,num4,num5];

const smallest_number = Math.min(...allNumber);
const largest_number = Math.max(...allNumber);

document.querySelector('.result').innerHTML=`The largest number is : ${largest_number} ; The smallest number is : ${smallest_number}`;
console.log(allNumber);
