var React = require("react");

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var name = this.refs.name.value;
    var message = this.refs.message.value;
    var changes = {};

    if (name.length > 0) {
      this.refs.name.value = "";
      changes.name = name;
    }

    if (message.length > 0) {
      this.refs.message.value = "";
      changes.message = message;
    }

    this.props.onChange(changes);

  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" placeholder="Name"/>
        <br/>
        <textarea type="text" ref="message" placeholder="Message"/>
        <br/>
        <button>Submit</button>
      </form>
    );
  }
});

module.exports = GreeterForm;
