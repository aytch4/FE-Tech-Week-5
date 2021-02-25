function startGame() {

 
  document.turn= "X";
  document.winner = null;
  setMessage("It's " + document.turn + "'s turn");
}

startGame(); 

function setMessage(msg) {  //changes alert message
  document.getElementById("message").innerText = msg;
}

var square = document.querySelectorAll(".Square");

const squares = Array.from(document.getElementsByClassName("Square"));
squares.forEach(square => {
 square.addEventListener("click", nextMove);
});

function nextMove(event) {  
  if (document.winner != null) {
    setMessage(document.winner + " WON!");
  }
  if (event.target.innerText === "") {
  event.target.innerText = document.turn; //makes the X or O
  switchTurn(); 
  } else {  //stops you from going again in a square
    setMessage("That square is taken.");
  }
}

function switchTurn() {  
  if (checkForWinner(document.turn)) {
    setMessage("Congratulations, " + document.turn + "!  You win!");
    document.winner = document.turn;
    squares.forEach(square => square.removeEventListener("click", nextMove))

  } else if (document.turn == "X") {
    document.turn = "O";
    setMessage("It's " + document.turn + "'s turn");
  } else {
    document.turn = "X";
    setMessage("It's " + document.turn + "'s turn");
  }
}

function checkForWinner(player) {  // winning ways
  var result = false;
  if (checkRow(1,2,3, player) ||
      checkRow(4,5,6, player) ||
      checkRow(7,8,9, player) ||
      checkRow(1,5,9, player) ||
      checkRow(3,5,7, player) ||
      checkRow(1,4,7, player) ||
      checkRow(2,5,8, player) ||
      checkRow(3,6,9, player) ) {

      result = true;
  }
  return result;
}

function checkRow(a, b, c, player) { //checks row
  var result = false;
  if (getBox(a) == player && getBox(b) == player && getBox(c) ==player) {
    result = true;
  }
  return result;
}

function getBox(number) {
  return document.getElementById("box" + number).innerText;
}

function handleRestartGame(number) { //restarts game
  document.turn= "X";
  document.winner = null;
  setMessage("It's " + document.turn + "'s turn");
  for(i=1; i<=9; i++) {
    clearBox(i);
    startGame();
  }
 
squares.forEach(square => {
 square.addEventListener("click", nextMove);
});

}   
  
  document.querySelector('.btn').addEventListener('click', handleRestartGame); //restart button

  function clearBox(number) {  //clears boxes for new game
    document.getElementById("box" + number).innerText = " ";
  }
  
