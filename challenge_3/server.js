const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017";

dbName = "customers";

MongoClient.connect(
  url,
  function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    client.close();
  }
);

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
      console.log(body, "----body----");
      res.status(201);
      res.send("Posted info");
    });
});

app.put("/", (req, res) => {
  console.log("serving PUT");
  let body = [];
  req
    .on("data", chunk => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();
      //TODO send body into database
      res.status(201);
      res.send("Updates database");
    });
});

app.listen(3000, () => console.log("Listening on port 3000!"));
