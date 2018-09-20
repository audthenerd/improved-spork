var alphabets;
var response;
var currentWord;
var joinLetters;
var playerPoints;
var buttonText;


//Player Scores on the board
var playerOneScore = 0;
var playerTwoScore = 0;
var playerOneTotalScore = 0;
var playerTwoTotalScore = 0;


var responseHandler = function() {
  console.log("response text", this.responseText);
  console.log("status text", this.statusText);
  console.log("status code", this.status);
};

// make a new request
var request = new XMLHttpRequest();

//This gets the response.
var responseHandler = function() {
  console.log("response text", this.responseText);
  response = JSON.parse( this.responseText );
  console.log(response);

};


//To get the data from the server.
var doSubmit = function(event){

if (currentWord !== undefined) {

var url = "https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20180919T163146Z.52b71b5cfa98d20f.a93306bc178cbc712385211ca4807e86de59f202&lang=en-ru&text=" + currentWord;
    // listen for the request response
    request.addEventListener("load", responseHandler);

    // ready the system by calling open, and specifying the url
    request.open("GET", url); //>> this will be set as "url" instead as a parameter in the function.

   // "Accept": "application/json",
   //  "app_id": "86d9fac2",
   //  "app_key": "965d1ab2b0f7dacd568ebf68d844203e";

    // send the request
    request.send();
}
};



 //To search if word exists in the dictionary.

var wordCheck = function() {
    if (response.def.length > 0) {

        for (var i=0;i<response.def.length;i++) {
            if ((response.def[i].text === currentWord || response.def[i].text === vertWord) && playerName === "Player One") {
                scoring();
                alert(`${playerName}: Word accepted! You get ${playerOneScore} points.`);
            } else if ((response.def[i].text === currentWord || response.def[i].text === vertWord) && playerName === "Player Two") {
                scoring();
                alert(`${playerName}: Word accepted! You get ${playerTwoScore} points.`);
            }
        }

    } else {
        alert('No such word! You lose a turn.');

        //tiles jump back to player's tiles array.
        var p1tile = document.getElementById('player-one');
        var p2tile = document.getElementById('player-two');

        if(playerName === "Player One") {
            p1tile.appendChild(buttonText);
        } else if (playerName === "Player Two") {
            p2tile.appendChild(buttonText);
        }
        }
};


//Score Section
var p1ScoreBoard = document.getElementById('p1-box');
var p2ScoreBoard = document.getElementById('p2-box');

var scoring = function() {
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneTotalScore = 0;
    playerTwoTotalScore = 0;

    for(j in alphabets){
        for (var i=0; i<currentLettersArr.length; i++) {
            if (playerName === "Player One" && alphabets[j].letter === currentLettersArr[i]) {
                playerOneScore   += (alphabets[j].points * currentLettersArr[i].length);
                playerOneTotalScore += playerOneScore;
                console.log("p1 total:",playerOneTotalScore);
                p1ScoreBoard.innerHTML = parseInt(playerOneTotalScore);
            } else if (playerName === "Player Two" && alphabets[j].letter === currentLettersArr[i]) {
                playerTwoScore += (alphabets[j].points * currentLettersArr[i].length);
                playerTwoTotalScore += playerTwoScore;
                console.log("p2 total:",playerTwoTotalScore);
                p2ScoreBoard.innerHTML = parseInt(playerTwoTotalScore);
            }
        };
    }
};







var requestFailed = function(){
  console.log("response text", this.responseText);
  console.log("status text", this.statusText);
  console.log("status code", this.status);
};

request.addEventListener("error", requestFailed);
