var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var entrySchema = new Schema({
  title: String,
  body: String,
  _user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ], // Each location will reference a specific user.

  dateTime: {type:Date, default: new Date()}

});

  module.exports = mongoose.model("entry", entrySchema);
