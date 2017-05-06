var React = require("react");
var GreeterMessage = require("GreeterMessage");
var GreeterForm = require("GreeterForm");

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: "React",
      message: "This is the default message"
    }
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleChange: function(changes) {
    this.setState(changes);
  },
  render: function() {
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onChange={this.handleChange}/>
      </div>
    );
  }
});

module.exports = Greeter;
