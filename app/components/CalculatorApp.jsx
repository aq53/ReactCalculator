var React = require('react');

var SimpleCalc = require('SimpleCalc');
var ScientificCalc = require('ScientificCalc');
var ShowResult = require('ShowResult');

var CalculatorApp = React.createClass({
    getInitialState: function () {
        return ({
            ans: '',
            eqPressed: false
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
            } else{
                this.setState({ ans: inputField + btnVal });
            }
                
        }
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
    render: function () {
        var {eqPressed} = this.state.eqPressed;
        var inputField = this.state.ans;
        return (
            <div>
                <ShowResult  inputField={inputField} />
                <ScientificCalc onSciBtnClick = {this.handleBtnClick}/>
                <SimpleCalc eqPressed={eqPressed} onBtnClick={this.handleBtnClick} onEqBtn={this.handleEqBtn} 
                    onClrBtn={this.handleClrBtn}/>
            </div>
        );
    }
});

module.exports = CalculatorApp;