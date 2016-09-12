var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");

//controllers
var entryController = require("./controllers/entryController");

//Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
app.use(bodyParser.json());
app.use("/api", entryController);

app.listen(7777,function(){
  console.log("yo, we listening on port", 7777, "fam");
});

// Connect to mongodb database
mongoose.connect("mongodb://localhost/retrospec");
