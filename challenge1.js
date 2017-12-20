//first coding challenge for udemy course - score game

//game: highest height score wins.
//height score = height in CM + 5 * Age
//determine winner for 2 players and 3 players. use if/else, do not use a loop


//declare variables: age, height, score for all three players

var johnHeight = Math.floor(Math.random() * (180 - 150)) + 150;
var camranHeight = Math.floor(Math.random() * (180 - 150)) + 150;
var chadHeight = Math.floor(Math.random() * (180 - 150)) + 150;

var johnAge = 27;
var camranAge = 27;
var chadAge = 27;

var johnScore = johnHeight + (5 * johnAge);
var camranScore = camranHeight + (5 * camranAge);
var chadScore = chadHeight + (5 * chadAge);

//solution for 2 players, john and camran: if statements

if (johnScore === camranScore) {
    console.log(`John scored ${johnScore} and Camran scored ${camranScore}. The result is a DRAW!`);
} else if (johnScore > camranScore) {
    console.log(`John scored ${johnScore} and Camran scored ${camranScore}. John Wins!`);
} else {
    console.log(`John scored ${johnScore} and Camran scored ${camranScore}. Camran Wins!`);
};

//solution for 3 players John, Camran and Chad: If statements. ONLY need to declare winner

if (johnScore === (chadScore && camranScore)) {
  console.log(`john scored ${johnScore}, camran scored ${camranScore} and chad scored ${chadScore}. The result is a draw`)  
} else if (johnScore > camranScore) {
    if (johnScore > chadScore) {
        console.log(`john scored ${johnScore}, camran scored ${camranScore} and chad scored ${chadScore}. John wins!`)  
    } else {
      console.log(`john scored ${johnScore}, camran scored ${camranScore} and chad scored ${chadScore}. Chad wins!`)
    };
} else if (camranScore > chadScore) {
    console.log(`john scored ${johnScore}, camran scored ${camranScore} and chad scored ${chadScore}. Camran wins!`)
} else {
  console.log(`john scored ${johnScore}, camran scored ${camranScore} and chad scored ${chadScore}. Chad wins!`)
};


