const age = parseFloat(prompt('Enter your Age'));

if(age >= 18){
    document.querySelector('.result').innerHTML = `You are ${age} years old`;
}else{
    alert('Age is must be greater than or equal 18');
    document.querySelector('.result').innerHTML =`Age is must be greater than or equal 18`;
    
}