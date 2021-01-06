const ob = new Array();
ob[0] = 6;
ob[1] = 11;
ob[2] = 2;
ob[3] = 0;
ob[4] = 1;
ob[5] = 6;
ob[6] = 16;
ob[7] = 6;
ob[8] = 6;
ob[9] = 3;

let sum = 0;
for(let i = 0;i<ob.length;i++){
    sum += ob[i];
    document.querySelector('.result').innerHTML = `Sum of this array is -- ${sum}`;
    document.querySelector('.sub').innerHTML = `Length of the array is -- ${ob.length}`;
    let average = sum / ob.length;
    document.querySelector('.result_alert').innerHTML = `Average of this array is -- ${average}`;

}

