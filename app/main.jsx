var React = require("react");
var ReactDOM = require("react-dom");
var EntriesList = require("./components/EntriesList.jsx");
var entriesStore = require("./stores/entriesStore");
var _entries = [];
var getEntriesCallback = function(entries){
  _entries=entries;
  render();
};

// var StarRatingComponent = require("react-star-rating-component");
//
// class App extends React.Component {
//   constructor() {
//     super();
//
//     this.state = {
//       rating: 1,
//       rating_custom_icon: 6,
//       rating_half_star: 3.5
//     };
//   }
//   onStarClick(nextValue, prevValue, name) {
//    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
//    this.setState({rating: nextValue});
//  }

entriesStore.onChange(getEntriesCallback);




function render(){
    ReactDOM.render(<EntriesList entries={_entries} />, document.getElementById("container"));
}
render();
