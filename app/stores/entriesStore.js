var dispatcher = require("../dispatcher");
var entryService = require("../services/entryService");


function EntryStore() {
    var listeners = [];

    function onChange(listener) {
      getEntries(listener);
      listeners.push(listener);
    }

    function getEntries(cb){
      entryService.getEntries().then(function (res) {
        cb(res);
      });
    }

    function addEntry(entry) {
        entryService.addEntry(entry).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function deleteEntry(entry) {
        entryService.deleteEntry(entry).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function updateEntry(entry) {
        entryService.updateEntry(entry).then(function (res){
          console.log(res);
          triggerListeners();
        });
    }

    function triggerListeners() {
        getEntries(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "entry") {
            switch (split[1]) {
                case "addEntry":
                    addEntry(payload.entry);
                    break;
                case "deleteEntry":
                    deleteEntry(payload.entry);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = EntryStore();
