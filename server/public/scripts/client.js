$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!");
  //randomNumber(1, 25);
  $('#submit-guesses').on('click', matchGuess);
  
}//end handleReady


function matchGuess(){
  console.log('clicked', );
  
  let newGuesses = {
    player1Guess: Number($('#player-one').val()),
    player2Guess: Number($('#player-two').val()),
  }
  //send to server
  console.log('Guesses:', newGuesses);

  $.ajax({
    method: 'POST',
    url: '/guesses',
    data: newGuesses,
  })
  .then(function (response){
    console.log('Added guesses');
    //changed data on server, get all updates
    getNewGuesses();
  })
  .catch(function(error){
    console.log('Error from server', error);
    alert('Something went wrong, try again later.');
  })
  
  //clear inputs
  $('#player-one').val('');
  $('#player-two').val('');

}//end matchGuess

function getNewGuesses(){
  $.ajax({
    method: 'GET',
    url:'/guesses',
  })
  .then(function(response){
    console.log('response from server', response);
    //render(response);
  })
  .catch(function(error){
    console.log('Error from server', error);
    alert('Cannot get guesses. Try again later.')
  })
}//end getNewGuesses

// if(player1Guess === Math.floor(Math.random() * (1 + max - min) + min)){ 
//   return alert(`Player 1, you guessed it!!`);
// } else if (player1Guess > Math.floor(Math.random() * (1 + max - min) + min)){
//   return alert(`Player 1, your guess is too high.`);
// } else if (player1Guess < Math.floor(Math.random() * (1 + max - min) + min)){
//   return `Player 1, your guess is too low.`;
// }//end player1 conditional

// if(player2Guess === Math.floor(Math.random() * (1 + max - min) + min)){
//   return alert(`Player 2, you guessed it!!`);
// } else if (player2Guess > Math.floor(Math.random() * (1 + max - min) + min)){
//   return alert(`Player 2, your guess is too high.`);
// } else if (player2Guess < Math.floor(Math.random() * (1 + max - min) + min)){
//   return alert(`Player 2, your guess is too low.`);
// } //end player2 conditional

// function randomNumber(min, max){
//    return Math.floor(Math.random() * (1 + max - min) + min);
// }//end randomNumber

//console.log('random number', randomNumber(1, 25));


