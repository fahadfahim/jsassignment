

function addTwoNumbers(textBox1, textBox2){
    var x=parseFloat(document.getElementById(textBox1).value);
    var y=parseFloat(document.getElementById(textBox2).value);
    var sum=0;
    sum=x+y;
    document.querySelector('.addresult').innerHTML = sum;
}
function subtractTwoNumbers(textBox1, textBox2){
    var x=parseFloat(document.getElementById(textBox1).value);
    var y=parseFloat(document.getElementById(textBox2).value);
    var sub=0;
    sub=x-y;
    console.log(sum);
    document.querySelector('.subresult').innerHTML = sub;
}
function multiplyTwoNumbers(textBox1, textBox2){
    var x=parseFloat(document.getElementById(textBox1).value);
    var y=parseFloat(document.getElementById(textBox2).value);
    var mul=0;
    mul=x*y;
    document.querySelector('.mulresult').innerHTML = mul;
}
function divideTwoNumbers(textBox1, textBox2){
    var x=parseFloat(document.getElementById(textBox1).value);
    var y=parseFloat(document.getElementById(textBox2).value);
    var div=0;
    div=x/y;
    document.querySelector('.divresult').innerHTML = div;
}