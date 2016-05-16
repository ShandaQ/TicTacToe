
var winningCombinations = [

  [0,1,2],
  [3,4,5],
  [6,7,8],

  [0,3,6],
  [1,4,7],
  [2,5,8],

  [0,4,8],
  [2,4,6]];

var playOWinCounts = 0;
var playXWinCounts = 0;
//Function checks to see of there is a winner for a certain player (o,x)
//Makes a call to the checksPlayersPosition function to check if player sybmol(x,o) is
//in all the winning spots(comb)

// fucntion that takes
// 1. a player; o or x
// 2. a winning comb - array of 3 numbers (array indices)
// 3. the board; an array of all the moves
// and returns true if player occupies all 3 else false
function isThereAWinner (player, squares, board){
  for(var i = 0; i < squares.length; i++){
    var idx = squares[i];
    var value = board[idx];

    if(value !== player){
      return false;
    }
  }
  return true;
}

//function to check if player sybmol(x or o) is in a wining combination
function getWinnerName(board){
  for(var i =0; i < winningCombinations.length; i++){
    var combo = winningCombinations[i];

    if(isThereAWinner('O', combo, board)){
      playOWinCounts++;
      return "O";
    }

    if(isThereAWinner("X", combo, board)){
      playXWinCounts++;
      return 'X';
    }
  }
  return null;
}


//function that returns and array of what the current board looks like
function currentBord() {
  var buttons = $('.square');
  var moves = [];

  for(var i = 0; i < buttons.length; i++){
    var button = $(buttons[i]);
    moves.push(button.text());
  }
  return moves;
}

function clearBoard(){
  var buttons = $('.square');
  //var moves = [];

  for(var i = 0; i < buttons.length; i++){
    var button = $(buttons[i]);
    button.text("");
  }
  //return moves;
}


$(function () {
  var numOfClicks = 1;


  $(".square").click(function() {
    var symbol = $(this).text();
    var oSymbol= 'O'; //$(this).text(); // blank, X, or O
    var xSymbol = 'X';
    var newSymbol;


    if($(this).text() !== ""){
      newSymbol = symbol;
    }
    else if(numOfClicks % 2 === 0){
      $(this).text(xSymbol);
      numOfClicks++;
     }
     else if(numOfClicks % 2 !== 0){
       $(this).text(oSymbol);
       numOfClicks++;
    }

    //Returns what the current board looks like
    var board = currentBord();
    console.log(board);

    //call to check if player sybmol is in a winning combination
    //passing in the current board
    var theWinner = getWinnerName(board);
    console.log(theWinner);

    if(theWinner){
      $(".square").prop('disabled', "true");
      //console.log("The winner is " + theWinner);
      if(theWinner === 'O'){
        $('#playerOScore').text(playOWinCounts);
      }
      else if(theWinner === 'X'){
        $('#playerXScore').text(playXWinCounts);
      }
    }


  })

  $("#plagAgain").click(function() {
    //clear the game, but keeps the score
    clearBoard();
    var newboard  = currentBord();
    //getWinnerName(newboard);
    $(".square").prop('disabled', null);
  })

  $("#resetBoard").click(function(){
    clearBoard();
    $('#playerOScore').text("0");
    $('#playerXScore').text("0");
    playOWinCounts = 0;
    playXWinCounts = 0;
    $(".square").prop('disabled', null);

  })
});
