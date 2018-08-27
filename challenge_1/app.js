var board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
console.log("Game Start!");
var topBanner = document.getElementById("top banner");
var nextClick = "X";
var boardValue = 1;

var updateBoardOnClick = function(node) {
  var coordinates = node.toElement.id.split(",");
  var row = parseInt(coordinates[0] - 1);
  var column = parseInt(coordinates[1] - 1);
  board[row][column] = boardValue;
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
      alert("X Wins!");
    } else if (rowSum === -3) {
      alert("O Wins!");
    }
  }
  //check if a player win's by diagonal
  if (majorDiagSum === 3 || minorDiagSum === 3) {
    alert("X Wins!");
  } else if (majorDiagSum === -3 || minorDiagSum === -3) {
    alert("O Wins!");
  }
  // check if a player wins by column
  for (let k = 0; k < columnSums.length; k++) {
    if (columnSums[k] === 3) {
      alert("X Wins!");
    } else if (columnSums[k] === -3) {
      alert("O Wins!");
    }
  }
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
  topBanner.innerText = "Player X Starts First!";
  nextClick = "X";
  boardValue = 1;
});
