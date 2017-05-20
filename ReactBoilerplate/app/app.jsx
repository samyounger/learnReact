var React = require("react");
var ReactDOM = require("react-dom");

var objOne = {
  name: "Sam",
  location: "London"
};

var objTwo = {
  age: 32,
  ...objOne
};

console.log(objTwo);

ReactDOM.render(
  <h1>Hello boilerplate!</h1>,
  document.getElementById("app")
);
