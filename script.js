'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMsg = function(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click',function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //When there is no input 
    if(!guess){
        displayMsg('⛔️ No number!');
        //When player win 

    }else if(guess===number){
        displayMsg('🎉 Correct Number!');
        document.querySelector('.number').textContent=number;

        // when playper win then change the color of the body
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // change the highscore 
        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // when guess is wrong

    }else if(guess!==number){
        if(score > 1 ){
            // document.querySelector('.message').textContent =
           // guess > Number ? '📈 Too high!' : '📉 Too low!';
            displayMsg((guess >  number) ? '📈 Too high!' : '📉 Too low!' );
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            isplayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }

} );

//Start again game 

document.querySelector('.again').addEventListener('click',function() {
    score = 20;
    number = Math.trunc(Math.random()*20)+1;
    displayMsg('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

