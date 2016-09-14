var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");

//controllers
var entryController = require("./controllers/entryController");

//Express request pipeline
app.use(express.static(path.join(__dirname,"../app/dist")));
app.use(bodyParser.json());
app.use("/api", entryController);



var controllers = require('./controllers');
app.get('/api', controllers.api.index);
// app.put('/api/entries/:entryId', controllers.entry.update);


app.listen(process.env.PORT || 7777,function(){
  console.log("yo, we listening on port", 7777, "fam");
});

// Connect to mongodb database
// mongoose.connect("mongodb://localhost/retrospec");
