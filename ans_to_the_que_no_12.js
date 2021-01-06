let num1 = parseInt(prompt('Enter a number which is greater or equal 49 either you will get an alert '));
let text;
if(num1 >= 49){
    while(num1 >= 20){    
        text += `<br> The number is ${num1}`;
        num1--;
        //console.log(text);
    }
    document.querySelector('.result').innerHTML = text;
}else{
    document.querySelector('.result_alert').innerHTML = `Your number ${num1} is less than 49`;
}

