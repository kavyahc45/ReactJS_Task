import React, { Component } from 'react';
import Userinput from './Components/Userinput/Userinput';
import Useroutput from './Components/Useroutput/Useroutput';

class UserinputA extends Component {
    state={
        person:[{
            name:"Kavya",age:"22",
        }]
    }
    buttonClickHandler=()=>{
      console.log('clicked');
    this.setState({
      person:[{name:"Anu",age:"25"}]
    })
    }
    render() {
        return (
            <div>
                
                <Userinput/>
      <Useroutput name='Qwinix Technology'/>
      <Useroutput name='Qwinix Technology'/>
      <button onClick={this.buttonClickHandler}>click here</button>
      <p>I am {this.state.person[0].name} my age is{this.state.person[0].age}</p>
            </div>
        );
    }
}

export default UserinputA;