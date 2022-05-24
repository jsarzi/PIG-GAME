'use strict';



//SELECTING ELEMENTS
const dice = document.querySelector('.dice');
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');

let currentScore = 0;
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player = document.querySelector('.player');
//STARTING CONDITIONS

const scores = [0, 0];
score1.textContent = 0;
score2.textContent = 0;
dice.classList.add('hidden');
let activePlayer = 0;
let playing = true;


const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0? 1 : 0;
        player1.classList.toggle('player--active');
        player2.classList.toggle('player--active');
};

//NEW GAME 
btnNew.addEventListener('click', function(){
    console.log('hello');
});

//ROLLING DICE 
btnRoll.addEventListener('click', function(){
    if(playing){
    //GENERATE RANDOM DICE ROLL
    const num = Math.trunc(Math.random()*6) +1;
    
    //DISPLAY DICE 
    dice.classList.remove('hidden');
    dice.src=`dice-${num}.png`;


    if(num !== 1){
        //add dice to current player
        
        currentScore += num;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
     
    }else{

        //switch to the next play
        
       switchPlayer();
    };
}
})

btnHold.addEventListener('click', function(){
    if(playing) {
    //add current score to the activePlayer
    scores[activePlayer] += currentScore; 
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    //ckech score if it is at leat 100 

    if(scores[activePlayer]>= 100){
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        dice.classList.add('hidden');
    }else {
    switchPlayer();
    };
} 
})

btnNew.addEventListener('click', function(){
    document.location.reload(true);
    
})