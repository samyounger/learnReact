var React     = require("react");
var ReactDOM  = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var expect    = require("expect");
var $         = require("jQuery");

var TodoApp = require("TodoApp");

describe("TodoApp", () => {
  it("should exist", () => {
    expect(TodoApp).toExist();
  });

  it("Should add Todo to the Todos state on handleAddTodo", () => {
    var todoText = "Test test";
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });
});
