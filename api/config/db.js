//This file handles connection to MongoDB

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/TaskManager", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected successfully");
  })
  .catch((e) => {
    console.log("Error connecting to Mongo DB");
  });

//This prevents the deprecation warnings from MongoDB native driver
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

module.exports = {
  mongoose,
};
