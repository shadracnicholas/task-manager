const express = require("express");
const app = express();
const cors = require("cors");

const bodyparser = require("body-parser");
const route = require("./routes/route");

//Load Middleware
app.use(cors());
app.use(bodyparser.json({ limit: 50000000, type: "application/json" }));

const { mongoose } = require("./config/db");

// Load Endpoint Handlers
app.use("/api", route);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
