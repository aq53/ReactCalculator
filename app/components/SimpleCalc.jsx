var React = require('react');

var SimpleCalc = React.createClass({
     buttonClicked: function (e) {
        var btnVal = e.target.value;
        this.props.onBtnClick(btnVal);
    },
    eqBtn: function(){
        this.props.onEqBtn();
    },
    clearBtn:function(){
        this.props.onClrBtn();
    },
    render: function () {

        return (
            <table>
                <tbody>
                    <tr>
                        <td> <button className="btn btn-primary"value="1" onClick={this.buttonClicked}>1</button> </td>
                        <td> <button className="btn btn-primary"value="2" onClick={this.buttonClicked}>2</button> </td>
                        <td> <button className="btn btn-primary"value="3" onClick={this.buttonClicked}>3</button> </td>
                        <td> <button className="btn btn-primary"value="+" onClick={this.buttonClicked}>+</button> </td>
                    </tr>
                    <tr>
                        <td> <button className="btn btn-primary"value="4" onClick={this.buttonClicked}>4</button> </td>
                        <td> <button className="btn btn-primary"value="5" onClick={this.buttonClicked}>5</button> </td>
                        <td> <button className="btn btn-primary"value="6" onClick={this.buttonClicked}>6</button> </td>
                        <td> <button className="btn btn-primary"value="-" onClick={this.buttonClicked}>-</button> </td>
                    </tr>
                    <tr>
                        <td> <button className="btn btn-primary"value="7" onClick={this.buttonClicked}>7</button> </td>
                        <td> <button className="btn btn-primary"value="8" onClick={this.buttonClicked}>8</button> </td>
                        <td> <button className="btn btn-primary"value="9" onClick={this.buttonClicked}>9</button> </td>
                        <td> <button className="btn btn-primary"value="*" onClick={this.buttonClicked}>x</button> </td>
                    </tr>
                    <tr>
                        <td> <button className="btn btn-primary"value="." onClick={this.buttonClicked}>.</button> </td>
                        <td> <button className="btn btn-primary"value="0" onClick={this.buttonClicked}>0</button> </td>
                        <td> <button className="btn btn-primary"value="C" onClick={this.clearBtn}>C</button> </td>
                        <td> <button className="btn btn-primary"value="/" onClick={this.buttonClicked}>/</button> </td>
                    </tr>
                    <tr>
                        <td colSpan="2"> <button className="btn btn-info"value="=" onClick={this.eqBtn}>=</button> </td>
                        <td colSpan="2"> <button className="btn btn-success" onClick={this.props.toggleCalculator}>Sci Calc</button> </td>
                    </tr>
                </tbody>
            </table>
        );
    }
});

module.exports = SimpleCalc;