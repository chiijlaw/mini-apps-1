const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200);
  console.log("serving GET");
  res.send("Hey hey");
});

app.post("/", (req, res) => {
  console.log("serving POST");
  let body = [];
  req
    .on("data", chunk => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();
      //TODO send body onto database
      res.status(201);
      res.send("Posted info");
    });
});

app.listen(3000, () => console.log("Listening on port 3000!"));
