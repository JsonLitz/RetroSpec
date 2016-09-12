var mongoose = require("mongoose");
var Entry = require("../data/entry");
var _ = require("underscore");

var router = require("express").Router();
router.route("/entries/:id?").get(getEntries).post(addEntry).delete(deleteEntry);

function getEntries(req, res) {
  Entry.find(function (err, entries) {
    if (err)
      res.send(err);
    else
      res.json(entries);
  });
}

function addEntry(req, res) {
  var entry = new Entry(_.extend({}, req.body));
  entry.save(function (err) {
    if (err)
      res.send(err);
    else
      res.json(entry);
  });
}

function deleteEntry(req, res) {
  var id = req.params.id;
  Entry.remove({_id: id }, function (err, removed) {
    if (err)
      res.send(err)
    else
      res.json(removed);
  });
}



module.exports = router;
