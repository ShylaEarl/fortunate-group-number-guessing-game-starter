const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

//TODO add array here to store data/history on the server
  let guessHistory = [ ];

// GET & POST Routes go here

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}//end randomNumber

randomNumber(1, 25);

app.get('/guesses', (req, res) => {
  res.send(newGuesses);
})

app.post('/guesses', (req, res) => {
  let newGuesses = req.body;
  console.log('New guesses', newGuesses);
  //save new guesses
  guessHistory.push(newGuesses);
  res.sendStatus(201);
  
})

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
