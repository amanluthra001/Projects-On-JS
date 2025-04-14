let random=parseInt(Math.random()*100+1);
let guessed=document.querySelector('#guessed');
let previousGuess=[]
let previousGuesses=document.querySelector('.Previousguesses');
let remainingGuesses=document.querySelector('.Remainingguesses');
let isPlay=true;
let results=document.getElementById('results');
let numGuesses=1;
let Form=document.querySelector('form');
let p=document.createElement('p');
let LoworHigh=document.createElement('p');
remainingGuesses.innerHTML=10;
Form.appendChild(LoworHigh);
if(isPlay){
    document.addEventListener('submit',function(e){
        e.preventDefault();
        const guess=guessed.value;
        numGuesses++;
        validation(guess);

    })
}
function validation(guess){
    if(numGuesses<12){
    if(isNaN(guess) || guess<1 || guess>100){
        LoworHigh.innerHTML="Please Enter a valid number";
    }
    else if(guess<random){
        LoworHigh.innerHTML="Number too low";
        previousGuess.push(guess);
        previousGuesses.innerHTML+=`${guess}, `;
        remainingGuesses.innerHTML=11-numGuesses;
    }
    else if(guess>random){
        LoworHigh.innerHTML="Number too high";
        previousGuess.push(guess);
        previousGuesses.innerHTML+=`${guess}, `;
        remainingGuesses.innerHTML=11-numGuesses;
    }
    else{
        LoworHigh.innerHTML="Right Guess and Game finished";
        previousGuess.push(guess);
        previousGuesses.innerHTML+=`${guess}, `;
        remainingGuesses.innerHTML=11-numGuesses;
    }
}
else{
    endGame();
}
    
}
function endGame(){
    guessed.inerHTML='';
    guessed.setAttribute('disabled','');
    p.innerHTML=`<h2 id="newGame">Start a new game , game finished</h2>`;
    results.appendChild(p);
    isPlay=false
    newGame();
}
function newGame(){
    newGame=document.querySelector('#newGame');
    newGame.addEventListener('click',function(e){
        random=parseInt(Math.random()*100+1);
        previousGuess=[]
        numGuesses=1;
        previousGuesses.innerHTML='';
        remainingGuesses.innerHTML=10;
        guessed.removeAttribute('disabled');
        results.removeChild(p);
        isPlay=true;
    })
    


}