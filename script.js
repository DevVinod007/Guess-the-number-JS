'use strict';

console.log(document.querySelector('.message').textContent);

//Random Scret number 
let number = Math.trunc(Math.random()*20)+1;
let score =20;
let highscore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener
('click',function(){
let data = Number(document.querySelector('.guess').value);
// document.querySelector('.message').textContent = 'corrrrect Number'
console.log(data,typeof(data));
if(!data){
    displayMessage('no Number Selected')
    // document.querySelector('.message').textContent = 'no Number Selected'
    //When guess is success 
} else if(data === number){
    document.querySelector('.number').textContent = number;
    displayMessage('Correct Number')
    // document.querySelector('.message').textContent ='Correct Number';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }




    //when guess is too high

}
 else if(data !== number){
    if(score > 1){
        displayMessage(data > number ?'too high':'too low');
        // document.querySelector('.message').textContent = data > number ?'too high':'too low';
        score --;
        document.querySelector('.score').textContent = score;
    } else {
        displayMessage('you have lost bro')
        // document.querySelector('.message').textContent ='you have lost bro'
        document.querySelector('.score').textContent = 0;
    }
 }

// else if(data > number){
//     if(score > 1){
//         document.querySelector('.message').textContent = 'too high';
//         score --;
//         document.querySelector('.score').textContent = score;
//     } else {
//         document.querySelector('.message').textContent ='you have lost bro'
//         document.querySelector('.score').textContent = 0;
//     }
   
//     //when guess is too high

// }else if(data < number){
//     if(score > 1 ){
//         document.querySelector('.message').textContent ='too low';
//         score --;
//         document.querySelector('.score').textContent = score;
//     } else {
//         document.querySelector('.message').textContent = 'you lost';
//         document.querySelector('.score').textContent = 0;

//     }
    
// }
})

// document.querySelector('.btn again').addEventListener('click',function(){
//     console.log('event clicked confirmation')
// })
document.querySelector('.again').addEventListener
('click',function(){
    console.log('event clicked confirmation');
    score =20;
    number = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent = 'Start Guessin';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').style.width = '15rem';




})