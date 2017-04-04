var React = require('react');

var SimpleCalc = require('SimpleCalc');
var ScientificCalc = require('ScientificCalc');
var ShowResult = require('ShowResult');


var CalculatorApp = React.createClass({
    getInitialState: function () {
        return ({
            ans: '',
            eqPressed: false,
            sciCalc: false
        });
    },
    handleBtnClick: function (btnVal) {
        var {eqPressed} = this.state;
        var inputField = this.state.ans;
        console.log(btnVal);

        //if input starts with 0 or non numeric value
        if (inputField === '') {
            if (btnVal === '0' || (isNaN(btnVal) && btnVal !== ".")) {
                return null;
            } else {
                this.setState({ ans: inputField + btnVal });
            }
        }

        if (inputField !== '') {

            //check if only one operator exists at a time
            if (isNaN(inputField.charAt(inputField.length - 1)) && isNaN(btnVal)) {
                inputField = inputField.slice(0, inputField.length - 1)
                this.setState({ ans: inputField + btnVal });
            }

            //if any operator is when eqPressed is true
            if (eqPressed && (isNaN(btnVal) && btnVal !== ".")) {

                this.setState({
                    ans: inputField + btnVal,
                    eqPressed: false

                });
            }

            //if number is input when eqPressed is true
            else if (eqPressed) {
                //if 0 is input directly after evaluating
                if (btnVal === '0')
                    return null;

                inputField = '';
                this.handleClrBtn();
                this.setState({ ans: inputField + btnVal });
            } else {
                this.setState({ ans: inputField + btnVal });
            }

        }
    },
    fact: function (num) {
        if (num === 0) {
            return 1;
        } else {
            return num * this.fact(num - 1);
        }
    },
    handleSciBtn: function (btnVal) {
        console.log(btnVal);
        if (btnVal === "tan")
            this.setState({
                ans: Math.tan(eval(this.state.ans)).toString(),
                eqPressed: true
            });
        else
            if (btnVal === "cos")
                this.setState({
                    ans: Math.cos(eval(this.state.ans)).toString(),
                    eqPressed: true
                });
            else
                if (btnVal === "sin")
                    this.setState({
                        ans: Math.sin(eval(this.state.ans)).toString(),
                        eqPressed: true
                    });
                else
                    if (btnVal === "log")
                        this.setState({
                            ans: Math.log(eval(this.state.ans)).toString(),
                            eqPressed: true

                        });
                    else
                        if (btnVal === "√")
                            this.setState({
                                ans: Math.sqrt(eval(this.state.ans)).toString(),
                                eqPressed: true

                            });
                        else
                            if (btnVal === "^2")
                                this.setState({
                                    ans: Math.pow(eval(this.state.ans), 2).toString(),
                                    eqPressed: true

                                });
                            else
                                if (btnVal === "e")
                                    this.setState({
                                        ans: Math.exp(eval(this.state.ans)).toString(),
                                        eqPressed: true

                                    });
                                else
                                    if (btnVal === "!")
                                        this.setState({
                                            ans: this.fact(eval(this.state.ans)).toString(),
                                            eqPressed: true
                                        });

    },
    handleClrBtn: function () {
        this.setState({
            ans: '',
            eqPressed: false
        });
    },
    handleEqBtn: function () {
        this.setState({
            ans: eval(this.state.ans).toString(),
            eqPressed: true
        });
    },
    toggleCalculator: function () {
        var {sciCalc} = this.state;
        this.setState({
            sciCalc: !sciCalc
        });
    },
    render: function () {
        var {eqPressed} = this.state.eqPressed;
        var inputField = this.state.ans;
        return (
            <div>
                <h1 className="page-title">Calculator App</h1>
                <div className="row">
                    <div className="col-lg-4 col-md-offset-4" >
                        <div className="main-container">
                        <div className="sub-container">
                            <ShowResult inputField={inputField} />
                            {this.state.sciCalc ? <ScientificCalc onSciBtnClick={this.handleSciBtn} /> : null}
                            <SimpleCalc eqPressed={eqPressed} onBtnClick={this.handleBtnClick} onEqBtn={this.handleEqBtn}
                                onClrBtn={this.handleClrBtn} toggleCalculator={this.toggleCalculator} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
});

module.exports = CalculatorApp;