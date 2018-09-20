// API Docs at:
// http://www.tvmaze.com/api
// window.onload = function(){

var input = document.querySelector('#show-search');
var options = document.querySelector('option');
var select = document.getElementById('show-select');
var showDetail= document.getElementById('show-detail');

var response;
var coverOption;

// var result;

// function myFunction() {
//     result = "hello world";
// }

// myFunction();
// console.log(result);




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
  console.log( response );
  responseArr = response;

    hidePrevious();
    showList(response);
};


//To get the data from the server.
var doSubmit = function(event){

var input = document.querySelector('#show-search');
var url = "http://api.tvmaze.com/search/shows?q="+ input.value;
    // listen for the request response
    request.addEventListener("load", responseHandler);

    // ready the system by calling open, and specifying the url
    request.open("GET", url); //>> this will be set as "url" instead as a parameter in the function.

    // send the request
    request.send();
};



//function to clear previous filled options.
var hidePrevious = function() {
while (select.options.length>1){
    select.innerHTML = "";
}
}


//For drop-down list to select shows in options bar.



var showList = function(item) {

var showsArr = [];

var showSelect = document.getElementById('show-select');

    for(i=0; i<item.length; i++){
        showsArr.push(item[i].show.name);

        var dropDown = document.createElement('option');
        dropDown.setAttribute('value', item[i].show.name);
        dropDown.textContent = item[i].show.name;

        showSelect.appendChild(dropDown);
        select.style.visibility = "visible";

    }
        var coverOption = document.querySelector('option');
        coverOption.textContent = "Shows matching " + input.value + "...";
        showSelect.style.display="block";

        return showsArr;

}



var renderShow = function() {
    for(i=0; i<response.length; i++){

    if (response[i].show.name === select.value ){

        var info = document.createElement('p');
        info.setAttribute('value', response[i].show.name);
        info.textContent = response[i].show.name;
        showDetail.appendChild(info);

        var image = document.createElement('img');
        image.setAttribute('src', response[i].show.image.medium);
        info.appendChild(image);



    }
    }
};




document.querySelector('button').addEventListener('click', doSubmit);
select.addEventListener('change', renderShow);




var requestFailed = function(){
  console.log("response text", this.responseText);
  console.log("status text", this.statusText);
  console.log("status code", this.status);
};

request.addEventListener("error", requestFailed);



// }



//Drag drop


var data;
var data1;
var dragContent;
var holdingArea = [];

var dragButton = document.querySelectorAll('#player-one div');


[].forEach.call(dragButton, function(item) {
  item.addEventListener('dragstart', dragStart, false);
  item.addEventListener('dragover', allowDrop, false);
  item.addEventListener('ondragstart', dragMove, false);
   item.addEventListener('ondrop', dropObj, false);
  item.addEventListener('dragend', dragEnd, false);
});


var appendButton = document.querySelectorAll('td');

[].forEach.call(appendButton, function(item) {
    item.addEventListener('dragover', allowDrop, false);
  item.addEventListener('ondrop', dropObj, false);
  item.addEventListener('dragend', dragEnd, false);
});





function dragStart (event){
    event.preventDefault();
    this.style.opacity = '0.4';
    console.log("start");
};


function allowDrop(event) {
    event.preventDefault();
}

function dragMove(event) {
    for (i in dragButton){
    dragContent = event.dataTransfer.mozSetDataAt('text', dragButton[i].innerHTML, 0);
    console.log("drag innerhtml:",dragContent);
    dragText = event.dataTransfer.mozSetDataAt('text', dragButton[i].textContent, 0);
    console.log("drag textcontent:",dragText);
    }
 }


function dropObj(event) {

    event.preventDefault();
    data = event.dataTransfer.mozGetDataAt('text', dragContent, 0);
    console.log("data:",data);
    data1 = event.dataTransfer.mozGetDataAt('text', dragText, 0);
    console.log("data1:", data1);
}


function dragEndBA(event) {
    event.preventDefault();
     this.style.opacity = '1';
    var newData = document.getElementById(data);
    var newData1 = document.getElementById(data1);
        for (i in event.target){
            if  (event.target[i].className === "drop-zone") {
                console.log("classname:",event.target[i].className);

                event.target[i].innerHTML = newData;
                event.target[i].textContent = newData1;
                playerOneBoardArray.push(newData1);
            } else {
                return false;
                }
        }
};


for (var i = 0; i < playerInput.length; i++) {
    var split = playerInput.charAt(i);
    if(playerName = "Player One") {
        playerOneBoardArray.push(split);
    }
    var playerNumP = parseInt(playerNum);

    for(var k=0; k<playerOneBoardArray.length;k++) {
        for (var j=playerNumP; j<(playerNumP + playerOneBoardArray.length); j++){
            var boardArray = document.querySelectorAll('td');
            boardArray[j].textContent = playerOneBoardArray[i];
        }
    }
};



function compare() {
    var latestWord = [];
    console.log(latestWord);
    for(var i=0;i<currentLettersHorr.length;i++) {
        if (currentLettersHorr[i] !== usedLettersHorr[i]) {
            latestWord.push(currentLettersHorr[i]);
            }
        }
};


//When player clicks "Done"
// var currentLettersHorr= [
//                         [],
//                         [],
//                         [],
//                         [],
//                         [],
//                         [],
//                         [],
//                         [],
//                         [],
//                         [],
//                         [],
//                         [],
//                         [],
//                         [],
//                         []
//                         ];


// var usedLettersHorr = [
//                         [],
//                         [],
//                         [],
//                         [],
//                         [],
//                         [],
//                         [],
//                         [],
//                         [],
//                         [],
//                         [],
//                         [],
//                         [],
//                         [],
//                         []
//                         ];


//     currentLetterId = [];
//     var boardArray = document.querySelectorAll('td');
//     var rowArray = document.querySelectorAll('tr');


// //This pushes the word played into the current array.

// for(var j = 0; j<15; j++) {
//     for (var i=15*j; i<15+(15*j); i++) {
//         if (boardArray[i].textContent !== "") {
//             currentLettersHorr[j].push(boardArray[i].textContent);

//             var positionInArray = document.querySelectorAll('td')[i].id;
//             currentLetterId.push(positionInArray);
//            // var coord = positionInArray.split('');
//            // var row = coord[0];
//            // var column = coord[1];
//         }
//     }
// };


//Gameplays

var playerInput = "hello";
var playerInputSplit = playerInput.split('');
var holdingArr = [];

// var dragButton = document.querySelectorAll('#player-one div');

// var playerClick = function() {
//     for (var i=0;i<7;i++) {
//        var letter = document.querySelectorAll('#player-one div')[i].textContent;
//        debugger;
//         holdingArr.push(letter);
//     }
// };

// dragButton.addEventListener("click", playerClick);



// document.querySelectorAll('td')[116].textContent = "O";

























var pOne = document.querySelectorAll('#player-one button');
var pTwo= document.querySelectorAll('#player-two button');

var playerTiles = document.getElementById('player-tiles');
var playerOneTiles = document.createElement('div');
playerOneTiles.setAttribute('id', 'player-one');
playerTiles.appendChild(playerOneTiles);

var createTiles = function() {

        if (pOne.length < 7) {
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
        }

};





