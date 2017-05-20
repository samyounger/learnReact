var React = require("react");
var {Link} = require("react-router");

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few locations to try out</p>
      <ol>
        <li>
          <Link to="/?location=london">London</Link>
        </li>
        <li>
          <Link to="/?location=edinburgh">Edinburgh</Link>
        </li>
        <li>
          <Link to="/?location=new york">New York</Link>
        </li>
        <li>
          <Link to="/?location=san francisco">San Francisco</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
