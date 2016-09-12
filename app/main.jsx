var React = require("react");
var ReactDOM = require("react-dom");
var EntriesList = require("./components/EntriesList.jsx");
var entriesStore = require("./stores/entriesStore");
var _entries = entriesStore.getEntries();
entriesStore.onChange(function(entries){
    _entries = entries;
    render();
});




function render(){
    ReactDOM.render(<EntriesList entries={_entries} />, document.getElementById("container"));
}
render();
