var React = require("react");

module.exports = React.createClass({
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
