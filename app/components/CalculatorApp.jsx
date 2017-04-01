var React = require('react');
var SimpleCalc = require('SimpleCalc')

var CalculatorApp = React.createClass({
    render: function(){
        return (
            <div>
                <SimpleCalc eqPressed={this.props.eqPressed}/>
            </div>
        );
    }
});

module.exports = CalculatorApp;