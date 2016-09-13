var React = require("react");
var actions = require("../actions/EntryActions");

module.exports = React.createClass({
  deleteEntry: function(e){
    e.preventDefault();
    actions.deleteEntry(this.props.info);
  },

  updateEntry: function(e){
    e.preventDefault();
    actions.updateEntry(this.props.info);
  },

  render:function(){
    return( // notice these are bootstrap classes and can be embedded directly into the JSX which then gets rendered onto the index.html
      <div className="panel panel-default">

        <div className="panel-heading">
          {this.props.info.title}
          <span className="pull-right">{this.props.info.dateTime}</span>
        </div>


        <span className="pull-right text-uppercase delete-button" onClick={this.deleteEntry}>&times;</span>

        <div className="panel-body">
          {this.props.info.body}
        </div>

        <button className='btn btn-primary edit-entries'>Edit Entry</button>
      </div>
    )
  }
})
