var mongoose = require("mongoose");
var Entry = require("../data/entry");
var _ = require("underscore");

var router = require("express").Router();
router.route("/entries/:id?").get(getEntries).post(addEntry).delete(deleteEntry).put(updateEntry);

function getEntries(req, res) {
  Entry.find(function (err, entries) {
    if (err){
    console.log('post is broken');

      res.send(err);
    }else{
      res.json(entries);
      }
  });
}

function addEntry(req, res) {
  console.log('hit addEntry')
  var entry = new Entry(_.extend({}, req.body));
  entry.save(function (err) {
    if (err){
      res.send(err);
    }else{
      console.log('post is not broken');
      res.json(entry);
    }
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

function updateEntry(req, res) {
  var id = req.params.id;
  console.log(req.params);
  Entry.findByIdAndUpdate(id, function (err, updated) {
    if (err)
      res.send(err);
    else
      res.json(updated);
  });
}



module.exports = router;
