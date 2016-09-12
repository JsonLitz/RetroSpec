var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
app.listen(7777,function(){
  console.log("yo we listening on port", 7777, "fam");
});
