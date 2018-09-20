var buttonText;
var colText;
var rowNumber;
var colNumber;
var joinLetters;
// var currentLettersArr;
// var vertLettersArr;
var currentWord;
var vertWord;

var createBoard = document.getElementById('board');
var tableHead = document.createElement('table');
createBoard.appendChild(tableHead);
document.body.appendChild(createBoard);

for (var i=0; i<15; i++) {
    var row = document.createElement('tr');
    row.setAttribute('id', i);

    var table = document.querySelector('table');
    table.appendChild(row);
}

var eventStore = [];

for (var i=0; i<15; i++){
var rows = document.querySelectorAll('tr')[i];
var iString = i.toString();

    for (var j=0; j<15; j++){
        var column = document.createElement('td');
         column.setAttribute('class',"cell-" + j);
         // column.setAttribute('draggable', true);
        column.addEventListener('dragover', function(e) {
            e.preventDefault();
        })

        column.addEventListener('dragenter', function(e) {
            e.preventDefault();
        });

        column.addEventListener('drop', function(event) {
            console.log(event.target);
            event.target.appendChild(buttonText);
            rowNumber = event.target.parentElement.id;
            console.log("row number for e:",rowNumber);
            colNumber = event.target.className;
            // colNumberParse = parseInt(colNumber);
            console.log("col number for e:", colNumber);

            eventStore.push(event.target);
        });

       rows.appendChild(column);
    }
};


//When Go button is pressed, check words with dictionary

var theRow = document.querySelectorAll('tr');
var theCol = document.querySelectorAll('td');

var pressGo = document.querySelectorAll('button.btn.btn-success');

pressGo[0].addEventListener('click', function() {

    scanHor();
    scanVert();
    doSubmit();
    var timeOut = setTimeout (wordCheck, 3000);
});


//check horizontally
currentLettersArr = [];
var scanHor = function() {

    for(var i=0; i<15;i++) {
        if (theRow[rowNumber].children[i].textContent !== "") {
            currentLettersArr.push(theRow[rowNumber].children[i].textContent);
        }
    };
        if (currentLettersArr.length > 1) {
        var joinLetters = currentLettersArr.join('');
        currentWord = joinLetters.toLowerCase();
        }
};


//check vertically
vertLettersArr = [];
var scanVert = function() {

    var vertElements = document.getElementsByClassName(colNumber);

    for(var i=0; i<15; i++){
        if (vertElements[i].textContent !== "") {
            vertLettersArr.push(vertElements[i].textContent);
        }
    };

        if (vertLettersArr.length > 1) {
        var joinLetters = vertLettersArr.join('');
        vertWord = joinLetters.toLowerCase();
        }
};



//Playing tiles

// //Player One
// var playerOneTiles = document.createElement('div');
// playerOneTiles.setAttribute('id', 'player-one');
// playerTiles.appendChild(playerOneTiles);

// for (var i=0; i<7; i++){
//     var realButton = document.createElement('button');
//     realButton.setAttribute('id', "B-"+i);
//     realButton.setAttribute('draggable', true);
//     realButton.addEventListener('dragstart', function() {
//         console.log(event.target);
//         buttonText = event.target;
//     });
//     realButton.addEventListener('dragover', function(e) {
//             e.preventDefault();
//         });
//     realButton.addEventListener('dragenter', function(e) {
//             e.preventDefault();
//         });
//     realButton.addEventListener('drop', function(event) {
//             console.log(event.target);
//             event.target.parentNode.appendChild(buttonText);
//         });

//     playerOneTiles.appendChild(realButton);
// };




// //Player Two
// var playerTwoTiles = document.createElement('div');
// playerTwoTiles.setAttribute('id', 'player-two');
// playerTiles.appendChild(playerTwoTiles);

// for (var i=0; i<7; i++){
//     var realButton2 = document.createElement('button');
//     realButton2.setAttribute('id', "B-"+i);
//     realButton2.setAttribute('draggable', true);
//     realButton2.addEventListener('dragstart', function() {
//         console.log(event.target);
//         buttonText = event.target;
//     });
//     realButton2.addEventListener('dragover', function(e) {
//             e.preventDefault();
//         });
//     realButton2.addEventListener('dragenter', function(e) {
//             e.preventDefault();
//         });
//     realButton2.addEventListener('drop', function(event) {
//             console.log(event.target);
//             event.target.parentNode.appendChild(buttonText);
//         });

//     playerTwoTiles.appendChild(realButton2);
// };











