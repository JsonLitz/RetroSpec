var React = require("react");
var EntryInfo = require("./EntryInfo.jsx")
//we're able to require these constructs even though browsers do not support JSX since we've already set up our Gulp tasks to bundle, transpile and pipe into our main.js in the "dist" directory.
module.exports = React.createClass({
  render:function(){
    return(
      <div className="row">
        <div className="col-md-6">

        </div>
        <div className="col-md-6">
            {
              this.props.entries.map(function(s,index){
                return(
                <EntryInfo info={s} key={"entry"+index} />
                )
              })
            }
        </div>
        </div>

    )
  }
})
