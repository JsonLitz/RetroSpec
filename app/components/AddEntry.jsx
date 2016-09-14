var React = require("react");
var actions = require("../actions/EntryActions");
var Rating = require('react-rating');

module.exports = React.createClass({
    getInitialState:function(){
      return {
          title:"",
          body:""
      }
    },
    addEntry:function(e){
        e.preventDefault();
        actions.addEntry(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.addEntry}>
                <div className="form-group">
                    <label className="control-label" htmlFor="title">Title:</label>
                    <input type="text" className="form-control" id="title" name="title" value={this.state.title} onChange={this.handleInputChange} placeholder="Title" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="body">Body:</label>
                    <input type="text" className="form-control" id="body" name="body" value={this.state.address} onChange={this.handleInputChange} placeholder="Body" />
                </div>
                <div>
                  <Rating />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Add Entry</button>
                </div>
            </form>
        )
    }
})
