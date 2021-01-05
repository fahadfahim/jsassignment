const num1 = parseInt(prompt('Enter the first number : '));
const num2 = parseInt(prompt('Enter the second number : '));

if(num1 < num2){
    const arr1 = [num1,5,6,7,8,num2];
    alert('you are good to go...')
    arr1.forEach(function(arr){
        document.querySelector('.result').innerHTML = arr;
        console.log(arr);
    })
}else{
    alert(`put another number`);
}
