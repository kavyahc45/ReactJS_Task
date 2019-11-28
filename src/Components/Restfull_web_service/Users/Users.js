import React, { Component } from 'react';
import Contact from '../Contact/Contact';


class Users extends Component {
  render() {
    return (
      <Contact list1={this.state.list1} list2={this.state.list2}/>
    )
  }
  state = {
    list1: ' ',
    list2: []
  }
  componentDidMount() {
    fetch('https://api.github.com/users/KrunalLathiya')
      .then(res => res.json())
      .then((data) => {
        this.setState({ list1: data })
        console.log(this.state.list1)
      })
      .catch(console.log)
      fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((secondapi) => {
          this.setState({ list2: secondapi })
          console.log(this.state.list2)
        })
        .catch(console.log)
  }
}
export default Users;