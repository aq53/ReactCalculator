var React = require('react');

var SimpleCalc = React.createClass({
    buttonClicked: function (e) {
        var btnVal = e.target.value;
        this.props.onBtnClick(btnVal);
    },
    eqBtn: function () {
        this.props.onEqBtn();
    },
    clearBtn: function () {
        this.props.onClrBtn();
    },
    render: function () {

        return (
            <table>
                <tbody className="table">
                    <tr>
                        <td> <button className="btnT btn btn-Num" value="1" onClick={this.buttonClicked}>1</button> </td>
                        <td> <button className="btnT btn btn-Num" value="2" onClick={this.buttonClicked}>2</button> </td>
                        <td> <button className="btnT btn btn-Num" value="3" onClick={this.buttonClicked}>3</button> </td>
                        <td> <button className="btnT btn btn-Op" value="+" onClick={this.buttonClicked}>+</button> </td>
                    </tr>
                    <tr>
                        <td> <button className="btnT btn btn-Num" value="4" onClick={this.buttonClicked}>4</button> </td>
                        <td> <button className="btnT btn btn-Num" value="5" onClick={this.buttonClicked}>5</button> </td>
                        <td> <button className="btnT btn btn-Num" value="6" onClick={this.buttonClicked}>6</button> </td>
                        <td> <button className="btnT btn btn-Op" value="-" onClick={this.buttonClicked}>-</button> </td>
                    </tr>
                    <tr>
                        <td> <button className="btnT btn btn-Num" value="7" onClick={this.buttonClicked}>7</button> </td>
                        <td> <button className="btnT btn btn-Num" value="8" onClick={this.buttonClicked}>8</button> </td>
                        <td> <button className="btnT btn btn-Num" value="9" onClick={this.buttonClicked}>9</button> </td>
                        <td> <button className="btnT btn btn-Op" value="*" onClick={this.buttonClicked}>x</button> </td>
                    </tr>
                    <tr>
                        <td> <button className="btnT btn btn-Num" value="." onClick={this.buttonClicked}>.</button> </td>
                        <td> <button className="btnT btn btn-Num" value="0" onClick={this.buttonClicked}>0</button> </td>
                        <td> <button className="btnT btn btn-Num" value="C" onClick={this.clearBtn}>C</button> </td>
                        <td> <button className="btnT btn btn-Op" value="/" onClick={this.buttonClicked}>/</button> </td>
                    </tr>
                    <tr>
                        <td colSpan="3" > <button className="sciBtn btn btn-danger" onClick={this.props.toggleCalculator}>Scientific Calculator</button> </td>
                        <td> <button className="btnT btn btn-Op" value="=" onClick={this.eqBtn}>=</button> </td>
                    </tr>
                </tbody>
            </table>
        );
    }
});

module.exports = SimpleCalc;