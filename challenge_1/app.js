var board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
console.log("Game Start!");
var nextClick = "X";
var squareElements = document.getElementsByClassName("square");
// squareElements.onclick = alert("clicked it");
var resetElement = document.getElementById("reset");
resetElement.addEventListener("click", function(event) {
  board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  console.log("pressed it");
  squareElements.innerHTML = "asdf";
});
