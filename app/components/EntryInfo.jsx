var React = require("react");
var actions = require("../actions/EntryActions");

module.exports = React.createClass({
  deleteEntry: function(e){
    e.preventDefault();
    actions.deleteEntry(this.props.info);
  },
  
  render:function(){
    return( // notice these are bootstrap classes and can be embedded directly into the JSX which then gets rendered onto the index.html
      <div className="panel panel-default">
        <div className="panel-heading">
          {this.props.info.title}
        </div>
        <div className="panel-body">
          {this.props.info.body}
        </div>
      </div>
    )
  }
})
