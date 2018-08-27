var board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
console.log("Game Start!");
var topBanner = document.getElementById("top banner");
var nextClick = "X";
var handleSquareClick = event => {
  event.toElement.innerText = nextClick;
  if (nextClick === "X") {
    nextClick = "O";
    topBanner.innerText = "Player O's Turn!";
  } else {
    nextClick = "X";
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
