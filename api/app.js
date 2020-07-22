const express = require("express");
var config = require("./config/db");

const app = express();

const route = require("./routes/route");

// List Route Handlers
app.get("/list", (req, res) => {
  //Return an array of all lists in
});

app.post("/list", (req, res) => {
  //Create a new list and return the new list document including the id
});

app.patch("/list/:id", (req, res) => {
  //Updates a specified list
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
