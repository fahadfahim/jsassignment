const marks = parseInt(prompt('Enter the Marks'));
console.log(typeof(marks));
if(marks >= 80){
    document.querySelector('.result').innerHTML ='Student got (A+) in this course';
}else if(marks >= 75 && marks <= 79){
    document.querySelector('.result').innerHTML ='Student got (A) in this course';
}else if(marks >= 70 && marks <=74){
    document.querySelector('.result').innerHTML ='Student got (A-) in this course';
}else if(marks >=65 && marks <= 69 ){
    document.querySelector('.result').innerHTML ='Student got (B+) in this course';
}else if( marks >= 60 && marks <= 64){
    document.querySelector('.result').innerHTML ='Student got (B-) in this course';
}else if( marks >= 55 && marks <= 59){
    document.querySelector('.result').innerHTML ='Student got (D) in this course';
}else if( marks >= 40 && marks <= 50){
    document.querySelector('.result').innerHTML ='Student got (C) in this course';
}else{
        document.querySelector('.result').innerHTML ='Student got (F) in this course';
}
