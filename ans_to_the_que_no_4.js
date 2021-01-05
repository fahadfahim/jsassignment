const activities = prompt('Enter Your Input ').toString();

switch(activities){
    case 'brilliant':
        document.querySelector('.result').innerHTML ='The student is more active and sincere';
        break;
    case 'better':
        document.querySelector('.result').innerHTML ='The student is trying join extra curricular activity';
        break;
    case 'good':
        document.querySelector('.result').innerHTML ='The student is learn about extra curricular activity';
        break;
    case 'nothing':
        document.querySelector('.result').innerHTML ='The student is not joining extra curricular activity';
        break;
    default:
        document.querySelector('.result').innerHTML = 'sorry your input is invalid';
}
// document.querySelector('.result').innerHTML = activities;