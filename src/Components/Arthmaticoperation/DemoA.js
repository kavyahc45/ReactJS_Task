import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

class DemoA extends Component {
    state = {
        Users: [
            { name: "kavya", age: 10 },
            ],
        Users1: [
            { name: "Anu", age: 20 }, 
        ],
        Users2: [
            { name: "Divya", age: 30 },  
        ],
        title: "User list"
    }
    makeMeYounger = () => {
         const newState = this.state.Users.map((User) => {
            const tempUser = User;
            tempUser.age += 10;
            return tempUser;
        })
        console.log(newState);
        this.setState({ newState });
    }
    makeMeYounger1 = () => {
        const newState1 = this.state.Users1.map((User1) => {
            const tempUser1 = User1;
            tempUser1.age -=10; 
            return tempUser1;
        })
        console.log(newState1);
        this.setState({ newState1 });
    }
    makeMeYounger2 = () => {
        const newState2 = this.state.Users2.map((User2) => {
            const tempUser2 = User2;
            tempUser2.age *= 10;
            return tempUser2;
        })
        console.log(newState2);
        this.setState({ newState2 });
    }
    render() {
        return (
            <div>
            <div>
                <Navbar/>
                <button onClick={this.makeMeYounger}>add</button>
                <br />

                <h1>{this.state.title}</h1>
                {
                    this.state.Users.map((User) => (
                        <div>User Age={User.age} name={User.name}</div>
                    ))
                }
            </div>
<div>
<button onClick={this.makeMeYounger1}>sub</button>
<br />

<h1>{this.state.title}</h1>
{
    this.state.Users1.map((User1) => (
        <div>User1 Age={User1.age} name={User1.name}</div>
    ))
}
</div>
<div>
<button onClick={this.makeMeYounger2}>Multiply</button>
<br />

<h1>{this.state.title}</h1>
{
    this.state.Users2.map((User2) => (
        <div>User2 Age={User2.age} name={User2.name}</div>
    ))
}
</div>
</div>
)
}
}
export default DemoA;
