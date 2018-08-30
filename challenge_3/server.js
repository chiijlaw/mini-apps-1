const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const mongoose = require("mongoose");
const Customer = require("./model");

const url = "mongodb://localhost:27017/customers";

// dbName = "customers";

mongoose.connect(url);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// MongoClient.connect(
//   url,
//   function(err, client) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");

//     const db = client.db(dbName);

//     client.close();
//   }
// );

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
      body = JSON.parse(body);
      Customer.create(body, function(err, callback) {
        if (err) return callback(err, null);
      });
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
      body = JSON.parse(body);
      Customer.updateOne({ email: body.email }, body, function(err, res) {
        if (err) return callback(err, null);
      });
      res.status(201);
      res.send("Updates database");
    });
});

app.listen(3000, () => console.log("Listening on port 3000!"));
