const express = require("express");
const app = express();
const PORT = 3000;
const routes = require("./routes/api");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

//import mongoose
const mongoose = require("mongoose");
const url = process.env.MONGODB_URI;

//connect to mongodb database
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection
  .once("open", function () {
    console.log("Connection has been made!");
  })
  .on("error", function (error) {
    console.log("Connection error:", error);
  });

app.use(bodyParser.json());
app.use("/api", routes);

//an invalid route
app.get("/", (req, res) => {
  res.send("Invalid Route!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//set EJS as the view engine
app.set("view engine", "ejs");

//error handling middleware
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});

//listen on port 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
