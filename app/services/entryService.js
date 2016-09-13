var $ = require("jquery");
var promise = require("es6-promise");
var resourceUrl = "http://localhost:7777/api/entries";

module.exports = {
  addEntry: function (entry) {
    var Promise = promise.Promise;
    return new Promise(function (resolve, reject) {
      $.ajax({
        url:resourceUrl,
        data: JSON.stringify(entry),
        method: "POST",
        dataType: "json",
        contentType: "application/json",
        success: resolve,
        error: reject
      });
    });
  },
  getEntries: function () {
    var Promise = promise.Promise;
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: resourceUrl,
        method: "GET",
        dataType: "json",
        success: resolve,
        error: reject
      });
    });
  },
  deleteEntry: function (entry) {
    var Promise = promise.Promise;
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: resourceUrl + "/" + entry._id,
        method: "DELETE",
        dataType: "json",
        success: resolve,
        error: reject
      });
    });
  },
  updateEntry: function (entry){
    var Promise = promise.Promise;
    return new Promise(function (resolve, reject){
      $.ajax({
        url: resourceUrl + "/" + entry._id,
        method: "UPDATE",
        dataType: "json",
        success: resolve,
        error: reject
      });
    });
  }
};
