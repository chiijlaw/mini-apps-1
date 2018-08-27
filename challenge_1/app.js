var board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
console.log("Game Start!");
var topBanner = document.getElementById("top banner");
var nextClick = "X";
var boardValue = 1;
var extractBoardSquareFromId = function(id) {
  id.split(",");
};
var handleSquareClick = event => {
  var coordinates = event.toElement.id.split(",");
  var row = parseInt(coordinates[0] - 1);
  var column = parseInt(coordinates[1] - 1);
  event.toElement.innerText = nextClick;
  board[row][column] = boardValue;
  if (nextClick === "X") {
    nextClick = "O";
    boardValue = -1;
    topBanner.innerText = "Player O's Turn!";
  } else {
    nextClick = "X";
    boardValue = 1;
    topBanner.innerText = "Player X's Turn!";
  }
};

var squareElements = document.getElementsByClassName("square");
for (let i = 0; i < squareElements.length; i++) {
  squareElements[i].onclick = handleSquareClick;
}

var resetElement = document.getElementById("reset");
resetElement.addEventListener("click", function(event) {
  board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  console.log("pressed it");
  squareElements.innerTEXT = "asdf";
});
