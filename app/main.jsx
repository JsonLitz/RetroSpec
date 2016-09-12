var React = require("react");
var ReactDOM = require("react-dom");
var EntriesList = require("./components/EntriesList.jsx");
var entriesStore = require("./stores/entriesStore");
var _entries = [];
var getEntriesCallback = function(entries){
  _entries=entries;
  render();
};

entriesStore.onChange(getEntriesCallback);




function render(){
    ReactDOM.render(<EntriesList entries={_entries} />, document.getElementById("container"));
}
render();
