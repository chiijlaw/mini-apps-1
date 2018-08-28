const express = require("express");
const util = require("./client/util.js");
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
      var output = JSON.parse(body);
      var CMVReport = util.formatReport(output);
      res.status(201);
      res.send(CMVReport);
    });
});

app.listen(3000, () => console.log("Listening on port 3000!"));
