var React = require("react");

var About =  (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>

      <p>This is a ReactJS application developed under the tutelage of Andrew Meade, his Udemy video tutorial.</p>
      <a href="https://www.udemy.com/the-complete-react-web-app-developer-course" target="_blank">Link to Andrew's tutorial</a>

      <p>This application queries the OpenWetherMap.org api to return the temparature of any city searched for.</p>
      <a href="http://openweathermap.org/">Link to openweathermap</a>

      <p>This application was completed by me (Sam Younger). My git repository is located <a href="https://github.com/samyounger" target="_blak">HERE</a>.</p>
    </div>
  );
};

module.exports = About;
