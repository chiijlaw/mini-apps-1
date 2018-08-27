var board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var topBanner = document.getElementById("top-banner");
var nextClick = "X";
var boardValue = 1;
var playCount = 0;
var score = { X: 0, O: 0 };
var prevWinner = "X";

var namesElement = document.getElementById("names");
// Get player names
var playerXName = window.prompt("What is Player X's name?") || "X";
var playerOName = window.prompt("What is Player O's name?") || "O";
namesElement.innerText = `${playerXName} vs ${playerOName}`;
topBanner.innerText = `${playerXName} starts first!`;

var updateScoreBoard = function() {
  var scoreElement = document.getElementById("score");
  scoreElement.innerText = `${score.X}  :  ${score.O}`;
};

var updateBoardOnClick = function(node) {
  var coordinates = node.toElement.id.split(",");
  var row = parseInt(coordinates[0] - 1);
  var column = parseInt(coordinates[1] - 1);
  board[row][column] = boardValue;
  playCount++;
};

var xWins = function() {
  score.X++;
  prevWinner = "X";
  alert(`${playerXName} Wins!`);
  updateScoreBoard();
  topBanner.innerText = `${playerXName} Wins!`;
  playCount = 0;
};

var oWins = function() {
  score.O++;
  prevWinner = "O";
  alert(`${playerOName} Wins!`);
  updateScoreBoard();
  topBanner.innerText = `${playerOName} Wins!`;
  playCount = 0;
};

var checkForWin = function() {
  var columnSums = [0, 0, 0];
  var majorDiagSum = 0;
  var minorDiagSum = 0;
  // check through whole board state
  for (var i = 0; i < board.length; i++) {
    var rowSum = 0;
    for (var j = 0; j < board[i].length; j++) {
      rowSum += board[i][j];
      // add to column Sums
      if (j === 0) {
        columnSums[0] += board[i][j];
      } else if (j === 1) {
        columnSums[1] += board[i][j];
      } else if (j === 2) {
        columnSums[2] += board[i][j];
      }
      // add to diagonals
      if (i + j === 2) {
        majorDiagSum += board[i][j];
      }
      if (i - j === 0) {
        minorDiagSum += board[i][j];
      }
    }
    // check if a player win's by row
    if (rowSum === 3) {
      xWins();
    } else if (rowSum === -3) {
      oWins();
    }
  }
  //check if a player win's by diagonal
  if (majorDiagSum === 3 || minorDiagSum === 3) {
    xWins();
  } else if (majorDiagSum === -3 || minorDiagSum === -3) {
    oWins();
  }
  // check if a player wins by column
  for (var k = 0; k < columnSums.length; k++) {
    if (columnSums[k] === 3) {
      xWins();
    } else if (columnSums[k] === -3) {
      oWins();
    }
  }
  // will alert tie after 9 plays
  if (playCount === 9) {
    alert("Tie!");
    topBanner.innerText = "Tie!";
  }
  updateScoreBoard();
};

var handleSquareClick = function(event) {
  updateBoardOnClick(event);
  event.toElement.innerText = nextClick;
  event.toElement.onclick = function() {
    alert("Click another square!");
  };
  if (nextClick === "X") {
    nextClick = "O";
    boardValue = -1;
    topBanner.innerText = `${playerOName}'s turn!`;
  } else {
    nextClick = "X";
    boardValue = 1;
    topBanner.innerText = `${playerXName}'s turn!`;
  }
  checkForWin();
};

var squareElements = document.getElementsByClassName("square");
var addClickEventToSquares = function() {
  for (var i = 0; i < squareElements.length; i++) {
    squareElements[i].onclick = handleSquareClick;
  }
};
addClickEventToSquares();

var resetElement = document.getElementById("reset");
resetElement.addEventListener("click", function(event) {
  board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (var i = 0; i < squareElements.length; i++) {
    squareElements[i].innerText = "_";
  }
  if (prevWinner === "X") {
    topBanner.innerText = `${playerXName} starts first!`;
    nextClick = "X";
    boardValue = 1;
  } else {
    topBanner.innerText = `${playerOName} starts first!`;
    nextClick = "O";
    boardValue = -1;
  }
  playCount = 0;
  addClickEventToSquares();
});
