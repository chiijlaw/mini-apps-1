var board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
console.log("Game Start!");
var nextClick = "X";
var handleSquareClick = event => {
  event.toElement.innerText = nextClick;
  if (nextClick === "X") {
    nextClick = "O";
  } else {
    nextClick = "X";
  }
};
var squareElements = document.getElementsByClassName("square");
for (let i = 0; i < squareElements.length; i++) {
  squareElements[i].onclick = handleSquareClick;
}
var oneOne = document.getElementById("1,1");
// oneOne.onclick = handleSquareClick;
var resetElement = document.getElementById("reset");
resetElement.addEventListener("click", function(event) {
  board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  console.log("pressed it");
  squareElements.innerTEXT = "asdf";
});
