var React = require('react');

var ScientificCalc = React.createClass({
    buttonClicked: function(e){
        var btnVal = e.target.value;
        this.props.onSciBtnClick(btnVal);
     },
    render: function () {
        return (
            <table>
                <tbody>
                <tr>
                    <td> <button className="btn a" onClick={this.buttonClicked} value="√">√</button> </td>
                    <td> <button className="btn a" onClick={this.buttonClicked} value="e">e</button> </td>
                    <td> <button className="btn a" onClick={this.buttonClicked} value="!">!</button> </td>
                    <td> <button className="btn a" onClick={this.buttonClicked} value="^2">^2</button> </td>
                </tr>
                <tr>
                    <td> <button className="btn a b" onClick={this.buttonClicked} value="sin">sin</button> </td>
                    <td> <button className="btn a b" onClick={this.buttonClicked} value="cos">cos</button> </td>
                    <td> <button className="btn a b" onClick={this.buttonClicked} value="tan">tan</button> </td>
                    <td> <button className="btn a b" onClick={this.buttonClicked} value="log">log</button> </td>

                </tr>
                </tbody>
            </table>




        );
    }
});

module.exports = ScientificCalc;