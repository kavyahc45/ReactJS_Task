import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

class Userinput extends Component {
  render() {
    return (
      <div>
          <Navbar/>
        <input type="text" placeholder="Username" minlength="10" size="40" required /><br />
        <input type="text" placeholder="password" minlength="10" size="40" required /> <br />
      </div>
    );
  }
}

export default Userinput;