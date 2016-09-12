var dispatcher = require("../dispatcher");

module.exports = {
    addEntry:function(entry){
        dispatcher.dispatch({
           entry:entry,
           type:"entry:addEntry"
        });
    },
    deleteEntry:function(entry){
        dispatcher.dispatch({
           entry:entry,
           type:"entry:deleteEntry"
        });
    }
}
