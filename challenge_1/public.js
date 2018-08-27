var express = require("express");
var app = express();

app.use(express.static("Tic-Tac-Toe"));

app.listen(3000, () => console.log("Example app listening on port 3000!"));
