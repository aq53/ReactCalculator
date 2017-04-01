var React = require('react');
var ReactDOM = require('react-dom');
var CalculatorApp = require('CalculatorApp');

var eqPressed=false;
 ReactDOM.render(<CalculatorApp eqPressed={eqPressed}/>, document.getElementById("app"));
