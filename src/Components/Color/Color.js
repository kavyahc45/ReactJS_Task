import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
class Color extends Component{
  state = {
    Color: 'red'
  }
  changeColor = (setNew) => {
    this.setState({
      Color: setNew
    })
  }
  changeColor1 = (event) => {
    this.setState({
      Color: event.target.value
    })
  }
  render() 
  {
    return (
      <div>
         <div>
             <Navbar/>
         {/* <input type="text" onChange={this.changeColor} value={this.state.Color}/>  */}
        </div>
    <button onClick={this.changeColor.bind(this, 'blue')}>I dont like {this.state.Color}</button>
        <div>{this.state.Color}</div> 
      </div>
    );
  }
}
export default Color;