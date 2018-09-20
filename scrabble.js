//Tiles

// 2 blank tiles (scoring 0 points)
// 1 point: E ×12, A ×9, I ×9, O ×8, N ×6, R ×6, T ×6, L ×4, S ×4, U ×4.
// 2 points: D ×4, G ×3.
// 3 points: B ×2, C ×2, M ×2, P ×2.
// 4 points: F ×2, H ×2, V ×2, W ×2, Y ×2.
// 5 points: K ×1.
// 8 points: J ×1, X ×1
// 10 points: Q ×1, Z ×1
//alphabets[0].points + alphabets[1].points = 3 (number).




alphabets = [
    {
    letter: "A",
    points: 1,
    number: 9
    },
    {
    letter: "B",
    points: 2,
    number: 2
    },
    {
    letter: "C",
    points: 3,
    number: 2
    },
    {
    letter: "D",
    points: 2,
    number: 4
    },
    {
    letter: "E",
    points: 1,
    number: 12
    },
    {
    letter: "F",
    points: 4,
    number: 2
    },
    {
    letter: "G",
    points: 2,
    number: 3
    },
    {
    letter: "H",
    points: 4,
    number: 2
    },
    {
    letter: "I",
    points: 1,
    number: 9
    },
    {
    letter: "J",
    points: 8,
    number: 1
    },
    {
    letter: "K",
    points: 5,
    number: 1
    },
    {
    letter: "L",
    points: 1,
    number: 4
    },
    {
    letter: "M",
    points: 3,
    number: 2
    },
    {
    letter: "N",
    points: 1,
    number: 6
    },
    {
    letter: "O",
    points: 1,
    number: 8
    },
    {
    letter: "P",
    points: 3,
    number: 2
    },
    {
    letter: "Q",
    points: 10,
    number: 1
    },
    {
    letter: "R",
    points: 1,
    number: 6
    },
    {
    letter: "S",
    points: 1,
    number: 4
    },
    {
    letter: "T",
    points: 1,
    number: 6
    },
    {
    letter: "U",
    points: 1,
    number: 4
    },
    {
    letter: "V",
    points: 4,
    number: 2
    },
    {
    letter: "W",
    points: 4,
    number: 2
    },
    {
    letter: "X",
    points: 8,
    number: 1
    },
    {
    letter: "Y",
    points: 4,
    number: 2
    },
   {
    letter: "Z",
    points: 10,
    number: 1
    },
    {
    letter: " _",
    points: 0,
    number: 1
    },
    {
    letter: "_",
    points: 0,
    number:1
    }
];

//Points summation system (2 methods)
//Method 1: Initial sum = 2 because of the 2 blank tiles.
// var sum = 0;
// for (var i=0;i<alphabets.length;i++){
//     sum += alphabets[i].points * alphabets[i].number;}

//Method 2: Reduce function returns 187.
// var initialValue = 2;
// var sum = alphabets.reduce(function (accumulator, currentValue) {
//     return accumulator + (currentValue.points*currentValue.number);
// },initialValue);

//Tracking the items on the board.

//Each player has 7 tiles.
var playerOneAlphabets = [];
var playerTwoAlphabets = [];

var playerOneBoardArray = [];
var playerTwoBoardArray = [];

var player = 1;

//Sorting out 7 tiles for Player One.


var playerPoints = 0;

var deductAlph = function() {
for(j in alphabets){
    for(x in playerOneAlphabets){
        if (alphabets[j].letter === playerOneAlphabets[x]) {
            alphabets[j].number = alphabets[j].number--;
            playerOneScore = alphabets[j].points++;
        }
    }
} console.log("After:",alphabets);
}

var buttonText;

var playerTiles = document.getElementById('player-tiles');
var playerOneTiles = document.createElement('div');
playerOneTiles.setAttribute('id', 'player-one');
playerOneTiles.addEventListener('drop', function(event) {
    console.log(event.target);

    event.target.parentNode.appendChild(buttonText);

});

playerTiles.appendChild(playerOneTiles);


var playerOneHeader = document.createElement('div');
    playerOneHeader.setAttribute('class', 'p1-head');
    playerOneTiles.appendChild(playerOneHeader);


var createTiles = function() {

    playerOneHeader.textContent = `${playerName}`;
    var pOne = document.querySelectorAll('#player-one button');
            for (var i=0; i<(7-pOne.length); i++){
                var realButton = document.createElement('button');
                realButton.setAttribute('id', "B-"+i);
                realButton.setAttribute('draggable', true);
                realButton.addEventListener('dragstart', function() {
                    console.log(event.target);
                    buttonText = event.target;

                });
                realButton.addEventListener('dragover', function(e) {
                        e.preventDefault();
                    });
                realButton.addEventListener('dragenter', function(e) {
                        e.preventDefault();
                    });
                realButton.addEventListener('drop', function(event) {
                        console.log(event.target);
                        event.target.parentNode.appendChild(buttonText);
                    });

                playerOneTiles.appendChild(realButton);
            };
};


var playerTwoTiles = document.createElement('div');
playerTwoTiles.setAttribute('id', 'player-two');
playerTwoTiles.addEventListener('drop', function(event) {
    console.log(event.target);
    event.target.parentNode.appendChild(buttonText);
});

playerTiles.appendChild(playerTwoTiles);

  var playerTwoHeader = document.createElement('div');
    playerTwoHeader.setAttribute('class', 'p2-head');
    playerTwoTiles.appendChild(playerTwoHeader);



var createTiles2 = function() {

    playerTwoHeader.textContent = `${playerName}`;

    var pTwo = document.querySelectorAll('#player-two button');
            for (var i=0; i<(7-pTwo.length); i++){
                var realButton = document.createElement('button');
                realButton.setAttribute('id', "B-"+i);
                realButton.setAttribute('draggable', true);
                realButton.addEventListener('dragstart', function() {
                    console.log(event.target);
                    buttonText = event.target;
                });
                realButton.addEventListener('dragover', function(e) {
                        e.preventDefault();
                    });
                realButton.addEventListener('dragenter', function(e) {
                        e.preventDefault();
                    });
                realButton.addEventListener('drop', function(event) {
                        console.log(event.target);

                        event.target.parentNode.appendChild(buttonText);
                    });

                playerTwoTiles.appendChild(realButton);
            };
};




var pickTilesOne = function() {
    for (i in alphabets){
        var rand = parseInt(Math.ceil(Math.random()*alphabets.length-1));
        var pOne = document.querySelectorAll('#player-one button');

        for(j=0;j<pOne.length;j++) {

            if (pOne[j].textContent === "") {
            playerOneAlphabets.push(alphabets[rand].letter);
            var buttonsArrOne = document.querySelectorAll('#player-one button');
            buttonsArrOne[i].textContent = alphabets[rand].letter;
            buttonsArrOne[i].innerHTML = alphabets[rand].letter;
        }
    }
}
};

var pickTilesTwo = function() {
    for (i in alphabets){

        var rand = parseInt(Math.ceil(Math.random()*alphabets.length-1));
        var pTwo = document.querySelectorAll('#player-two button');

        for(j=0;j<pTwo.length;j++) {

            if (pTwo[j].textContent === "") {
            playerTwoAlphabets.push(alphabets[rand].letter);
            var buttonsArrTwo = document.querySelectorAll('#player-two button');
            buttonsArrTwo[i].textContent = alphabets[rand].letter;
            buttonsArrTwo[i].innerHTML = alphabets[rand].letter;
            }
        }
    }
};





// Player turn switch
var playerName;

var sideBar = document.querySelector('#side-bar');
var whooseTurn = document.createElement('div');
whooseTurn.setAttribute('id', 'show-turn');
sideBar.appendChild(whooseTurn);

var coverPage = document.getElementsByClassName('container-fluid');

var startButton = document.querySelectorAll('button.btn.btn-danger');
startButton[0].addEventListener('click', pressStart);

//For moving to next player
var pressNext = document.querySelectorAll('button.btn.btn-info');
pressNext[0].addEventListener('click', nextPlayer);




function pressStart() {

<div onmousedown="event.preventDefault ? event.preventDefault() : event.returnValue = false">asd</div>

    $(document).ready(function(){
    console.log("hiding p2");
   $('.container-fluid').fadeOut();
   });

    playerName = "Player One";
    whooseTurn.innerHTML = `${playerName}`;



    createTiles();
    pickTilesOne();

    player = 0;

};


function nextPlayer() {

if (player === 1) {

    $(document).ready(function(){
    console.log("hiding p2");
    $('#player-one').fadeIn();
   $('#player-two').fadeOut();
   });

   playerName = "Player One";
   whooseTurn.innerHTML = `${playerName}`;

    currentLettersArr = [];
    vertLettersArr = [];

    createTiles();
    pickTilesOne();

    player = 0;
        } else {

    $(document).ready(function(){
   console.log("hiding p1");
   $('#player-one').fadeOut();
   $('#player-two').fadeIn();
    });

    playerName = "Player Two";
    whooseTurn.innerHTML = `${playerName}`;

    currentLettersArr = [];
    vertLettersArr = [];

    createTiles2();
    pickTilesTwo();


    player = 1;
// } else if (playerOneTurns === playerTwoTurns){
//     playerName = "Player One";
//     whooseTurn.innerHTML = `${playerName}'s Turn`;
//     createTiles();
//     pickTilesOne();
}
};