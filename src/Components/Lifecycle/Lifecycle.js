import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    debugger;
    console.log('set props');
  }
  componentDidMount() {
    debugger;
    console.log('After render');
  }
  componentWillMount() {
    debugger;
    console.log('Before render');
  }
  render() {
    return (
      <div>
          <Navbar/>
        Hi good morning<br />
        welcome to qwinix technology
        </div>
    );
  }
}

export default Lifecycle;