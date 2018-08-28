const express = require("express");
const app = express();

app.use(express.static("client"));

app.get("/", function(req, res) {
  console.log("serving GET");
  res.status(200);
  res.send("hello world!");
});

app.post("/", function(req, res) {
  console.log("serving POST");
  var body = [];
  req
    .on("data", function(chunk) {
      body.push(chunk);
    })
    .on("end", function() {
      body = Buffer.concat(body).toString();

      res.status(201);
      res.send(JSON.parse(body));
    });
});

app.listen(3000, () => console.log("Listening on port 3000!"));
