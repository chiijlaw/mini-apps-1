var board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
console.log("Game Start!");
var topBanner = document.getElementById("top banner");
var nextClick = "X";
var boardValue = 1;
var playCount = 0;
var score = { X: 0, O: 0 };
var prevWinner = "";

var updateScoreBoard = function() {
  var scoreElement = document.getElementById("score");
  scoreElement.innerText = `${score.X} : ${score.O}`;
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
  alert("X Wins!");
  updateScoreBoard();
  topBanner.innerText = "X Wins!";
};

var oWins = function() {
  score.O++;
  prevWinner = "O";
  alert("O Wins!");
  updateScoreBoard();
  topBanner.innerText = "O Wins!";
};

var checkForWin = function() {
  var columnSums = [0, 0, 0];
  var majorDiagSum = 0;
  var minorDiagSum = 0;
  // check through whole board state
  for (let i = 0; i < board.length; i++) {
    var rowSum = 0;
    for (let j = 0; j < board[i].length; j++) {
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
  for (let k = 0; k < columnSums.length; k++) {
    if (columnSums[k] === 3) {
      xWins();
    } else if (columnSums[k] === -3) {
      oWins();
    }
  }
  // will alert tie after 9 plays
  if (playCount === 9) {
    alert("Tie!");
  }
  updateScoreBoard();
};

var handleSquareClick = event => {
  updateBoardOnClick(event);
  event.toElement.innerText = nextClick;
  if (nextClick === "X") {
    nextClick = "O";
    boardValue = -1;
    topBanner.innerText = "Player O's Turn!";
  } else {
    nextClick = "X";
    boardValue = 1;
    topBanner.innerText = "Player X's Turn!";
  }
  checkForWin();
};

var squareElements = document.getElementsByClassName("square");
for (let i = 0; i < squareElements.length; i++) {
  squareElements[i].onclick = handleSquareClick;
}

var resetElement = document.getElementById("reset");
resetElement.addEventListener("click", function(event) {
  board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (let i = 0; i < squareElements.length; i++) {
    squareElements[i].innerText = "[ ]";
  }
  if (prevWinner === "X") {
    topBanner.innerText = "Player X Starts First!";
    nextClick = "X";
    boardValue = 1;
  } else {
    topBanner.innerText = "Player O Starts First!";
    nextClick = "O";
    boardValue = -1;
  }
  playCount = 0;
});
