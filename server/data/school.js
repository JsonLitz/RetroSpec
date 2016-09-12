var mongoose = require("mongoose");
var entrySchema = mongoose.Schema({
  title: String,
  body: String
  });

  module.exports = mongoose.model("entry", entrySchema);
