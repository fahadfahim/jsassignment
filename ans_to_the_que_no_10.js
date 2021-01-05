const age = parseFloat(prompt('Enter you age')).toFixed(2);

//alternative of multiple if than elseif using es6 ternery operator
const minAge = (age >= 50) ? (document.querySelector('.result').innerHTML = 'You are allowed') : (isNaN(age)) ? (document.querySelector('.result').innerHTML = 'The field is empty') : (document.querySelector('.result').innerHTML = 'You are not allowed') ;