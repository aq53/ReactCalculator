var React= require('react');

// var eqPressed=this.props.eqPressed;
var SimpleCalc= React.createClass({
    getInitialState: function(){
        return({
            ans: '',
            eqPressed: this.props.eqPressed
        });
    },
    buttonClicked: function(e) { 
        var btnVal= e.target.value;
        var inputField= this.state.ans;
        var {eqPressed} = this.state;
        console.log(btnVal);

        //if input starts with 0 or non numeric value
        if(inputField===''){
            if(btnVal==='0' || (isNaN(btnVal) && btnVal!==".")){
                return null;
            } else {
                this.setState({ans : inputField+btnVal})
            }
        }
        if(inputField!==''){

            //check if only one operator exist at a time
            if(isNaN(inputField.charAt(inputField.length-1)) && isNaN(btnVal)){
                inputField=inputField.slice(0,inputField.length-1)
                this.setState({ans:inputField+btnVal})
            }

            //if any operator is when eqPressed is true
            if(eqPressed && (isNaN(btnVal) && btnVal!==".")){
                this.setState({
                    ans : inputField+btnVal,
                    eqPressed: false
                    
                });
            }

            //if number is input when eqPressed is true
            else if(eqPressed){
                //if 0 is input directly after evaluating
                if(btnVal==='0')
                    return null;

                inputField='';
                this.clearBtn();   
                this.setState({ans: inputField+btnVal});
            }else
            this.setState({ans: inputField+btnVal});
        }   
    },
    clearBtn: function(){
        this.setState({
            ans: '',
            eqPressed: false
        });
    },
    eqBtn: function(){
        this.setState({
            ans: eval(this.state.ans).toString(),
            eqPressed: true
        });
    },
    render: function(){

        return(            
                <table>
                    <tbody>
                    <tr>
                        <td colSpan='4'> <input type="display" value={this.state.ans}/> </td> 
                    </tr>
                    <tr>
                        <td> <button value="1" onClick={this.buttonClicked}>1</button> </td>
                        <td> <button value="2" onClick={this.buttonClicked}>2</button> </td>
                        <td> <button value="3" onClick={this.buttonClicked}>3</button> </td>
                        <td> <button value="+" onClick={this.buttonClicked}>+</button> </td>
                    </tr>
                    <tr>
                        <td> <button value="4" onClick={this.buttonClicked}>4</button> </td>
                        <td> <button value="5" onClick={this.buttonClicked}>5</button> </td>
                        <td> <button value="6" onClick={this.buttonClicked}>6</button> </td>
                        <td> <button value="-" onClick={this.buttonClicked}>-</button> </td>
                    </tr>
                    <tr>
                        <td> <button value="7" onClick={this.buttonClicked}>7</button> </td>
                        <td> <button value="8" onClick={this.buttonClicked}>8</button> </td>
                        <td> <button value="9" onClick={this.buttonClicked}>9</button> </td>
                        <td> <button value="*" onClick={this.buttonClicked}>x</button> </td>
                    </tr>
                    <tr>
                        <td> <button value="." onClick={this.buttonClicked}>.</button> </td>
                        <td> <button value="0" onClick={this.buttonClicked}>0</button> </td>
                        <td> <button value="C" onClick={this.clearBtn}>C</button> </td>
                        <td> <button value="/" onClick={this.buttonClicked}>/</button> </td>
                    </tr>
                    <tr>
                        <td colSpan="2"> <button value="=" onClick={this.eqBtn}>=</button> </td>
                    </tr>
                    </tbody>
                </table>
        );
    }
});

module.exports= SimpleCalc;