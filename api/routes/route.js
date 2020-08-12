const express = require("express");
const router = express.Router();
const { List, Task } = require("../models");

//Get Lists API Endpoints

//Return an array of all lists in JSON body
router.get("/lists", (req, res) => {
  List.find({}).then((lists) => {
    res.send(lists);
  });
});

//Create a new list and return the new list document including the id
router.post("/lists", (req, res) => {
  let title = req.body.title;

  let newList = new List({
    title,
  });

  newList.save().then((listDoc) => {
    //Return full list document
    res.send(listDoc);
  });
});

//Updates a specified list
router.patch("/lists/:id", (req, res) => {
  List.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  ).then(() => {
    res.sendStatus(200);
  });
});

//Deletes a specified list from DB
router.delete("/lists/:id", (req, res) => {
  List.findByIdAndRemove({
    _id: req.params.id,
  }).then((removedListDoc) => {
    res.send(removedListDoc);
  });
});

//Get Tasks API Endpoints

//Return All tasks of a specified list
router.get("/lists/:listId/tasks", (req, res) => {
  Task.find({
    _listId: req.params.listId,
  }).then((tasks) => {
    res.send(tasks);
  });
});

//Create a new task on the list specified
router.post("/lists/:listId/tasks", (req, res) => {
  let newTask = new Task({
    _listId: req.params.listId,
    title: req.body.title,
  });

  newTask.save().then((newTaskDoc) => {
    res.send(newTaskDoc);
  });
});

//Edit Tasks of a specified List
router.patch("/lists/:listId/tasks/:taskId", (req, res) => {
  Task.findOneAndUpdate(
    {
      _id: req.params.id,
      _listId: req.params.listId,
    },
    {
      $set: req.body,
    }
  ).then(() => {
    res.sendStatus(200);
  });
});

module.exports = router;
