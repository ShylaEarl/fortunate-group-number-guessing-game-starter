$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!");
  randomNumber(1, 25);
  $('#submit-guesses').on('click', matchGuess);

}//end handleReady

function matchGuess(){
  let player1Guess = Number($('#player-one').val());
  let player2Guess = Number($('#player-two').val());
  if(player1Guess === Math.floor(Math.random() * (1 + max - min) + min)){
    return `Player 1, you guessed it!!`;
  }//end player1 conditional
  if(player2Guess === Math.floor(Math.random() * (1 + max - min) + min)){
    return `Player 2, you guessed it!!`;
  }//end player2 conditional
  if(player1Guess !== Math.floor(Math.random() * (1 + max - min) + min))
}//end matchGuess

//add else if player is < or > math. blah return high/low

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}//end randomNumber

