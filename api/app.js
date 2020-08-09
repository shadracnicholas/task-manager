const express = require("express");
const app = express();
const cors = require("cors");

const bodyparser = require("body-parser");

//Load Middleware
app.use(cors());
app.use(bodyparser.json({ limit: 50000000, type: "application/json" }));

const { mongoose } = require("./config/db");

//Load in Mongoose models
const { List, Task } = require("./models");

// List Route Handlers
app.get("/lists", (req, res) => {
  //Return an array of all lists in JSON body
  List.find({}).then((lists) => {
    res.send(lists);
  });
});

app.post("/lists", (req, res) => {
  //Create a new list and return the new list document including the id

  let title = req.body.title;

  let newList = new List({
    title,
  });

  newList.save().then((listDoc) => {
    //Return full list document
    res.send(listDoc);
  });
});

app.patch("/list/:id", (req, res) => {
  //Updates a specified list
});

app.delete("/list/:id", (req, res) => {
  //Deletes a specified list from DB
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
