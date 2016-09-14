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
var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
// Connect to mongodb database
"mongodb://localhost/retrospec";

app.listen(process.env.PORT || 7777,function(){
  console.log("yo, we listening on port", 7777, "fam");
});


mongoose.connect(uristring, function (err, res) {
  if(err){
    console.log('ERROR connecting to: ' + uristring+ '. ' + err);
  } else {
    console.log('Succeeded connected to: '+uristring);
  }
});
