var dispatcher = require("../dispatcher");

function EntryStore() {
    var listeners = [];

    var entries = [{title:"First day at new Job",body:"what a day. Everyone is nice. Food is ok"},
                    {title:"Tinder date with Michelle",body:"Super boring"}];

    function getEntries() {
        return entries;
    }

    function onChange(listener) {
        listeners.push(listener);
    }

    function addEntry(entry) {
        entries.push(entry)
        triggerListeners();
    }

    function deleteEntry(entry) {
        var _index;
        entries.map(function (s, index) {
            if (s.name === entry.name) {
                _index = index;
            }
        });
        entries.splice(_index, 1);
        triggerListeners();
    }

    function triggerListeners() {
        listeners.forEach(function (listener) {
            listener(entries);
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
        getEntries: getEntries,
        onChange: onChange
    }
}

module.exports = EntryStore();
