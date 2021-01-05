//sorting array in descending order

const desArr = [50,10,2,333,4,5,6,7,508,9];

document.querySelector('.result').innerHTML = desArr.sort((a,b) =>{
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
}).reverse();
console.log(desArr.sort().reverse());